$(document).ready(function() {
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
    });
});