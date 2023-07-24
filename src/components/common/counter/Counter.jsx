import restarIcon from "../../../icons/icon-minus.svg";
import sumarIcon from "../../../icons/icon-plus.svg";
import "./Counter.css";

const Counter = ({ contador, sumar, restar, onAdd, isInItemDetail = true }) => {
  /* <div style={{ border: "2px solid steelblue", padding: "40px" }}>
      <button onClick={sumar}>sumar</button>
      <h3>{contador}</h3>
      <button onClick={restar}>restar</button>
      <button className="add-to-cart" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </button>
    </div> 
    
    
    
    <div className="amount">
      <button className="minus" onClick={restar} disabled={contador === 0}>
        <img src={restarIcon} alt="icon-minus" />
      </button>
      <p>{contador}</p>
      <button className="plus" onClick={sumar} disabled={contador === 100}>
        <img src={sumarIcon} alt="icon-plus" />
      </button>
      {isInItemDetail && (
        <button className="add-to-cart" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </button>
      )}
    */
  return (
    <div className="amount">
      <button className="qty-dec" onClick={restar} disabled={contador === 0}>
        <span className="remove">remove</span>
      </button>
      <p>{contador}</p>
      <button className="plus" onClick={sumar} disabled={contador === 100}>
        <img src={sumarIcon} alt="icon-plus" />
      </button>
      {isInItemDetail && (
        <button className="add-to-cart" onClick={() => onAdd(contador)}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

export default Counter;
