export function createMarkupProductsList(products) {
  return products
    .map((product) => `<li><h2>${product.title}</h2></li>`)
    .join("");
}
