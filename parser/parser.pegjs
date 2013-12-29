{
    var nodes = require('../nodes/expressions');

    // Expression nodes
    var Op1 = nodes.Op1;
    var Op2 = nodes.Op2;
    var Call = nodes.Call;
    var Value = nodes.Value;
    var ValueType = nodes.ValueType;

    // Statement nodes
    var StatementExpression = nodes.StatementExpression;
    var StatementIf = nodes.StatementIf;
    var StatementWhile = nodes.StatementWhile;

    // Declarations
    var DeclarationClass = nodes.DeclarationClass;
    var DeclarationAttribute = nodes.DeclarationAttribute;

    var stack = [];
    var program = [];
    var current_block = program;
}
start
    = program

program
    = declarations:declaration+ { return declarations; }

declaration
    = declaration_class
    / declaration_protocol

declaration_class
    = _ "class" _ name:symbol _ "{" members:declaration_member* _ "}" { return new DeclarationClass(name, members); }

declaration_protocol
    = declaration_class

declaration_member
    = declaration_attribute
    / declaration_method

declaration_attribute
    = _ name:symbol _ ":" _ type:type _ ";" { return new DeclarationAttribute(name, type); }

declaration_method
    = _ name:symbol _ "(" _ ")" _ ":" type:type "{"  "}"

type
    = symbol

statement
    = statement_if
    / statement_while
    / statement_block
    / statement_expression

statement_expression
    = expression:expression _ ";" { return new StatementExpression(expression); }

statement_block
    = "{" _ statements:(statement _ )* _ "}" { return statements.map(function(elem) {return elem[0];}); }

statement_if
    = "if" _ condition:expression _ block:statement_block { var res = new StatementIf(condition, block); return res; }

statement_while
    = "while" _ condition:expression _ block:statement_block { var res = new StatementWhile(condition, block); return res; }

statement_var
    = "var" _ symbol _ ":" symbol _ "=" _ expression

IDENT
    = spaces:" "* { return spaces.length; }

expression
  = res:op_prec_1 {return res;}

op_prec_1
    = head:op_prec_2 tail:( _ op_prec_1_operator _ op_prec_2)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][1], result, tail[i][3]);
        }
        return result;
    }

op_prec_2
    = head:op_prec_3 tail:( _ op_prec_2_operator _ op_prec_3)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][1], result, tail[i][3]);
        }
        return result;
    }

op_prec_3
    = head:op_prec_4 tail:( _ op_prec_3_operator _ op_prec_4)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][1], result, tail[i][3]);
        }
        return result;
    }

op_prec_4
    = head:op_prec_5 tail:( _ op_prec_4_operator _ op_prec_5)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][1], result, tail[i][3]);
        }
        return result;
    }

op_prec_5
    = head:op_prec_6 tail:( _ op_prec_5_operator _ op_prec_6)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][1], result, tail[i][3]);
        }
        return result;
    }

op_prec_6
    = head:op_prec_7 tail:( _ op_prec_6_operator _ op_prec_7)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][1], result, tail[i][3]);
        }
        return result;
    }

op_prec_7
    = head:op_prec_8 tail:( _ op_prec_7_operator _ op_prec_8)* {
            var result = head;
            for (var i = 0; i < tail.length; i++) {
                result = new Op2(tail[i][1], result, tail[i][3]);
            }
            return result;
        }

op_prec_8
    = head:op_dot tail:( _ op_prec_8_operator _ op_dot)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][1], result, tail[i][3]);
        }
        return result;
    }

op_dot
    = head:op_unary_postfix tail:(( _ "." _ op_unary_postfix) / ( _ "[" _ expression _ "]"))*{
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][1] == '[' ? '[]' : tail[i][1], result, tail[i][3]);
        }
        return result;
    }

op_unary_postfix
    = op_unary_prefix

op_unary_prefix
    = operator:unary_operator_symbol+ _ operand:op_unary_prefix { return new Op1(operator.join(''), operand); }
    / "(" _ sub_expression:expression _ ")" { return sub_expression; }
    / primary

unary_operator_symbol
    = "+"
    / "-"
    / "~"
    / "!"

primary
    = literal
    / value_symbol

/* =====================

    LITERAL VALUES

   ===================== */

literal
    = float
    / integer

integer
    = value:number_literal signedState:"u"? length:[ysil]? {
        var valuetype;
        switch (length) {
            case 'y':
                valuetype = signedState == 'u' ? ValueType.U8 : ValueType.I8;
                break;
            case 's':
                valuetype = signedState == 'u' ? ValueType.U16 : ValueType.I16;
                break;
            case 'l':
                valuetype = signedState == 'u' ? ValueType.U64 : ValueType.I64;
                break;
            default:
                valuetype = signedState == 'u' ? ValueType.U32 : ValueType.I32;
                break;
        }
        return new Value(valuetype, value);
    }

number_literal
    = first:[1-9] second:"_"? third:([0-9] "_"?)*   { return first + second + third.map(function(a){return a.join('')}).join(''); }
    / '0b' value:([0-1] "_"?)*                      { return '0b' + value.map(function(a){return a.join('')}).join(''); }
    / '0' [xX] value:([0-9a-fA-F] "_"?)*            { return '0x' + value.map(function(a){return a.join('')}).join(''); }
    / '0' value:([0-7] "_"?)*                       { return '0' + value.map(function(a){return a.join('')}).join(''); }

float
    = int:[0-9]+ "." dec:[0-9]* exponential:([eE] "-"? [0-9]+)? double:"d"? { return new Value(double == 'd' ? ValueType.FLOAT64 : ValueType.FLOAT32, (int.join ? int.join('') : '') + '.' + dec.join('') + (Array.isArray(exponential) ? exponential[0] + exponential[1] + exponential[2].join(''): '')); }
    / "." dec:[0-9]+ exponential:([eE] "-"? [0-9]+)? double:"d"? { return new Value(double == 'd' ? ValueType.FLOAT64 : ValueType.FLOAT32, '.' + dec.join('') + (Array.isArray(exponential) ? exponential[0] + exponential[1] + exponential[2].join(''): '')); }

value_symbol
    = symbol:symbol { return new Value(ValueType.SYMBOL, symbol); }

symbol
    = "$"? first:[a-zA-Z_] second:[a-zA-Z_0-9]*         { return first + second.join(''); }

op_prec_1_operator
    = op:("|" operator_char*) { return op[0] + op[1].join(''); }

op_prec_2_operator
    = op:("^" operator_char*) { return op[0] + op[1].join(''); }

op_prec_3_operator
    = op:("&" operator_char*) { return op[0] + op[1].join(''); }

op_prec_4_operator
    = op:([<>]operator_char*) { return op[0] + op[1].join(''); }

op_prec_5_operator
    = op:([!=]operator_char*) { return op[0] + op[1].join(''); }

op_prec_6_operator
    = op:(":"operator_char*) { return op[0] + op[1].join(''); }

op_prec_7_operator
    = op:([+-]operator_char*) { return op[0] + op[1].join(''); }

op_prec_8_operator
    = op:([/*]operator_char*) { return op[0] + op[1].join(''); }

operator_char
    = '*' / '/' / '%' / '+' / '-' / ':' / '=' / '!' / '<' / '>' / '&' / '^' / '|'

_
    = (" " / EOL)*

EOL
    = '\n'
    / '\r\n'
    / '\r'