import { createTransport} from "nodemailer";

const transporter = createTransport({
  host: process.env.SMTP_HOST, // Your SMTP server host
  port: process.env.SMTP_PORT, // Port for SMTP (587 is typically used for TLS)
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your SMTP username
    pass: process.env.SMTP_PASS, // Your SMTP password
  },
  // Optional additional SMTP settings
  tls: {
    rejectUnauthorized: false, // Set to false if your server uses a self-signed certificate
  },
});

export default transporter;
