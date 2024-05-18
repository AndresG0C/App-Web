import {Link} from 'react-router-dom';
import { useAuth } from "../Componentes/AuthProvider";

const NavBar = ()=>{
    const auth = useAuth();
    
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>

                <li>
                    <Link to="/Dashboar">Inicio</Link>
                </li>

                <li>
                    <Link to="/Espacios">Espacios</Link>
                </li>

                <li>
                    <Link to="/AcercaDe">Acerca De</Link>
                </li>

                <li>
                    <Link onClick={() => auth.logOut()} className="btn-submit" > Salir</Link>
                </li>

            </ul>
        </nav>
    );
}

export default NavBar;