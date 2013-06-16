var emailHidden = 1;

$(document).ready(function() {

	//Buttons
	$videoButton = $('#video');
	$graphicsButton = $('#graphics');
	$codeButton = $('#code');
	$portfolioButton = $('#portfolio');

	//email
	$emailOne = $('.emailOne');

	//initially hide buttons
	$videoButton.hide();
    $graphicsButton.hide();
    $codeButton.hide(); 

    //Logos
    $logoRed = $('#logoRed');
    $logoGreen = $('#logoGreen');



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

    	if(emailHidden == 0){
    		$emailOne.animate({"opacity":'0.0'}, 250);
    		$emailOne.animate({"margin-top":'-35px'}, 1);
    		$emailOne.animate({"opacity":'1.0'}, 1);
			emailHidden = 1;
    	}else{
    		$emailOne.animate({"margin-top":'16px'}, 500)
			emailHidden = 0;
		}
    	


    	if($('#contact p').html() == "Contact"){
    		$('#contact p').html('Hide');
    	}else{
    		$('#contact p').html('Contact');
    	}

    });

    $portfolioButton.click(function() {
    	if($('#portfolio p').html() == "Portfolio"){
    		$('#portfolio p').html('Hide');

    		$portfolioButton.animate({'margin-top':'+=55'});
    		$portfolioButton.animate({'opacity':'-=0.65'});
    		$logoRed.animate({'margin-left':'+=100'});
    		$logoGreen.animate({'margin-left':'-=100'});

    		$videoButton.show();
    		$graphicsButton.show();
    		$codeButton.show(); 
    	}else{
    		$('#portfolio p').html('Portfolio');

    		$portfolioButton.animate({'margin-top':'-=55'});
    		$portfolioButton.animate({'opacity':'+=0.65'});
    		$logoRed.animate({'margin-left':'-=100'});
    		$logoGreen.animate({'margin-left':'+=100'});

    		$videoButton.hide();
    		$graphicsButton.hide();
    		$codeButton.hide(); 

    	}
    });



});