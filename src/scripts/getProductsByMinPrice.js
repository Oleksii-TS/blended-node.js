import { readProducts } from '../utils/readProducts.js';

export const getProductsByMinPrice = async (min) => {
  const products = await readProducts();
  return products.filter((product) => product.price >= min);
};

console.log(await getProductsByMinPrice(450));
