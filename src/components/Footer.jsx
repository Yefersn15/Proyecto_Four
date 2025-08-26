import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h5>Proyecto Four</h5>
            <p>
              Sistema de autenticación desarrollado con React, que incluye registro,
              inicio de sesión y gestión de perfiles de usuario.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Funcionalidades</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white text-decoration-none" to="/">Inicio de Sesión</Link></li>
              <li><Link className="text-white text-decoration-none" to="/register">Registro</Link></li>
              <li><Link className="text-white text-decoration-none" to="/welcome">Perfil de Usuario</Link></li>
              <li><Link className="text-white text-decoration-none" to="">Gestión de Estado</Link></li>
              <li><Link className="text-white text-decoration-none" to="">Persistencia de Datos</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Tecnologías Utilizadas</h5>
            <div className="d-flex flex-column">
              <span className="mb-1">React</span>
              <span className="mb-1">React Router</span>
              <span className="mb-1">Bootstrap</span>
              <span className="mb-1">LocalStorage API</span>
              <span>Hooks (useState, useEffect)</span>
            </div>
          </div>
        </div>

        <div className="text-center border-top border-secondary py-3 mt-3">
          © {new Date().getFullYear()} Proyecto Four - Sistema de Autenticación | Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;