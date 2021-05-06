
const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const BASE_URL = process.env.CLIENT_URL;

const defaultMailOptions = {
  from: process.env.MAIL_OPTIONS_FROM,
  to: 'swap@yopmail.com',
  subject: 'Subject',
  html: '<strong> Test mail</strong>',
};

function emailTemplate(address) {
  return `<html>
    <body>
      <h4>Address Not found</h4><br/><br/>
      <p>Address: ${address}</p>
    </body>
  </html>`
}

const triggerEmail = async (mailOptions) => {
  const options = { ...defaultMailOptions, ...mailOptions };
  try {
    const result = await sgMail.send(options);
    if (result.length > 0) {
      return result[0].toJSON();
    }
  } catch (error) {
    console.log(error)
    throw Error(error);
  }
};

module.exports = {
  triggerEmail,
  emailTemplate
}
