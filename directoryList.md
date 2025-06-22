|-- undefined
    |-- .gitignore
    |-- eslint.config.mjs
    |-- generateProducts.ts
    |-- generateUsers.ts
    |-- next-env.d.ts
    |-- next.config.ts
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.js
    |-- README.md
    |-- tailwind.config.js
    |-- tsconfig.json
    |-- public
    |   |-- file.svg
    |   |-- globe.svg
    |   |-- next.svg
    |   |-- vercel.svg
    |   |-- window.svg
    |-- src
        |-- app
        |   |-- favicon.ico
        |   |-- globals.css
        |   |-- layout.tsx
        |   |-- page.tsx
        |   |-- api
        |   |   |-- products
        |   |   |   |-- route.ts
        |   |   |   |-- [id]
        |   |   |       |-- route.ts
        |   |   |-- users
        |   |       |-- route.ts
        |   |       |-- [id]
        |   |           |-- route.ts
        |   |-- cart
        |   |   |-- page.tsx
        |   |-- home
        |   |   |-- page.tsx
        |   |-- orders
        |   |   |-- page.tsx
        |   |-- products
        |   |   |-- page.tsx
        |   |-- users
        |       |-- page.tsx
        |       |-- [id]
        |           |-- page.tsx
        |-- features
        |   |-- auth
        |   |   |-- api.ts
        |   |   |-- schema.ts
        |   |   |-- types.ts
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
        |   |   |   |-- ProductForm.tsx
        |   |   |   |-- ProductList.tsx
        |   |   |-- hooks
        |   |   |   |-- useCreateProduct.ts
        |   |   |   |-- useDeleteProduct.ts
        |   |   |   |-- useProducts.ts
        |   |   |   |-- useUpdateProduct.ts
        |   |   |-- modals
        |   |       |-- ConfirmDeleteModal.tsx
        |   |       |-- EditProductModal.tsx
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
        |       |   |-- useUsers.ts
        |       |-- modals
        |           |-- ConfirmDeleteModal.tsx
        |           |-- CreateUserModal.tsx
        |           |-- EditUserModal.tsx
        |-- lib
        |   |-- data
        |   |   |-- productsData.ts
        |   |   |-- usersData.ts
        |   |-- db
        |       |-- products.json
        |       |-- products.ts
        |       |-- products10000.json
        |       |-- products100000.json
        |       |-- products25000.json
        |       |-- products50000.json
        |       |-- users.json
        |       |-- users.ts
        |       |-- users10000.json
        |-- shared
            |-- components
            |   |-- Navbar.tsx
            |   |-- Pagination.tsx
            |   |-- ui
            |       |-- Button.tsx
            |       |-- InputField.tsx
            |-- lib
            |   |-- api.ts
            |   |-- queryClient.ts
            |   |-- utils
            |       |-- crypto.ts
            |-- types
                |-- index.ts
