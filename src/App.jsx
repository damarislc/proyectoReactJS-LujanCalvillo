import { useState } from "react";
import Home from "./components/page/home/Home";
import ItemList from "./components/page/itemList/ItemList";
import { Navbar } from "./components/layout/navbar/Navbar";

function App() {
  const [saludo, setSaludo] = useState("holiwi");
  return (
    <div>
      <Navbar />
      <h1>Hola Mundo!</h1>
      <Home nombre={"Juan"} apellido={"Perez"} />
      <ItemList saludo={saludo} setSaludo={setSaludo} />
    </div>
  );
}

export default App;
