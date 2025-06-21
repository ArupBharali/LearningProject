|-- undefined
    |-- .gitignore
    |-- eslint.config.mjs
    |-- next-env.d.ts
    |-- next.config.ts
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.js
    |-- postcss.config.mjs
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
        |       |-- auth.ts
        |       |-- http.ts
        |       |-- notifications.ts
        |       |-- products.ts
        |       |-- products
        |           |-- route.ts
        |           |-- [id]
        |               |-- route.ts
        |-- features
        |   |-- auth
        |   |   |-- api.ts
        |   |   |-- schema.ts
        |   |   |-- hooks
        |   |       |-- useAuth.ts
        |   |-- notifications
        |   |   |-- api.ts
        |   |   |-- page.tsx
        |   |   |-- schema.ts
        |   |   |-- hooks
        |   |       |-- useNotifications.ts
        |   |-- products
        |       |-- api.ts
        |       |-- page.tsx
        |       |-- schema.ts
        |       |-- types.ts
        |       |-- components
        |       |   |-- EditableProductRow.tsx
        |       |   |-- ProductForm.tsx
        |       |   |-- ProductList.tsx
        |       |-- hooks
        |       |   |-- useCreateProduct.ts
        |       |   |-- useDeleteProduct.ts
        |       |   |-- useProducts.ts
        |       |   |-- useUpdateProduct.ts
        |       |-- modals
        |           |-- ConfirmDeleteModal.tsx
        |           |-- EditProductModal.tsx
        |-- lib
        |   |-- data
        |   |   |-- productsData.ts
        |   |-- db
        |       |-- products.json
        |       |-- products.ts
        |-- shared
            |-- components
            |   |-- NavigationLink.tsx
            |   |-- ui
            |       |-- Button.tsx
            |       |-- InputField.tsx
            |-- lib
            |   |-- queryClient.ts
            |   |-- utils
            |       |-- crypto.ts
            |-- types
                |-- index.ts
