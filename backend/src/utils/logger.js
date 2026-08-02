function info(message, data = null) {

    console.log(
        JSON.stringify({
            level: "INFO",
            message,
            data,
            timestamp: new Date().toISOString()
        })
    );

}

function error(message, err = null) {

    console.error(
        JSON.stringify({
            level: "ERROR",
            message,
            error: err,
            timestamp: new Date().toISOString()
        })
    );

}

module.exports = {
    info,
    error
};