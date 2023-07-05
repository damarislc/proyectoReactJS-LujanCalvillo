import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import Home from "./components/page/home/Home";
import ItemListContainer from "./components/page/itemListContainer/ItemListContainer";
import CartContainer from "./components/page/cart/CartContainer";
import Layout from "./components/layout/Layout";
import ItemDetailContainer from "./components/page/itemDetail/ItemDetailContainer";

function App() {
  // const [saludo, setSaludo] = useState("holiwi");
  const [bienvenido, setBienvenido] = useState(
    "Bienvenid@ a la librería DamaLu!"
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<ItemListContainer bienvenido={bienvenido} />}
          />
          <Route path="/type/:type" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/login" element={<h1>Este es el login</h1>} />
          <Route path="/cart" element={<CartContainer />} />
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
