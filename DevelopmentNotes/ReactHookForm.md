To work with a react hook form:
Steps: 1. Define the route /app/projects/new/page.tsx 2. Create a normal component 3. Do a fetch call to create a formid with the initial data
a. In the api route, create a uuid for the formid, create an initial structure of the schema, insert the initial structure in db and then send the formid back to the ui.

const projectId = uuidv4();
const now = new Date().toISOString();

const newProject: ProjectFormData = {
...INITIAL_DATA,
projectId,
createdBy,
createdAt: now,
updatedBy: createdBy,
updatedAt: now,
status: 'draft',
isArchived: false,
};

db.data!.push(newProject);
