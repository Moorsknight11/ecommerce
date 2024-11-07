import { createTransport} from "nodemailer";

const transporter = createTransport({
  host: 'smtp.gmail.com', // Your SMTP server host
  port: 587, // Port for SMTP (587 is typically used for TLS)
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'altinsoylar11@gmail.com', // Your SMTP username
    pass: 'fgjtpvxglmuzuiiu', // Your SMTP password
  },
  // Optional additional SMTP settings
  tls: {
    rejectUnauthorized: false, // Set to false if your server uses a self-signed certificate
  },
});

export default transporter;
