import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Welcome from "./Welcome";

const ProtectedRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  return currentUser ? children : <Navigate to="/" replace />;
};

const Rutas = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route 
        path="/welcome" 
        element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default Rutas;