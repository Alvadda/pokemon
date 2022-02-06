import { FormProvider, useForm } from 'react-hook-form'
import StatBox from './components/StatBox'
import './style/main.css'
import { PokemonForm } from './types/types'

const MAXSTATPONTS = 510

export const App = () => {
  const methods = useForm<PokemonForm>({
    defaultValues: {
      kraftpunkte: 0,
      angriff: 0,
      verteidigung: 0,
      spezialAngriff: 0,
      spezialVerteidigung: 0,
      initiative: 0,
    },
  })

  const values = methods.watch()

  const pointsLeft = () => {
    let left = MAXSTATPONTS

    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        left -= values[key]
      }
    }
    return left
  }
  return (
    <FormProvider {...methods}>
      <div className="bg-gray-900 h-screen w-screen flex flex-col gap-10 justify-center items-center">
        <p
          className={`text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500`}
        >
          Points left: {pointsLeft()}
        </p>
        <div className="grid w-4/5 grid-cols-3 gap-8 justify-center items-center">
          <StatBox id="kraftpunkte" title="Kraftpunkte" color="red" />
          <StatBox id="angriff" title="Angriff" color="orange" />
          <StatBox id="verteidigung" title="Verteidigung" color="yellow" />
          <StatBox id="spezialAngriff" title="Spezial-Angriff" color="blue" />
          <StatBox id="spezialVerteidigung" title="Spezial-Verteidigung" color="green" />
          <StatBox id="initiative" title="Initiative" color="pink" />
        </div>
      </div>
    </FormProvider>
  )
}
