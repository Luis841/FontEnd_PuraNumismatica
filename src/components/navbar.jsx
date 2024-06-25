import { NavLink } from "react-router-dom";
import LogoIcon from '../../public/logo.png';  // Ajusta la ruta según tu estructura de proyecto

const Navbar = () => {
    const btnLink = 'block inline-block py-1 text-black hover:text-accent cursor-pointer mr-4';
    const activeLink = "block inline-block py-1 text-accent mr-4";

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={LogoIcon} alt="Logo" className="w-20 h-20"/>
                    <span className="ml-3 text-xl">Pura Numismatica</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/" className={({isActive}) => isActive?activeLink:btnLink}>Inicio</NavLink>
                    <NavLink to="/billetes" className={({isActive}) => isActive ? activeLink : btnLink}>Billetes</NavLink>
                    <NavLink to="/monedas" className={({isActive}) => isActive ? activeLink : btnLink}>Monedas</NavLink>
                    <NavLink to="/suministros" className={({isActive}) => isActive ? activeLink : btnLink}>Suministros</NavLink>
                    <NavLink to="/vendedores" className={({isActive}) => isActive ? activeLink : btnLink}>Vendedores</NavLink>
                    <NavLink to="/eventos" className={({isActive}) => isActive ? activeLink : btnLink}>Eventos</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
