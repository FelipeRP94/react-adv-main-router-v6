import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard
          key={product.id}
          product={product}
          className="text-white bg-dark"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" activeBtnClass="" />

              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>

              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}

              <span>
                {count} - {maxCount}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
