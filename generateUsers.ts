// generateUsers.ts
import { faker } from '@faker-js/faker';
import fs from 'fs';

const roles = ['admin', 'user', 'manager'] as const;

function createFakeUser() {
  const name = faker.person.fullName();
  return {
    id: faker.string.uuid(),
    name,
    email: faker.internet.email({ firstName: name.split(' ')[0] }),
    role: roles[Math.floor(Math.random() * roles.length)],
    avatarUrl: faker.image.avatar(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: new Date().toISOString(),
    isActive: faker.datatype.boolean(),
  };
}

const NUM_USERS = 10000;
const users = Array.from({ length: NUM_USERS }, createFakeUser);

fs.writeFileSync('users.json', JSON.stringify({ users }, null, 2));
console.log('✅ Generated 10,000 users into users.json');
