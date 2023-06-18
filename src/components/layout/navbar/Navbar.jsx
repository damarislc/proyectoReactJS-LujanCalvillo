import CartWidget from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h2>Logo</h2>
      <ul>
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
