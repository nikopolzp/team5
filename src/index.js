import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts } from "./requests/products";
import { createMarkupProductsList } from "./services/markupService";
const allProductsListRef = document.querySelector("#allProducts");
getAllProducts().then(({ data: { products } }) => {
  allProductsListRef.innerHTML = createMarkupProductsList(products);
});
