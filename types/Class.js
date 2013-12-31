'use strict';

var Type = require('./Type');

var Class = function (superClass) {
    Type.call(this);
};
Class.prototype = Object.create(Type.prototype);

module.exports = Class;

