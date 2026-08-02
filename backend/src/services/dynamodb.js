const {
    DynamoDBClient
} = require("@aws-sdk/client-dynamodb");

const {
    DynamoDBDocumentClient,
    PutCommand
} = require("@aws-sdk/lib-dynamodb");

const { randomUUID } = require("crypto");

const client = new DynamoDBClient({});

const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.CONTACT_TABLE;

async function saveContactRequest(contactRequest) {

    const requestId = randomUUID();

    const item = {

        requestId,

        createdAt: new Date().toISOString(),

        status: "NEW",

        ...contactRequest

    };

    await docClient.send(

        new PutCommand({

            TableName: TABLE_NAME,

            Item: item

        })

    );

    return requestId;
}

module.exports = {

    saveContactRequest

};