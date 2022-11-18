/*------------loader--------- */
// var loader = document.getElementById("loader");
// window.addEventListener("load", function(){
//     loader.style.display="none";
// });

function jump(){
    var name_val = document.getElementById("enter")
    var name = document.getElementById("enter").value;
    var goto = confirm(" Hello " + name + " Do you want to go to the next page?");
    if(goto){
        location.assign("html/flipcard.html");
    }
    if(!goto){
        location.assign("index.html");
    }
}


