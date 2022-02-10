function start() { // Inicio da função start()

	$("#start").hide();
	
	$(".background-game").append("<div id='player' class='anima1'></div>");
	$(".background-game").append("<div id='oponent1' class='anima2'></div>");
	$(".background-game").append("<div id='oponent2' ></div>");
	$(".background-game").append("<div id='friend' class='anima3'></div>");
    $(".background-game").append("<div id='score'></div>");
    $(".background-game").append("<div id='energy'></div>");

    var currentEnergy = 3;
    var points=0;
    var saves=0;
    var lost=0;
    var velocity=5;
    var endgame=false;
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
        tcollision();
        score();
        energy();
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
            shot();
        }

    }

    function moveOponent1(){
        posX = parseInt($("#oponent1").css("left"));
        $("#oponent1").css("left",posX-velocity);
        $("#oponent1").css("top",posY);
		
		if (posX<=0) {
            posY = parseInt(Math.random() * 234);
            if(posY <= 110){
                posY = posY+110;
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

    function tcollision(){
        var colisao1 = ($("#player").collision($("#oponent1")));
        var colisao2 = ($("#player").collision($("#oponent2")));
        var colisao3 = ($("#shot").collision($("#oponent1")));
        var colisao4 = ($("#shot").collision($("#oponent2")));
        var colisao5 = ($("#player").collision($("#friend")));
        var colisao6 = ($("#oponent2").collision($("#friend")));

        if (colisao1.length>0) {
            currentEnergy--;
            oponentX = parseInt($("#oponent1").css("left"));
            oponentY = parseInt($("#oponent1").css("top"));
            explosao1(oponentX,oponentY);
        
            posicaoY = parseInt(Math.random() * 334);
            $("#oponent1").css("left",694);
            $("#oponent1").css("top",posicaoY);
        }

        if (colisao2.length>0) {	
            currentEnergy--;
            oponent2X = parseInt($("#oponent2").css("left"));
            oponent2Y = parseInt($("#oponent2").css("top"));
            explosao2(oponent2X,oponent2Y);                        
            $("#oponent2").remove();                    
            newPositionOponent2();                    
        }

        if (colisao3.length>0) {
            velocity+=5;            
            points = points+100;
            oponent1X = parseInt($("#oponent1").css("left"));
            oponent1Y = parseInt($("#oponent1").css("top"));
                
            explosao1(oponent1X,oponent1Y);
            $("#shot").css("left",950);
                
            posicaoY = parseInt(Math.random() * 41);
            $("#oponent1").css("left",694);
            $("#oponent1").css("top",posicaoY);                
        }

        if (colisao4.length>0) {
            points=points+50;
            oponent2X = parseInt($("#oponent2").css("left"));
            oponent2Y = parseInt($("#oponent2").css("top"));
            $("#oponent2").remove();
        
            explosao2(oponent2X,oponent2Y);
            $("#showt").css("left",950);
            
            newPositionOponent2();                
        }
        
        if (colisao5.length>0) {	
            saves++;	
            newPosFriend();
            $("#friend").remove();
        }

        if (colisao6.length>0) {	  
            lost++;  
            friendX = parseInt($("#friend").css("left"));
            friendY = parseInt($("#friend").css("top"));
            explosao3(friendX,friendY);
            $("#friend").remove();                    
            newPosFriend();                    
        }

    }

    function explosao1(oponentX,oponentY) {
        $(".background-game").append("<div id='boom1'></div");
        $("#boom1").css("background-image", "url(assets/img/explosao.png)");
        var div=$("#boom1");
        div.css("top", oponentY);
        div.css("left", oponentX);
        div.animate({width:200, opacity:0}, "slow");
        
        var timeBoom=window.setInterval(removeBoom, 1000);
        
        function removeBoom() {                
            div.remove();
            window.clearInterval(timeBoom);
            timeBoom=null;
                
        }            
    }

    function explosao2(oponent2X,oponent2Y) {
	
        $(".background-game").append("<div id='boom2'></div");
        $("#boom2").css("background-image", "url(assets/img/explosao.png)");
        var div2=$("#boom2");
        div2.css("top", oponent2Y);
        div2.css("left", oponent2X);
        div2.animate({width:200, opacity:0}, "slow");
        
        var timeBom2=window.setInterval(removeBoom2, 1000);
        
        function removeBoom2() {                
            div2.remove();
            window.clearInterval(timeBom2);
            timeBom2=null;                
        } 
            
    }

    function newPositionOponent2() {
	
        var timeColision4=window.setInterval(reposition4, 5000);
            
        function reposition4() {
            window.clearInterval(timeColision4);
            timeColision4=null;
                    
            if (endgame==false) {                
                $(".background-game").append("<div id=oponent2></div");
                    
            }
                
        }	
    }	

    function newPosFriend() {
	
        var friendTime=window.setInterval(reposition6, 6000);
        
        function reposition6() {
            window.clearInterval(friendTime);
            friendTime=null;
            
            if (endgame==false) {
                $(".background-game").append("<div id='friend' class='anima3'></div>");
            }
            
        }   
    }

    function explosao3(){
        $(".background-game").append("<div id='boom3' class='anima4'></div");
        $("#boom3").css("top",friendY);
        $("#boom3").css("left",friendX);
        
        var timeBoom3=window.setInterval(resetBoom3, 1000);
        
        function resetBoom3() {
            $("#boom3").remove();
            window.clearInterval(timeBoom3);
            timeBoom3=null;
                    
        }
    }

    function score() {
	
        $("#score").html("<h2> Pontos: " + points + " Salvos: " + saves + " Perdidos: " + lost + "</h2>");
        
    } 
    
    function energy() {
	
		if (currentEnergy==3) {
			
			$("#energy").css("background-image", "url(assets/img/energia3.png)");
		}
	
		if (currentEnergy==2) {
			
			$("#energy").css("background-image", "url(assets/img/energia2.png)");
		}
	
		if (currentEnergy==1) {
			
			$("#energy").css("background-image", "url(assets/img/energia1.png)");
		}
	
		if (currentEnergy==0) {
			
			$("#energy").css("background-image", "url(assets/img/energia0.png)");
            gameOver();
			
		}
	
	} 

    function gameOver() {
        endgame=true;
        
        window.clearInterval(game.timer);
        game.timer=null;
        
        $("#player").remove();
        $("#oponent1").remove();
        $("#oponent2").remove();
        $("#friend").remove();
        
        $(".background-game").append("<div id='endgame'></div>");
        
        $("#endgame").html("<h1> Game Over </h1><p>Sua pontuação foi: " + points + "</p>" + "<div id='restart' onClick=restartGame()><h3>Jogar Novamente</h3></div>");
    } 
}

function restarGame(){
    $("#endgame").remove();
	start();
}