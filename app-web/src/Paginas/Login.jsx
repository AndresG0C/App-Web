import { useState } from "react";
import {Link} from 'react-router-dom';
import { useAuth } from "../Componentes/AuthProvider";
import "../Css/Login.css";

const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const [mensaje, setMensaje] = useState("");
    const auth = useAuth();

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {
            try {
            auth.loginAction(input);
            } catch (error) {
            setMensaje(error.message);
            }
            return;
        }
        alert("El usuario y la contraseña es obligatorio");
    };

    const handleInput = (e) => {
        const { name, value } = e.target;

        setInput((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    return (
        <>
            <nav>
                <ul>
                    <li className='t_login'>
                        <Link className="direccion" to="/Espacios">ConcerNet</Link>
                    </li>
                </ul>
            </nav>

            <div className="container">
                <form onSubmit={handleSubmitEvent}>
                    <div className="form_control">
                        <h1 className="h1_iniciar"> Inicio de Sesión</h1>
                        <br/>
                        <label htmlFor="user-name"><b>Usuario: </b></label>
                        <input type="text" id="user-name" name="username" aria-describedby="user-name" aria-invalid="false" placeholder="USUARIO" onChange={handleInput} />
                        <div id="user-name" className="sr-only">
                            (Andres)
                        </div>

                        <br/>
                        
                        <label htmlFor="password"><b>Contraseña: </b></label>
                        <input type="password" id="password" name="password" aria-describedby="user-password" aria-invalid="false" placeholder="CONTRASEÑA" onChange={handleInput} />
                        <div id="user-password" className="sr-only">
                        (Admin12345)
                        </div>
                        
                        <br/>
                        <div style={{ color: "white" }}>{mensaje}</div>
                        <br/>

                        <button className="btn_submit"><b>Iniciar sesión</b></button>
                    </div>
                    
                </form>
            </div>
        </>
    );
};

export default Login;