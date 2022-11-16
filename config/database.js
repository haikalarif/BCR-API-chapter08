const {
  DB_USER = 'postgres',
  DB_PASSWORD = '12345',
  DB_NAME = 'bcr',
  DB_HOST = '127.0.0.1',
  DB_PORT = '5432',
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres'
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
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