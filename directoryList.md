|-- undefined
    |-- src
        |-- app
        |   |-- favicon.ico
        |   |-- globals.css
        |   |-- layout.tsx
        |   |-- page.tsx
        |   |-- providers.tsx
        |   |-- admin
        |   |   |-- layout.tsx
        |   |   |-- page.tsx
        |   |   |-- audit
        |   |   |   |-- page.tsx
        |   |   |-- employees-grid
        |   |   |   |-- page.tsx
        |   |   |-- permissions
        |   |   |   |-- page.tsx
        |   |   |-- roles
        |   |       |-- page.tsx
        |   |-- api
        |   |   |-- auth
        |   |   |   |-- [...nextauth]
        |   |   |       |-- route.ts
        |   |   |-- employees
        |   |   |   |-- bulkUpdate
        |   |   |   |   |-- route.ts
        |   |   |   |-- relations
        |   |   |   |   |-- route.ts
        |   |   |   |-- search
        |   |   |       |-- route.ts
        |   |   |-- login
        |   |   |   |-- route.ts
        |   |   |-- products
        |   |   |   |-- route.ts
        |   |   |   |-- [id]
        |   |   |       |-- route.ts
        |   |   |-- project
        |   |   |   |-- audit
        |   |   |   |   |-- route.ts
        |   |   |   |-- draft
        |   |   |   |   |-- route.ts
        |   |   |   |   |-- [id]
        |   |   |   |       |-- route.ts
        |   |   |   |-- submit
        |   |   |       |-- route.ts
        |   |   |-- stock-request
        |   |   |   |-- draft.ts
        |   |   |   |-- submit.ts
        |   |   |-- users
        |   |       |-- route.ts
        |   |       |-- [id]
        |   |           |-- route.ts
        |   |-- audit
        |   |   |-- page.tsx
        |   |-- cart
        |   |   |-- page.tsx
        |   |-- greetcount
        |   |   |-- page.tsx
        |   |-- home
        |   |   |-- page.tsx
        |   |-- login
        |   |   |-- page.tsx
        |   |-- orders
        |   |   |-- page.tsx
        |   |-- products
        |   |   |-- layout.tsx
        |   |   |-- page.tsx
        |   |   |-- categories
        |   |   |   |-- page.tsx
        |   |   |-- inventory
        |   |   |   |-- page.tsx
        |   |   |-- list
        |   |   |   |-- page.tsx
        |   |   |-- pricing
        |   |   |   |-- page.tsx
        |   |   |-- stock-request
        |   |   |   |-- page.tsx
        |   |   |-- [id]
        |   |       |-- page.tsx
        |   |-- project-form
        |   |   |-- page.tsx
        |   |   |-- [id]
        |   |       |-- approve.ts
        |   |       |-- page.tsx
        |   |       |-- reject.ts
        |   |-- react-concepts
        |   |   |-- page.tsx
        |   |-- register
        |   |   |-- page.tsx
        |   |-- unauthorized
        |   |   |-- page.tsx
        |   |-- users
        |       |-- page.tsx
        |       |-- [id]
        |           |-- page.tsx
        |-- features
        |   |-- admin
        |   |   |-- components
        |   |   |   |-- AccessTable.tsx
        |   |   |   |-- AdminDashboardView.tsx
        |   |   |   |-- AdminLayoutShell.tsx
        |   |   |   |-- OverviewCards.tsx
        |   |   |   |-- SystemSummary.tsx
        |   |   |-- data
        |   |       |-- mockAdminData.ts
        |   |-- auth
        |   |   |-- api.ts
        |   |   |-- schema.ts
        |   |   |-- types.ts
        |   |   |-- components
        |   |   |   |-- AuthButton.tsx
        |   |   |-- hooks
        |   |       |-- useAuth.ts
        |   |-- cart
        |   |-- home
        |   |   |-- api.ts
        |   |   |-- hooks
        |   |   |-- schema.ts
        |   |   |-- types.ts
        |   |   |-- components
        |   |       |-- HomePage.tsx
        |   |-- login
        |   |   |-- api.ts
        |   |   |-- schema.ts
        |   |   |-- types.ts
        |   |   |-- hooks
        |   |       |-- useLogin.ts
        |   |-- notifications
        |   |   |-- api.ts
        |   |   |-- schema.ts
        |   |   |-- types.ts
        |   |   |-- hooks
        |   |       |-- useNotifications.ts
        |   |-- orders
        |   |-- products
        |   |   |-- api.ts
        |   |   |-- schema.ts
        |   |   |-- types.ts
        |   |   |-- components
        |   |   |   |-- EditableProductRow.tsx
        |   |   |   |-- ProductDataTable.tsx
        |   |   |   |-- ProductForm.tsx
        |   |   |   |-- ProductLayoutShell.tsx
        |   |   |   |-- ProductList.tsx
        |   |   |-- hooks
        |   |   |   |-- Query.ts
        |   |   |   |-- useCreateProductQuery.ts
        |   |   |   |-- useDeleteProductQuery.ts
        |   |   |   |-- useFilteredProductsQuery.ts
        |   |   |   |-- useProductsQuery.ts
        |   |   |-- modals
        |   |       |-- ConfirmDeleteModal.tsx
        |   |       |-- CreateProductModal.tsx
        |   |       |-- EditProductModal.tsx
        |   |-- project-form
        |   |   |-- schema.ts
        |   |   |-- components
        |   |   |   |-- ProjectFormWizard.tsx
        |   |   |   |-- steps
        |   |   |       |-- Step1GeneralInfo.tsx
        |   |   |       |-- Step2Timeline.tsx
        |   |   |       |-- Step3Resources.tsx
        |   |   |       |-- Step4Requirements.tsx
        |   |   |       |-- Step5Review.tsx
        |   |   |-- hooks
        |   |   |   |-- useAutoSave.ts
        |   |   |-- utils
        |   |       |-- fieldVisibility.ts
        |   |       |-- useAutoSave.ts
        |   |-- react-concepts
        |   |   |-- constants.ts
        |   |   |-- hello
        |   |   |-- components
        |   |       |-- ChainedAccordion.tsx
        |   |       |-- ProgressiveAnswersAccordion.tsx
        |   |-- stock-request
        |   |   |-- schema.ts
        |   |   |-- components
        |   |   |   |-- AutoSaveStatus.tsx
        |   |   |   |-- StockRequestForm.tsx
        |   |   |   |-- StockRequestSummary.tsx
        |   |   |   |-- steps
        |   |   |       |-- StepGeneralDetails.tsx
        |   |   |-- hooks
        |   |   |   |-- useAutoSave.ts
        |   |   |-- sections
        |   |       |-- SectionApproval.tsx
        |   |       |-- SectionItemList.tsx
        |   |       |-- SectionRequestInfo.tsx
        |   |-- users
        |       |-- api.ts
        |       |-- schema.ts
        |       |-- type.ts
        |       |-- components
        |       |   |-- EditableUserRow.tsx
        |       |   |-- UserActions.tsx
        |       |   |-- UserForm.tsx
        |       |   |-- UserList.tsx
        |       |   |-- UserMeta.tsx
        |       |   |-- UserProfileCard.tsx
        |       |-- hooks
        |       |   |-- useCreateUser.ts
        |       |   |-- useDeleteUser.ts
        |       |   |-- useUpdateUser.ts
        |       |   |-- useUserById.ts
        |       |   |-- useUsers.ts
        |       |-- modals
        |           |-- ConfirmDeleteModal.tsx
        |           |-- CreateUserModal.tsx
        |           |-- EditUserModal.tsx
        |-- hooks
        |   |-- useGreetingTracker.ts
        |-- lib
        |   |-- auth
        |   |   |-- auth.ts
        |   |-- data
        |   |   |-- productsData.ts
        |   |   |-- usersData.ts
        |   |-- db
        |       |-- auth.ts
        |       |-- db.ts
        |       |-- employees.json
        |       |-- employees.ts
        |       |-- products.json
        |       |-- products.ts
        |       |-- project-draft.ts
        |       |-- project-drafts.json
        |       |-- types.ts
        |       |-- users.json
        |       |-- users.ts
        |-- shared
            |-- components
            |   |-- AuthWrapper.tsx
            |   |-- FileUploader.tsx
            |   |-- Navbar.tsx
            |   |-- Pagination.tsx
            |   |-- SidebarToggle.tsx
            |   |-- ThemeSync.tsx
            |   |-- ThemeToggle.tsx
            |   |-- ui
            |   |   |-- Accordion.tsx
            |   |   |-- Button.tsx
            |   |   |-- ButtonSubmit.tsx
            |   |   |-- DataTable.tsx
            |   |   |-- DebouncedInput.tsx
            |   |   |-- DropdownCascader.tsx
            |   |   |-- DynamicGrid.tsx
            |   |   |-- EditableEmployeeGrid.tsx
            |   |   |-- EditableEmployeeGridWithNestedLogs.tsx
            |   |   |-- EmployeeSearchInput.tsx
            |   |   |-- InfoTooltip.tsx
            |   |   |-- InputField.tsx
            |   |   |-- NestedAllocationLogs.tsx
            |   |   |-- Sidebar.tsx
            |   |   |-- Spinner.tsx
            |-- guards
            |-- hooks
            |   |-- useDebouncedValue.ts
            |   |-- useZodValidation.ts
            |-- lib
            |   |-- api.ts
            |   |-- queryClient.ts
            |   |-- utils
            |       |-- buildProductsFilterFromQuery.ts
            |       |-- crypto.ts
            |       |-- getInputSanitizer.ts
            |-- store
            |   |-- index.ts
            |   |-- slices
            |       |-- authSlice.ts
            |       |-- cartSlice.ts
            |       |-- notificationSlice.ts
            |       |-- preferencesSlice.ts
            |       |-- themeSlice.ts
            |       |-- uiSlice.ts
            |-- types
                |-- employeeTypes.ts
                |-- index.ts
