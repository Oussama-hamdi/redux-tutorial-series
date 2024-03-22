import { useSelector, useDispatch } from "react-redux";
// import { addProduct, fetchProducts } from "../store/actions/productsActions";
import { addProduct } from "../reduxToolkit/slices/productsSlice";
// import { useEffect } from "react";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  console.log("Products:", products);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);
  return (
    <div>
      <h1>Products</h1>
      <button
        onClick={() =>
          dispatch(
            addProduct({ id: Math.random(), title: "Product-7", price: 900 })
          )
        }
      >
        Add Product
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>
              {product.title} - ${product.price}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
