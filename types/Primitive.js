'use strict';

var Type = require('./Type');

var Primitive = function () {
    Type.call(this);
};
Primitive.prototype = Object.create(Type.prototype);

module.exports = Primitive;
