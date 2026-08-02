function success(data, statusCode = 200) {

    return {
        statusCode,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*"
        },
        body: JSON.stringify({
            success: true,
            ...data
        })
    };
}

function error(statusCode, message, errors = []) {

    return {
        statusCode,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*"
        },
        body: JSON.stringify({
            success: false,
            message,
            errors
        })
    };
}

module.exports = {
    success,
    error
};