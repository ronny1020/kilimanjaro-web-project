import nodemailer from 'nodemailer'
import credentials from '../config/mailConfig'

// HTML to JS string:
// http://pojo.sodhanalibrary.com/string.html
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

//mailApi: 更新密碼
exports.sendVerify = (req, res) => {
  const mailAddr = req.body.mail
  const mailDetail = req.body.content
  const userAccount = req.body.account

  mailTransport.sendMail(
    {
      from: 'Killimanjaro Dev <' + hostAddr + '>',
      to: '<' + mailAddr + '>',
      subject: '吉利馬札羅開發團隊',
      //垃圾代碼:
      html:
        '<body' +
        '  class="clean-body"' +
        '  style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #fcebd4;"' +
        '>' +
        '  <table' +
        '    class="nl-container"' +
        '    style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fcebd4; width: 100%;"' +
        '    cellpadding="0"' +
        '    cellspacing="0"' +
        '    role="presentation"' +
        '    width="100%"' +
        '    bgcolor="#fcebd4"' +
        '    valign="top"' +
        '  >' +
        '    <tbody>' +
        '      <tr style="vertical-align: top;" valign="top">' +
        '        <td style="word-break: break-word; vertical-align: top;" valign="top">' +
        '          <div style="background-color:#000000;">' +
        '            <div' +
        '              class="block-grid "' +
        '              style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"' +
        '            >' +
        '              <div' +
        '                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"' +
        '              >' +
        '                <div' +
        '                  class="col num12"' +
        '                  style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;"' +
        '                >' +
        '                  <div style="width:100% !important;">' +
        '                    <div' +
        '                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:25px; padding-right: 0px; padding-left: 0px;"' +
        '                    >' +
        '                      <div' +
        '                        class="img-container center fixedwidth"' +
        '                        align="center"' +
        '                        style="padding-right: 0px;padding-left: 0px;"' +
        '                      >' +
        '                        <img' +
        '                          class="center fixedwidth"' +
        '                          align="center"' +
        '                          border="0"' +
        '                          src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-r3k4vihk3ld/%E8%B3%87%E7%94%A2%201.png"' +
        '                          alt="Alternate text"' +
        '                          title="Alternate text"' +
        '                          style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 390px; display: block;"' +
        '                          width="390"' +
        '                        />' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '          <div' +
        '            style="background-image:url(\'https://d1oco4z2z1fhwp.cloudfront.net/templates/default/481/bg_center.png\');background-position:top center;background-repeat:repeat;background-color:#66292d;"' +
        '          >' +
        '            <div' +
        '              class="block-grid "' +
        '              style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"' +
        '            >' +
        '              <div' +
        '                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"' +
        '              >' +
        '                <div' +
        '                  class="col num12"' +
        '                  style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;"' +
        '                >' +
        '                  <div style="width:100% !important;">' +
        '                    <div' +
        '                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:50px; padding-bottom:50px; padding-right: 0px; padding-left: 0px;"' +
        '                    >' +
        '                      <div class="mobile_hide">' +
        '                        <table' +
        '                          class="divider"' +
        '                          border="0"' +
        '                          cellpadding="0"' +
        '                          cellspacing="0"' +
        '                          width="100%"' +
        '                          style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"' +
        '                          role="presentation"' +
        '                          valign="top"' +
        '                        >' +
        '                          <tbody>' +
        '                            <tr style="vertical-align: top;" valign="top">' +
        '                              <td' +
        '                                class="divider_inner"' +
        '                                style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"' +
        '                                valign="top"' +
        '                              >' +
        '                                <table' +
        '                                  class="divider_content"' +
        '                                  border="0"' +
        '                                  cellpadding="0"' +
        '                                  cellspacing="0"' +
        '                                  width="100%"' +
        '                                  style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 35px; width: 100%;"' +
        '                                  align="center"' +
        '                                  role="presentation"' +
        '                                  height="35"' +
        '                                  valign="top"' +
        '                                >' +
        '                                  <tbody>' +
        '                                    <tr' +
        '                                      style="vertical-align: top;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <td' +
        '                                        style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"' +
        '                                        height="35"' +
        '                                        valign="top"' +
        '                                      >' +
        '                                        <span></span>' +
        '                                      </td>' +
        '                                    </tr>' +
        '                                  </tbody>' +
        '                                </table>' +
        '                              </td>' +
        '                            </tr>' +
        '                          </tbody>' +
        '                        </table>' +
        '                      </div>' +
        '                      <div class="mobile_hide">' +
        '                        <div' +
        '                          style="color:#FFFFFF;font-family:メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:0px;padding-left:10px;"' +
        '                        >' +
        '                          <div' +
        '                            style="font-family: メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, sans-serif; font-size: 12px; line-height: 1.2; color: #FFFFFF; mso-line-height-alt: 14px;"' +
        '                          >' +
        '                            <p' +
        "                              style=\"font-size: 38px; line-height: 1.2; text-align: center; word-break: break-word; font-family: メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, sans-serif; mso-line-height-alt: 46px; margin: 0;\"" +
        '                            >' +
        '                              <span style="font-size: 38px;"' +
        '                                >會員' +
        userAccount +
        '您好:</span' +
        '                              >' +
        '                            </p>' +
        '                          </div>' +
        '                        </div>' +
        '                      </div>' +
        '                      <div' +
        '                        class="desktop_hide"' +
        '                        style="mso-hide: all; display: none; max-height: 0px; overflow: hidden;"' +
        '                      >' +
        '                        <div' +
        '                          style="color:#FFFFFF;font-family:メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:0px;padding-left:10px;"' +
        '                        >' +
        '                          <div' +
        '                            style="font-family: メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, sans-serif; font-size: 12px; line-height: 1.2; color: #FFFFFF; mso-line-height-alt: 14px;"' +
        '                          >' +
        '                            <p' +
        "                              style=\"font-size: 24px; line-height: 1.2; text-align: center; word-break: break-word; font-family: メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, sans-serif; mso-line-height-alt: 29px; margin: 0;\"" +
        '                            >' +
        '                              <span style="font-size: 24px;"' +
        '                                >您的信箱驗證碼為:</span' +
        '                              >' +
        '                            </p>' +
        '                          </div>' +
        '                        </div>' +
        '                      </div>' +
        '                      <div' +
        '                        style="color:#555555;font-family:Dosis, Arial, Helvetica, sans-serif;line-height:1.2;padding-top:25px;padding-right:10px;padding-bottom:25px;padding-left:10px;"' +
        '                      >' +
        '                        <div' +
        '                          style="font-family: Dosis, Arial, Helvetica, sans-serif; line-height: 1.2; font-size: 12px; color: #555555; mso-line-height-alt: 14px;"' +
        '                        >' +
        '                          <p' +
        '                            style="line-height: 1.2; text-align: center; font-size: 28px; word-break: break-word; font-family: Dosis, Arial, Helvetica, sans-serif; mso-line-height-alt: 34px; margin: 0;"' +
        '                          >' +
        '                            <span' +
        '                              style="font-size: 28px; background-color: #ffffff;"' +
        '                              ><strong' +
        '                                ><span' +
        '                                  style="background-color: #ffffff; font-size: 28px;"' +
        '                                  > ' +
        mailDetail +
        '  </span' +
        '                                ></strong' +
        '                              ></span' +
        '                            >' +
        '                          </p>' +
        '                        </div>' +
        '                      </div>' +
        '                      <div' +
        '                        style="color:#FFFFFF;font-family:メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, sans-serif;line-height:1.2;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;"' +
        '                      >' +
        '                        <div' +
        '                          style="line-height: 1.2; font-size: 12px; color: #FFFFFF; font-family: メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, sans-serif; mso-line-height-alt: 14px;"' +
        '                        >' +
        '                          <p' +
        '                            style="text-align: center; line-height: 1.2; word-break: break-word; font-size: 16px; mso-line-height-alt: 19px; margin: 0;"' +
        '                          >' +
        '                            <span style="font-size: 16px;"' +
        '                              >以上為您的驗證碼。<br />動作快！你只有60秒！</span' +
        '                            >' +
        '                          </p>' +
        '                        </div>' +
        '                      </div>' +
        '                      <div class="mobile_hide">' +
        '                        <table' +
        '                          class="divider"' +
        '                          border="0"' +
        '                          cellpadding="0"' +
        '                          cellspacing="0"' +
        '                          width="100%"' +
        '                          style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"' +
        '                          role="presentation"' +
        '                          valign="top"' +
        '                        >' +
        '                          <tbody>' +
        '                            <tr style="vertical-align: top;" valign="top">' +
        '                              <td' +
        '                                class="divider_inner"' +
        '                                style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"' +
        '                                valign="top"' +
        '                              >' +
        '                                <table' +
        '                                  class="divider_content"' +
        '                                  border="0"' +
        '                                  cellpadding="0"' +
        '                                  cellspacing="0"' +
        '                                  width="100%"' +
        '                                  style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 50px; width: 100%;"' +
        '                                  align="center"' +
        '                                  role="presentation"' +
        '                                  height="50"' +
        '                                  valign="top"' +
        '                                >' +
        '                                  <tbody>' +
        '                                    <tr' +
        '                                      style="vertical-align: top;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <td' +
        '                                        style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"' +
        '                                        height="50"' +
        '                                        valign="top"' +
        '                                      >' +
        '                                        <span></span>' +
        '                                      </td>' +
        '                                    </tr>' +
        '                                  </tbody>' +
        '                                </table>' +
        '                              </td>' +
        '                            </tr>' +
        '                          </tbody>' +
        '                        </table>' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '          <div style="background-color:#FFFFFF;">' +
        '            <div' +
        '              class="block-grid "' +
        '              style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"' +
        '            >' +
        '              <div' +
        '                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"' +
        '              >' +
        '                <div' +
        '                  class="col num12"' +
        '                  style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;"' +
        '                >' +
        '                  <div style="width:100% !important;">' +
        '                    <div' +
        '                      style="border-top:1px solid #DBDBDB; border-left:0px solid #CECECE; border-bottom:0px solid #CECECE; border-right:0px solid #CECECE; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"' +
        '                    >' +
        '                      <div' +
        '                        style="color:#555555;font-family:Dosis, Arial, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"' +
        '                      >' +
        '                        <div' +
        '                          style="font-family: Dosis, Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.2; color: #555555; mso-line-height-alt: 14px;"' +
        '                        >' +
        '                          <p' +
        '                            style="font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Dosis, Arial, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;"' +
        '                          >' +
        '                            <strong' +
        '                              ><a' +
        '                                style="text-decoration: none; color: #404040;"' +
        '                                href="#"' +
        '                                target="_blank"' +
        '                                rel="noopener"' +
        '                                >ABOUT US</a' +
        '                              >' +
        '                               | ' +
        '                              <a' +
        '                                style="text-decoration: none; color: #404040;"' +
        '                                href="#"' +
        '                                target="_blank"' +
        '                                rel="noopener"' +
        '                                >OUR STORES</a' +
        '                              >' +
        '                                | ' +
        '                              <a' +
        '                                style="text-decoration: none; color: #404040;"' +
        '                                href="#"' +
        '                                target="_blank"' +
        '                                rel="noopener"' +
        '                                >DOWNLOAD APP </a' +
        '                              ></strong' +
        '                            >' +
        '                          </p>' +
        '                        </div>' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '          <div style="background-color:#22bca2;">' +
        '            <div' +
        '              class="block-grid mixed-two-up"' +
        '              style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"' +
        '            >' +
        '              <div' +
        '                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"' +
        '              >' +
        '                <div' +
        '                  class="col num4"' +
        '                  style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 216px; width: 216px;"' +
        '                >' +
        '                  <div style="width:100% !important;">' +
        '                    <div' +
        '                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:20px; padding-right: 15px; padding-left: 15px;"' +
        '                    >' +
        '                      <div' +
        '                        style="color:#FFFFFF;font-family:Dosis, Arial, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:0px;padding-left:10px;"' +
        '                      >' +
        '                        <div' +
        '                          style="font-family: Dosis, Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.2; color: #FFFFFF; mso-line-height-alt: 14px;"' +
        '                        >' +
        '                          <p' +
        '                            style="font-size: 24px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Dosis, Arial, Helvetica, sans-serif; mso-line-height-alt: 29px; margin: 0;"' +
        '                          >' +
        '                            <span style="font-size: 24px;"' +
        '                              ><strong' +
        '                                ><span style="font-size: 24px;"' +
        '                                  >Kilimanjaro</span' +
        '                                ></strong' +
        '                              ></span' +
        '                            >' +
        '                          </p>' +
        '                        </div>' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '                <div' +
        '                  class="col num8"' +
        '                  style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 432px; width: 433px;"' +
        '                >' +
        '                  <div style="width:100% !important;">' +
        '                    <div' +
        '                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:20px; padding-right: 15px; padding-left: 0px;"' +
        '                    >' +
        '                      <table' +
        '                        class="social_icons"' +
        '                        cellpadding="0"' +
        '                        cellspacing="0"' +
        '                        width="100%"' +
        '                        role="presentation"' +
        '                        style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"' +
        '                        valign="top"' +
        '                      >' +
        '                        <tbody>' +
        '                          <tr style="vertical-align: top;" valign="top">' +
        '                            <td' +
        '                              style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"' +
        '                              valign="top"' +
        '                            >' +
        '                              <table' +
        '                                class="social_table"' +
        '                                align="right"' +
        '                                cellpadding="0"' +
        '                                cellspacing="0"' +
        '                                role="presentation"' +
        '                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;"' +
        '                                valign="top"' +
        '                              >' +
        '                                <tbody>' +
        '                                  <tr' +
        '                                    style="vertical-align: top; display: inline-block; text-align: right;"' +
        '                                    align="right"' +
        '                                    valign="top"' +
        '                                  >' +
        '                                    <td' +
        '                                      style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 0;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <a' +
        '                                        href="https://www.facebook.com/"' +
        '                                        target="_blank"' +
        '                                        ><img' +
        '                                          width="32"' +
        '                                          height="32"' +
        '                                          src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-circle-white/facebook@2x.png"' +
        '                                          alt="Facebook"' +
        '                                          title="Facebook"' +
        '                                          style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"' +
        '                                      /></a>' +
        '                                    </td>' +
        '                                    <td' +
        '                                      style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 0;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <a' +
        '                                        href="https://twitter.com/"' +
        '                                        target="_blank"' +
        '                                        ><img' +
        '                                          width="32"' +
        '                                          height="32"' +
        '                                          src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-circle-white/twitter@2x.png"' +
        '                                          alt="Twitter"' +
        '                                          title="Twitter"' +
        '                                          style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"' +
        '                                      /></a>' +
        '                                    </td>' +
        '                                    <td' +
        '                                      style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 0;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <a' +
        '                                        href="https://instagram.com/"' +
        '                                        target="_blank"' +
        '                                        ><img' +
        '                                          width="32"' +
        '                                          height="32"' +
        '                                          src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png"' +
        '                                          alt="Instagram"' +
        '                                          title="Instagram"' +
        '                                          style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"' +
        '                                      /></a>' +
        '                                    </td>' +
        '                                    <td' +
        '                                      style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 0;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <a' +
        '                                        href="https://www.linkedin.com/"' +
        '                                        target="_blank"' +
        '                                        ><img' +
        '                                          width="32"' +
        '                                          height="32"' +
        '                                          src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-circle-white/linkedin@2x.png"' +
        '                                          alt="LinkedIn"' +
        '                                          title="LinkedIn"' +
        '                                          style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"' +
        '                                      /></a>' +
        '                                    </td>' +
        '                                  </tr>' +
        '                                </tbody>' +
        '                              </table>' +
        '                            </td>' +
        '                          </tr>' +
        '                        </tbody>' +
        '                      </table>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '        </td>' +
        '      </tr>' +
        '    </tbody>' +
        '  </table>' +
        '</body>',

      // "<h1 style='background-color: black;color: white;'>Kilimanjaro</h1><p style='font-size: 20px;'>親愛的用戶" +
      // userAccount +
      // ", 您好：</p><p style='font-size: 20px;'>你的驗證碼為：<code style='background-color: lightgray;'>" +
      // mailDetail +
      // "</code></p><footer style='background-color: black;color: white;'> Klimanjaro dev team @2020</footer>",
    },
    function(err) {
      if (err) {
        console.log('Unable to send email: ' + err)
      }
    }
  )
}

//mailApi: 罐頭回覆
exports.sendReply = (req, res) => {
  const mailAddr = req.body.mail

  mailTransport.sendMail(
    {
      from: 'Killimanjaro Dev <' + hostAddr + '>',
      to: '<' + mailAddr + '>',
      subject: '吉利馬札羅開發團隊',
      html:
        '<body' +
        '  class="clean-body"' +
        '  style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #fcebd4;"' +
        '>' +
        '  <table' +
        '    class="nl-container"' +
        '    style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fcebd4; width: 100%;"' +
        '    cellpadding="0"' +
        '    cellspacing="0"' +
        '    role="presentation"' +
        '    width="100%"' +
        '    bgcolor="#fcebd4"' +
        '    valign="top"' +
        '  >' +
        '    <tbody>' +
        '      <tr style="vertical-align: top;" valign="top">' +
        '        <td style="word-break: break-word; vertical-align: top;" valign="top">' +
        '          <div style="background-color:#000000;">' +
        '            <div' +
        '              class="block-grid "' +
        '              style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"' +
        '            >' +
        '              <div' +
        '                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"' +
        '              >' +
        '                <div' +
        '                  class="col num12"' +
        '                  style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;"' +
        '                >' +
        '                  <div style="width:100% !important;">' +
        '                    <div' +
        '                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:25px; padding-right: 0px; padding-left: 0px;"' +
        '                    >' +
        '                      <div' +
        '                        class="img-container center fixedwidth"' +
        '                        align="center"' +
        '                        style="padding-right: 0px;padding-left: 0px;"' +
        '                      >' +
        '                        <img' +
        '                          class="center fixedwidth"' +
        '                          align="center"' +
        '                          border="0"' +
        '                          src="https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-r3k4vihk3ld/%E8%B3%87%E7%94%A2%201.png"' +
        '                          alt="Alternate text"' +
        '                          title="Alternate text"' +
        '                          style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 390px; display: block;"' +
        '                          width="390"' +
        '                        />' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '          <div' +
        '            style="background-image:url(\'https://d1oco4z2z1fhwp.cloudfront.net/templates/default/481/bg_center.png\');background-position:top center;background-repeat:repeat;background-color:#66292d;"' +
        '          >' +
        '            <div' +
        '              class="block-grid "' +
        '              style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"' +
        '            >' +
        '              <div' +
        '                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"' +
        '              >' +
        '                <div' +
        '                  class="col num12"' +
        '                  style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;"' +
        '                >' +
        '                  <div style="width:100% !important;">' +
        '                    <div' +
        '                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:50px; padding-bottom:50px; padding-right: 0px; padding-left: 0px;"' +
        '                    >' +
        '                      <div class="mobile_hide">' +
        '                        <table' +
        '                          class="divider"' +
        '                          border="0"' +
        '                          cellpadding="0"' +
        '                          cellspacing="0"' +
        '                          width="100%"' +
        '                          style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"' +
        '                          role="presentation"' +
        '                          valign="top"' +
        '                        >' +
        '                          <tbody>' +
        '                            <tr style="vertical-align: top;" valign="top">' +
        '                              <td' +
        '                                class="divider_inner"' +
        '                                style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"' +
        '                                valign="top"' +
        '                              >' +
        '                                <table' +
        '                                  class="divider_content"' +
        '                                  border="0"' +
        '                                  cellpadding="0"' +
        '                                  cellspacing="0"' +
        '                                  width="100%"' +
        '                                  style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 35px; width: 100%;"' +
        '                                  align="center"' +
        '                                  role="presentation"' +
        '                                  height="35"' +
        '                                  valign="top"' +
        '                                >' +
        '                                  <tbody>' +
        '                                    <tr' +
        '                                      style="vertical-align: top;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <td' +
        '                                        style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"' +
        '                                        height="35"' +
        '                                        valign="top"' +
        '                                      >' +
        '                                        <span></span>' +
        '                                      </td>' +
        '                                    </tr>' +
        '                                  </tbody>' +
        '                                </table>' +
        '                              </td>' +
        '                            </tr>' +
        '                          </tbody>' +
        '                        </table>' +
        '                      </div>' +
        '                      <div class="mobile_hide">' +
        '                        <div' +
        '                          style="color:#FFFFFF;font-family:メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:0px;padding-left:10px;"' +
        '                        >' +
        '                          <div' +
        '                            style="font-family: メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, sans-serif; font-size: 12px; line-height: 1.2; color: #FFFFFF; mso-line-height-alt: 14px;"' +
        '                          >' +
        '                            <p' +
        "                              style=\"font-size: 38px; line-height: 1.2; text-align: center; word-break: break-word; font-family: メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, sans-serif; mso-line-height-alt: 46px; margin: 0;\"" +
        '                            >' +
        '                              <span style="font-size: 38px;"' +
        '                                >親愛的用戶您好:</span' +
        '                              >' +
        '                            </p>' +
        '                          </div>' +
        '                        </div>' +
        '                      </div>' +
        '                      <div' +
        '                        style="color:#FFFFFF;font-family:メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, sans-serif;line-height:1.2;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;"' +
        '                      >' +
        '                        <div' +
        '                          style="line-height: 1.2; font-size: 12px; color: #FFFFFF; font-family: メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Osaka, sans-serif; mso-line-height-alt: 14px;"' +
        '                        >' +
        '                          <p' +
        '                            style="text-align: center; line-height: 1.2; word-break: break-word; font-size: 18px; mso-line-height-alt: 22px; margin: 0;"' +
        '                          >' +
        '                            <span style="font-size: 18px;"' +
        '                              >非常感謝您的撥冗來信！<br />我們十分重視您寶貴的意見，</span' +
        '                            >' +
        '                          </p>' +
        '                          <p' +
        '                            style="text-align: center; line-height: 1.2; word-break: break-word; font-size: 18px; mso-line-height-alt: 22px; margin: 0;"' +
        '                          >' +
        '                            <span style="font-size: 18px;"' +
        '                              >我們的客服人員將在收到訊息後第一時間回覆您！</span' +
        '                            >' +
        '                          </p>' +
        '                          <p' +
        '                            style="text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"' +
        '                          >' +
        '                             ' +
        '                          </p>' +
        '                          <p' +
        '                            style="text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"' +
        '                          >' +
        '                             ' +
        '                          </p>' +
        '                          <p' +
        '                            style="text-align: center; line-height: 1.2; word-break: break-word; font-size: 16px; mso-line-height-alt: 19px; margin: 0;"' +
        '                          >' +
        '                            <span style="font-size: 16px;"' +
        '                              >Kilimanjaro 開發團隊 敬上</span' +
        '                            >' +
        '                          </p>' +
        '                        </div>' +
        '                      </div>' +
        '                      <div class="mobile_hide">' +
        '                        <table' +
        '                          class="divider"' +
        '                          border="0"' +
        '                          cellpadding="0"' +
        '                          cellspacing="0"' +
        '                          width="100%"' +
        '                          style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"' +
        '                          role="presentation"' +
        '                          valign="top"' +
        '                        >' +
        '                          <tbody>' +
        '                            <tr style="vertical-align: top;" valign="top">' +
        '                              <td' +
        '                                class="divider_inner"' +
        '                                style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"' +
        '                                valign="top"' +
        '                              >' +
        '                                <table' +
        '                                  class="divider_content"' +
        '                                  border="0"' +
        '                                  cellpadding="0"' +
        '                                  cellspacing="0"' +
        '                                  width="100%"' +
        '                                  style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 50px; width: 100%;"' +
        '                                  align="center"' +
        '                                  role="presentation"' +
        '                                  height="50"' +
        '                                  valign="top"' +
        '                                >' +
        '                                  <tbody>' +
        '                                    <tr' +
        '                                      style="vertical-align: top;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <td' +
        '                                        style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"' +
        '                                        height="50"' +
        '                                        valign="top"' +
        '                                      >' +
        '                                        <span></span>' +
        '                                      </td>' +
        '                                    </tr>' +
        '                                  </tbody>' +
        '                                </table>' +
        '                              </td>' +
        '                            </tr>' +
        '                          </tbody>' +
        '                        </table>' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '          <div style="background-color:#FFFFFF;">' +
        '            <div' +
        '              class="block-grid "' +
        '              style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"' +
        '            >' +
        '              <div' +
        '                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"' +
        '              >' +
        '                <div' +
        '                  class="col num12"' +
        '                  style="min-width: 320px; max-width: 650px; display: table-cell; vertical-align: top; width: 650px;"' +
        '                >' +
        '                  <div style="width:100% !important;">' +
        '                    <!--[if (!mso)&(!IE)]><!-->' +
        '                    <div' +
        '                      style="border-top:1px solid #DBDBDB; border-left:0px solid #CECECE; border-bottom:0px solid #CECECE; border-right:0px solid #CECECE; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"' +
        '                    >' +
        '                      <div' +
        '                        style="color:#555555;font-family:Dosis, Arial, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"' +
        '                      >' +
        '                        <div' +
        '                          style="font-family: Dosis, Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.2; color: #555555; mso-line-height-alt: 14px;"' +
        '                        >' +
        '                          <p' +
        '                            style="font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Dosis, Arial, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;"' +
        '                          >' +
        '                            <strong' +
        '                              ><a' +
        '                                style="text-decoration: none; color: #404040;"' +
        '                                href="#"' +
        '                                target="_blank"' +
        '                                rel="noopener"' +
        '                                >ABOUT US</a' +
        '                              >' +
        '                               | ' +
        '                              <a' +
        '                                style="text-decoration: none; color: #404040;"' +
        '                                href="#"' +
        '                                target="_blank"' +
        '                                rel="noopener"' +
        '                                >OUR STORES</a' +
        '                              >' +
        '                                | ' +
        '                              <a' +
        '                                style="text-decoration: none; color: #404040;"' +
        '                                href="#"' +
        '                                target="_blank"' +
        '                                rel="noopener"' +
        '                                >DOWNLOAD APP </a' +
        '                              ></strong' +
        '                            >' +
        '                          </p>' +
        '                        </div>' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '          <div style="background-color:#22bca2;">' +
        '            <div' +
        '              class="block-grid mixed-two-up"' +
        '              style="Margin: 0 auto; min-width: 320px; max-width: 650px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;"' +
        '            >' +
        '              <div' +
        '                style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"' +
        '              >' +
        '                <div' +
        '                  class="col num4"' +
        '                  style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 216px; width: 216px;"' +
        '                >' +
        '                  <div style="width:100% !important;">' +
        '                    <div' +
        '                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:20px; padding-right: 15px; padding-left: 15px;"' +
        '                    >' +
        '                      <div' +
        '                        style="color:#FFFFFF;font-family:Dosis, Arial, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:0px;padding-left:10px;"' +
        '                      >' +
        '                        <div' +
        '                          style="font-family: Dosis, Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.2; color: #FFFFFF; mso-line-height-alt: 14px;"' +
        '                        >' +
        '                          <p' +
        '                            style="font-size: 24px; line-height: 1.2; text-align: center; word-break: break-word; font-family: Dosis, Arial, Helvetica, sans-serif; mso-line-height-alt: 29px; margin: 0;"' +
        '                          >' +
        '                            <span style="font-size: 24px;"' +
        '                              ><strong' +
        '                                ><span style="font-size: 24px;"' +
        '                                  >Kilimanjaro</span' +
        '                                ></strong' +
        '                              ></span' +
        '                            >' +
        '                          </p>' +
        '                        </div>' +
        '                      </div>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '                <div' +
        '                  class="col num8"' +
        '                  style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 432px; width: 433px;"' +
        '                >' +
        '                  <div style="width:100% !important;">' +
        '                    <div' +
        '                      style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:20px; padding-right: 15px; padding-left: 0px;"' +
        '                    >' +
        '                      <table' +
        '                        class="social_icons"' +
        '                        cellpadding="0"' +
        '                        cellspacing="0"' +
        '                        width="100%"' +
        '                        role="presentation"' +
        '                        style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"' +
        '                        valign="top"' +
        '                      >' +
        '                        <tbody>' +
        '                          <tr style="vertical-align: top;" valign="top">' +
        '                            <td' +
        '                              style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"' +
        '                              valign="top"' +
        '                            >' +
        '                              <table' +
        '                                class="social_table"' +
        '                                align="right"' +
        '                                cellpadding="0"' +
        '                                cellspacing="0"' +
        '                                role="presentation"' +
        '                                style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;"' +
        '                                valign="top"' +
        '                              >' +
        '                                <tbody>' +
        '                                  <tr' +
        '                                    style="vertical-align: top; display: inline-block; text-align: right;"' +
        '                                    align="right"' +
        '                                    valign="top"' +
        '                                  >' +
        '                                    <td' +
        '                                      style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 0;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <a' +
        '                                        href="https://www.facebook.com/"' +
        '                                        target="_blank"' +
        '                                        ><img' +
        '                                          width="32"' +
        '                                          height="32"' +
        '                                          src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-circle-white/facebook@2x.png"' +
        '                                          alt="Facebook"' +
        '                                          title="Facebook"' +
        '                                          style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"' +
        '                                      /></a>' +
        '                                    </td>' +
        '                                    <td' +
        '                                      style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 0;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <a' +
        '                                        href="https://twitter.com/"' +
        '                                        target="_blank"' +
        '                                        ><img' +
        '                                          width="32"' +
        '                                          height="32"' +
        '                                          src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-circle-white/twitter@2x.png"' +
        '                                          alt="Twitter"' +
        '                                          title="Twitter"' +
        '                                          style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"' +
        '                                      /></a>' +
        '                                    </td>' +
        '                                    <td' +
        '                                      style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 0;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <a' +
        '                                        href="https://instagram.com/"' +
        '                                        target="_blank"' +
        '                                        ><img' +
        '                                          width="32"' +
        '                                          height="32"' +
        '                                          src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-circle-white/instagram@2x.png"' +
        '                                          alt="Instagram"' +
        '                                          title="Instagram"' +
        '                                          style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"' +
        '                                      /></a>' +
        '                                    </td>' +
        '                                    <td' +
        '                                      style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 0px; padding-left: 0;"' +
        '                                      valign="top"' +
        '                                    >' +
        '                                      <a' +
        '                                        href="https://www.linkedin.com/"' +
        '                                        target="_blank"' +
        '                                        ><img' +
        '                                          width="32"' +
        '                                          height="32"' +
        '                                          src="https://d2fi4ri5dhpqd1.cloudfront.net/public/resources/social-networks-icon-sets/t-circle-white/linkedin@2x.png"' +
        '                                          alt="LinkedIn"' +
        '                                          title="LinkedIn"' +
        '                                          style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;"' +
        '                                      /></a>' +
        '                                    </td>' +
        '                                  </tr>' +
        '                                </tbody>' +
        '                              </table>' +
        '                            </td>' +
        '                          </tr>' +
        '                        </tbody>' +
        '                      </table>' +
        '                    </div>' +
        '                  </div>' +
        '                </div>' +
        '              </div>' +
        '            </div>' +
        '          </div>' +
        '        </td>' +
        '      </tr>' +
        '    </tbody>' +
        '  </table>' +
        '</body>',

      // "<h1 style='background-color: black;color: white;'>Kilimanjaro</h1><p style='font-size: 20px;'>親愛的用戶, 您好：</p><p style='font-size: 20px;'>我們十分重視您寶貴的意見，我們的客服人員將在收到訊息後第一時間回覆您！<br><br>祝 購物愉快</p><footer style='background-color: black;color: white;'> Klimanjaro dev team @2020</footer>",
    },
    function(err) {
      if (err) {
        console.log('Unable to send email: ' + err)
      }
    }
  )
}
