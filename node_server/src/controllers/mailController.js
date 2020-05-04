import nodemailer from 'nodemailer'
import credentials from '../config/mailConfig'

const hostAddr = 'kilimanjaro2020iii@gmail.com'
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

//新增: 罐頭回覆api
exports.sendMail = (req, res) => {
  const mailAddr = req.body.mail
  const mailDetail = req.body.content

  mailTransport.sendMail(
    {
      from: 'Killimanjaro Dev <' + hostAddr + '>',
      to: '<' + mailAddr + '>',
      subject: '吉利馬札羅開發團隊',
      html:
        "<h1 style='background-color: black;color: white;'>Kilimanjaro</h1><p style='font-size: 20px;'>親愛的用戶, 您好：</p><p style='font-size: 20px;'>你的驗證碼為：<code style='background-color: lightgray;'>" +
        mailDetail +
        "</code></p><footer style='background-color: black;color: white;'> Klimanjaro dev team @2020</footer>",
    },
    function(err) {
      if (err) {
        console.log('Unable to send email: ' + err)
      }
    }
  )
}
