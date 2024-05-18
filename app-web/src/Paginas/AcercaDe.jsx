import { useAuth } from "../Componentes/AuthProvider";
import {Link} from 'react-router-dom';
import Bambu from "../Imagenes/Bambu.png";
import Mirador from "../Imagenes/Conjunto.png";
import Margaritas from "../Imagenes/LasMargaritas.png";
import MiradorSierra from "../Imagenes/MiradorDeLaSierra.png";
import "../Css/AcercaDe.css"

const Espacios = () => {
    const auth = useAuth();
    return (
        <>
            <nav>
                <ul>
                    <li className='link1'>
                        <Link className="direccion" to="/">{auth.user}</Link>
                    </li>

                    <li className='l_concernet'>
                        <Link className="direccion" to="/">ConcerNet</Link>
                    </li>

                    <div id="Nav_AcercaDe">
                        <li className='link2'>
                            <Link onClick={() => auth.logOut()} className="direccion" > Salir</Link>
                        </li>

                        <li className='link3'>
                            <Link className="direccion" to="/Dashboard">Volver</Link>
                        </li>
                    </div>
                </ul>
            </nav>

            <div className="cuadro_imgs">
                <img src={Bambu} className="img_Bambu" alt="Bambu" />
            </div>
        </>
    );
};

export default Espacios;