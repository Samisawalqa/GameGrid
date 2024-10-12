import { Route, Routes } from "react-router-dom"
import Users from "./components/dashboard/Users"
import Fields from "./components/dashboard/Fields"
import Login from "./components/dashboard/Login"
import Signup from "./components/dashboard/Signup"
import UserInfo from "./components/dashboard/UserInfo"
import AddUser from "./components/dashboard/AddUser"
import NotFound from "./components/dashboard/404"

function App() {

  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path={"/user/:id"} element={<UserInfo />} />
      <Route path="/fields" element={<Fields />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />
      {/* Signup */}
      <Route path="/signup" element={<Signup />} />
      {/* 404 */}
      <Route path="/error" element={<NotFound />} />

    </Routes>

  )
}

export default App
