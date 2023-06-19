// useState
import { useState } from "react";

const Home = ({ nombre, apellido }) => {
  //const { nombre, apellido } = props;
  const [contador, setContador] = useState(0); // [variable, funcion que modifica esa variable]

  return (
    <>
      <h1>
        {nombre} {apellido}
      </h1>
      <h1>Este es el home</h1>
      <h2>El contador esta en {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>sumar contador</button>
    </>
  );
};

export default Home;
