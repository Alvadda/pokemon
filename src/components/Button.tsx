import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle: string
}

const Button: FC<ButtonProps> = ({ btnStyle, children, ...rest }) => {
  return (
    <button className={` text-black font-bold py-2 px-4 rounded text-2xl ${btnStyle} active:scale-90`} {...rest}>
      {children}
    </button>
  )
}

export default Button
