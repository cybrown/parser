describe ('Type sytem basics', function () {

    var types = require('../types');

    var Class = types.Class;
    var Interface = types.Interface;
    var Primitive = types.Primitive;
    var Method = types.Method;
    var Type = types.Type;
    var Attribute = types.Attribute;

    describe ('Object Creation', function () {

        it ('should instantiate a class', function () {
            var c = new Class();
        });

        it ('should instantiate an interface', function () {
            var i = new Interface();
        });

        it ('should instantiate an attribute', function () {
            var a = new Attribute();
        });

        it ('should instantiate a method', function () {
            var m = new Method();
        });
    });

    describe ('Class', function () {

        it ('should be a type', function () {
            var c = new Class();
            c.should.be.an.instanceOf(Type);
        });
    });

    describe ('Interface', function () {

        it ('should be a type', function () {
            var i = new Interface();
            i.should.be.an.instanceOf(Type);
        });
    });

    describe ('Attribute', function () {

        it ('should have a type', function () {
            var c = new Class();
            var a = new Attribute(c, 1);
            a.type.should.equal(c);
            a.value.should.equal(1);
        });
    });
});
