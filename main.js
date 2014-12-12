/*// With help of id
document.getElementById("0").addEventListener("click", function(){
    document.getElementById("0").innerHTML = "X";
});
document.getElementById("1").addEventListener("click", function(){
    document.getElementById("1").innerHTML = "X";
});
document.getElementById("2").addEventListener("click", function(){
    document.getElementById("2").innerHTML = "X";
});
document.getElementById("3").addEventListener("click", function(){
    document.getElementById("3").innerHTML = "X";
});
document.getElementById("4").addEventListener("click", function(){
    document.getElementById("4").innerHTML = "X";
});
document.getElementById("5").addEventListener("click", function(){
    document.getElementById("5").innerHTML = "X";
});
document.getElementById("6").addEventListener("click", function(){
    document.getElementById("6").innerHTML = "X";
});
document.getElementById("7").addEventListener("click", function(){
    document.getElementById("7").innerHTML = "X";
});
document.getElementById("8").addEventListener("click", function(){
    document.getElementById("8").innerHTML = "X";
});*/


/*//with help of clickhandler from html
var clickHandler = function(pos){
  document.getElementsByClassName("cube")[pos].innerHTML = '0';
}*/



//  Using class with combination of id without click handler
var cubeClass = document.getElementsByClassName("cube");

var clickHandler = function() {
    var attr = this.getAttribute("id");
        
    document.getElementById(attr).innerHTML = "X";
};

for(var i=0;i<cubeClass.length;i++){
    cubeClass[i].addEventListener('click', clickHandler, false);
}