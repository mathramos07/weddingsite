

$(window).on("load", function(){
	//Home section slideshow
	let slideIndex = $(".slide.active").index();
	const slideLen = $(".slide").length;
	
	function slideShow(){
		$(".slide").removeClass("active").eq(slideIndex).addClass("active");
		if(slideIndex == slideLen-1){
			slideIndex = 0;
		}
		else{
			slideIndex++;
		}
		setTimeout(slideShow, 5000)
	}
	slideShow();

	//Botão nav mobile
	$(".hamburger-btn").click(function(){
		$(".header .nav").slideToggle();
	})
	$(".header .nav a").click(function(){
		if($(window).width() < 768){
			$(".header .nav").slideToggle();
		}
	})

	//fixed header

	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$(".header").addClass("fixed");
		}
		else{
			$(".header").removeClass("fixed");
		}
	})

	// scrollIt
  	$.scrollIt({
  		topOffset: -50 
  	});

	//gallery popup

	const wHeight = $(window).height();
	$(".gallery-popup .gp-img").css("max-height", wHeight + "px");

	let itemIndex = 0;
	const totalGalleryItems = $(".gallery-item").length;
	
	$(".gallery-item").click(function(){
		itemIndex = $(this).index();
		$(".gallery-popup").addClass("open");
		$(".gallery-popup .gp-img").hide();
		gpSlideShow();
	})

	$(".gp-controls .next").click(function(){
		if(itemIndex == totalGalleryItems-1){
			itemIndex = 0;
		}
		else{
			itemIndex++;
		}
		$(".gallery-popup .gp-img").fadeOut(function(){
			gpSlideShow();
		})
	})

	$(".gp-controls .prev").click(function(){
		if(itemIndex === 0){
			itemIndex = totalGalleryItems-1;
		}
		else{
			itemIndex--;
		}
		$(".gallery-popup .gp-img").fadeOut(function(){
			gpSlideShow();
		})
	})

	function gpSlideShow(){
		const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
		$(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
		$(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItems);
	}

	//close gallery button

	$(".gp-close").click(function(){
		$(".gallery-popup").removeClass("open");
	})

	// hide gallery popup (Clique fora do container)

	$(".gallery-popup").click(function(event){
		if($(event.target).hasClass("open")){
			$(".gallery-popup").removeClass("open");
		}
	})
})