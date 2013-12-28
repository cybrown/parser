var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe ('Parser Declaration', function () {

    it ('should return declarations', function () {
        var prg = 'class Foo'
                + '    int i';
        var t = parser.parse(prg, 'program');
    });
});
