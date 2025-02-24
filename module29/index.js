var programmingLanguages = ['Javascript, PHP, Java'];

console.log(programmingLanguages);

console.log(programmingLanguages[0]);

programmingLanguages.push('c++');

console.log(programmingLanguages);

programmingLanguages.pop();

console.log(programmingLanguages);

programmingLanguages.unshift('Python');

console.log(programmingLanguages);

programmingLanguages.shift();

console.log(programmingLanguages);

programmingLanguages.slice(0,2, 'React');

console.log(programmingLanguages);



console.log(Math.random());

console.log(Math.random()*5);

console.log(Math.floor(Math.random()*5));



var students = ['John' , 'Doe'];

var [s1,s2] = students;

console.log(s1);

console.log(s2);    



var places = ['London' , 'Paris' , 'New York' , 'Berlin'];

var [firstPlace , , SecondPlace] = places;

console.log(SecondPlace);





var numbers = [1,2,3,4,5,6,7,8,9,10];

var [first, second, ...othernumbers] = numbers;

console.log(first);

console.log(second);

console.log(othernumbers.toString());