'use strict';

var LineParser = function () {

};

LineParser.numOfLeadingSpaces = function (str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            return i;
        }
    }
    return false;
}

LineParser.prototype.parse = function (str) {
    var start = 0;
    var cur;
    var text;
    var stack = [];
    var index;

    for (var i = start; i < str.length; i++) {
        if (str[i] === '\n' || i == (str.length - 1)) {
            if (i == (str.length - 1) && (str[i] !== '\n')) {
                i++;
            }
            text = str.substring(start, i);
            index = LineParser.numOfLeadingSpaces(text);
            if (index === false) {
                start = i + 1;
                continue;
            }
            cur = {
                index: index,
                text: str.substring(start + index, i).trim()
            };

            if (stack.length) {
                while (stack[stack.length - 1].index > cur.index) {
                    stack.pop();
                }
                if (cur.index > stack[stack.length - 1].index) {
                    stack[stack.length - 1].child = cur;
                    stack.push(cur);
                } else if (cur.index === stack[stack.length - 1].index) {
                    stack[stack.length - 1].sibling = cur;
                    stack.pop();
                    stack.push(cur);
                } else {
                    throw Error('Line index is incorrect');
                }
            } else {
                stack.push(cur);
            }
            start = i+1;
        }
    }

    return stack[0];
};

module.exports = LineParser;
