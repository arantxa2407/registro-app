// useState es una funcion especial que nos permite guardar y actualizar los datos de los componentes
import React, { useState } from "react";

// este es el componente del login
const Login: React.FC = () => {
  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form action="">
        <input type="text" placeholder="usuario" />
        <input type="password" placeholder="contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
