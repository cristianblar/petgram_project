# Petgram App
An instagram for pets. Full Stack project focused in the Frontend, UX & UI. Developed for mobile devices. PWA (fully installable and supported with a service worker to work offline).

## Frontend

[Access the frontend from here!](https://petgram-front-cristianblar.vercel.app/)

### Tech stack
- React
- React helmet for dynamic SEO
- Styles made with Styled Components
- Apollo Client + GraphQL
- Google Workbox
- Webpack

### Scripts
- `npm install` for dependencies
- `npm run serve:dev` for development environment
- `npm test` for Cypress end-to-end testing
- `npm run build` to create production build (webpack bundle)

### Features
- Offline support with Google Workbox, 100% Progressive Web App
- The app can be installed in desktop, iOS & Android devices
- SPA Routes implemented with react-router
- Different network strategies for each static asset
- Basic sign-up and sign-in interfaces
- Infinite scroll with pictures' lazy loading on the home screen
- Liked pets' list for authenticated users

![](https://res.cloudinary.com/cristianblar/image/upload/v1622048462/Portfolio/petgram_kvtxf7.png)

## Backend (Fake API)

[Access the backend from here!](https://petgram-backend-api-cristianblar.vercel.app/) (using one of the endpoints described below).

### Tech stack
- Apollo Server + GraphQL
- NodeJS + Express
- Jason Web Tokens for authentication

**Important!** No database was used (as the focus for the Project was the Frontend with React consuming a GraphQL API). **The database was simulated by a JSON file. For this reason, the created users are not persistent and they will be erased after some time; the pets' likes will be refreshed too.**

### Endpoints
- [`/categories`](https://petgram-backend-api-cristianblar.vercel.app/categories) returns an array with the 6 pet categories.
- [`/graphql`](https://petgram-backend-api-cristianblar.vercel.app/graphql) where the Apollo server works (the Frontend consumes all its data from here); from a Browser it opens the GraphQL Playground

## Testing
End-to-end tests implemented with **Cypress**.

## License
MIT.

*The app was developed from scratch using Webpack. No framework was used.*
