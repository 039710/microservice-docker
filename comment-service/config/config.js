require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.MODE == "DEVELOPMENT" ? "admin" : process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.MODE == "DEVELOPMENT" ? "localhost" : process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.MODE == "DEVELOPMENT" ? "admin" : process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.MODE == "DEVELOPMENT" ? "localhost" : process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
