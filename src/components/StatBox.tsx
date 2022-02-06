import { VFC } from 'react'
import { useFormContext, FieldPath } from 'react-hook-form'
import { PokemonForm } from '../types/types'
import { Colors, getColorBgClass, getColorClass } from '../utils/color'
import Button from './Button'

const MAXPOINTS = 252

export interface StatBoxProps {
  id: FieldPath<PokemonForm>
  title: string
  color: Colors
}

const StatBox: VFC<StatBoxProps> = ({ id, title, color }) => {
  const { register, watch, setValue } = useFormContext<PokemonForm>()

  const value = Number(watch(id))

  const onOverMax = (increment: number) => {
    if (value + increment > MAXPOINTS) {
      return 'opacity-30'
    }
  }

  const overMaxText = () => {
    const over = value - MAXPOINTS
    return over > 0 ? `+${over}` : ''
  }

  return (
    <div className="bg-gray-800 p-8 flex flex-col gap-8 rounded-2xl">
      <p className={`text-4xl text-center font-bold ${getColorClass(color)}`}>{`${title} ${overMaxText()}`}</p>
      <input
        id={id}
        type="number"
        className={`bg-transparent text-center text-white font-bold text-6xl outline-0 ${getColorClass(color)}`}
        {...register(id)}
      />
      <div className="flex gap-4 justify-between">
        <Button btnStyle={`${getColorBgClass(color)} ${onOverMax(1)}`} onClick={() => setValue(id, value + 1)}>
          +1
        </Button>
        <Button btnStyle={`${getColorBgClass(color)} ${onOverMax(2)}`} onClick={() => setValue(id, value + 2)}>
          +2
        </Button>
        <Button btnStyle={`${getColorBgClass(color)} ${onOverMax(4)}`} onClick={() => setValue(id, value + 4)}>
          +4
        </Button>
        <Button btnStyle={`${getColorBgClass(color)} ${onOverMax(8)}`} onClick={() => setValue(id, value + 8)}>
          +8
        </Button>
      </div>
    </div>
  )
}

export default StatBox
