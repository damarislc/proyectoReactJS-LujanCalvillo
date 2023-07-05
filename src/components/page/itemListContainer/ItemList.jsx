import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ bienvenido, items }) => {
  console.log(items);
  return (
    <div className="bienvenido-container">
      <h1 className="bienvenido">{bienvenido}</h1>
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => {
          return <ProductCard item={item} key={item.id} isInItemList={true} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
