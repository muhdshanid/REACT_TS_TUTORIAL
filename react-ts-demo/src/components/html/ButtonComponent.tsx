
type ButtonProps = {
    variant: "primary" | "secondary",
    children: string

} & Omit<React.ComponentProps<"button">,"children">
export const ButtonComponent = ({variant, children, ...rest}: ButtonProps) => {
  return (
    <button {...rest} className={`class-with-${variant}`}>
        {children}
    </button>
  )
}
