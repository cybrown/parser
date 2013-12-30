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

/**
 * EXPRESSIONS
 */

var Expression = function () {

};

var Value = function (type, repr) {
    Expression.call(this);
    this.type = type;
    this.repr = repr;
};
Value.prototype = Object.create(Expression.prototype);

var Op1 = function (operator, operand) {
    Expression.call(this);
    this.operator = operator;
    this.operand = operand;
};
Op1.prototype = Object.create(Expression.prototype);
Op1.INV = acc++;

var Op2 = function (operator, left, right) {
    Expression.call(this);
    this.operator = operator;
    this.left = left;
    this.right = right;
};
Op2.prototype = Object.create(Expression.prototype);
Op2.ADD = acc++;
Op2.SUB = acc++;
Op2.MUL = acc++;
Op2.DIV = acc++;

var Call = function (func, args) {
    Expression.call(this);
    this.func = func;
    this.args = args;
};
Value.prototype = Object.create(Expression.prototype);

/**
 * STATEMENTS
 */

var Statement = function () {

};

var StatementExpression = function (expression) {
    Statement.call(this);
    this.expression = expression;
};
StatementExpression.prototype = Object.create(Statement.prototype);

var StatementIf = function (condition, block) {
    Statement.call(this);
    this.condition = condition;
    this.block = block;
};
StatementIf.prototype = Object.create(Statement.prototype);

var StatementWhile = function (condition, block) {
    Statement.call(this);
    this.condition = condition;
    this.block = block;
    StatementExpression.prototype = Object.create(Statement.prototype);
};
StatementWhile.prototype = Object.create(Statement.prototype);

/**
 * DECLARATIONS
 */

var Declaration = function () {

};

var DeclarationClass = function (name, members) {
    Declaration.call(this);
    this.name = name;
    this.members = members;
};
DeclarationClass.prototype = Object.create(Declaration.prototype);

var DeclarationInterface = function (name, members) {
    Declaration.call(this);
    this.name = name;
    this.members = members;
};
DeclarationInterface.prototype = Object.create(Declaration.prototype);

var DeclarationAttribute = function (name, type, value) {
    Declaration.call(this);
    this.name = name;
    this.type = type;
    this.value = value;
};
DeclarationAttribute.prototype = Object.create(Declaration.prototype);

module.exports = {
    Op1: Op1,
    Op2: Op2,
    Call: Call,
    Value: Value,
    ValueType: ValueType,

    StatementExpression: StatementExpression,
    StatementIf: StatementIf,
    StatementWhile: StatementWhile,

    DeclarationClass: DeclarationClass,
    DeclarationAttribute: DeclarationAttribute,
    DeclarationInterface: DeclarationInterface
};
