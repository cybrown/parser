'use strict';

var Type = require('./Type');

var Attribute = function () {
    this.type = null;
    this.value = null;
};

Object.defineProperty(Attribute.prototype, 'name', {
    get: function () {
        return this._name
    },
    set: function (value) {
        if (value !== null && typeof value !== 'string') {
            throw new Error('Attribute#name must be a string.')
        }
        this._name = value;
    }
});

Object.defineProperty(Attribute.prototype, 'type', {
    get: function () {
        return this._type;
    },
    set: function (value) {
        if (value !== null && !(value instanceof Type)) {
            throw new Error('Attribute#name must be a Type.')
        }
        this._type = value;
    }
});

module.exports = Attribute;
