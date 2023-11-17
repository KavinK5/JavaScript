
// Single Line comment
    /*
        This 
        is 
        Multiline 
        Comment
    */



/*
    When variables declared with var,let,const and when created outside of the block
    It can be accessed because it is created as Global Scope
    
    Only variables declared with var keyword and inside the block can be accessed outside the block
    Other than this(let and const) cannot be accessed outside
    
            let,const =>   Block Scope
            var       =>   Global Scope  
*/ 


/*
    Template Literals : way to embed variables and expressions into strings
    Starts and ends with Backtick  `  $ {}
*/


/*
    DataTypes in JS

    1. Bigint
    2. Number
    3. String
    4. Object
    5. Function
    6. Undefined
    7. boolean
    8. Symbol

    Null is not a DataType
*/




{
    var varB1 = 56;
}

console.log('variables declared inside the block with var can be accessed outside => ',typeof varB1 == 'number');

{
    let letL1 = 56;
}

console.log('variables declared inside the block with let can be accessed outside => ',typeof letL1 == 'number');

let letMeKnow = ['1m2m36m',5];

console.log('variables declared inside the block with const can be accessed outside :: => ',typeof letMeKnow);


var varQ1 = 56;
let letQ1 = 56;
const conQ1 = 56; 

{
    console.log(varQ1,'variables declared outside the block with const can be accessed inside => ',typeof conQ1 == 'number');
    console.log(letQ1,'variables declared inside the block with let can be accessed outside => ',typeof letQ1 == 'number');
    console.log(conQ1,'variables declared inside the block with var can be accessed outside => ',typeof varQ1 == 'number');

    // Everything declared outside can be accessed inside because of Global Scope Declaration
}


{
    var bNt = 90;
}

console.log(typeof bNt === 'Number');


// The following code is the way to perform: Template Literal

console.log(`By Template Literal: The value of bNt is ${bNt}`)