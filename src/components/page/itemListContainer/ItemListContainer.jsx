import "./ItemListContainer.css";

const ItemListContainer = ({ bienvenido }) => {
  return (
    <div className="bienvenido-container">
      <h2 className="bienvenido">{bienvenido}</h2>
    </div>
  );
};

export default ItemListContainer;
