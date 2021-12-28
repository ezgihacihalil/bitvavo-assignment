This project was bootstrapped with [Create React App with Cypress TypeScript](https://github.com/cypress-io/cra-template-cypress-typescript).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm cypress:open`

Opens the Cypress GUI

### `npm cypress:run`

Runs Cypress CLI

### Notes / Comments
-   I couldn't implement server-side pagination for the ag-grid because as I see I need to have an enterprise version of it, so I implemented client-side pagination.

-   For tests, I was going to add more cases but I couldn't add them because there wasn't enough time.

-   There was an issue for rendering the cellRenderer elements for ag-grid, I couldn't make it work (I've added a comment for it in the test file) and I couldn't test ship details because there wasn't enough time.

-   I tried to keep the structure simple and didn't use any state management library.

-   For the login/logout mechanism, there was no time to have more complex solutions. I just left them as MVP (I was going to implement fake-backend service and manage the checks using it)