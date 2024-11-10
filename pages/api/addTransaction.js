import db from "../../lib/db";
export default async function handler(req, res) {


    if (req.method === 'POST') {

        console.log(req.body)

        const insertTransaction = (formData) => {
            let { name, address, phone, email, tranString,commande_id } = formData;
            const calculateTotalPrice = (products) => {
                return products.reduce((total, product) => {
                    return total + (product.quantity * product.price);
                }, 0);
            };
            // Remove surrounding single quotes if they exist
            if (tranString.startsWith("'") && tranString.endsWith("'")) {
                tranString = tranString.slice(1, -1);
            }

            // Parse the string to convert it into an array of objects

            // Calculate the total price of all products in the order
            const totalAmount = calculateTotalPrice(JSON.parse(tranString));

            // Define the SQL query for inserting transaction data
            const sql = `INSERT INTO transactions 
                         (customer_id,commande_id, total_amount, payment_method, product_id) 
                         VALUES (?,?, ?, ?, ?)`;

            // Sample values; adjust them according to your application's needs
            const values = [
                phone + ' / ' + email + ' / ' + address + ' / ' + name,
                commande_id,
                totalAmount,                  // customer_id
                // total_amount (replace with actual amount)
                'cash à la livraison',
                tranString,

            ];

            db.query(sql, values, (error, results) => {
                if (error) {
                    console.error("Database error:", error);
                    // Send error response if there's a database error
                    return res.status(500).json({ success: false, message: 'Database error', error });
                }
          
                // Send success response with insert ID
                return res.status(200).json({ success: true, message: 'Transaction inserted', transactionId: results.insertId })
            });
        };

        // Call the function to insert transaction data
        insertTransaction(JSON.parse(req.body));

    }
    else {
        // Handle non-POST requests
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }

}