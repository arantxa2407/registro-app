// useState es una funcion especial que nos permite guardar y actualizar los datos de los componentes
import React, { useState } from "react";

// este es el componente del login
const Register: React.FC = () => {
  return (
    <div className="register-container">
      <h1>Registrese</h1>
      <form action="">
        <input type="text" placeholder="usuario" />
        <input type="password" placeholder="contraseña" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
