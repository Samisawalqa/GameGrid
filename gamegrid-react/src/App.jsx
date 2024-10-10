import { Route, Routes } from "react-router-dom"
import Users from "./components/dashboard/Users"
import Fields from "./components/dashboard/Fields"
import Login from "./components/dashboard/Login"
import Signup from "./components/dashboard/Signup"

function App() {

  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/fields" element={<Fields />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />
      {/* Signup */}
      <Route path="/signup" element={<Signup />} />

    </Routes>

  )
}

export default App
