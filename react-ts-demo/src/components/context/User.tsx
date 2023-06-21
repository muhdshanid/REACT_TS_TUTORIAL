import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
    const {user, setUser}= useContext(UserContext)
  const handleLogin = () => {
    setUser({ name: "some", email: "some@ex.com"})
  };
  const handleLogout = () => {
        setUser(null)
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div> username is {user?.name}</div>
      <div> email is {user?.email}</div>
    </div> 
  );
};

export default User;
