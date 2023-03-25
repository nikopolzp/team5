import "./styles/normalize.css";
import "./styles/index.css";
import { getAllProducts, getProductById, createProduct } from "./requests/products";
import {
  createMarkupProductsList,
  createProductById,
  createNewProduct,
} from "./services/markupService";

const allProductsListRef = document.querySelector("#allProducts");
const productID = document.querySelector("#id");
const form = document.querySelector("#singleProductForm");
const productByIdRef = document.querySelector("#singleProduct");
const form4 = document.querySelector(".form4");
const newProduct = document.querySelector("#newProductSection");

// getAllProducts().then(({ data: { products } }) => {
//   allProductsListRef.innerHTML = createMarkupProductsList(products);
// });
form.addEventListener("submit", onSearchProductById);
form4.addEventListener("submit", onCreateProduct);

function onCreateProduct(event) {
  event.preventDefault();
  const product = {
    title: event.target.elements.title.value,
    description: event.target.elements.description.value,
    price: event.target.elements.price.value,
  };
  createProduct(product).then(({ data }) => {
    newProduct.innerHTML = createNewProduct(data);
  });
}
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
