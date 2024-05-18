import { useAuth } from "../Componentes/AuthProvider";
import NavBar from "../Componentes/NavBar";
import Bambu from "../Imagenes/Bambu.png";
import Mirador from "../Imagenes/Conjunto.png";
import "../Css/Dashboard.css"

const Dashboard = () => {
    const auth = useAuth();
    return (
        <>
            <NavBar/>
            <div className="container">
                <div className="infos">
                    <img src={Bambu} className="img_Bambu" alt="Bambu" />
                    <img src={Mirador} className="img_Conjunto" alt="Mirador2" />
                    
                    <div className="info_concernet">
                        <h1 className="h1_concernet">ConcerNet</h1>
                        <p className="parrafo_concernet">Somos ConcerNet, una empresa que provee software especializado en la gestión de espacios
                            y administración de conjuntos cerrados, en donde siempre buscamos el bienestar de los
                            habitantes de dichos conjuntos, generando así facilidad de pagos, facilidad en la gestion
                            de espacios y mejor convivencia entre dichos habitantes.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;