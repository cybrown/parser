describe ('statement parser', function () {

    var LineParser = require('../lineparser');
    var lineParser = new LineParser();

    it ('should return number of leading spaces', function () {
        LineParser.numOfLeadingSpaces('    ').should.eql(false);
    });

    it ('should return number of leading spaces', function () {
        LineParser.numOfLeadingSpaces('').should.eql(false);
    });

    it ('should return number of leading spaces', function () {
        LineParser.numOfLeadingSpaces('    a').should.eql(4);
    });

    it ('should return number of leading spaces', function () {
        LineParser.numOfLeadingSpaces('class Foo\n').should.eql(0);
    });

    it ('should return lines with simple string', function () {
        var t = lineParser.parse("class Foo\n");
        t.text.should.eql('class Foo');
    });

    it ('should remove right spaces', function () {
        var t = lineParser.parse("class Foo    \n");
        t.text.should.eql('class Foo');
    });

    it ('should return lines with return line at the end of string', function () {
        var t = lineParser.parse("class Foo\n    int Age\n    string Name\n");
        t.text.should.eql('class Foo');
        t.child.text.should.eql('int Age');
        t.child.sibling.text.should.eql('string Name');
    });

    it ('should return lines without a return line a the end of string', function () {
        var t = lineParser.parse("class Foo\n    int Age\n    string Name");
        t.text.should.eql('class Foo');
        t.child.text.should.eql('int Age');
        t.child.sibling.text.should.eql('string Name');
    });

    it ('should return lines with complex string 1', function () {
        var t = lineParser.parse("class Foo\n    int Age\n        string Name\n    int Other");
        t.text.should.eql('class Foo');
        t.child.text.should.eql('int Age');
        t.child.child.text.should.eql('string Name');
        t.child.sibling.text.should.eql('int Other');
    });

    it ('should return lines with complex string 2', function () {
        var prg  = "class Foo\n"
            + "    func Age\n"
            + "        for i = 0; i == 10; i++\n"
            + "            int Other1\n"
            + "            int Other2\n"
            + "        for i = 0; i == 10; i++\n"
            + "            int Other\n"
            + "    func Age2\n"
            + "        for i = 0; i == 10; i++\n"
            + "            int Other\n"
            + "        for i = 0; i == 10; i++\n"
            + "            int Other\n";
        var t = lineParser.parse(prg);
        t.text.should.eql('class Foo');
        t.child.text.should.eql('func Age');
        t.child.child.text.should.eql('for i = 0; i == 10; i++');
        t.child.child.child.text.should.eql('int Other1');
        t.child.child.child.sibling.text.should.eql('int Other2');
        t.child.child.sibling.text.should.eql('for i = 0; i == 10; i++');
        t.child.child.sibling.child.text.should.eql('int Other');
        t.child.sibling.text.should.eql('func Age2');
        t.child.sibling.child.text.should.eql('for i = 0; i == 10; i++');
        t.child.sibling.child.child.text.should.eql('int Other');
        t.child.sibling.child.sibling.text.should.eql('for i = 0; i == 10; i++');
        t.child.sibling.child.sibling.child.text.should.eql('int Other');
    });

    it ('should return lines with complex string and empty lines', function () {
        var prg  = "class Foo\n"
            + "    func Age\n"
            + "        for i = 0; i == 10; i++\n"
            + "            int Other1\n"
            + "            int Other2\n"
            + "\n"
            + "        for i = 0; i == 10; i++\n"
            + "            int Other\n"
            + "    func Age2\n"
            + "        for i = 0; i == 10; i++\n"
            + "    \n"
            + "            int Other\n"
            + "        for i = 0; i == 10; i++\n"
            + "            int Other\n";
        var t = lineParser.parse(prg);
        t.text.should.eql('class Foo');
        t.child.text.should.eql('func Age');
        t.child.child.text.should.eql('for i = 0; i == 10; i++');
        t.child.child.child.text.should.eql('int Other1');
        t.child.child.child.sibling.text.should.eql('int Other2');
        t.child.child.sibling.text.should.eql('for i = 0; i == 10; i++');
        t.child.child.sibling.child.text.should.eql('int Other');
        t.child.sibling.text.should.eql('func Age2');
        t.child.sibling.child.text.should.eql('for i = 0; i == 10; i++');
        t.child.sibling.child.child.text.should.eql('int Other');
        t.child.sibling.child.sibling.text.should.eql('for i = 0; i == 10; i++');
        t.child.sibling.child.sibling.child.text.should.eql('int Other');
    });
});
