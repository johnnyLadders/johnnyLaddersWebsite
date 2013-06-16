var emailHidden = 1;
$(document).ready(function() {
	$('#video').hide();
    $('#graphics').hide();
    $('#code').hide(); 


	/*contact*/
    $('#logoWhite').click(function() {
    	/*Logo*/
        if(document.getElementById("logoWhite").getAttribute("src") == "img/logoWhite.png"){
        	document.getElementById("logoWhite").setAttribute("src","img/logoBlack.png");
        }else{
        	document.getElementById("logoWhite").setAttribute("src","img/logoWhite.png");
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

    $('#portfolio').click(function() {
    	if($('#portfolio p').html() == "Portfolio"){
    		$('#portfolio p').html('Hide');

    		$('#portfolio').animate({'margin-top':'+=55'}, 300);
    		$('#portfolio').animate({'opacity':'-=0.65'}, 300);
    		$('#logoRed').animate({'margin-left':'+=100'}, 300);
    		$('#logoGreen').animate({'margin-left':'-=100'}, 300);

    		$('#video').show();
    		$('#graphics').show();
    		$('#code').show(); 
    	}else{
    		$('#portfolio p').html('Portfolio');

    		$('#portfolio').animate({'margin-top':'-=55'}, 300);
    		$('#portfolio').animate({'opacity':'+=0.65'}, 300);
    		$('#logoRed').animate({'margin-left':'-=100'}, 300);
    		$('#logoGreen').animate({'margin-left':'+=100'}, 300);

    		$('#video').hide();
    		$('#graphics').hide();
    		$('#code').hide(); 

    	}
    });



});