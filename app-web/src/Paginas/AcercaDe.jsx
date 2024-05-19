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
                        <Link className="direccion" to="/AcercaDe">{auth.user}</Link>
                    </li>

                    <li className='l_concernet'>
                        <Link className="direccion" to="/AcercaDe">Acerca De</Link>
                    </li>

                    <div id="Nav_AcercaDe">
                        <li className='link2'>
                            <Link onClick={() => auth.logOut()} to="/Login" className="direccion" > Salir</Link>
                        </li>

                        <li className='link3'>
                            <Link className="direccion" to="/Dashboard">Regresar</Link>
                        </li>
                    </div>
                </ul>
            </nav>
            <div className="container">
                <div className="contenedor_imagenes">                
                    <img src={Bambu} className="a_img_Bambu" alt="Bambu" />
                    <img src={Mirador} className="a_img_Mirador" alt="Mirador" />
                    <img src={Margaritas} className="a_img_Margaritas" alt="Margaritas" />
                    <img src={MiradorSierra} className="a_img_MiradorSierra" alt="Mirador Sierra" />

                    <div className="cuadro_texto">
                        <p className="text_about">
                            Nuestro principal objetivo es facilitar las tareas de gestion del conjunto cerrado, como
                            el pago de administración, el alquiler de espacios comunes, además de informarse de los
                            horarios y actividades que se realizan en el conjunto, logrando así una mejor convivencia
                            entre los habitantes, generando un mayor orden y organización dentro del conjunto cerrado.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Espacios;