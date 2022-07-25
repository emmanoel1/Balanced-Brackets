

function IsBalancedBrackets(param) {
    const YES = 'YES';
    const NO = 'NO';

    const verify = [];

    const brackets = {
        '{':'}',
        '(':')',
        '[':']'
    }

    for ( let string of param ) {
        console.log(verify);

        if ( brackets[string] ) {

           verify.push(brackets[string]) 
        
        } else if ( verify.length > 0 && verify[verify.length -1] === string ) {

            verify.pop()

        } else {

            return NO;

        }

    }

    if ( verify.length === 0 ) {

        return YES

    }

    
}

const test0 = [
    '{[()]}',
    '{[(])}',
    '{{[[(())]]}}'
]

const answers0 = [
    'YES',
    'NO',
    'YES'
]

const test1 = [
    '{{([])}}',
    '{{)[](}}'
]

const answers1 = [
    'YES',
    'NO'
]

const test2 = [
    '{(([])[])[]}',
    '{(([])[])[]]}',
    '{(([])[])[]}[]'
]

const answers2 = [
    'YES',
    'NO',
    'YES'
]


console.log( IsBalancedBrackets( test2[2] ) );

