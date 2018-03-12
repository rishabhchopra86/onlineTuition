module.exports = function(service,user,password) {
    let nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        service: service,
        auth: {
            user: user,
            pass: password
        }
    });
    this.mailto=(from,to,subject,html)=>{
        let mailOptions = {
            from: from,
            to: to,
            subject: subject,
            html: html
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

}