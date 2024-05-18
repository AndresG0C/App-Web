import { useAuth } from "../Componentes/AuthProvider";
import NavBar from "../Componentes/NavBar";

const Dashboard = () => {
    const auth = useAuth();
    return (
        <>
            <NavBar/>
            <div className="container">
                <div>
                    
                
                </div>
            </div>
        </>
    );
};

export default Dashboard;