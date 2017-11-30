// position_02.js

(function($){
    
 $( '#popupBox>button').on('click', function(){
     $('#popupBox').slideUp();
 }); 
//  바꾸기 전.

var popupBox = $('popupBox');

// popupBox.children('button').on('click', function(){ 
//     popupBox.hide();}
//          ); 
// 변수를 아이디로 지정해서 식은 간략히 정리.


$('h1').on('click', function(){
    $('#popupBox').fadeIn();
});


var sideBox = $('.side_Box');
var topBtn = $('.top_Btn');

sideBox.delay(500).fadeOut();
var content = $('#contentBox').offset().top;
// console.log(content);
$(window).on('scroll', function(){
    popupBox.fadeOut();

    var scroll_top = $(this).scrollTop();
    // console.log(scroll_top);
    if(scroll_top >= content){
        sideBox.fadeIn();
        topBtn.fadeIn();

    }else{
        sideBox.fadeOut();
        topBtn.fadeOut();
    }
});








})(this.jQuery);
    
