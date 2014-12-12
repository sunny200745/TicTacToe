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
  
  
  // Conditions
  if(_innerHtml('0') == 'X' && _innerHtml('2') == 'X' && _innerHtml('1') == 'X'){
    alert("Player Playing with X Wins!!!");
  }else if(_innerHtml('3') == 'X' && _innerHtml('4') == 'X' && _innerHtml('5') == 'X'){
    alert("Player Playing with X Wins!!!");
  }else if(_innerHtml('6') == 'X' && _innerHtml('7') == 'X' && _innerHtml('8') == 'X'){
    alert("Player Playing with X Wins!!!");
  }else if(_innerHtml('0') == 'X' && _innerHtml('3') == 'X' && _innerHtml('6') == 'X'){
    alert("Player Playing with X Wins!!!");
  }else if(_innerHtml('1') == 'X' && _innerHtml('4') == 'X' && _innerHtml('7') == 'X'){
    alert("Player Playing with X Wins!!!");
  }else if(_innerHtml('2') == 'X' && _innerHtml('5') == 'X' && _innerHtml('8') == 'X'){
    alert("Player Playing with X Wins!!!");//////////////////////////
  }else if(_innerHtml('0') == 'X' && _innerHtml('4') == 'X' && _innerHtml('8') == 'X'){
    alert("Player Playing with X Wins!!!");
  }else if(_innerHtml('2') == 'X' && _innerHtml('4') == 'X' && _innerHtml('6') == 'X'){
    alert("Player Playing with X Wins!!!");
  }
};

function _innerHtml(attr){
  return document.getElementById(attr).innerHTML
};

for(var i=0;i<cubeClass.length;i++){
  cubeClass[i].addEventListener('click', clickHandler, false);
};


// Reset Functionality
var resetGame = function(){
  for(var i=0;i<cubeClass.length;i++){
    cubeClass[i].innerHTML = "&nbsp;"
  };
};


