 const { Pool } = require("pg");

// const isProduction = process.env.NODE_ENV === "production";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: isProduction ? { rejectUnauthorized: false } : false,
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };

const pool = new Pool({
  connectionString: 'postgresql://work_db_q3wb_user:EPOZTKxh4nMbRikdhByW34n4AcK1osn6@dpg-d0qu71ruibrs73ev3e0g-a:5432/work_db_q3wb',
  ssl: {
    rejectUnauthorized: false, // для Render нужно
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};