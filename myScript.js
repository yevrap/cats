$(document).ready(function(){
    
    $("#start").click(function(){
        $("img").show();
    });
    
    $("img").click(function() {

        borderColor($(this))
		winText()
        
        
        
        
        
        
    });
	
	function borderColor(image){
		if(image.attr("class").includes("cat") == true){
            image.toggleClass("right");
        } else {
            image.toggleClass("wrong");
        }
	}
	
	function winText(){
		var numOfCats = $(".catImg").length
        var catsSelected = $(".right").length
        var dogsSelected = $(".wrong").length
		
		if(catsSelected==numOfCats && dogsSelected==0) {
            $("p").empty();
            $("p").append("You found them all!");
        } else {
            $("p").empty();
        }
	}
	
});