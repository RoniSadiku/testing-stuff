var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');


button.onclick = function (){

    text.innerHTML = input.value;
}


var input1 = document.querySelector('#input1_id');
var input2 = document.querySelector('#input2_id');
var button1 = document.querySelector('#sum');
var text1 = document.querySelector('#answer');


button1.addEventListener("click",function(){

    text1.innerHTML = parseInt(input1.value) * parseInt(input2.value);
})