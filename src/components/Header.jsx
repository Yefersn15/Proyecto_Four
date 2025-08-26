import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const Header = () => {
    return (
        <header className="bg-dark text-white p-4">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="https://vite.dev" target="_blank" rel="noreferrer">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <h1 className="mb-0 text-center flex-grow-1">Proyecto Four: Registro & Login</h1>
                    <a href="https://react.dev" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;