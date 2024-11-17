import transporter from "./transporter";
import db from "../../lib/db";
import sgMail from '@sendgrid/mail';
export default async function handler(req, res) {
    try {

        async function insertCommande() {
            return new Promise((resolve, reject) => {
                const sql = `INSERT INTO commande
            (content,user_id)
            VALUES(?,?)`;

                // Sample values; adjust them according to your application's needs
                const values = [
                    req.body.commande,
                    parseInt(req.body.phone)
                    // total_amount (replace with actual amount)

                ];


                db.query(sql, values, (error, results) => {
                    if (error) {
                        console.error("Database error:", error);
                        // Send error response if there's a database error
                        return res.status(500).json({ success: false, message: 'Database error', error });
                    }

                    // Send success response with insert ID

                    return (results)

                }).then(data => {

                    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
                    const calculateTotalPrice = (products) => {
                        return products.reduce((total, product) => {
                            return total + (product.quantity * product.pricewithoutdiscount - product.quantity * product.pricewithoutdiscount * product.discount / 100);
                        }, 0);
                    };

                    const totalAmount = calculateTotalPrice(JSON.parse(req.body.commande));


                    const msg = {
                        to: req.body.email, // Recipient's email
                        from: "altinsoylar11@gmail.com", // Must match a verified sender
                        templateId: 'd-1f3c24154cde4b1ea89b1404041f328e',
                        subject: 'Merci pour votre commande',
                        dynamicTemplateData: {
                            orderNumber: data[0].insertId,
                            name: req.body.name,
                            email: req.body.email,
                            phone: req.body.phone,
                            total_price: totalAmount,
                            items: JSON.parse(req.body.commande),
                            productsNumber: JSON.parse(req.body.commande).length,
                            address: req.body.address
                        }, // Data to personalize the template
                    };

                    sgMail
                        .send(msg)
                        .then(() => {
                            console.log('first Email sent')
                        })
                        .catch((error) => {
                            console.log(error.response.body.errors)
                            console.error(error)
                        })



                    resolve(data[0].insertId);  // Resolve with insertId
                });
            })




        }



        async function sendEmails(data) {
            console.log(data)
            try {


                const sql1 = `SELECT * FROM commande
                    WHERE id = ? 
                   `;

                // Sample values; adjust them according to your application's needs
                const values1 = [
                    data
                    // total_amount (replace with actual amount)

                ];







                await db.query(sql1, values1, (error, results) => {
                    if (error) {
                        console.error("Database error:", error);
                        // Send error response if there's a database error
                        return res.status(500).json({ success: false, message: 'Database error', error });
                    }

                    // Send success response with insert ID

                    return results;
                }).then((data1) => {

                    console.log("thisdata", data1)

                    // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
                    const calculateTotalPrice = (products) => {
                        return products.reduce((total, product) => {
                            return total + (product.quantity * product.pricewithoutdiscount - product.quantity * product.pricewithoutdiscount * product.discount / 100);
                        }, 0);
                    };


                    console.log('test', data1)

                    // function escapeHTML(str) {
                    // return str.replace(/[&<>"']/g, function (char) {
                    // return {
                    //  '&': '&amp;',
                    // '<': '&lt;',
                    //  '>': '&gt;',
                    //  '"': '&quot;',
                    //  "'": '&#39;',
                    //  }[char];
                    // });
                    //}
                    const totalAmount = calculateTotalPrice(JSON.parse(req.body.commande));

                    const msg = {
                        to: 'hajjejhazem063@gmail.com', // Change to your recipient
                        from: "altinsoylar11@gmail.com", // Change to your verified sender
                        subject: 'Commande Commande',

                        templateId: 'd-6ffe44e8d43343a3b86802112b1f456d',

                        dynamicTemplateData: {
                            orderNumber: data1[0][0].id,
                            itemsString: req.body.commande,
                            name: req.body.name,
                            email: req.body.email,
                            phone: req.body.phone,
                            total_price: totalAmount,
        

                            productsNumber: JSON.parse(req.body.commande).length,
                            address: req.body.address
                        }, // Data to personalize the template


                    }
                    sgMail
                        .send(msg)
                        .then(() => {
                            console.log('second Email sent')
                        })
                        .catch((error) => {
                            console.log('error here')
                            console.log(error.response.body.errors)
                            console.error(error)
                        })

                    //     html: `<strong> Une commande est là! de la part de  ${req.body.name} +
                    //     son email est:  ${req.body.email} 
                    //    details de la commande est:   ${req.body.commande} 
                    //     et son telephone est:   ${req.body.phone} 
                    //    et son addresse est:  ${req.body.address} 
                    //     et le numero de la commande est:  ${data[0][0].id},</strong>`,


                    // transporter.sendMail({
                    //     from: 'altinsoylar11@gmail.com', // Sender address
                    //     to: 'hajjejhazem063@gmail.com', // Recipient address
                    //     subject: 'Commande commande!', // Subject line
                    //     text: `"Une commande est là! de la part de " + ${req.body.name} +
                    //         " son email est: " + ${req.body.email} +
                    //         " details de la commande est: " + ${req.body.commande} +
                    //         " et son telephone est: " + ${req.body.phone} +
                    //         " et son addresse est: " + ${req.body.address} +
                    //         " et le numero de la commande est: " + ${data1[0][0].id} +
                    //                          " et la somme est: " + ${totalAmount} `

                    // });
                    // console.log("second email sent.");
                })








            } catch (error) {
                console.error("Error sending admin notification email:", error);
            }


            console.log('Command executed successfully');
            await res.status(200).json({ message: req.body.phone, email: req.body.email });
        }


        let test;
        await insertCommande().then((data) => {
            test = data

            console.log(test)
        })
        console.log(test)
        await sendEmails(test)
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw new Error('Failed to send verification email');

    }



}
