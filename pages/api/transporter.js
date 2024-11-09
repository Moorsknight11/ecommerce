import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: process.env.SMTP_HOST, 
  port: process.env.SMTP_PORT, 
  secure: false, // Set to true if using SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Set to false for self-signed certs
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Error with SMTP configuration:", error);
  } else {
    console.log("SMTP transporter configured successfully");
  }
});
export default transporter;