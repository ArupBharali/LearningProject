import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';

const NUM_EMPLOYEES = 10000;

const LOS = ['Consulting', 'Technology', 'Operations'];
const SBU = ['Digital', 'Analytics', 'Cybersecurity', 'Cloud'];
const SUBSBU = ['Strategy', 'Delivery', 'Support'];
const COMPETENCIES = ['Frontend', 'Backend', 'DevOps', 'Data Science', 'QA'];
const DEPARTMENTS = [
  'HR',
  'Finance',
  'Engineering',
  'Marketing',
  'Legal',
  'Product',
];
const LOCATIONS = [
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Pune',
  'Gurgaon',
  'Chennai',
];
const STATUS_OPTIONS = ['active', 'on leave', 'resigned'];

const relations = {
  los: LOS.map((los) => ({
    name: los,
    sbu: SBU.map((sbu) => ({
      name: `${los}-${sbu}`,
      subSbu: SUBSBU.map((sub) => ({
        name: `${los}-${sbu}-${sub}`,
        competency: faker.helpers.arrayElements(COMPETENCIES, 2),
      })),
    })),
  })),
};

function pickRelationCombo() {
  const los = faker.helpers.arrayElement(relations.los);
  const sbu = faker.helpers.arrayElement(los.sbu);
  const subSbu = faker.helpers.arrayElement(sbu.subSbu);
  const competency = faker.helpers.arrayElement(subSbu.competency);
  return {
    los: los.name,
    sbu: sbu.name,
    subSbu: subSbu.name,
    competency,
  };
}

function generateEmployee() {
  const { los, sbu, subSbu, competency } = pickRelationCombo();
  const fullName = faker.person.fullName();
  const [firstName, lastName = ''] = fullName.split(' ');
  return {
    id: nanoid(),
    name: fullName,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    phone: faker.phone.number('+91##########'),
    photoUrl: faker.image.avatar(),
    joiningDate: faker.date.past({ years: 10 }).toISOString(),
    department: faker.helpers.arrayElement(DEPARTMENTS),
    designation: faker.person.jobTitle(),
    employeeCode: faker.helpers.replaceSymbols('EMP-#####'),
    gender: faker.person.sexType(),
    status: faker.helpers.arrayElement(STATUS_OPTIONS),
    location: faker.helpers.arrayElement(LOCATIONS),
    reportingManager: faker.person.fullName(),
    los,
    sbu,
    subSbu,
    competency,
    comment: faker.lorem.sentence(),
  };
}

const employees = Array.from({ length: NUM_EMPLOYEES }, generateEmployee);

const outFile = path.resolve('src/lib/db/employees.json');
fs.writeFileSync(outFile, JSON.stringify({ employees, relations }, null, 2));
console.log(`✅ ${NUM_EMPLOYEES} enriched employees saved to ${outFile}`);
