export function createMarkupProductsList(products) {
  return products
    .map((product) => `<li><h2>${product.title}</h2></li>`)
    .join("");
}

export function createProductById(product) {
  return `<h2>${product.title}</h2><p>${product.price}</p>`;
}
