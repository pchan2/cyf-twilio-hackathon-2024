require('dotenv').config({path:"../../.env"});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const twilioMobileNumber = process.env.TWILIO_MOBILE_NUMBER;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: "Hello. Your delivery is 3 addresses away. Please be ready to receive. Thanks.",
        messagingServiceSid: messagingServiceSid,
        to: twilioMobileNumber,
    })
    .then(message => console.log(message.sid));