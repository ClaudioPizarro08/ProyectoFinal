import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Components/Styles/main.css"

function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
    <header>
        <h3>Virtual Schedule</h3>
        <nav ref={navRef}>
            <a href="/#">Inicio</a>
            <a href="/#">Registrarse</a>
            <a href="/#">Iniciar Seisíon</a>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                <FaTimes/>
            </button>
        </nav>
        <button  className="nav-btn" onClick={showNavBar}>
            <FaBars/>
        </button>
    </header>
    );
}

export default NavBar;