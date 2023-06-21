
type InputProps = React.ComponentProps<"input">


export const InputComponent = ({...rest}: InputProps) => {
  return <input {...rest}/>
}
