const sgMail =  require('@sendgrid/mail');
const SENDGRID_API_KEY = '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'
sgMail.setApiKey(SENDGRID_API_KEY)
console.log("0) reclamaçao: ")


// perform desired operations ...
const message = {
  to: "gislainehjessica@gmail.com", // Email de que vai receber a reclamação
  from: 'gislaine.jessica@udna.com.br', // Email que está configurado no sendgrid
  subject: `Reclamação de `, // Reclamação: {subject}
  text: `Sua reclamação aqui: `, // {content}
  html: '<strong> Reclamação enviada </strong> <p> Aguarde retorno </P>', 
  templateId: 'd-ede924bcc72140d5b85caca88849dcb9',
  substitutions: {
    name: "Gislaine",
    subject: "Minha reclamação hoje",
    content: "A quarentena não deveria ter pessoas nas ruas",
  }
};

sgMail.send(message)
  










/**
 *     
const nodemailer = require("nodemailer");

 async function Email() {
 
  const message = {
    to: "gislainehjessica@gmail.com", // Email de que vai receber a reclamação
    from: "gislaine.jessica.udna@gmail.com", // Email que está configurado no sendgrid
    subject: `Reclamação` ,// Reclamação: {subject}
    text: `Sua reclamação aqui `, // {content}
    html: '<strong> Reclamação enviada </strong> <p> Aguarde retorno </P>', 
  };
  console.log('enviar email')

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gislaine.jessica.udna@gmail.com",
      pass: "Udna@1475963"
    },
  });
  
  await transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });

  console.log('enviado')
}

Email()
 */

