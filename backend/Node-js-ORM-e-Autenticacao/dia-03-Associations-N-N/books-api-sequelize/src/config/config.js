// src/config/config.js

const developments = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'books_database_development',
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

const test = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'books_database_test',
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

const production = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'books_database_production',
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};


module.exports = {
  development: developments,
  test: test,
  production: production,
};