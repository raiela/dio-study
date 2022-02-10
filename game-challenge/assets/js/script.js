function start() { // Inicio da função start()

	$("#start").hide();
	
	$(".background-game").append("<div id='player' class='anima1'></div>");
	$(".background-game").append("<div id='oponent1' class='anima2'></div>");
	$(".background-game").append("<div id='oponent2' ></div>");
	$(".background-game").append("<div id='friend' class='anima3'></div>");

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
    }

    function moveBack() {
	
        left = parseInt($(".background-game").css("background-position"));
        $(".background-game").css("background-position",left-1);
        
    }

    function movePlay(){

        if (game.press[KEYWORDS.W]) {
            var top = parseInt($("#player").css("top"));
            $("#player").css("top",top-10);
        
        }
        
        if (game.press[KEYWORDS.S]) {            
            var top = parseInt($("#player").css("top"));
            $("#player").css("top",top+10);	
        }

    }

}