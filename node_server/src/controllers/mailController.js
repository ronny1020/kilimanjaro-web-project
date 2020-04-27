import nodemailer from 'nodemailer'
import credentials from '../config/mailConfig'

var mailTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: credentials.gmail.user,
        pass: credentials.gmail.pass
    }
});

exports.sendMail = (req,res) =>{
    
}