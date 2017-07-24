module.exports = function(credentials) {

    var basicAuth = "Basic " + new Buffer(credentials.token + ":" + credentials.key).toString("base64");

    return {
        customer: require('./lib/customer')(basicAuth)
    };
};