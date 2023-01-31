# Description

This is a rails based budgeting application. This project allows the user to track all of their income and expenses. It also totals all of the expenses and incomes at the bottom of each page. 

A user can sign up for the app, log in and log out. It is meant to keep track of a users personal finances and all routes are protected. 

At the top of each page are forms where a user can enter data. In the user bills section they can enter informatiion about a bill, and they can also add that bill to an expense category. They will enter the expense category at the bottom of the form and if the category does not exit then it will create the category. 

This application also employs the use of active storage. On the income tracking page the user is able to upload a pictures, such as a check stuff with each form of income added. The file upload element is at the bottom of the income form. Happy budgeting!


## Installation

1. Fork and clone this repo
2. CD into this from project and then in order to insall necessary gems run:

```bash
bundle install 
```
3. Make sure the database and migrations for the data base are running with:

```bash
rails db:create
rails db:migrate
```
4. Seed data to the database if you choose with:

```bash
rails db:seed
```

5. Then run the command below to start the server:

```bash
rails server
```

## In order to ge the front end running then follow these directions.

1. Navigate into the client folder:

```bash
cd client
```
2. Downloaed the npm dependencies

```bash
 npm install
```
3. Run the frontend development server

```bash
 npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# React-App-for-Flatiron-Project


## Configuration
Dependencies and all configuration is done in environment.rb. Your database is also set up here. DataMapper will use sqlite3 by default. By default the application uses the sqlite3-memory adapter (no configuration needed).

## Test Methods and Params found in the Controllers folder with 

```bash
bundle exec Rake Console
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
