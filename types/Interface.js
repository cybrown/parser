'use strict';

var Type = require('./Type');

var Interface = function () {
    Type.call(this);
    this.interfaces = [];
};
Interface.prototype = Object.create(Type.prototype);

Interface.prototype.implements = function (inter) {
    if (!(inter instanceof Interface)) {
        throw new Error('Interface must be an interface');
    }
    if (this.interfaces.indexOf(inter) === -1) {
        this.interfaces.push(inter);
    }
};

Interface.prototype.isA = function (inter) {
    if (!(inter instanceof Interface)) {
        return false;
    }
    if (this === inter) {
        return true;
    }
    for (var i in this.interfaces) {
        if (this.interfaces[i].isA(inter)) {
            return true;
        }
    }
    return false;
};

module.exports = Interface;
