import buttonStyle from './Button.module.scss'

export default function Button({ children, style = {}, ...props }) {
  return (
    <button className={buttonStyle.button} style={style} {...props}>
      {children}
    </button>
  )
}
