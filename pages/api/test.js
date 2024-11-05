// pages/api/test.js
import db from '../../lib/db';

export default async function handler(req, res) {
    try {
        const [rows] = await db.query('SELECT 1'); // Simple query to test connection
        res.status(200).json({ message: 'Database connection successful!', rows });
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ message: 'Database connection failed.', error: error.message });
    }
}