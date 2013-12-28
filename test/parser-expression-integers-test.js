var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe('parser expression for integers', function () {

    describe ('Decimal Integers', function () {

        describe ('Signed Integers', function () {

            it ('should return the tree for 21345y', function () {
                var t = parser.parse('21345y', 'expression');
                t.type.should.eql(expressions.ValueType.I8);
                t.repr.should.eql('21345');
            });

            it ('should return the tree for 42s', function () {
                var t = parser.parse('42s', 'expression');
                t.type.should.eql(expressions.ValueType.I16);
                t.repr.should.eql('42');
            });

            it ('should return the tree for 42i', function () {
                var t = parser.parse('42i', 'expression');
                t.type.should.eql(expressions.ValueType.I32);
                t.repr.should.eql('42');
            });

            it ('should return the tree for 21345l', function () {
                var t = parser.parse('21345l', 'expression');
                t.type.should.eql(expressions.ValueType.I64);
                t.repr.should.eql('21345');
            });
        });

        describe ('Unsigned Integers', function () {

            it ('should return the tree for 42y', function () {
                var t = parser.parse('42uy', 'expression');
                t.type.should.eql(expressions.ValueType.U8);
                t.repr.should.eql('42');
            });

            it ('should return the tree for 21345s', function () {
                var t = parser.parse('21345us', 'expression');
                t.type.should.eql(expressions.ValueType.U16);
                t.repr.should.eql('21345');
            });

            it ('should return the tree for 21345', function () {
                var t = parser.parse('21345u', 'expression');
                t.type.should.eql(expressions.ValueType.U32);
                t.repr.should.eql('21345');
            });

            it ('should return the tree for 42l', function () {
                var t = parser.parse('42ul', 'expression');
                t.type.should.eql(expressions.ValueType.U64);
                t.repr.should.eql('42');
            });
        });
    })

    describe ('Octal Integers', function () {

        describe ('Signed Integers', function () {

            it ('should return the tree for 021345y', function () {
                var t = parser.parse('021345y', 'expression');
                t.type.should.eql(expressions.ValueType.I8);
                t.repr.should.eql('021345');
            });

            it ('should return the tree for 042s', function () {
                var t = parser.parse('042s', 'expression');
                t.type.should.eql(expressions.ValueType.I16);
                t.repr.should.eql('042');
            });

            it ('should return the tree for 042', function () {
                var t = parser.parse('042', 'expression');
                t.type.should.eql(expressions.ValueType.I32);
                t.repr.should.eql('042');
            });

            it ('should return the tree for 021345l', function () {
                var t = parser.parse('021345l', 'expression');
                t.type.should.eql(expressions.ValueType.I64);
                t.repr.should.eql('021345');
            });
        });

        describe ('Unsigned Integers', function () {

            it ('should return the tree for 042y', function () {
                var t = parser.parse('042uy', 'expression');
                t.type.should.eql(expressions.ValueType.U8);
                t.repr.should.eql('042');
            });

            it ('should return the tree for 021345s', function () {
                var t = parser.parse('021345us', 'expression');
                t.type.should.eql(expressions.ValueType.U16);
                t.repr.should.eql('021345');
            });

            it ('should return the tree for 021345', function () {
                var t = parser.parse('021345u', 'expression');
                t.type.should.eql(expressions.ValueType.U32);
                t.repr.should.eql('021345');
            });

            it ('should return the tree for 042l', function () {
                var t = parser.parse('042ul', 'expression');
                t.type.should.eql(expressions.ValueType.U64);
                t.repr.should.eql('042');
            });
        });
    })

    describe ('Binary Integers', function () {

        describe ('Signed Integers', function () {

            it ('should return the tree for 0b010101y', function () {
                var t = parser.parse('0b010101y', 'expression');
                t.type.should.eql(expressions.ValueType.I8);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101s', function () {
                var t = parser.parse('0b010101s', 'expression');
                t.type.should.eql(expressions.ValueType.I16);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101', function () {
                var t = parser.parse('0b010101', 'expression');
                t.type.should.eql(expressions.ValueType.I32);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101l', function () {
                var t = parser.parse('0b010101l', 'expression');
                t.type.should.eql(expressions.ValueType.I64);
                t.repr.should.eql('0b010101');
            });
        });

        describe ('Unsigned Integers', function () {

            it ('should return the tree for 0b010101uy', function () {
                var t = parser.parse('0b010101uy', 'expression');
                t.type.should.eql(expressions.ValueType.U8);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101us', function () {
                var t = parser.parse('0b010101us', 'expression');
                t.type.should.eql(expressions.ValueType.U16);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101u', function () {
                var t = parser.parse('0b010101u', 'expression');
                t.type.should.eql(expressions.ValueType.U32);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101ul', function () {
                var t = parser.parse('0b010101ul', 'expression');
                t.type.should.eql(expressions.ValueType.U64);
                t.repr.should.eql('0b010101');
            });
        });
    })

    describe ('Hexadecimal Integers', function () {

        describe ('Signed Integers', function () {

            it ('should return the tree for 0x123568AFy', function () {
                var t = parser.parse('0x123568AFy', 'expression');
                t.type.should.eql(expressions.ValueType.I8);
                t.repr.should.eql('0x123568AF');
            });

            it ('should return the tree for 0x123568AFs', function () {
                var t = parser.parse('0x123568AFs', 'expression');
                t.type.should.eql(expressions.ValueType.I16);
                t.repr.should.eql('0x123568AF');
            });

            it ('should return the tree for 0x123568AF', function () {
                var t = parser.parse('0x123568AF', 'expression');
                t.type.should.eql(expressions.ValueType.I32);
                t.repr.should.eql('0x123568AF');
            });

            it ('should return the tree for 0x123568AFl', function () {
                var t = parser.parse('0x123568AFl', 'expression');
                t.type.should.eql(expressions.ValueType.I64);
                t.repr.should.eql('0x123568AF');
            });
        });

        describe ('Unsigned Integers', function () {

            it ('should return the tree for 0x123568AFuy', function () {
                var t = parser.parse('0xe123568AFuy', 'expression');
                t.type.should.eql(expressions.ValueType.U8);
                t.repr.should.eql('0xe123568AF');
            });

            it ('should return the tree for 0x123568AFus', function () {
                var t = parser.parse('0xe123568AFus', 'expression');
                t.type.should.eql(expressions.ValueType.U16);
                t.repr.should.eql('0xe123568AF');
            });

            it ('should return the tree for 0x123568AFu', function () {
                var t = parser.parse('0x123d568AFu', 'expression');
                t.type.should.eql(expressions.ValueType.U32);
                t.repr.should.eql('0x123d568AF');
            });

            it ('should return the tree for 0x123568AFul', function () {
                var t = parser.parse('0x12a3568AFul', 'expression');
                t.type.should.eql(expressions.ValueType.U64);
                t.repr.should.eql('0x12a3568AF');
            });
        });
    })

    describe ('Integers with underscores', function () {

        it ('should return the value for a decimal int', function () {
            var t = parser.parse('1_2_3', 'expression');
            t.type.should.eql(expressions.ValueType.I32);
            t.repr.should.eql('1_2_3');
        });

        it ('should return the value for an unsigned binary long', function () {
            var t = parser.parse('0b01_101_010_10ul', 'expression');
            t.type.should.eql(expressions.ValueType.U64);
            t.repr.should.eql('0b01_101_010_10');
        });

        it ('should return the value for an octal short', function () {
            var t = parser.parse('023_156_45s', 'expression');
            t.type.should.eql(expressions.ValueType.I16);
            t.repr.should.eql('023_156_45');
        });

        it ('should return the value for an unsigned hexadecimal byte', function () {
            var t = parser.parse('0xA_8uy', 'expression');
            t.type.should.eql(expressions.ValueType.U8);
            t.repr.should.eql('0xA_8');
        });
    })

});
