import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/Signup.jsx";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App
