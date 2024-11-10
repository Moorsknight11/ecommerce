import db from "../../lib/db";
export default async function handler(req, res) {


    if (req.method === 'POST') {

        const phone = req.body.phone
        console.log(req.body)
        const sql = `SELECT * FROM transactions WHERE customer_id LIKE ?`;

const values=[`%${phone}%`]
        try {
            const [results] = await db.query(sql,values); // Await the query execution
            console.log('Query results:', results);
            return res.status(200).json({ success: true, message: 'Transactions retrieved', results });
        } catch (error) {
            console.error("Database error:", error);
            return res.status(500).json({ success: false, message: 'Database error', error });
        }
    } else {
        // Handle other HTTP methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}