var a = 4;
var b = 5; 

templateString(a,b);

function templateString(a, b) {
    console.log(`
    ${a} + ${b} = ${a + b}
    ${a} - ${b} = ${a - b}
    ${a} x ${b} = ${a * b}
    ${a} / ${b} = ${a / b}
    `);
    
}
