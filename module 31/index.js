var text

for(i = 0; i < 5; i++){

    text += "The Number is " + i
}

console.log(text)



var person = {firstName: 'Roni', lastName: 'Sadiku', age: '16'}


var text1 = '';
var x;
for(x in person){
    text1 += person[x]
}


console.log(text1)


var names = ["Roni", "Ferati", "Florenti"];
var y;

for(y of names){
    document.write(y + "<br>");
}


var j = 0

do{
    j+=1;
    console.log(j);
}while (j<5);


    var n = 0
    var m = 0

    while(n<3){
n++;
m += n;
console.log(m);

    }