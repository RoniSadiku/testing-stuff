function showMessage() {
alert("THIS MESSAGE IS SHOWN BY A FUNCTION")

};

showMessage();


function sum(number1, number2){

    return number1 + number2
}

console.log (sum(25,5));


function toCelcius(f){

    return (5/9)*(f-32);
}

var result = toCelcius(54);

console.log("54  farhenheit is equal to " + result + "celcius");

var arrowFunction = () => alert("hello world");

arrowFunction();

var arrowFunction_2 = name => alert(`Hello ${name}`);

arrowFunction_2 ("roni");



function dsFunction() {
var localVar = "Digital School"
alert(localVar);

}

dsFunction();




function toSeconds(m){
    return (m*60);
}

var result = toSeconds(14)

console.log(result)