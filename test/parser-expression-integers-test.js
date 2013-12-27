var parser = require('../parser');
var expressions = require('../nodes/expressions');

describe('parser expression for integers', function () {

    describe ('Decimal Integers', function () {

        describe ('Signed Integers', function () {

            it ('should return the tree for 21345y', function () {
                var t = parser.parse('21345y');
                t.type.should.eql(expressions.ValueType.I8);
                t.repr.should.eql('21345');
            });

            it ('should return the tree for 42s', function () {
                var t = parser.parse('42s');
                t.type.should.eql(expressions.ValueType.I16);
                t.repr.should.eql('42');
            });

            it ('should return the tree for 42i', function () {
                var t = parser.parse('42i');
                t.type.should.eql(expressions.ValueType.I32);
                t.repr.should.eql('42');
            });

            it ('should return the tree for 21345l', function () {
                var t = parser.parse('21345l');
                t.type.should.eql(expressions.ValueType.I64);
                t.repr.should.eql('21345');
            });
        });

        describe ('Unsigned Integers', function () {

            it ('should return the tree for 42y', function () {
                var t = parser.parse('42uy');
                t.type.should.eql(expressions.ValueType.U8);
                t.repr.should.eql('42');
            });

            it ('should return the tree for 21345s', function () {
                var t = parser.parse('21345us');
                t.type.should.eql(expressions.ValueType.U16);
                t.repr.should.eql('21345');
            });

            it ('should return the tree for 21345', function () {
                var t = parser.parse('21345u');
                t.type.should.eql(expressions.ValueType.U32);
                t.repr.should.eql('21345');
            });

            it ('should return the tree for 42l', function () {
                var t = parser.parse('42ul');
                t.type.should.eql(expressions.ValueType.U64);
                t.repr.should.eql('42');
            });
        });
    })

    describe ('Octal Integers', function () {

        describe ('Signed Integers', function () {

            it ('should return the tree for 021345y', function () {
                var t = parser.parse('021345y');
                t.type.should.eql(expressions.ValueType.I8);
                t.repr.should.eql('021345');
            });

            it ('should return the tree for 042s', function () {
                var t = parser.parse('042s');
                t.type.should.eql(expressions.ValueType.I16);
                t.repr.should.eql('042');
            });

            it ('should return the tree for 042', function () {
                var t = parser.parse('042');
                t.type.should.eql(expressions.ValueType.I32);
                t.repr.should.eql('042');
            });

            it ('should return the tree for 021345l', function () {
                var t = parser.parse('021345l');
                t.type.should.eql(expressions.ValueType.I64);
                t.repr.should.eql('021345');
            });
        });

        describe ('Unsigned Integers', function () {

            it ('should return the tree for 042y', function () {
                var t = parser.parse('042uy');
                t.type.should.eql(expressions.ValueType.U8);
                t.repr.should.eql('042');
            });

            it ('should return the tree for 021345s', function () {
                var t = parser.parse('021345us');
                t.type.should.eql(expressions.ValueType.U16);
                t.repr.should.eql('021345');
            });

            it ('should return the tree for 021345', function () {
                var t = parser.parse('021345u');
                t.type.should.eql(expressions.ValueType.U32);
                t.repr.should.eql('021345');
            });

            it ('should return the tree for 042l', function () {
                var t = parser.parse('042ul');
                t.type.should.eql(expressions.ValueType.U64);
                t.repr.should.eql('042');
            });
        });
    })

    describe ('Binary Integers', function () {

        describe ('Signed Integers', function () {

            it ('should return the tree for 0b010101y', function () {
                var t = parser.parse('0b010101y');
                t.type.should.eql(expressions.ValueType.I8);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101s', function () {
                var t = parser.parse('0b010101s');
                t.type.should.eql(expressions.ValueType.I16);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101', function () {
                var t = parser.parse('0b010101');
                t.type.should.eql(expressions.ValueType.I32);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101l', function () {
                var t = parser.parse('0b010101l');
                t.type.should.eql(expressions.ValueType.I64);
                t.repr.should.eql('0b010101');
            });
        });

        describe ('Unsigned Integers', function () {

            it ('should return the tree for 0b010101uy', function () {
                var t = parser.parse('0b010101uy');
                t.type.should.eql(expressions.ValueType.U8);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101us', function () {
                var t = parser.parse('0b010101us');
                t.type.should.eql(expressions.ValueType.U16);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101u', function () {
                var t = parser.parse('0b010101u');
                t.type.should.eql(expressions.ValueType.U32);
                t.repr.should.eql('0b010101');
            });

            it ('should return the tree for 0b010101ul', function () {
                var t = parser.parse('0b010101ul');
                t.type.should.eql(expressions.ValueType.U64);
                t.repr.should.eql('0b010101');
            });
        });
    })

    describe ('Hexadecimal Integers', function () {

        describe ('Signed Integers', function () {

            it ('should return the tree for 0x123568AFy', function () {
                var t = parser.parse('0x123568AFy');
                t.type.should.eql(expressions.ValueType.I8);
                t.repr.should.eql('0x123568AF');
            });

            it ('should return the tree for 0x123568AFs', function () {
                var t = parser.parse('0x123568AFs');
                t.type.should.eql(expressions.ValueType.I16);
                t.repr.should.eql('0x123568AF');
            });

            it ('should return the tree for 0x123568AF', function () {
                var t = parser.parse('0x123568AF');
                t.type.should.eql(expressions.ValueType.I32);
                t.repr.should.eql('0x123568AF');
            });

            it ('should return the tree for 0x123568AFl', function () {
                var t = parser.parse('0x123568AFl');
                t.type.should.eql(expressions.ValueType.I64);
                t.repr.should.eql('0x123568AF');
            });
        });

        describe ('Unsigned Integers', function () {

            it ('should return the tree for 0x123568AFuy', function () {
                var t = parser.parse('0xe123568AFuy');
                t.type.should.eql(expressions.ValueType.U8);
                t.repr.should.eql('0xe123568AF');
            });

            it ('should return the tree for 0x123568AFus', function () {
                var t = parser.parse('0xe123568AFus');
                t.type.should.eql(expressions.ValueType.U16);
                t.repr.should.eql('0xe123568AF');
            });

            it ('should return the tree for 0x123568AFu', function () {
                var t = parser.parse('0x123d568AFu');
                t.type.should.eql(expressions.ValueType.U32);
                t.repr.should.eql('0x123d568AF');
            });

            it ('should return the tree for 0x123568AFul', function () {
                var t = parser.parse('0x12a3568AFul');
                t.type.should.eql(expressions.ValueType.U64);
                t.repr.should.eql('0x12a3568AF');
            });
        });
    })

    describe ('Integers with underscores', function () {

        it ('should return the value for a decimal int', function () {
            var t = parser.parse('1_2_3');
            t.type.should.eql(expressions.ValueType.I32);
            t.repr.should.eql('1_2_3');
        });

        it ('should return the value for an unsigned binary long', function () {
            var t = parser.parse('0b01_101_010_10ul');
            t.type.should.eql(expressions.ValueType.U64);
            t.repr.should.eql('0b01_101_010_10');
        });

        it ('should return the value for an octal short', function () {
            var t = parser.parse('023_156_45s');
            t.type.should.eql(expressions.ValueType.I16);
            t.repr.should.eql('023_156_45');
        });

        it ('should return the value for an unsigned hexadecimal byte', function () {
            var t = parser.parse('0xA_8uy');
            t.type.should.eql(expressions.ValueType.U8);
            t.repr.should.eql('0xA_8');
        });
    })

});
