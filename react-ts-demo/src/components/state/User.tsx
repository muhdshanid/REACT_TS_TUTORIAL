import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}
const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: "some",
            email: "some@ex.com"
        })
    }
    // const handleLogout = () => {
    //     setUser(null)
    // }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <div> Username is: {user?.name}</div>
        <div> User email is: {user?.email}</div>
    </div>
  )
}

export default User