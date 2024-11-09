import transporter from "./transporter";
import db from "../../lib/db";
export default async function handler(req, res) {
    try {
        // Send email
        console.log(req.body)


        const sql = `INSERT INTO commande
        (content)
        VALUES(?)`;

        // Sample values; adjust them according to your application's needs
        const values = [
            JSON.parse(req.body).commande
            // total_amount (replace with actual amount)

        ];

        function queryDatabase(sql, values) {
            return new Promise((resolve, reject) => {
                db.query(sql, values, (error, results) => {
                    if (error) {
                        console.error("Database error:", error);
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
            });
        }

        const results = await queryDatabase(sql, values)


        const insertedId = results.inserteId

        console.log(req.body)
        await transporter.sendMail({
            from: JSON.parse(req.body).email, // Sender address
            to: 'hajjejhazem063@gmail.com', // Recipient address
            subject: 'Commande commande!', // Subject line
            text: "Une commande est là! de la part de " + JSON.parse(req.body).name + " son email est: " + JSON.parse(req.body).email + " details de la commande est: " +
                JSON.parse(req.body).commande + " et son telephone est: " + JSON.parse(req.body).phone + " et son addresse est: " + JSON.parse(req.body).address
            // HTML content for email (optional)
            // HTML content for email (optional)
        });
        await transporter.sendMail({
            from: "altinsoylar11@gmail.com", // Sender address
            to: JSON.parse(req.body).email, // Recipient address
            subject: 'Commande bien reçu!', // Subject line
            text: "Merci pour votre confiance, Nous avons reçu votre commande!"
            // HTML content for email (optional)
        });
        console.log('command executed successfully');
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw new Error('Failed to send verification email');
    }
}