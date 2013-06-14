$(document).ready(function() {
	/*contact*/
	$('#contact').fadeIn('slow');
	$('.emailOne').hide();
    $('img').click(function() {
    	/*Logo*/
        if(document.getElementById("logo").getAttribute("src") == "img/blackLogo.png"){
        	document.getElementById("logo").setAttribute("src","img/whiteLogo.png")
        }else{
        	document.getElementById("logo").setAttribute("src","img/blackLogo.png")
        }

    	/*Background*/
        $('.start').toggleClass('toggle');

        /*Buttons*/
        $('.button').toggleClass('buttonToggle');

        /*Contact*/
        $('.emailOne').toggleClass('emailOneToggle');

    });

    $('#contact').click(function() {
    	$('#video').toggle();
    	$('#graphics').toggle();
    	$('#code').toggle();
    	$('.emailOne').toggle();

    });



});