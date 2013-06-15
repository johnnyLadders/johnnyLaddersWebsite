var emailHidden = 1;
$(document).ready(function() {
	/*contact*/
	$('#contact').fadeIn('slow');
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
/*    	$('#video').toggle();
    	$('#graphics').toggle();
    	$('#code').toggle(); */

    	if(emailHidden == 0){
    		$('.emailOne').animate({"opacity":'0.0'}, 250);
    		$('.emailOne').animate({"margin-top":'-35px'}, 1);
    		$('.emailOne').animate({"opacity":'1.0'}, 1);
			emailHidden = 1;
    	}else{
    		$('.emailOne').animate({"margin-top":'16px'}, 500)
			emailHidden = 0;
		}
    	


    	if($('#contact p').html() == "Contact"){
    		$('#contact p').html('Hide');
    	}else{
    		$('#contact p').html('Contact');
    	}

    });



});