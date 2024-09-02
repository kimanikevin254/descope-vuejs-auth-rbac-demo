# Descope Vue.js Auth and RBAC

This repo demonstrates how to integrate Descope authentication into a basic Vue.js application along with role-based access control.

It has 2 branches: `starter-template` and `full-project`. The `starter-template` offers a skeleton application to follow along with the article while the `full-project` contains the full project with authentication and RBAC implemented.

To run this project locally, you need:

- A [Descope account](https://www.descope.com/sign-up)
- An understanding of [Descope flows](https://docs.descope.com/flows) and how to use the [flow builder](https://docs.descope.com/flows#flow-builder)
- [Node.js](https://nodejs.org/) v18.3 or higher and npm installed on your local machine
- A code editor and a web browser

## Creating a Project on Descope

1. Navigate to your [Descope console](https://app.descope.com/home), select the current project dropdown, and click **+ Project** to create a new project.

   ![Creating a new project on Descope](https://i.imgur.com/IkumFmc.png)

2. On the "Create project" modal, provide the project name, for example, "descope-vuejs-auth-rbac", and click **Create**:

   ![Providing the new project details](https://i.imgur.com/88nlF1x.png)

3. Once the project has been created, click the **Get started** button to configure auth:

   ![Project homepage](https://i.imgur.com/JNAJgYb.png)

4. Select **Consumers** as your target users and click **Next**:

   ![Who uses your application](https://i.imgur.com/6HZSv5J.png)

5. The Vue.js app in this repo uses email OTP as the authentication method and SMS OTP as the MFA. Select **One-time Password** as your primary authentication method and click **Next**:

   ![Choosing primary auth method](https://i.imgur.com/91uJpnE.png)

6. Skip the MFA step by clicking **Go ahead without MFA**. You will configure MFA later in the flow builder.

   ![Skipping MFA step](https://i.imgur.com/MXwFwC8.png)

7. On the next page, select **Next** to generate all the flows:

   ![Generating](https://i.imgur.com/1A0hsRE.png)

8. On your Descope console sidebar, select **Flows** and click the **sign-up-or-in** flow to open it in the flow builder:

   ![Opening the sign-up-or-in flow in the flow builder](https://i.imgur.com/1q02dp9.png)

9. Download the pre-configured flow raw file from [GitHub](https://github.com/kimanikevin254/descope-vuejs-auth-rbac-demo/blob/starter-template/sign-up-or-in.json) by clicking the download button:

   ![Downloading the flow raw file](https://i.imgur.com/dcd6BAl.png)

10. In the flow builder, click the **Import flow / Export flow** button, select **Import flow**, and upload the flow you just downloaded in the previous step.

    ![Importing a flow](https://i.imgur.com/bkl2Nnk.png)

11. Save the flow by clicking the **Save** button:

    ![Saving the flow](https://i.imgur.com/Y6LG7Ui.png)

12. Select **Project** from the sidebar and copy your Project ID from the "Project" page. You will use it in the next section.

## Running the Application Locally

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
