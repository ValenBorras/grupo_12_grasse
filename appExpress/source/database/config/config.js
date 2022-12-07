module.exports = {
  "development": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_NAME || "grasse_db",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": process.env.DB_PORT || "3306",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER ||"root",
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_NAME || "database_test",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": process.env.DB_PORT || "3306",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASSWORD || null,
    "database": process.env.DB_NAME || "database_production",
    "host": process.env.DB_HOST || "127.0.0.1",
    "port": process.env.DB_PORT || "3306",
    "dialect": "mysql"
  }
}
