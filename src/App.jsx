import { useState } from "react";
// import Home from "./components/page/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/page/itemListContainer/ItemListContainer";

function App() {
  // const [saludo, setSaludo] = useState("holiwi");
  const [bienvenido, setBienvenido] = useState(
    "Bienvenid@ a la librería DamaLu!"
  );
  return (
    <div>
      <Navbar />
      {/* <Home nombre={"Juan"} apellido={"Perez"} /> */}
      <ItemListContainer bienvenido={bienvenido} />
    </div>
  );
}

export default App;
