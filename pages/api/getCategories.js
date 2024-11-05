"use client";
import db from '../../lib/db';
export default async function handler(req, res) {
  try {
    // Fetch categories from the MySQL database
    const [categories] = await db.execute('SELECT * FROM categories WHERE parent_category_id IS NULL'); // Make sure your table name is correct

    // Fetch banners from the MySQL database
   //const [bannerData] = await db.query('SELECT * FROM banners'); // Make sure your table name is correct

    // Send the response with fetched data
    res.status(200).json({ categories});
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}