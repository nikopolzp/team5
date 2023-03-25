import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts, getProductById } from "./requests/products";
import {
  createMarkupProductsList,
  createProductById,
} from "./services/markupService";
const allProductsListRef = document.querySelector("#allProducts");
const productID = document.querySelector("#id");
const form = document.querySelector("#singleProductForm");
const productByIdRef = document.querySelector("#singleProduct");
// getAllProducts().then(({ data: { products } }) => {
//   allProductsListRef.innerHTML = createMarkupProductsList(products);
// });
form.addEventListener("submit", onSearchProductById);

async function onSearchProductById(event) {
  event.preventDefault();
  const searchProduct = event.target.elements.id.value.trim();
  if (searchProduct) {
    try {
      const { data } = await getProductById(searchProduct);
      productByIdRef.innerHTML = createProductById(data);
    } catch (error) {
      console.log(error);
    }
  }
}
