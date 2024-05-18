import { Route, Routes } from "react-router-dom";
import Login from "./Paginas/Login";
import Dashboard from "./Paginas/Dashboard";
import Espacios from "./Paginas/Espacios";
import AcercaDe from "./Paginas/AcercaDe";
import AuthProvider from "./Componentes/AuthProvider";
import PrivateRoute from "./Componentes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/Espacios" element={<Espacios />} />
          <Route path="/AcercaDe" element={<AcercaDe />} />
        </Routes>
        
      </AuthProvider>
    </div>
  );
}
export default App;