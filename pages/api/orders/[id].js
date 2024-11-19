import db from '../../../lib/db'; // Adjust the import based on your db setup

export default async function handler(req, res) {

    const {
        query: { id }, // Assuming id is the image URL here
        method,
    } = req;
    console.log(id)

    if (method === 'GET') {
        try {
            // Fetch the product ID associated with the image URL




            const order = async (req, res) => {
                try {
                    const [results] = await db.query(
                        'SELECT * FROM transactions WHERE commande_id = ?',
                        [req.query.id] // Replace with the actual value
                    );
                  return res.status(200).json({ message: results[0] });
                } catch (err) {
                    console.error(err);
                   return res.status(500).json({ error: 'Database query failed' });
                }
            };

           order(req,res)
        } catch (error) {
            console.error('Error deleting image:', error);
            return res.status(500).json({ error: 'Error deleting image' });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}