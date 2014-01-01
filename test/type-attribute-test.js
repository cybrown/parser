describe ('Attributes for classes', function () {

    var types = require('../types');
    var Attribute = types.Attribute;
    var Class = types.Class;

    var a;

    it ('should create an attribute', function () {
        a = new Attribute();
    });
    
    it ('should have a string as name attribute', function () {
        a.name = 'a';
        (function () {
            a.name = 1;
        }).should.throw();
    });
    
    it ('should have a class or valid type as type attribute', function () {
        var c = new Class();
        a.type = c;
        (function () {
            a.type = 'a';
        }).should.throw();
    });
});
