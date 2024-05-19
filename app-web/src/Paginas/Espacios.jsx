import { useAuth } from "../Componentes/AuthProvider";
import Piscina from "../Imagenes/Piscina.png";
import SalonSocial from "../Imagenes/SalonSocial.png";
import Cancha from "../Imagenes/Cancha.png";
import Parque from "../Imagenes/Parque.png";
import "../Css/Espacios.css";
import {Link} from 'react-router-dom';

const Espacios = () => {
    const auth = useAuth();
    return (
        <>
            <nav>
                <ul>
                    <li className='link1'>
                        <Link className="direccion" to="/Espacios">{auth.user}</Link>
                    </li>

                    <li className='l_concernet'>
                        <Link className="direccion" to="/Espacios">ConcerNet</Link>
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
                <div className="contenedor">                
                    <div className="container_img">
                        <img src={Piscina} className="img_piscina" alt="Piscina" />
                        <img src={Cancha} className="img_cancha" alt="cancha" />
                        <img src={SalonSocial} className="img_salonsocial" alt="salon social" />
                        <img src={Parque} className="img_parque" alt="parque" />
                    </div>
                    <div className="cuadro_horarios">
                        <div className="horario_piscina">
                            <h1 className="t_horarios">Piscina</h1>
                            <p className="p_horarios">Horarios: <br/>
                            Sabados y Domingos: <br/> <b>8:00 AM - 5:00 PM</b> <br/>
                            Festivos: <br/> <b>10:00 AM - 4:00 PM</b></p>
                        </div>

                        <div className="horario_cancha">
                            <h1 className="t_horarios">Canchas</h1>
                            <p className="p_horarios">Horarios: <br/>
                            Todos los días <br/> <b>5:00 AM - 10:00 AM</b> <br/>
                            <b>3:00 PM - 10:00 PM </b> <br/></p>
                        </div>

                        <div className="horario_parque">
                            <h1 className="t_horarios">Parque</h1>
                            <p className="p_horarios">Todos los días <br/>
                            <b> Abierto Siempre </b> <br/><br/><br/></p>
                        </div>

                        <div className="horario_salonsocial">
                            <h1 className="t_horarios">Salon Social</h1>
                            <p className="p_horarios">Horarios:<br/>
                            sábados, Domingos y Festivos <br/> <b>Todo el día o por hora</b> <br/>
                            <br/></p>
                        </div>

                    </div>
                    
                </div>
            </div>

        </>
    );
};

export default Espacios;