"use strict";

setInterval(function time(){
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if((min + '').length == 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  
  document.getElementById("timerLeft").innerHTML =
    "Time Left: " + hours + "h " + min + "m " + sec + "s ";

}, 1000);