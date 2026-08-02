const ContactRequest = require("../models/ContactRequest");
const { validateContactRequest } = require("../shared/validator");
const { success, error } = require("../shared/response");
const logger = require("../utils/logger");

const { saveContactRequest } = require("../services/dynamodb");
const { sendContactNotification } = require("../services/ses");

exports.handler = async (event) => {

    try {

        logger.info("Incoming Contact Request");

        const body = JSON.parse(event.body || "{}");

        logger.info("Parsed Contact Request", body);

        const contactRequest = new ContactRequest(body);

        const validation = validateContactRequest(contactRequest);

        if (!validation.success) {

            return error(400, validation.message);

        }

        logger.info("Validation Successful");

        // Save to DynamoDB
        contactRequest.createdAt = new Date().toISOString();
        const requestId = await saveContactRequest(contactRequest);

        logger.info("Saved Contact Request", {
            requestId
        });

        logger.info("Sending notification email...");

        await sendContactNotification(contactRequest);

        logger.info("Notification email sent.");

        return success({

            message: "Thank you. Your enquiry has been received.",

            requestId

        });

    }
    catch (err) {

        logger.error("Unhandled Exception", err);

        return error(

            500,

            "Internal Server Error"

        );

    }

};