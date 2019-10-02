var nodemailer = require('nodemailer');
///////////////////////////////////////////////////API refresh_token
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2('1000017914306-1c7v13dfs4fbkr4ra5adh4dif47lprol.apps.googleusercontent.com', 'GQEcDmFZP9OjIPJdnJUlJF1i', "https://developers.google.com/oauthplayground");
oauth2Client.setCredentials({
  refresh_token: "1/xe_qbbrajYRtSA2mcsVKb83UUh81nlujZrtKw3gAP-Y"
});
var accessToken = oauth2Client.getAccessToken();
console.log(accessToken);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var auth = {
  type: 'OAuth2',
  user: 'jballejo@gmail.com',
  clientId: '1000017914306-1c7v13dfs4fbkr4ra5adh4dif47lprol.apps.googleusercontent.com',
  clientSecret: 'GQEcDmFZP9OjIPJdnJUlJF1i',
  refreshToken: '1/xe_qbbrajYRtSA2mcsVKb83UUh81nlujZrtKw3gAP-Y',
  accessToken:'ya29.Il-UB3SejAB3CgQSBXU3eoRu6YRFRvAAp_b4nE3cd0nHUJwNvtDZH1FygIPTCmmXgzAjfVj0gDPmiZNfFYiQ22wAeHHaDzroPXH4F6PFFGrXNDg3D-seNddquNKrtedZNg',
//  expires: 3500,
};

let transporter = nodemailer.createTransport({
 host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth,
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
      return console.log(res);// (JSON.stringify(res));
    }
  });
};
exports.getMailOptions = () => {mailOptions = {
  from: 'sender@example.com',
  to: 'recipient@example.com',
  subject: 'Message',
  text: 'I hope this message gets through!'
}};

/*
var mailOP = {
  from: "jballejo@gmail.com",
  to: "jball.ejo@gmail.com",
  subject: "Reset Password",
  text: "Su contraseña autogenerada: ",
};
//console.log(mailOP);
transporter.sendMail(mailOP, (err, res) => {
  if(err) {
    return console.log(err);
  } else {
    return  console.log(res);
  }
});*/
