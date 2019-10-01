var nodemailer = require('nodemailer');

var auth= {
  type: 'OAuth2',
  user: 'jballejo@gmail.com',
  clientId: '175240423223-0pq5i32u2kn158es3vvv0fkca82rc1k9.apps.googleusercontent.com',
  clientSecret: 'kWdtaSfVMlvkix24nq0YsUnA',
  refreshToken: '1/iOM2ZRnOvnu3QsCS7mUP3zf19YTpmy4_SYMw9riAmfU',
  accessToken: 'ya29.Il-UB1hYe7gremikvnu4HT_af7kVA8dlaewnyDOHjXLvPBHTHXfQrFc0P6Uh-qk--CsA2cPJyg-x_rIkbHRiXm1q935Uejb0zrrhLlwAv7bjyrFX8aVT5YiC9agh9vd3yA',
  expires: 3500,
};
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth
});
transporter.on('token', token => {
  console.log('A new access token was generated');
  console.log('User: %s', token.user);
  console.log('Access Token: %s', token.accessToken);
  console.log('Expires: %s', new Date(token.expires));
});
exports.enviarMail = (mailOptions) => {
  transporter.sendMail(mailOptions, (err, res) => {
    if(err) {
      return console.log(err);
    } else {
      return (JSON.stringify(res));
    }
  });
};
exports.getMailOptions = () => mailOptions = {
  'from': 'sender@example.com',
  'to': 'recipient@example.com',
  'subject': 'Message',
  'text': 'I hope this message gets through!'
};
transporter.set('oauth2_provision_cb', (user, renew, callback) => {
    let accessToken = userTokens[user];
    if(!accessToken){
        return callback(new Error('Unknown user'));
    }else{
        return callback(null, accessToken);
    }
});
var mailOP={};
//mailOP.from = "jballejo@gmail.com";
mailOP.to = "jballejo@gmail.com";
mailOP.subject = "Reset Password";
mailOP.text = "Su contraseña autogenerada: ";
console.log(mailOP);
transporter.sendMail(mailOP, (err, res) => {
  if(err) {
    return console.log(err);
  } else {
    return (JSON.stringify(res));
  }
});
