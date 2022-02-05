import StatBox from './components/StatBox'
import './style/main.css'

export const App = () => {
  return (
    <div className="bg-gray-900 h-screen w-screen flex justify-center items-center">
      <div className="grid w-4/5 grid-cols-3 gap-8 justify-center items-center">
        <StatBox id="kraftpunkte" title="Kraftpunkte" color="red" />
        <StatBox id="angriff" title="Angriff" color="orange" />
        <StatBox id="verteidigung" title="Verteidigung" color="yellow" />
        <StatBox id="spezial-angriff" title="Spezial-Angriff" color="blue" />
        <StatBox id="spezial-verteidigung" title="Spezial-Verteidigung" color="green" />
        <StatBox id="initiative" title="Initiative" color="pink" />
      </div>
    </div>
  )
}
