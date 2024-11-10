// import transporter from "./transporter";
// import db from "../../lib/db";

// export default async function handler(req, res) {

//     async function sendEmails() {

//         try {
//             console.log('niveau2', req.body)

//             const sqlSelect = `SELECT * FROM commande
//             WHERE user_id = ? 
//             ORDER BY created_at DESC
//             LIMIT 1`;

//             const selectValues = [
//                 req.body.message
//             ]


//             const selectedValue = await db.query(sqlSelect, selectValues, (error, results) => {
//                 if (error) {
//                     console.log(results)
//                     console.error("Database error:", error);
//                     res.status(500).json({ message: 'Database error' });
//                 } else {

//                     if (results && results.length > 0) {
//                         // Save the newest record to the variable




//                     } else {
//                         console.log("No records found.");
//                         res.status(404).json({ message: 'No record found' });
//                     }
//                 }
//             })

//             console.log(selectedValue[0][0].id)



//             await transporter.sendMail({
//                 from: process.env.SMTP_USER, // Sender address
//                 to: req.body.email, // Recipient address
//                 subject: 'Commande bien reçu!', // Subject line
//                 text: "Votre numero de commande est: " + selectedValue[0][0].id
//             });

//             res.status(200).json({ message: 'Success', data: selectedValue[0][0].id });
//         } catch (error) {
//             console.error("Error sending confirmation email to user:", error);
//             console.log('Command executed successfully');
//             res.status(2500).json({ message: "error" });
//         }


//     }


//     try {
//         sendEmails()
//     } catch (error) {
//         console.log(error)
//     }


// }
