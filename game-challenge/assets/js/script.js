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
    var canShot=true;

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
        moveOponent2();
        moveFriend();
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

        if (game.press[KEYWORDS.D]) {
            console.log("Clicou")
            shot();
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
    
    function moveOponent2(){
        posX = parseInt($("#oponent2").css("left"));
	    $("#oponent2").css("left",posX-3);
				
		if (posX<=0) {
		    $("#oponent2").css("left",775);					
		}
    }

    function moveFriend(){
        posX = parseInt($("#friend").css("left"));
	    $("#friend").css("left",posX+1);
				
		if (posX>906) {
			$("#friend").css("left",0);					
		}
    }

    function shot(){
        if(canShot==true){
            canShot=false;
            
            var top = parseInt($("#player").css("top"));
            posX= parseInt($("#player").css("left"))
            console.log("oi -",posX)
            shotX = posX + 198;
            topShot=top+40;
            
            $(".background-game").append("<div id='shot'></div");
            $("#shot").css("top",topShot);
            $("#shot").css("left",shotX);

            var timeShot =window.setInterval(execShot, 30);
            function execShot() {
                posX = parseInt($("#shot").css("left"));
                $("#shot").css("left",posX+15); 
        
                if (posX>900) {                                
                    window.clearInterval(timeShot);
                    timeShot=null;
                    $("#shot").remove();
                    canShot=true;                            
                }
            }
        }
    }

}