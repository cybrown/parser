var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe('parser expression for floats', function () {

    describe ('Floats without exponential', function () {

        describe ('Simple Floats', function () {

            it ('should return the tree for 3.14', function () {
                var t = parser.parse('3.14');
                t.type.should.eql(expressions.ValueType.FLOAT32);
                t.repr.should.eql('3.14');
            });

            it ('should return the tree for .14', function () {
                var t = parser.parse('.14');
                t.type.should.eql(expressions.ValueType.FLOAT32);
                t.repr.should.eql('.14');
            });

            it ('should return the tree for 35.', function () {
                var t = parser.parse('35.');
                t.type.should.eql(expressions.ValueType.FLOAT32);
                t.repr.should.eql('35.');
            });
        });

        describe ('Double Floats', function () {

            it ('should return the tree for 3.14d', function () {
                var t = parser.parse('3.14d');
                t.type.should.eql(expressions.ValueType.FLOAT64);
                t.repr.should.eql('3.14');
            });

            it ('should return the tree for .14d', function () {
                var t = parser.parse('.14d');
                t.type.should.eql(expressions.ValueType.FLOAT64);
                t.repr.should.eql('.14');
            });

            it ('should return the tree for 35.d', function () {
                var t = parser.parse('35.d');
                t.type.should.eql(expressions.ValueType.FLOAT64);
                t.repr.should.eql('35.');
            });
        });
    });

    describe ('Floats with positive exponential', function () {

        describe ('Simple Floats', function () {

            it ('should return the tree for 3.14e17', function () {
                var t = parser.parse('3.14e17');
                t.type.should.eql(expressions.ValueType.FLOAT32);
                t.repr.should.eql('3.14e17');
            });

            it ('should return the tree for .14e17', function () {
                var t = parser.parse('.14e17');
                t.type.should.eql(expressions.ValueType.FLOAT32);
                t.repr.should.eql('.14e17');
            });

            it ('should return the tree for 35.e17', function () {
                var t = parser.parse('35.e17');
                t.type.should.eql(expressions.ValueType.FLOAT32);
                t.repr.should.eql('35.e17');
            });
        });

        describe ('Double Floats', function () {

            it ('should return the tree for 3.14e17d', function () {
                var t = parser.parse('3.14e17d');
                t.type.should.eql(expressions.ValueType.FLOAT64);
                t.repr.should.eql('3.14e17');
            });

            it ('should return the tree for .14e17d', function () {
                var t = parser.parse('.14e17d');
                t.type.should.eql(expressions.ValueType.FLOAT64);
                t.repr.should.eql('.14e17');
            });

            it ('should return the tree for 35.e17d', function () {
                var t = parser.parse('35.e17d');
                t.type.should.eql(expressions.ValueType.FLOAT64);
                t.repr.should.eql('35.e17');
            });
        });
    });

    describe ('Floats with negative exponential', function () {

        describe ('Simple Floats', function () {

            it ('should return the tree for 3.14E-17', function () {
                var t = parser.parse('3.14E-17');
                t.type.should.eql(expressions.ValueType.FLOAT32);
                t.repr.should.eql('3.14E-17');
            });

            it ('should return the tree for .14e-17', function () {
                var t = parser.parse('.14e-17');
                t.type.should.eql(expressions.ValueType.FLOAT32);
                t.repr.should.eql('.14e-17');
            });

            it ('should return the tree for 35.e-17', function () {
                var t = parser.parse('35.e-17');
                t.type.should.eql(expressions.ValueType.FLOAT32);
                t.repr.should.eql('35.e-17');
            });
        });

        describe ('Double Floats', function () {

            it ('should return the tree for 3.14e-17d', function () {
                var t = parser.parse('3.14e-17d');
                t.type.should.eql(expressions.ValueType.FLOAT64);
                t.repr.should.eql('3.14e-17');
            });

            it ('should return the tree for .14E-17d', function () {
                var t = parser.parse('.14E-17d');
                t.type.should.eql(expressions.ValueType.FLOAT64);
                t.repr.should.eql('.14E-17');
            });

            it ('should return the tree for 35.e-17d', function () {
                var t = parser.parse('35.e-17d');
                t.type.should.eql(expressions.ValueType.FLOAT64);
                t.repr.should.eql('35.e-17');
            });
        });
    });
});
