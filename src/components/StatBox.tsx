import { VFC } from 'react'
import { Colors, getColorBgClass, getColorClass } from '../utils/color'
import Button from './Button'

export interface StatBoxProps {
  id: string
  title: string
  color: Colors
}

const StatBox: VFC<StatBoxProps> = ({ id, title, color }) => {
  return (
    <div className="bg-gray-800 p-8 flex flex-col gap-8 rounded-2xl">
      <p className={`text-4xl text-center font-bold ${getColorClass(color)}`}>{title}</p>
      <input id={id} type="text" className={`bg-transparent text-center text-white font-bold text-6xl outline-0 ${getColorClass(color)}`} />
      <div className="flex gap-4 justify-between">
        <Button btnStyle={getColorBgClass(color)}>+1</Button>
        <Button btnStyle={getColorBgClass(color)}>+2</Button>
        <Button btnStyle={getColorBgClass(color)}>+4</Button>
        <Button btnStyle={getColorBgClass(color)}>+8</Button>
      </div>
    </div>
  )
}

export default StatBox
