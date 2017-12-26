// jquery_base.method_04.js
(function($) {
  // jquery start==============================

  var ani = $('.ani');

  // 버튼설정

  var aniBtn = $('#aniBtn');
  var btn_01 = aniBtn.children('button').eq(0);
  var btn_02 = aniBtn.children('button').eq(1);
  var btn_03 = aniBtn.children('button').eq(2);
  var btn_04 = aniBtn.children('button').eq(3);

 btn_01.on('click',function(e) {
  e.preventDefault();

  ani.css({backgroundColor:'#afa'});
// ani.animate({backgroundColor:'#afa',color:'#555'});
});
 btn_02.on('click',function(e){
e.preventDefault();
// ani.css({marginLeft:'+=50px', transform:'rotate(180deg)'});
ani.animate({marginLeft:'+=50px'},1000,'easeInElastic');
});
btn_02.on('mouseleave',function() {
  // ani.css({marginLeft:'+=50px'});
ani.animate({marginLeft:0});

});
btn_03.on('click',function(e) {
  e.preventDefault();
  ani.stop().animate({right:0},function(){
    ani.animate({bottom:0},function(){
      ani.animate({left:0},function(){
       ani.animate({top:0},function(){
ani.removeAttr('style'); /*attribute  : 속성  /property : 속성의 명칭 
removeAttr 내가 지정하거나 설정된 속성값을 삭제(초기화)시키는 명령어이다. 속성은 ('')안에 기입.*/
        });
      });
    });
  });
});

btn_04.on('click',function(evt) {
  evt.preventDefault();
  ani.animate({width:'+=100px', height:'+=100px'},300, 'easeOutBounce', function(){
    var aniW = ani.width();
    // console.log(aniW);
    if(ani.width() >= 500){
      alert('stop it !!!');
    } /*if문 끝날땐 ;을 안찍어도 된다고 합니다 .네 */
btn_04.on('mouseleave', function(evt) {
  evt.preventDefault();
  ani.animate({width:'-=10px', height:'-=10px'});
});

  });
});


// jquery end==================================
})(this.jQuery);