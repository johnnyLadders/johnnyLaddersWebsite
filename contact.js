$(document).ready(function() {
	/*contact*/
	$('#contact').fadeIn('slow');
    $('img').click(function() {
    	/*Logo*/
        if(document.getElementById("logo").getAttribute("src") == "blackLogo.png"){
        	document.getElementById("logo").setAttribute("src","whiteLogo.png")
        }else{
        	document.getElementById("logo").setAttribute("src","blackLogo.png")
        }

    	/*Background*/
        $('.start').toggleClass('toggle');

        /*Buttons*/
        $('.button').toggleClass('buttonToggle');

        /*Contact*/
        $('.emailOne').toggleClass('emailOneToggle');
        $('.emailTwo').toggleClass('emailTwoToggle');

    });


});