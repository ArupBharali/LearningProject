// generateProducts.ts
import { faker } from '@faker-js/faker';
import fs from 'fs';

const NUM_PRODUCTS = 10000;

const products = Array.from({ length: NUM_PRODUCTS }, (_, i) => {
  const price = parseFloat(faker.commerce.price({ min: 10, max: 5000 }));
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    price,
    inventory: faker.number.int({ min: 1, max: 100 }),
    tags: [faker.commerce.department().toLowerCase()],
    slug: faker.helpers.slugify(faker.commerce.productName().toLowerCase()),
    priceInCents: Math.round(price * 100),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    updatedBy: 'admin'
  };
});

fs.writeFileSync('products.json', JSON.stringify({ products }, null, 2));
console.log('✅ Dummy product data saved to products.json');
