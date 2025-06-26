|-- undefined
|-- .env
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- eslint.config.mjs
|-- generateProducts.ts
|-- generateUsers.ts
|-- launch.json
|-- next-env.d.ts
|-- next.config.ts
|-- package-from-extra-portal.json
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- questions.md
|-- README.md
|-- tailwind.config-from-extra-portal.ts
|-- tailwind.config.js
|-- tsconfig-from-extra-portal.json
|-- tsconfig.json
|-- .vscode
| |-- launch.json
| |-- settings.json
|-- public
| |-- file.svg
| |-- globe.svg
| |-- next.svg
| |-- vercel.svg
| |-- window.svg
| |-- fonts
| | |-- Charter ITC Regular.ttf
| | |-- Charter ITC Regular.woff
| | |-- fontawesome-webfont.ttf
| | |-- fontawesome-webfont.woff
| | |-- fontawesome-webfont.woff2
| | |-- Helvetica Neue Regular.ttf
| | |-- Helvetica Neue Regular.woff
| | |-- HelveticaNeueLTPro-Md.woff
| | |-- HelveticaNeueLTPro-Roman.woff
| | |-- icomoon.eot
| | |-- icomoon.svg
| | |-- icomoon.ttf
| | |-- icomoon.woff
| |-- images
| |-- hero-bg.jpg
| |-- hero-bg1.jpg
|-- src
|-- app
| |-- favicon.ico
| |-- globals.css
| |-- layout.tsx
| |-- page.tsx
| |-- providers.tsx
| |-- api
| | |-- login
| | | |-- route.ts
| | |-- products
| | | |-- route.ts
| | | |-- [id]
| | | |-- route.ts
| | |-- users
| | |-- route.ts
| | |-- [id]
| | |-- route.ts
| |-- cart
| | |-- page.tsx
| |-- greetcount
| | |-- page.tsx
| |-- home
| | |-- page.tsx
| |-- login
| | |-- page.tsx
| |-- orders
| | |-- page.tsx
| |-- products
| | |-- page.tsx
| | |-- [id]
| | |-- page.tsx
| |-- react-concepts
| | |-- page.tsx
| |-- register
| | |-- page.tsx
| |-- unauthorized
| | |-- page.tsx
| |-- users
| |-- page.tsx
| |-- [id]
| |-- page.tsx
|-- features
| |-- auth
| | |-- api.ts
| | |-- schema.ts
| | |-- types.ts
| | |-- hooks
| | |-- useAuth.ts
| |-- cart
| |-- home
| | |-- api.ts
| | |-- hooks
| | |-- schema.ts
| | |-- types.ts
| | |-- components
| | |-- HomePage.tsx
| |-- login
| | |-- api.ts
| | |-- schema.ts
| | |-- types.ts
| | |-- hooks
| | |-- useLogin.ts
| |-- notifications
| | |-- api.ts
| | |-- schema.ts
| | |-- types.ts
| | |-- hooks
| | |-- useNotifications.ts
| |-- orders
| |-- products
| | |-- api.ts
| | |-- schema.ts
| | |-- types.ts
| | |-- components
| | | |-- EditableProductRow.tsx
| | | |-- ProductDataTable.tsx
| | | |-- ProductForm.tsx
| | | |-- ProductList.tsx
| | | |-- Sidebar.tsx
| | |-- hooks
| | | |-- Query.ts
| | | |-- useCreateProductQuery.ts
| | | |-- useDeleteProductQuery.ts
| | | |-- useFilteredProductsQuery.ts
| | | |-- useProductsQuery.ts
| | |-- modals
| | |-- ConfirmDeleteModal.tsx
| | |-- CreateProductModal.tsx
| | |-- EditProductModal.tsx
| |-- react-concepts
| | |-- constants.ts
| | |-- hello
| | |-- components
| | |-- ChainedAccordion.tsx
| | |-- ProgressiveAnswersAccordion.tsx
| |-- users
| |-- api.ts
| |-- schema.ts
| |-- type.ts
| |-- components
| | |-- EditableUserRow.tsx
| | |-- UserActions.tsx
| | |-- UserForm.tsx
| | |-- UserList.tsx
| | |-- UserMeta.tsx
| | |-- UserProfileCard.tsx
| |-- hooks
| | |-- useCreateUser.ts
| | |-- useDeleteUser.ts
| | |-- useUpdateUser.ts
| | |-- useUserById.ts
| | |-- useUsers.ts
| |-- modals
| |-- ConfirmDeleteModal.tsx
| |-- CreateUserModal.tsx
| |-- EditUserModal.tsx
|-- hooks
| |-- useGreetingTracker.ts
|-- lib
| |-- data
| | |-- productsData.ts
| | |-- usersData.ts
| |-- db
| |-- products.json
| |-- products.ts
| |-- products10000.json
| |-- products25000.json
| |-- users.json
| |-- users.ts
| |-- users10000.json
|-- shared
|-- components
| |-- AuthWrapper.tsx
| |-- FileUploader.tsx
| |-- Navbar.tsx
| |-- Pagination.tsx
| |-- SidebarToggle.tsx
| |-- ThemeSync.tsx
| |-- ThemeToggle.tsx
| |-- ui
| | |-- Accordion.tsx
| | |-- Button.tsx
| | |-- ButtonSubmit.tsx
| | |-- DataTable.tsx
| | |-- DebouncedInput.tsx
| | |-- InputField.tsx
| | |-- Spinner.tsx
| |-- ui-from-extra-portal
| |-- accordion.tsx
| |-- alert-dialog.tsx
| |-- alert.tsx
| |-- aspect-ratio.tsx
| |-- avatar.tsx
| |-- badge.tsx
| |-- breadcrumb.tsx
| |-- button.tsx
| |-- calendar.tsx
| |-- card.tsx
| |-- carousel.tsx
| |-- chart.tsx
| |-- checkbox.tsx
| |-- collapsible.tsx
| |-- command.tsx
| |-- context-menu.tsx
| |-- dialog.tsx
| |-- drawer.tsx
| |-- dropdown-menu.tsx
| |-- form.tsx
| |-- hover-card.tsx
| |-- input-otp.tsx
| |-- input.tsx
| |-- label.tsx
| |-- loader.tsx
| |-- menubar.tsx
| |-- navigation-menu.tsx
| |-- pagination.tsx
| |-- popover.tsx
| |-- progress.tsx
| |-- radio-group.tsx
| |-- resizable.tsx
| |-- scroll-area.tsx
| |-- select.tsx
| |-- separator.tsx
| |-- sheet.tsx
| |-- sidebar.tsx
| |-- skeleton.tsx
| |-- slider.tsx
| |-- sonner.tsx
| |-- switch.tsx
| |-- table.tsx
| |-- tabs.tsx
| |-- textarea.tsx
| |-- toast.tsx
| |-- toaster.tsx
| |-- toggle-group.tsx
| |-- toggle.tsx
| |-- tooltip.tsx
| |-- use-mobile.tsx
| |-- use-toast.ts
|-- guards
|-- hooks
| |-- useDebouncedValue.ts
|-- lib
| |-- api.ts
| |-- queryClient.ts
| |-- utils
| |-- crypto.ts
|-- store
| |-- index.ts
| |-- slices
| |-- authSlice.ts
| |-- cartSlice.ts
| |-- notificationSlice.ts
| |-- preferencesSlice.ts
| |-- themeSlice.ts
| |-- uiSlice.ts
|-- types
|-- index.ts
