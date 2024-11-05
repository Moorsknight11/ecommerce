
"use client";
import db from '../../lib/db'; // Import your MySQL connection

export default async function handler(req, res) {
  try {
    // Fetch products from the MySQL database
    const [products] = await db.query(`
      SELECT * FROM product
    `);

    // Send the response with fetched products
    res.status(200).json({ products });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}