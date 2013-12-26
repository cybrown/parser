{
    var expressions = require('../nodes/expressions');
    var Op1 = expressions.Op1;
    var Op2 = expressions.Op2;
    var Call = expressions.Call;
    var Value = expressions.Value;
    var ValueType = expressions.ValueType;
}
start
    = __ result:expression __ { return result; }

expression
  = res:op_prec_1 {return res;}

op_prec_1
    = head:op_prec_2 __ tail:(op_prec_1_operator __ op_prec_2)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][0], result, tail[i][2]);
        }
        return result;
    }

op_prec_2
    = head:op_prec_3 __ tail:(op_prec_2_operator __ op_prec_3)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][0], result, tail[i][2]);
        }
        return result;
    }

op_prec_3
    = head:op_prec_4 __ tail:(op_prec_3_operator __ op_prec_4)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][0], result, tail[i][2]);
        }
        return result;
    }

op_prec_4
    = head:op_prec_5 __ tail:(op_prec_4_operator __ op_prec_5)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][0], result, tail[i][2]);
        }
        return result;
    }

op_prec_5
    = head:op_prec_6 __ tail:(op_prec_5_operator __ op_prec_6)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][0], result, tail[i][2]);
        }
        return result;
    }

op_prec_6
    = head:op_prec_7 __ tail:(op_prec_6_operator __ op_prec_7)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][0], result, tail[i][2]);
        }
        return result;
    }

op_prec_7
    = head:op_prec_8 __ tail:(op_prec_7_operator __ op_prec_8)* {
            var result = head;
            for (var i = 0; i < tail.length; i++) {
                result = new Op2(tail[i][0], result, tail[i][2]);
            }
            return result;
        }

op_prec_8
    = head:op_dot __ tail:(op_prec_8_operator __ op_dot)*  {
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][0], result, tail[i][2]);
        }
        return result;
    }

op_dot
    = head:op_unary_postfix __ tail:(("." __ op_unary_postfix) / ("[" __ expression __ "]"))*{
        var result = head;
        for (var i = 0; i < tail.length; i++) {
            result = new Op2(tail[i][0] == '[' ? '[]' : tail[i][0], result, tail[i][2]);
        }
        return result;
    }

op_unary_postfix
    = op_unary_prefix

op_unary_prefix
    = operator:unary_operator_symbol+ __ operand:op_unary_prefix { return new Op1(operator.join(''), operand); }
    / "(" __ sub_expression:expression __ ")" { return sub_expression; }
    / primary

unary_operator_symbol
    = "+"
    / "-"
    / "~"
    / "!"

primary
    = literal
    / symbol

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

symbol
    = "$"? first:[a-zA-Z_] second:[a-zA-Z_0-9]*         { return new Value(ValueType.SYMBOL, first + second.join('')); }

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

__
    = " "*