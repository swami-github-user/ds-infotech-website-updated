const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const sesClient = new SESClient({
    region: process.env.AWS_REGION
});

async function sendContactNotification(contactRequest) {

    const params = {

        Source: "swami.skar@gmail.com",

        Destination: {
            ToAddresses: [
                "swami.skar@gmail.com"
            ]
        },

        Message: {

            Subject: {
                Data: "New Training Enquiry - DS Infotech Website"
            },

            Body: {

                Text: {

                    Data:
`A new enquiry has been received.

Name:
${contactRequest.name}

Email:
${contactRequest.email}

Phone:
${contactRequest.phone}

Company:
${contactRequest.company}

Service:
${contactRequest.service}

Message:
${contactRequest.message}

Submitted At:
${contactRequest.createdAt}
`
                }
            }
        }
    };

    const command = new SendEmailCommand(params);

    return await sesClient.send(command);
}

module.exports = {
    sendContactNotification
};