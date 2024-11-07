import transporter from "./transporter";
export default async function handler(req, res) {
    try {
        // Send email
        console.log(req.body)
        await transporter.sendMail({
            from: JSON.parse(req.body).email, // Sender address
            to: 'hajjejhazem063@gmail.com', // Recipient address
            subject: 'Commande commande!', // Subject line
            text: "Une commande est là! de la part de "+JSON.parse(req.body).name+ " son email est: "+JSON.parse(req.body).email+" details de la commande est: "+
            JSON.parse(req.body).commande 
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