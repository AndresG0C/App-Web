import {Link} from 'react-router-dom';
import { useAuth } from "../Componentes/AuthProvider";
import "../Css/NavBar.css";

const NavBar = ()=>{
    const auth = useAuth();
    
    return(
        <nav>
            <ul>
                <li className='link1'>
                    <Link className="direccion" to="/Dashboard">{auth.user}</Link>
                </li>

                <li className='l_concernet'>
                    <Link className="direccion" to="/Dashboard">ConcerNet</Link>
                </li>

                <li className='link'>
                    <Link onClick={() => auth.logOut()} className="direccion" > Salir</Link>
                </li>

                <li className='link'>
                    <Link className="direccion" to="/AcercaDe">Acerca De</Link>
                </li>

                <li className='link'>
                    <Link className="direccion" to="/Espacios">Espacios</Link>
                </li>

                <li className='link'>
                    <Link className="direccion" to="/Dashboard">Inicio</Link>
                </li>

            </ul>
        </nav>
    );
}

export default NavBar;