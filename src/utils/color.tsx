export type Colors = 'pink' | 'red' | 'blue' | 'orange' | 'yellow' | 'green'
export const getColorClass = (color: Colors) => {
  switch (color) {
    case 'red':
      return 'text-red-500'
    case 'blue':
      return 'text-blue-500'
    case 'green':
      return 'text-green-500'
    case 'orange':
      return 'text-orange-500'
    case 'pink':
      return 'text-pink-500'
    case 'yellow':
      return 'text-yellow-500'
    default:
      return ''
  }
}

export const getColorBgClass = (color: Colors) => {
  switch (color) {
    case 'red':
      return 'bg-red-500'
    case 'blue':
      return 'bg-blue-500'
    case 'green':
      return 'bg-green-500'
    case 'orange':
      return 'bg-orange-500'
    case 'pink':
      return 'bg-pink-500'
    case 'yellow':
      return 'bg-yellow-500'
    default:
      return ''
  }
}
