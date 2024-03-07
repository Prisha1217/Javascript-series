console.log("Prisha Aggarwal");
let accountID= "Prisha_17";
var accountPassword="1234";
const accEmail="prisha17@gmail.com";
let id;
console.table([accountID, accountPassword, accEmail,id]);

/*
string
integer
boolean
null
symbol

console.log(typeof ID);
typeof null- object
*/

//convert string to integer
let val= "33";
console.log(typeof(Number(val)));
//val is integer 

val="33abs"
console.log(typeof(Number(val)));
console.log(Number(val));
//val=NaN

val=true
console.log(typeof(Number(val)));
console.log(Number(val));
//val=1

let checkBool=1;
let boolVal= Boolean(checkBool);
console.log(boolVal);
//output:true

checkBool="";
boolVal= Boolean(checkBool);
console.log(boolVal);
//output:false


checkBool="prisha";
boolVal= Boolean(checkBool);
console.log(boolVal);
//output: true

let num=33;
let stringNum= String(num);
console.log(typeof(stringNum));