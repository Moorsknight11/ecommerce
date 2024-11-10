import transporter from "./transporter";
import db from "../../lib/db";
export default async function handler(req, res) {
    try {

        // Send email
        console.log("send email", req.body)

        async function insertCommande() {
            const sql = `INSERT INTO commande
            (content,user_id)
            VALUES(?,?)`;

            // Sample values; adjust them according to your application's needs
            const values = [
                req.body.commande,
                parseInt(req.body.phone)
                // total_amount (replace with actual amount)

            ];


            await db.query(sql, values, (error, results) => {
                if (error) {
                    console.error("Database error:", error);
                    // Send error response if there's a database error
                    return res.status(500).json({ success: false, message: 'Database error', error });
                }

                // Send success response with insert ID
                console.log(results)
                return res.status(200).json({ success: true, message: 'Commande inserted', commandeId: results.insertedId })

            }).then(data=>{


console.log(data)

                try {
                    transporter.sendMail({
                        from: process.env.SMTP_USER, // Sender address
                        to: req.body.email, // Recipient address
                        subject: 'Commande bien reçu!', // Subject line
                        text: "Merci pour votre confiance, Nous avons reçu votre commande! votre nuemro de coammande est: "+data[0].insertId
                    });
                    console.log("Confirmation email sent to user.");
                } catch (error) {
                    console.error("Error sending confirmation email to user:", error);
                }
    
            })




        }




        insertCommande().then(sendEmails())


        //     function getInsertedId(phone) {
        //         const sqlSelect = `SELECT * FROM commande
        // WHERE user_id = ? 
        // ORDER BY created_at DESC
        // LIMIT 1`;

        //         const selectValues = [
        //             phone
        //         ]


        //         db.query(sqlSelect, selectValues, (error, results) => {
        //             if (error) {
        //                 console.error("Database error:", error);
        //                 res.status(500).json({ message: 'Database error' });
        //             } else {
        //                 if (results && results.length > 0) {
        //                     newestCommande = results[0]; // Save the newest record to the variable
        //                     console.log("Newest commande:", newestCommande);
        //                     res.status(200).json({ message: 'Success', data: newestCommande });
        //                 } else {
        //                     console.log("No records found.");
        //                     res.status(404).json({ message: 'No record found' });
        //                 }
        //             }
        //         })
        //     }

        async function sendEmails() {
            try {


                const sql1 = `SELECT * FROM commande
                    WHERE user_id = ? 
                    ORDER BY created_at DESC
                    LIMIT 1`;

                // Sample values; adjust them according to your application's needs
                const values1 = [
                    parseInt(req.body.phone)
                    // total_amount (replace with actual amount)

                ];







                var insertedId;
                await db.query(sql1, values1, (error, results) => {
                    if (error) {
                        console.error("Database error:", error);
                        // Send error response if there's a database error
                        return res.status(500).json({ success: false, message: 'Database error', error });
                    }

                    // Send success response with insert ID
                    console.log(results)
                    insertedId = results.user_id;
                    return results.user_id
                }).then(data => {
                    console.log(data)
                    transporter.sendMail({
                        from: req.body.email, // Sender address
                        to: 'hajjejhazem063@gmail.com', // Recipient address
                        subject: 'Commande commande!', // Subject line
                        text: "Une commande est là! de la part de " + req.body.name +
                            " son email est: " + req.body.email +
                            " details de la commande est: " + req.body.commande +
                            " et son telephone est: " + req.body.phone +
                            " et son addresse est: " + req.body.address +
                            " et le numero de la commande est: " + data[0][0].id

                    });
                    console.log("Notification email sent to admin.");
                })








            } catch (error) {
                console.error("Error sending admin notification email:", error);
            }

            
            console.log('Command executed successfully');
            res.status(200).json({ message: req.body.phone, email: req.body.email });
        }

    } catch (error) {
        console.error('Error sending verification email:', error);
        throw new Error('Failed to send verification email');

    }
}