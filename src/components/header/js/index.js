var $favMenu = $("#favourites");
var menuWidth = $favMenu.outerWidth();
var $body = $('body');
var doSlide = false;
var $toggleBtn = $("#toggle_fav");
var btnSize = $toggleBtn.outerWidth();

$toggleBtn.click(function(){
    $(this).toggleClass('active')
    $body.toggleClass('slide');
})