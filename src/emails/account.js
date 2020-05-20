const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = ( email, name ) => {
    sgMail.send({
        to: email,
        from: 'alexss.solanki1@gmail.com',
        subject: 'Hello!',
        text: `Welcome to the app, ${name}. Let me know how you get along with`
    })
}

const sendFarewellEmail = ( email, name ) => {
    sgMail.send({
        to: email,
        from: 'alexss.solanki1@gmail.com',
        subject: 'Goodbye!',
        text: `We will miss you, ${name}. Let me know let us know what went wrong`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}