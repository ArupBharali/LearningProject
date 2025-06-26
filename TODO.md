1.  the Pagination component should show some page number
    it should have a drop down of selecting the page size
    it should have a searbox to jump to a particular page directly
    and all these should be configurable when called meaning it can be skipped also if not provided

2.  A company has a database of employees which maintains LOS, SBU, SubSBU, Competency and phone number and joining date. We will use LowDB files as the database.
Create a fake database of 50000 employees with this schema. 
The LOS, SBU, SubSBU and competency data has relations in between them, like a particular LOS will have a list of SBUs, a particular SBU will have a list of SubSBUs, a particular SubSBU will have a list of Competencies. Store these relationships in the LowDB database.

keeping my folder structure, component reusability in mind
Create this functionality below:
Create a reusable dynamic grid that will be first empty, only headers will be shown
Create a button to add a row in that grid, 
Create a button to Submit the data from the grid
    the grid will contain 5 columns
    first column will have a auto search textfield which it will search in backend to filter an employee and it will show the results in drop down
    second column will have a drop down containing a list of LOS in the company
    third column will list the SBUs of the company
    fourth column will list the SubSBUs of the company
    fifth column will list the Competencies of the company
    sixth column will have an input for phone number 
    seventh column will show the joining date with a datepicker 
    eighth column will have a comment input
    upon selecting a particular employee in the first column, it will auto select the LOS in the 2nd column,SBU in the third column, SubSBU in the fourth column, Competency in the fifth column and the phone number in the sixth column, joining date in the seventh column from the drop downs for that employee
    User can select the drop downs. If user selects a particular LOS, the SBU, SubSBU, Competency drop downs will clear and the SBU drop down will refresh with data pertaining to that LOS. Other drop downs will be empty.
    Upon selecting the SBU, the SubSBU will refresh for that combination (LOS, SBU), like that the selection will continue for SubSBU dropdown. The competency will be the last selection. The phone number text box is editable, user can update the phone number. 
    User can update the joining date from the datepicker
Upon clicking on the save button, the grid data will be saved and updated in the LowDB database.
the grid should have the capacity to update multiple rows at once.

Optional Sugar
Add optimistic UI for save
Validate phone/date formats
Persist unsaved rows in localStorage
Add undo/redo for row changes

add validations, column sorting, pagination, or even sync with react-query

Reusable Grid Component
Create: 📁 src/shared/components/ui/DynamicGrid.tsx

Use:
@tanstack/react-table for the grid
@headlessui/react or shadcn/ui for dropdowns
react-datepicker for date selection
controlled form state via useState or useForm

✅ Reusable Cells
Each cell will be reusable + dynamic:
EmployeeSearchInput – fetches backend on change with debounce
DropdownCell – handles LOS → SBU → SubSBU → Competency chaining
PhoneInputCell
DateCell
CommentCell
🚀 3. API Routes
Organize inside src/app/api/employees/:
GET /api/employees/search?query=arup → search by name
GET /api/employees/relations → return hierarchy
POST /api/employees/bulkUpdate → submit updated rows
💡 User Flow Summary
Grid initializes with empty rows.
User clicks "Add Row" → adds empty row with dropdowns & inputs.
Selecting employee autofills related fields.
Cascading dropdowns update based on previous selection.
Inputs are editable.
Clicking "Save All" sends updated rows to backend.


3.  In the DataTable we have created, when I click on the searchbox, the grid is getting sorted for that column, I want to stop this behaviour for the searchboxes.