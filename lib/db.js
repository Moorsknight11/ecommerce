import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
   
});
// port: process.env.DB_PORT, // Add the port here, e.g., 17722
// ssl: {
//     rejectUnauthorized: false, // Set to false if you're using self-signed certificates
// },
export default db;