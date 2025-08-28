import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    telefono: "",
    fechaNacimiento: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones de campos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{7,15}$/;
  // Debe tener al menos 6 caracteres, al menos una letra y un número
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    if (!userData.username || !userData.password || !userData.email || !userData.telefono || !userData.fechaNacimiento) {
      alert("Por favor, complete todos los campos");
      return;
    }
    if (!emailRegex.test(userData.email)) {
      alert("Ingrese un email válido");
      return;
    }
    if (!phoneRegex.test(userData.telefono)) {
      alert("El teléfono debe contener solo números (7-15 dígitos)");
      return;
    }
    if (!passwordRegex.test(userData.password)) {
      alert("La contraseña debe tener al menos 6 caracteres, incluir letras y números");
      return;
    }
    // Validar fecha de nacimiento (mayor de 13 años)
    const hoy = new Date();
    const fechaNac = new Date(userData.fechaNacimiento);
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    const m = hoy.getMonth() - fechaNac.getMonth();
    if (edad < 13 || (edad === 13 && m < 0)) {
      alert("Debes tener al menos 13 años para registrarte");
      return;
    }

    // Obtener usuarios existentes
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Verificar si el email ya existe
    if (users.some(user => user.email === userData.email)) {
      alert("Este email ya está registrado");
      return;
    }

    // Agregar nuevo usuario
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // Guardar usuario en sesión y redirigir
    localStorage.setItem("currentUser", JSON.stringify(userData));
    navigate("/welcome");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body p-5">
              <form onSubmit={handleSubmit} autoComplete="off">
                <h2 className="text-center mb-4">
                  Registro <img src="https://images.icon-icons.com/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="MongoDB" width="80" />
                </h2>
                
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Nombre:</label>
                  <input type="text" className="form-control" id="username" required autoComplete="off" value={userData.username} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" className="form-control" id="password" required autoComplete="off" value={userData.password} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" required autoComplete="off" value={userData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono:</label>
                  <input type="tel" className="form-control" id="telefono" required 
                    autoComplete="off" value={userData.telefono} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="fechaNacimiento" className="form-label">Fecha Nacimiento:</label>
                  <input type="date" className="form-control" id="fechaNacimiento" required 
                    autoComplete="off" value={userData.fechaNacimiento} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Registrar</button>
              </form>
              <p className="mt-3 text-center">
                ¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;