function validation(){
    var name = document.getElementById("name").value;


    var valid_name_regex = /^[A-Za-z]+$/;

    var age = document.getElementById("age").value;

    var valid_age_regex = /^[0-9]+$/;

    var city = document.getElementById("city").value;

if(!(name.match(valid_name_regex)) || !(age.match(valid_age_regex)) || (city == "")){


    if(!(name.match(valid_name_regex))){
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("name").style.borderColor = "red";
     }else{
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name").style.borderColor = "green";
     }


     if(!(age.match(valid_age_regex))){
        document.getElementById("age_error").style.visibility = "visible";
        document.getElementById("age").style.borderColor = "red";
     }else{
        document.getElementById("age_error").style.visibility = "hidden";
        document.getElementById("age").style.borderColor = "green";
     }


     if(city == ""){

        document.getElementById("city_error").style.visibility = "visible";
        document.getElementById("city").style.borderColor = "red";


     }else{
        document.getElementById("city_error").style.visibility = "hidden";
        document.getElementById("city").style.borderColor = "green";
     }


     return false;

    }else{
             document.getElementById("name_error").style.visibility = "hidden";
             document.getElementById("name").style.borderColor = "green";
             document.getElementById("age_error").style.visibility = "hidden";
             document.getElementById("age").style.borderColor = "green";
             document.getElementById("city_error").style.visibility = "hidden";
             document.getElementById("city").style.borderColor = "green";
             return true;
     
}
}    