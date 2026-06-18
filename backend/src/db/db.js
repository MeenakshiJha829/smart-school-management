import pkg from "pg";

const {Pool}=pkg;

// export const pool=new Pool({
//     user:"postgres",
//     host:"localhost",
//     database:"school_management",
//     password:"123456",
//     port:5433,
// })

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});