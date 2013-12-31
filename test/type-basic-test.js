describe ('Type sytem basics', function () {

    var types = require('../types');
    var Type = types.Type;
    var Class = types.Class;
    var Interface = types.Interface;

    describe ('Object Creation', function () {

        it ('should instantiate a class', function () {
            var c = new Class();
        });

        it ('should instantiate an interface', function () {
            var i = new Interface();
        });
    });
});
