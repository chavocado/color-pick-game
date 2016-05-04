// js
$(document).ready(function() {

  gameInit();
  choice();

  $('section').on('click', '.square' , function(){
    console.log("red werks");

   if (randomizer == $(this).data('color') ){
     $('.color').remove();
     randomColorGen();
     choice();
     $('#message').text('YOU DID IT!!!');

     //$('.color').empty();
     //$('.color').remove();

   } else {
     $('#message').text('Try Again');
   }




  });

});


//UTILITY FUNCTIONS
/*
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}  */


var colorOptions = ["red","green","yellow","blue"];
var randomizer = "";

randomColorGen();

 function randomColorGen() {
   randomizer = colorOptions[Math.floor(Math.random() * colorOptions.length)]
   return randomizer
 }

function choice() {
  $('#color').text(randomizer);
}

 function gameInit(){
 // $('#color').append('<h1>' + randomizer + '</h1>');
 $('section').append('<div id="red" class="square" data-color="red"></div>');
 $('section').append('<div id="green" class="square" data-color="green"></div>');
 $('section').append('<div id="yellow" class="square" data-color="yellow"></div>');
 $('section').append('<div id="blue" class="square" data-color="blue"></div>');
  }
