
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (!email || !password) {
      setError("Por favor, complete todos los campos");
      return;
    }

    // Validar formato de email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Por favor ingrese un email válido");
      return;
    }

    // Verificar si el usuario existe en localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Guardar usuario en sesión
      localStorage.setItem("currentUser", JSON.stringify(user));
      setError("");
      navigate("/welcome");
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">
                Login <img src="https://images.icon-icons.com/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="MongoDB" width="80" />
              </h2>
              
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="alert alert-danger text-center" role="alert">
                    {error}
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" className="form-control" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <p className="mt-3 text-center">
                  ¿No tienes una cuenta? <a href="/register">Regístrate</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>   
  );
};

export default Login;