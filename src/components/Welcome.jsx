import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener usuario de localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    
    if (!currentUser) {
      navigate("/");
      return;
    }
    
    setUser(currentUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  if (!user) {
    return <div className="text-center mt-5">Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-5 text-center">
              <h2>Welcome, {user.username}!</h2>
              <div className="mt-4 text-start">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Teléfono:</strong> {user.telefono}</p>
                <p><strong>Fecha de nacimiento:</strong> {user.fechaNacimiento}</p>
              </div>
              <button className="btn btn-primary mt-4" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;