require('dotenv').config(); // magic

module.exports = {
  database: process.env.DB_NAME,
  define: {
    timestamps: false, // true by default
  },
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
};
