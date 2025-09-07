import { readProducts } from '../utils/readProducts.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (productsCount) => {
  const products = await readProducts();

  for (let i = 0; i < productsCount; i++) {
    products.push(createFakeProduct());
  }

  await writeProducts(products);
};

generateProducts(15);
