function start() { // Inicio da função start()

	$("#start").hide();
	
	$(".background-game").append("<div id='player' class='anima1'></div>");
	$(".background-game").append("<div id='oponent1' class='anima2'></div>");
	$(".background-game").append("<div id='oponent2' ></div>");
	$(".background-game").append("<div id='friend' class='anima3'></div>");

    var game = {}

    game.timer = setInterval(loop, 10);

    function loop(){
        moveBack();
    }

    function movefundo() {
	
        esquerda = parseInt($(".background-game").css("background-position"));
        $(".background-game").css("background-position",esquerda-1);
        
    }

}