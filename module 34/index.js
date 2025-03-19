
/*
function printNames(){
    document.write("Dionis")
    setTimeout(function(){document.write("Diar");}, 3000);
    document.write("Almir");

}


var colors = ['red','green', 'blue', 'yellow', 'orange', 'purple'];

function changeBgColor(){
    document.querySelector('body').style.background =
    colors [Math.floor(Math.random()*colors.length)]
}


setInterval(changeBgColor, 1000);

var names = ['Roni', 'Bekim', 'Ferat', 'Albi', 'Dionis'];

function ChangeNames () {
    document.querySelector ('p').innerHTML =
    names[Math.floor(Math.random()*names.length)];
}


setInterval(ChangeNames, 1000);
*/

var cicle = document.getElementById('cicle')
/*
function showCircle(){
    cicle.style.display = "block"
}
    */

cicle.onclick = function(){
    circle.style.display = "none";
}