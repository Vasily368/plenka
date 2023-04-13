/* выподающий список */
$(document).ready(function(){
  $(".settings").click(function(event){
  	$(".unload__list").toggleClass("unload__list-open");
  });
});

/*    табы      */

$(document).ready(function(){
	$(".tabs__block").not(":first").hide();
		$(".content .tabs__item").click(function() {
			$(".content .tabs__item").removeClass("tabs__active").eq($(this).index()).addClass("tabs__active");
			$(".tabs__block").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("tabs__active");
});

/*  табы формы  */

$(document).ready(function(){
	$(".forma__tab").not(":first").hide();
		$(".forms__popup .forms__nuv-item").click(function() {
			$(".forms__popup .forms__nuv-item").removeClass("forms__nuv--active").eq($(this).index()).addClass("forms__nuv--active");
			$(".forma__tab").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("forms__nuv--active");
});



/* меняющийся текст  */

$(document).ready(function(){
  $(".tabs__item--chat").on("click",function(){
   $('.info__title').html('Главная/Чат');
    });
  $(".tabs__item--req").on("click",function(){
   $('.info__title').html('Главная/Запросы');

    });
});

$(document).ready(function(){
  $(".tabs__item--chat").on("click",function(){
   $('.meneger__title').html('Манеджер/Чат');
    });
  $(".tabs__item--req").on("click",function(){
   $('.meneger__title').html('Манеджер/Запросы');
   
    });
});

$(document).ready(function(){
  $(".btn1").on("click",function(){
   $(".info__title").html('Главная/Чат/Ольга Рыбкина');
    });

});



/* статус заявки  */
document.querySelector(".select__btn").addEventListener("click", function(){
	document.querySelector(".select__list").classList.toggle("select__list--open");

})

document.querySelectorAll(".select__list-item").forEach(function (listItem) {
	listItem.addEventListener("click", function(){
		document.querySelector(".select__btn").innerHTML = this.innerHTML;
		document.querySelector(".input__select-hidden").value = this.dataset.value;
		document.querySelector(".select__list").classList.remove("select__list--open");
	});
});



$(function () {
	$('.popup-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.cross__popup', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

$(function () {
	$('.authorization').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.cross__popup', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});



$(document).ready(function(){
  
   $(".btn1").click(function() {
               $("#chat").css('display','none');
                $("#chat__hidden").css('display','block');                      
            });   
            
   
 
               $(".btn2").click(function() {
                   $("#chat").css('display','block');
                    $("#chat__hidden").css('display','none');   
            });
 
             
 });


