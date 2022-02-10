function start() { // Inicio da função start()

	$("#start").hide();
	
	$(".background-game").append("<div id='player' class='anima1'></div>");
	$(".background-game").append("<div id='oponent1' class='anima2'></div>");
	$(".background-game").append("<div id='oponent2' ></div>");
	$(".background-game").append("<div id='friend' class='anima3'></div>");

    var velocity=5;
    var posY = parseInt(Math.random() * 334);
    var game = {}
    var KEYWORDS = {
        W: 87,
        S: 83,
        D: 68
    }

    game.press = [];
    
    $(document).keydown(function(e){
        game.press[e.which] = true;
    });
    
    
    $(document).keyup(function(e){
        game.press[e.which] = false;
    });
    

    game.timer = setInterval(loop, 10);

    function loop(){
        moveBack();
        movePlay();
        moveOponent1();
    }

    function moveBack() {
	
        left = parseInt($(".background-game").css("background-position"));
        $(".background-game").css("background-position",left-1);
        
    }

    function movePlay(){

        if (game.press[KEYWORDS.W]) {
            var top = parseInt($("#player").css("top"));
            $("#player").css("top",top-10);

            if (top<=110) {
		        $("#player").css("top",top+10);
            }
        
        }
        
        if (game.press[KEYWORDS.S]) {            
            var top = parseInt($("#player").css("top"));
            $("#player").css("top",top+10);	

            if (top>=530) {
		        $("#player").css("top",top-10);
            }
        }

    }

    function moveOponent1(){
        posX = parseInt($("#oponent1").css("left"));
        $("#oponent1").css("left",posX-velocity);
        $("#oponent1").css("top",posY);
		
		if (posX<=0) {
            posY = parseInt(Math.random() * 334);
            if(posY <= 110){
                posY = posY+230;
            }
            $("#oponent1").css("left",694);
            $("#oponent1").css("top",posY);			
		}

        
    }

}