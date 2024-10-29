import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

//este es el componente principal
const App: React.FC = () => {
  //isLogin es un estado que nos permite saber si el usuario esta logueado o no
  const [isLogin, setIsLogin] = useState(false);
  return(
    <div>
      <nav>
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Register</button>
      </nav>

      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

//este componente este disponible para usarlo en otras partes de la aplicación

export default App;