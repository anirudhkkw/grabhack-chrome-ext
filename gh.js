
    function getCurrentSlide() {
        var activeSlides = document.getElementsByClassName("show");
        return activeSlides[0];
    }
    function hasPreviousSlides() {
        var currentSlide = getCurrentSlide();
        var previousElement = currentSlide.previousElementSibling;
        var returnVal = (previousElement && previousElement.classList.contains("slide"));
        return returnVal;
    }
    function hasNextSlides() {
        var currentSlide = getCurrentSlide();
        var nextElement = currentSlide.nextElementSibling;
        var returnVal = (nextElement && nextElement.classList.contains("slide"));
        return returnVal;
    }
    function setArrows() {
        var previousArrow = document.getElementsByClassName("left-arrow")[0];
        var nextArrow = document.getElementsByClassName("right-arrow")[0];

        if (hasNextSlides()) {
            nextArrow.classList.remove("inactive");
            nextArrow.classList.add("active");
        }
        else {
            nextArrow.classList.add("inactive");
            nextArrow.classList.remove("active");
        }
        if (hasPreviousSlides()) {
            previousArrow.classList.remove("inactive");
            previousArrow.classList.add("active");
        }
        else {
            previousArrow.classList.add("inactive");
            previousArrow.classList.remove("active");
        }
    }
    function previousSlide() {
        var currentSlide = getCurrentSlide();
        var previousElement = currentSlide.previousElementSibling;

        if (hasPreviousSlides()) {
            currentSlide.classList.remove("show");
            currentSlide.classList.add("hide");
            previousElement.classList.remove("hide");
            previousElement.classList.add("show");
        }
        setArrows();
    }
    function nextSlide() {
        var currentSlide = getCurrentSlide();
        var nextElement = currentSlide.nextElementSibling;
        if (hasNextSlides()) {
            currentSlide.classList.remove("show");
            currentSlide.classList.add("hide");
            nextElement.classList.remove("hide");
            nextElement.classList.add("show");
//            nextElement.classList.add("ease-in-out");
        }
        setArrows();
    }


$(".house-block .amen-list .a-item").not('.active').each(function(){
	var query = $(this).children("span").text();
	var url = "http://0.0.0.0:3000/v1/ads/search?query=" + query;
	$(this).children("span").after("<a class='products' data-url="+url+" style='padding-left : 10px;cursor : pointer; float : right;padding-top:15px;padding-right : 10px'><i class='fa fa-shopping-cart'></i></a>");

});

$('.products').on('click', function(e){

	$.ajax({
		url : $(this).data('url'),
		success : function(data){	
			var divs = '<a href="#" id="previousSlide" style="float: left; display:inline;text-decoration : none" class="left-arrow inactive"><</a>';
			divs += '<div style="display:inline-block; width : 95%">';
			for(var i = 0; i < 10; i++){
				if((i) % 2 == 0){
					var cssClass = "hide slide";
					if(i == 0){
						cssClass = "show slide";
					}
					divs += '<div id=p' + i + 'p'+(i+1)+' class="' + cssClass + '">'

				}
				divs += '<div class="modal-para modal-para-first" style="display : inline-block; width : 50%;" id="p' + i + '"><a href="'+data.data.products[i].url+'" target="_blank"><img src="' + data.data.products[i].image + '" style="margin-left : auto;margin-right:auto; display : block;"/></a><p style="text-align:center;padding-top:10px; color : #191c96; font-family: helvetica; font-size:14px;">'+data.data.products[i].title+'</p><p style="text-align:center; color : #181818; font-family: helvetica; font-size:12px;">'+data.data.products[i].price+'</p><p style="text-align:left; color : #52b608; font-family: helvetica; font-size:18px;display : inline;"><strong>5%</strong></p><p style="display : inline"> Off</p><p style="text-align:left; color : #4764e4; font-family: helvetica; font-size:14px;">www.flipkart.com</p><div id="add_order" class="contact-btn" style="margin-left: 60px; height: 40px; width: 130px; border-radius: 48px; line-height: 41px;" data-url="'+data.data.products[i].url+'" data-image="'+data.data.products[i].image+'" data-title="'+ data.data.products[i].title +'" data-price="'+data.data.products[i].price+'"><i class="fa fa-plus" style="margin-right : 0px"></i> Add to Cart</div></div>';
				if((i+1) % 2 == 0){
					divs += '</div>'
				}
			}
			divs += '</div>';
			divs += '    <a href="#" id="nextSlide" style="float: right; display:inline;text-decoration : none" class="right-arrow inactive">></a>';
			$("body").append('<div id="adsPopUp" class="modal-window contact-modal modal-show" style="background-color : #f1f1f3;box-shadow: 1px 1px 10px #888888;"><div class="modal-close login-close" id = "modal-close">×</div><div class="modal-wrap" style="border-radius : 0; background-color : #f1f1f3 !important; height : auto;">'+ divs +'</div></div>');		
document.getElementById("previousSlide").addEventListener("click", function(){
	    previousSlide();
});
document.getElementById("nextSlide").addEventListener("click", function(){
	    nextSlide();
});
document.getElementById("modal-close").addEventListener("click", function(){
	$("#adsPopUp").removeClass('modal-show');
		$("#adsPopUp").remove();
});
document.getElementById("add_order").addEventListener("click", function(e){
	$.ajax({
	url : "http://0.0.0.0:3000/v1/ads/add_to_cart?url=" + $(this).data("url") + "&image=" + $(this).data("image") + "&price=" + $(this).data("price") + "&title=" + $(this).data("title"),

	success : function (){
	$("#add_order").html('Added');
	setTimeout(function(){ $("#adsPopUp").removeClass('modal-show');
		$("#adsPopUp").remove(); }, 3000);
},
error : function(){
			alert('Oops something went wrong :(');
}
});
});
		},
		error : function(){
			alert('Oops something went wrong :(');
		}
	})
});	
