/* eslint-disable no-unused-vars */
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom"

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App