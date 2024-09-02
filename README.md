# Descope Vue.js Auth and RBAC

This repo demonstrates how to integrate Descope authentication into a basic Vue.js application along with role-based access control.

It has 2 branches: `starter-template` and `full-project`. The `starter-template` offers a skeleton application to follow along with the article while the `full-project` contains the full project with authentication and RBAC implemented.

To run this project locally, you need:

- A [Descope account](https://www.descope.com/sign-up)
- An understanding of [Descope flows](https://docs.descope.com/flows) and how to use the [flow builder](https://docs.descope.com/flows#flow-builder)
- [Node.js](https://nodejs.org/) v18.3 or higher and npm installed on your local machine
- A code editor and a web browser

## Run the Starter Template Locally

1. Clone the application:

   ```bash
   git clone --single-branch -b starter-template https://github.com/kimanikevin254/descope-vuejs-auth-rbac-demo.git
   ```

2. `cd` into the application folder and install the dependencies:

   ```bash
   cd descope-vuejs-auth-rbac-demo && npm i
   ```

3. Rename the `.env.example` file to `.env.`:

   ```bash
   mv .env.example .env
   ```

4. Replace the placeholder value in the .env file with the actual project ID you obtained in the previous section.

5. Run the json-server:

   ```bash
   npm run server
   ```

6. Run the Vue.js application

   ```bash
   npm run dev
   ```

7. Check out the application on [your browser](http://localhost:5173).
