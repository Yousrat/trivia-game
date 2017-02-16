// define game as an object

var correct = 0;
var wrong = 0;
var non = 0;

$(document).ready(function(){
         // $('#timer_custom_timeout').backward_timer({
  	// 		seconds: 30000;
			// })
   //       $('#time-left').backward_timer('start')
  

        // $("input[type='button']").click(function(){
//         	setTimeout(timeUp, 30000);
// function timeUp() {
// var Time = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
     // var Time = 30;
     // for (j=30; j> -1; j--){
     // 	$("#time-left").html("<h2>" + j + "</h2>");
     // 	console.log("done"); 
     // }
     //  }
        	$("#sub").click(function(){
        	 var radioValue= ['1','2','3'];
             radioValue[0] = $("input[name=group1]:checked").val();
             radioValue[1] = $("input[name=group2]:checked").val();
             radioValue[2] = $("input[name=group3]:checked").val();
             radioValue[3] = $("input[name=group4]:checked").val();
             radioValue[4] = $("input[name=group5]:checked").val();
           
for(var i=0 ;i< radioValue.length;i++){
            
            if(radioValue[i] === '1'){
            	correct ++;
                // alert("Your are a - " + radioValue);
            }

			else if(radioValue[i] === '2' || radioValue[i] === '3'){
			     wrong ++;
			                // alert("Your are a - " + radioValue);
			            }
			else{
				 non ++;
			}
			

}

alert("correct=" + correct);
alert("wrong=" + wrong);
alert("non=" + non);

        });
        
    });

// $(function() {$("#sub").click(function() {
    // var x = name.group1.val();
    // console.log(x);

    // alert($('input[name=group1]:checked').val());
    // alert($('input[name=group2]:checked').val());
    // alert($('input[name=group3]:checked').val());
    // alert($('input[name=group4]:checked').val());
    // alert($('input[name=group5]:checked').val());
  
 


  // });


// });




// $.mobile.changePage("done.html");
// $.mobile.changePage("done.html","slideup");
 

 //window.location.href = "done.html" + try;
 //$("#non").text(try);

  




