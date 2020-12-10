const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View Engine setup
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

// Static folder
app.use('/public',express.static(path.join(__dirname, 'public')));

// Body Parser MiddleWare

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.render('contact',{layout:false});
});

app.post('/send', (req, res) => {
	const output = `
		<h3>Contact Details</h3>
		<ul>
			<li>Name: ${req.body.fname} ${req.body.lname}</li>
			<li>Email: ${req.body.email}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
	`;

	async function main() {
		// Generate test SMTP service account from ethereal.email
		// Only needed if you don't have a real mail account for testing
		// let testAccount = await nodemailer.createTestAccount();
	  
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
		  host: "smtp.zoho.eu",
		  port: 465,
		  secure: true, // true for 465, false for other ports
		  auth: {
			user: 'info@socialengineeringhelp.com', // generated ethereal user
			pass: 'cfedundrum2020', // generated ethereal password
		  },
		  tls:{
			rejectUnauthorized:false
		  }
		});
	  
		// send mail with defined transport object
		let info = await transporter.sendMail({
		  from: '"" <info@socialengineeringhelp.com>', // sender address
		  to: "contact@socialengineeringhelp.com", // list of receivers
		  subject: "Customer Query", // Subject line
		  text: "Hello world?", // plain text body
		  html: output // html body
		});
	  
		console.log("Message sent: %s", info.messageId);
		console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

		res.render('contact',{layout:false},{msg: 'Email has been sent'});
	  }
	  
	  main().catch(console.error);

});

app.listen(3000, () => console.log('Server started...'));