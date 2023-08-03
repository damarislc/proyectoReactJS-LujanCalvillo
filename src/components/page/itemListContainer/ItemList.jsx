import { Container, Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  const arr = [1, 2, 3, 4];
  return (
    <Container className="main-container">
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.length > 0
          ? items.map((item) => {
              return (
                <ProductCard item={item} key={item.id} isInItemList={true} />
              );
            })
          : arr.map((e) => {
              return (
                <div key={e}>
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1.3rem" }}
                    width={100}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={200}
                  />
                  <Skeleton variant="rounded" width={210} height={60} />
                </div>
              );
            })}
      </div>
    </Container>
  );
};

export default ItemList;
