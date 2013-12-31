'use strict';

var Type = require('./Type');

var Interface = function () {
    Type.call(this);
};
Interface.prototype = Object.create(Type.prototype);

module.exports = Interface;
