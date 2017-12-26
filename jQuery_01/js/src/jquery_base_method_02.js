(function($){
  // jQuery Start
  var gnbBtn = $('.gnb_btn');
  var gnbUl = $('#gnb').children('ul');  /*변수를 정의(지정_)*/

  gnbBtn.on('click', function(evt){
    evt.preventDefault();
  
//   gnbUl.toggle();
  gnbUl.slideToggle();
//   gnbUl.fadeToggle();
  
});

//   jQuery End
// })(this.jQuery);

// toggle옵션  세가지
/*이때 토글은 on과 off의 기능을 담당(display:block; / display: none;)*/
// 첫번째는 버튼 클릭시 바로 메뉴가 나타남 뿅! 
// 두번째는 슬라이딩하며 내앞에 나타남 slide down
// 세번째는 스리슬쩍 슬며시 나타남 fade in

// (function($){

var view = $('.view');

  var view01 = view.children('li').eq(0);
  var view02 = view.children('li').eq(1);
  var view03 = view.children('li').eq(2);
  var view04 = view.children('li').eq(3);
  var view05 = view.children('li').eq(4);
  var view06 = view.children('li').eq(5);
  var view07 = view.children('li').eq(6);
  var view08 = view.children('li').eq(7);

var btn = $('.btn');
var btnLi = btn.children('li');

  var btn01 = $(btnLi.eq(0).children('button');
  var btn02 = $(btnLi.eq(1).children('button');
  var btn03 = $(btnLi.eq(2).children('button');
  var btn04 = $(btnLi.eq(3).children('button');
  var btn05 = $(btnLi.eq(4).children('button');
  var btn06 = $(btnLi.eq(5).children('button');
  var btn07 = $(btnLi.eq(6).children('button');
  var btn08 = $(btnLi.eq(7).children('button');
  var btn09 = $(btnLi.eq(8).children('button');
  var btn10 = $(btnLi.eq(9).children('button');
  var btn11 = $(btnLi.eq(10).children('button');
  var btn12 = $(btnLi.eq(11).children('button');
  
  // 변수 지정 끝 , 명령어 실행 ==========

  btn01.on('click',['button'], function(evt){ /*클릭해라. 버튼을 그리고 실행해라 */
    evt.preventDefault(); /*위의 기능이 실행되기 전에 선행되는 이벤트를 막아라. 내가 버튼을 클릭했을떄 */

   view01.hide();
});
 // 1번박스 hide 버튼  1

 btn02.on('click', function(evt){
  evt.preventDefault();
 
  view01.show();
 });
 // 1번박스 show버튼 2

btn03.on('click', function(evt){
  evt.preventDefault();

  view02.fadeOut();
});
// 2번박스 ,fadeout 버튼  3

 btn04.on('click', function(evt){
  evt.preventDefault();

  view02.fadeIn();
 });
 // 2번박스,  fadeIn 버튼 4

  btn05.on('click', function(evt){
    evt.preventDefault();

    view03.slideUp();
});
// 3번박스, ,slideup 버튼 5
 
 btn06.on('click', function(evt){
    evt.preventDefault();

    view03.slideDown();
});
 // 3번박스,  slidedown 버튼 6

 btn07.on('click', function(evt){
    evt.preventDefault();

    view04.addClass('masic');
});
// 4번박스  addClass 버튼 7

btn08.on('click', function(evt){
    evt.preventDefault();

    view04.removeClass('masic');
});
// 4번박스 removeClass 버튼 8 

btn09.on('click', function(evt){
    evt.preventDefault();

    view05.toggle();
});
// 5번박스 toggle 버튼 9

btn10.on('click', function(evt){
    evt.preventDefault();

    view06.fadeToggle();
});
// 6번박스 fadeToggle 버튼 10

btn11.on('click', function(evt){
    evt.preventDefault();

    view07.slideToggle();
});
// 7번박스 slideToggle 버튼 11

btn12.on('click', function(evt){
    evt.preventDefault();

    view04.toggleClass('masic');
});
// 8번 박스 toggleClass 버튼 12

btnLi.on('click', function(evt){
  evt.preventDefault();

  var i = $(this). index();
  console.log(i+1);
});
// ==================================================

var tab = $('.tabs');
var tabLi = tab.children('li');
var tabContent = $('.tab_content');
var tabContentLi = tabContent.children('li');

// $('tab_content');

tabLi.on('click',function(evt){
evt.preventDefault();
 var myBtn = $(this).index();
 console.log(myBtn);

 tabLi.removeClass('select');
 tabLi.eq(myBtn).addClass('select');

tabContentLi.removeClass('select');
tabContentLi.eq(myBtn).addClass('select');

});

// eq()
// index()
// addClass()
// removeClass()

// ==================================================

// -jQuery End
})(this.jQuery);