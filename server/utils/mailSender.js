const nodemailer = require("nodemailer");


//creating a function to send  mail

const mailSender = async (email, title, body) => {
    try {
        // Create a Nodemailer transporter object
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST, // Hostname or IP of your email server (from environment variable)
            auth: {
                user: process.env.MAIL_USER, // Username for your email account (from environment variable)
                pass: process.env.MAIL_PASS, // Password for your email account (from environment variable)
            },
        });

        // Define email content
        let info = await transporter.sendMail({
            from: 'StudyNotion || By-Ojas ', // Sender's 
            to: `${email}`, // Recipient's email address (dynamically inserted)
            subject: `${title}`, // Subject line of the email (dynamically inserted)
            html: `${body}`, // Email body content in HTML format (dynamically inserted)
        });

        // Log sent email information
        console.log(info);
        return info; // Return information about the sent email

    } catch (error) {
        // Handle errors during email sending
        console.log(error.message);
    }
};

module.exports = mailSender; // Export the mailSender function