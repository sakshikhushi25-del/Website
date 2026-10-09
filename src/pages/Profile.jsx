import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
export default Profile;