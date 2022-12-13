const { jsPDF }  = require("jspdf");
require("jspdf-autotable");
const format = require("date-fns");
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({ // variable global para poder usarla en el resto de funciones de sendEmail
    service: 'gmail',
    auth: {
        user: 'acostavalentina7@gmail.com',
        pass: 'ltkigsdzjbsrulce'
    }
});



// generar pdf del vaucher y luego enviarlo por correo 
// services/reportGenerator.js

// define a generatePDF function that accepts a tickets argument
async function generatePDF(tickets, email, username) {
    // initialize jsPDF
    const doc = jsPDF();
    // define the columns we want and their titles
    const tableColumn = ["Id", "Title", "Issue", "Status"];
    // define an empty array of rows
    const tableRows = [];
    // for each ticket pass all its data into an array
    tickets.forEach(e => { // [{id = 1, title = a, request = a, status = s}, {}, {}]
        const ticketData = [ // [1, a, a, s]
            e.id,
            e.title,
            e.request,
            e.status,
        ];
        // push each tickcet's info into a row
        tableRows.push(ticketData);
    });
    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    // ticket title. and margin-top + margin-left
    doc.text("Este es tu voucher.", 14, 15);
   

    var mailOptions = {
        from: "Inca Adventure <acostavalentina7@gmail.com>",
        to: `${email}`,
        subject: "Ticket",
        html: `<h1  align="center"> Hello  ${username}</h1>
        <h3 aling= "center">Below you can view your purchase ticket, which will serve to exchange your product in the corresponding store.</h3>
        <h3 aling= "center">We recommend that you download and/or print it, as it is extremely important that you keep it in order to claim your product.</h3> `,
        attachments: [
            {
                filename: "ticket.pdf",
                content: Buffer.from(doc.output('arraybuffer'))
            }
        ]
    }

    let info = await transporter.sendMail(mailOptions,);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log("Email sent!");

};

// funcion que envia el email de bienvenida cuando se registra el usuario

async function sendEmail(email, username) {

    var mailOptions = {
        from: "Inca Adventure <acostavalentina7@gmail.com>",
        to: `${email}`,
        subject: "Welcome to Inca Adventure",
        html: `<h1  align="center"> Hello  ${username}</h1>
        <p  align="center"><img src ="https://machupicchuviajesperu.com/wp-content/uploads/2022/03/tour-lima-paracas-nazca-cusco-machu-picchu.jpg" width="900" height="200"/></p>
        <h3 aling= "center"> We are glad that you want to be part of this great experience, where you will expand your knowledge and learn about the Inca culture.</h3>
        <h3 align="center"> Remember visit our store and take with you souvenirs or tools that will help you in your favorite activities. </h3>`,
    }

    let info = await transporter.sendMail(mailOptions,);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log("Email sent!");
}

module.exports = {
    sendEmail,
    generatePDF,
}



