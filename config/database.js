require("dotenv").config();

const {
  DB_USER = 'postgres',
  DB_PASSWORD = '12345',
  DB_NAME = 'bcr',
  DB_HOST = 'postgresql://postgres:Z4SpH7GQCGrbPgnxPEQF@containers-us-west-92.railway.app:6872/railway',
  DB_PORT = '5432',
} = process.env;

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_development`,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_test`,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
  },
  production: {
    dialect: "postgres",
    use_env_variable: "DATABASE_URL",
    dialectOptions: {
      ssl:{
        required: true,
        rejectUnauthorized: false
      }
    }
    // username: DB_USER,
    // password: DB_PASSWORD,
    // database: `${DB_NAME}_production`,
    // host: DB_HOST,
    // port: DB_PORT,
    // dialect: 'postgres'
  }
}
