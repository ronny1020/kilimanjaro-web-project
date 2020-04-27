import nodemailer from 'nodemailer'
import credentials from '../config/mailConfig'

var mailTransport = nodemailer.createTransport({
  service: 'Gmail',
  secure: 'true',
  auth: {
    user: credentials.gmail.user,
    pass: credentials.gmail.password,
    // type: 'OAuth2',
    // user: credentials.ACCOUNT,
    // clientId: credentials.CLINENTID,
    // clientSecret: credentials.CLINENTSECRET,
    // refreshToken: credentials.REFRESHTOKEN,
  },
})

exports.sendMail = (req, res) => {
  const mailAddr = req.body.mail
  const mailDetail = req.body.content
  mailTransport.sendMail(
    {
      from: 'Meadowlark Travel <' + mailAddr + '>',
      to: 'Meadowlark Travel <' + mailAddr + '>',
      subject: 'Hi :)',
      html: '<h1>Hello</h1><p>' + mailDetail + '</p>',
    },
    function(err) {
      if (err) {
        console.log('Unable to send email: ' + err)
      }
    }
  )
}
