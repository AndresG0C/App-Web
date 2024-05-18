import { useAuth } from "../Componentes/AuthProvider";
import NavBar from "../Componentes/NavBar";
import Bambu from "../Imagenes/Bambu.png";
import Mirador from "../Imagenes/Conjunto.png";
import "../Css/Dashboard.css"
import {Link} from 'react-router-dom';

const Espacios = () => {
    const auth = useAuth();
    return (
        <nav>
            <ul>
                <li className='link1'>
                    <Link className="direccion" to="/">{auth.user}</Link>
                </li>

                <li className='l_concernet'>
                    <Link className="direccion" to="/">ConcerNet</Link>
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
};

export default Espacios;