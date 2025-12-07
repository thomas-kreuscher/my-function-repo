module.exports = async function (context, req) {
    context.log('Function triggered');

    try {
        const name = req.query.name || (req.body && req.body.name);
        const responseMessage = name
            ? `Hello, ${name}. This HTTP triggered function executed successfully.`
            : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body.";

        context.res = {
            status: 200,
            body: responseMessage
        };
    } catch (err) {
        context.log.error("Function error:", err);
        context.res = {
            status: 500,
            body: "Internal Server Error"
        };
    }
};


