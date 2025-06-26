export type EmployeeRecord = {
  id: string;
  name: string;
  los: string;
  sbu: string;
  subSbu: string;
  competency: string;
  phone: string;
  joiningDate: string;
  comment?: string;
  photoUrl?: string;
  email?: string;
  employeeCode?: string;
  department?: string;
  designation?: string;
  location?: string;
  gender?: string;
  reportingManager?: string;
  status?: string;
};

export type NewGridRow = {
  id: string;
  employee?: EmployeeRecord;
  los?: string;
  sbu?: string;
  subSbu?: string;
  competency?: string;
  phone?: string;
  joiningDate?: string;
  comment?: string;
};
