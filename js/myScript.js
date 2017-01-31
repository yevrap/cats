$(document).ready(function(){
    
	$("#start").click(function(){
		$("img").css("visibility", "visible");
		startTime = new Date;
	});
	
    $("#reset").click(function(){
		$("#reset").css("visibility", "hidden")
        $("img").css("visibility", "hidden");
        $("img").removeClass("wrong right");
		$("p").empty();
        startTime = new Date;
    });
    
    $("img").click(function() {
        setBorderColor($(this));
		$("#reset").css("visibility", "visible")
		winText();
    });
	
	function setBorderColor(image){
		if(image.hasClass("catImg")){
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