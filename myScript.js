$(document).ready(function(){
    
    $("#start").click(function(){
        $("img").show();
    });
    
    $("img").click(function() {

        if($(this).attr("class").includes("cat") == true){
            $(this).toggleClass("right");
        } else {
            $(this).toggleClass("wrong");
        }
        
        var numOfCats = $(".catImg").length
        var catsSelected = $(".right").length
        var dogsSelected = $(".wrong").length
        
        if(catsSelected==numOfCats && dogsSelected==0) {
            $("p").empty();
            $("p").append("You found them all!");
        } else {
            $("p").empty();
        }
        
        
    });
});