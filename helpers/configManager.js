'use strict';
var config = require('../config/config.json');
var Configuration = function(){};

// Allow sensitive OIDC credentials to be overridden via environment variables
var rawConfig = JSON.parse(JSON.stringify(config));
if (process.env.FC_CLIENT_ID) {
    rawConfig.openIdConnectStrategyParameters.clientID = process.env.FC_CLIENT_ID;
}
if (process.env.FC_CLIENT_SECRET) {
    rawConfig.openIdConnectStrategyParameters.clientSecret = process.env.FC_CLIENT_SECRET;
}

Configuration.prototype._rawConfig = rawConfig;

Configuration.prototype.getMongoPort = function(){
    return this._rawConfig.mongo.port;
};

Configuration.prototype.getMongoHost = function(){
    return this._rawConfig.mongo.host;
};

module.exports = Configuration;