var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

router.get('/', function(req, res) {
    res.render('contact');
});
router.get('/review', function(req, res) {
    res.render('contactReview');
});


router.post('/post', function(req, res) {
    let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        // port: 587,
        service: 'gmail',
        secure: true, // true for 465, false for other ports
        auth: {
            type: "OAuth2",
            user: 'forver214559@gmail.com',
            clientId: "389726056573-ootml6p9k8mnq94avg9qv1qostqeej0a.apps.googleusercontent.com",
            clientSecret: "7UCL46B4YKhsvH7Fx754fx6b",
            refreshToken: "1//04m3_fOt3-fB8CgYIARAAGAQSNwF-L9Ir2A-p2a6zdbKcb3PizNDe3CDy8iN2aQ55gfY9EEtDGTU-TIWv0JqS-uQp-T3x0iNmmJY",
        },
      });

    let message = {
        from: "個人測試<gmail>",
        to: "receiver@sender.com",
        subject: req.body.username + "寄來了一封信",
        text: req.body.description,
    };


    transporter.sendMail(message, function(error, info){
        if(error){
            return console.log(error);
        };
        res.redirect('/review');
    });
    
    
    
    // var data = req.body;
    // console.log(data)
    // res.redirect('/contact/review');
});
module.exports = router;
