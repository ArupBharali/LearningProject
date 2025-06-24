// generateProducts.ts
import { faker } from '@faker-js/faker';
import fs from 'fs';

const NUM_PRODUCTS = 10000;

const products = Array.from({ length: NUM_PRODUCTS }, () => {
  const title = faker.commerce.productName();
  const price = parseFloat(faker.commerce.price({ min: 10, max: 5000 }));

  return {
    id: faker.string.uuid(),
    title,
    slug: faker.helpers.slugify(title.toLowerCase()),
    description: faker.commerce.productDescription(),
    summary: faker.lorem.sentence(),
    price,
    discountPercentage: faker.number.float({ min: 0, max: 50, precision: 0.1 }),
    inventory: faker.number.int({ min: 0, max: 1000 }),
    sku: faker.string.alphanumeric(10),
    barcode: faker.string.numeric(12),
    category: faker.commerce.department(),
    subcategory: faker.commerce.productAdjective(),
    tags: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () =>
      faker.commerce.productMaterial().toLowerCase()
    ),
    brand: faker.company.name(),
    isActive: faker.datatype.boolean(),
    featured: faker.datatype.boolean(),
    rating: faker.number.float({ min: 0, max: 5, precision: 0.1 }),
    images: [
      faker.image.urlPicsumPhotos(),
      faker.image.urlPicsumPhotos(),
    ],
    createdBy: faker.person.fullName(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    updatedBy: faker.person.fullName(),
  };
});

fs.writeFileSync('products.json', JSON.stringify({ products }, null, 2));
console.log(`✅ ${NUM_PRODUCTS} fake products saved to products.json`);
