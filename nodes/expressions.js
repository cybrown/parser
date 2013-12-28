var acc = 0;

var ValueType = {
    I8: acc++,
    I16: acc++,
    I32: acc++,
    I64: acc++,
    U8: acc++,
    U16: acc++,
    U32: acc++,
    U64: acc++,
    FLOAT32: acc++,
    FLOAT64: acc++,
    STRING: acc++,
    SYMBOL: acc++
};

var OP1 = {
    INV: acc++
};

var OP2 = {
    ADD: acc++,
    SUB: acc++,
    MUL: acc++,
    DIV: acc++
};

var Value = function (type, repr) {
    this.type = type;
    this.repr = repr;
};

var Op1 = function (operator, operand) {
    this.operator = operator;
    this.operand = operand;
};

var Op2 = function (operator, left, right) {
    this.operator = operator;
    this.left = left;
    this.right = right;
};

var Call = function (func, args) {
    this.func = func;
    this.args = args;
};

var Statement = function () {

};

var StatementIf = function (condition) {
    this.condition = condition;
};

var StatementWhile = function (condition) {
    this.condition = condition;
};

module.exports = {
    OP1: OP1,
    OP2: OP2,
    Op1: Op1,
    Op2: Op2,
    Call: Call,
    Value: Value,
    ValueType: ValueType,
    StatementIf: StatementIf,
    StatementWhile: StatementWhile
};
