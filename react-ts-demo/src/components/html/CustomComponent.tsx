import Greet from "../Greet"



export const CustomComponent = ({name, isLoggedIn, messageCount}: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        {name} {isLoggedIn } { messageCount}
    </div>
  )
}
