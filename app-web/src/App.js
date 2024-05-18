import { Route, Routes } from "react-router-dom";
import Login from "./Paginas/Login";
import AuthProvider from "./Componentes/AuthProvider";
import PrivateRoute from "./Componentes/PrivateRoute";
import Dashboard from "./Paginas/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;