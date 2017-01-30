$(document).ready(function(){
    
	$("#start").click(function(){
		$("img").css("visibility", "visible");
		startTime = new Date;
		/*
		var start = new Date;
		setInterval(function() {
			$('.timer').text(Math.round((new Date - start) / 1000, 0) + " Seconds");
		}, 1000);
		*/
		
	});
	
    $("#reset").click(function(){
		$("#reset").css("visibility", "hidden")
        $("img").removeClass("wrong right");
		$("p").empty();
    });
    
    $("img").click(function() {
        setBorderColor($(this));
		$("#reset").css("visibility", "visible")
		winText();
    });
	
	function setBorderColor(image){
		if(image.attr("class").includes("cat") == true){
            image.toggleClass("right");
        } else {
            image.toggleClass("wrong");
        }
	}
	
	function winText(){
		var numOfCats = $(".catImg").length;
        var catsSelected = $(".right").length;
        var otherSelected = $(".wrong").length;
		
		if(catsSelected==numOfCats && otherSelected==0) {
			endTime = new Date;
			var gameTime = Math.round((endTime - startTime) / 1000, 0);
            $("p").text("You found them all in " + gameTime + " seconds");
        } else {
            $("p").empty();
        }
	}
});