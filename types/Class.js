'use strict';

var Type = require('./Type');
var Interface = require('./Interface');

var Class = function () {
    Type.call(this);
    this.parent = null;
    this.interfaces = [];
};
Class.prototype = Object.create(Type.prototype);

Class.prototype.isA = function (type) {
    if (type === this) {
        return true;
    }
    if (this.parent && this.parent.isA(type)) {
        return true;
    }
    for (var i in this.interfaces) {
        if (this.interfaces[i].isA(type)) {
            return true;
        }
    }
    return false;
};

Class.prototype.extends = function (superclass) {
    if (!(superclass instanceof Class)) {
        throw new Error('Super class must be a class');
    }
    this.parent = superclass;
};

Class.prototype.implements = function (inter) {
    if (this.interfaces.indexOf(inter) === -1) {
        this.interfaces.push(inter);
    }
};

module.exports = Class;

