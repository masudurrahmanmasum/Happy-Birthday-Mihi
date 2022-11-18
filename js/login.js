
//........login programe......

var submit = document.getElementById("sub");
submit.addEventListener("click", function(){
    var name  = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    if((name == "mihi"||name == "Mihi"||name == "MIHI") && pass == "iloveyoumasum"){
        open("../html/secret.html");
    }
    else{
        open("../html/failedlogin.html");
    }
});
