# Troubleshooting Overview: Expense Tracker App

## Challenge Faced
When calling any API endpoint, the application returned the error:

> "Command find requires authentication"

This indicated that the MongoDB database required authentication, but the application was attempting to connect without credentials.

## Resolution
- Identified that the MongoDB connection string in the configuration defaulted to a local instance without authentication.
- Determined that a `.env` file with the correct MongoDB URI (including username and password) was missing.
- Provided guidance to create a `.env` file and set the `MONGO_URI` environment variable with the proper credentials to enable successful authentication.

## Additional Note
- The `node_modules` directory was confirmed to be excluded from version control via `.gitignore`, ensuring a clean repository.
