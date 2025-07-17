export type Employee = {
  id: string;
  name: string;
  los: string;
  sbu: string;
  subSbu: string;
  competency: string;
  phone: string;
  joiningDate: string;
  comment?: string;
};

export type RelationHierarchy = {
  los: {
    name: string;
    sbu: {
      name: string;
      subSbu: {
        name: string;
        competency: string[];
      }[];
    }[];
  }[];
};

export type EmployeeDB = {
  employees: Employee[];
  relations: RelationHierarchy;
};
