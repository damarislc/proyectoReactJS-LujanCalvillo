import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ producto, onAdd, initial }) => {
  return (
    <section className="core">
      <div className="main">
        <div className="product-detail">
          <div className="product-info">
            <h1 className="page-title">{producto.title}</h1>
            <p>
              <b>Autor: </b>
              {producto.author}
            </p>
            <p>
              <b>Categoría: </b>
              {producto.category}
            </p>
            <p>
              <b>Editorial: </b>
              {producto.editorial}
            </p>
          </div>
          <div className="product media">
            <img
              src={producto.img}
              alt={producto.title}
              className="product-image"
            />
          </div>
          <div className="product-essential">
            <div className="price-box">
              <span className="price-container">
                <span className="price-label">Precio</span>
                <span className="product-price">${producto.price}</span>
              </span>
            </div>
            <CounterContainer
              stock={producto.stock}
              onAdd={onAdd}
              initial={initial}
            />
          </div>
        </div>
        <div className="product-desc">
          <div className="product data items sinopsis">
            <div className="data title">Sinopsis</div>
            <div className="item content desc-content">
              {producto.description}
            </div>
          </div>
          <div className="product data items characteristics">
            <div className="data title">Caracteristicas</div>
            <div className="item content">
              <div className="table-wrapper">
                <ul>
                  <li>
                    <span className="attr-label">Número de páginas</span>
                    <span className="attr-data">{producto.pages}</span>
                  </li>
                  <li>
                    <span className="attr-label">Idioma</span>
                    <span className="attr-data">{producto.language}</span>
                  </li>
                  <li>
                    <span className="attr-label">Fecha de publicación</span>
                    <span className="attr-data">{producto.pubDate}</span>
                  </li>
                  <li>
                    <span className="attr-label">ISDN</span>
                    <span className="attr-data">{producto.isbn}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
