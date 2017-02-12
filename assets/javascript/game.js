// Our array of possible computer choices.
  var computerChoices = [101,99,172,173,189,155,91,103,204,210];

//Our array of possible choices for Crystal1
var c1Choices = [1,3,5,7,9,11];

//Our array of possible choices for Crystal2
var c2Choices = [10,20,30,16,23,33];

//Our array of possible choices for Crystal3
var c3Choices = [13,15,17,19,21];

//Our array of possible choices for Crystal4
var c4Choices = [25,2,4,6,8,14,12];

//Allow the computer to choose randomly from the predefined array of numbers
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
//Allow each crystal to choose randomly from its predefined array of numbers

var c1Guess = c1Choices[Math.floor(Math.random() * c1Choices.length)]; 
var c2Guess = c2Choices[Math.floor(Math.random() * c2Choices.length)]; 
var c3Guess = c3Choices[Math.floor(Math.random() * c3Choices.length)]; 
var c4Guess = c4Choices[Math.floor(Math.random() * c4Choices.length)]; 
var wins =0;
var losses=0;
var num = 0;

$(document).ready(function(){
  
 //render the number chosen by the computer
$(".random").text(computerGuess);
 //render players score value (Zero)
$(".score").text(num);

function reset(){
num =0;
$(".score").text(num);
 computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 $(".random").text(computerGuess);
 c1Guess = c1Choices[Math.floor(Math.random() * c1Choices.length)]; 
 c2Guess = c2Choices[Math.floor(Math.random() * c2Choices.length)]; 
 c3Guess = c3Choices[Math.floor(Math.random() * c3Choices.length)]; 
 c4Guess = c4Choices[Math.floor(Math.random() * c4Choices.length)]; 

}



function comparevalues(){
  if (num === computerGuess){
      wins++;
    $("#win span").text(wins);
    reset();
  }

  else if (num > computerGuess){
losses++;
 $("#loss span").text(losses);
  reset();
  }
 
}


function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

animationHover('#c1', 'pulse');
animationHover('#c2', 'pulse');
animationHover('#c3', 'pulse');
animationHover('#c4', 'pulse');

    $('#c1').on('click',function(){
      num = num + c1Guess;
      $(".score").text(num);
      comparevalues();
    });

    $('#c2').on('click',function(){
    num = num + c2Guess;
    $(".score").text(num);
          comparevalues();
       
     });

    $('#c3').on('click',function(){
    num = num + c3Guess;
    $(".score").text(num); 
          comparevalues();
       
    });

    $('#c4').on('click',function(){
    num = num + c4Guess;
    $(".score").text(num); 
          comparevalues();
       
    });

 



});


