(function($) {

//jQuery start===============================================

// .attachment의 위치가 상단에서 얼마나 떨어져있는지 확인
var attOffset =$('.attachment').offset().top;
// console.log(attOffset);

// + 브라우저 내부의 높이값 확인 .
// var dH = $('body').height();
// console.log(dH); 

//주어진 크기값을 가져오는 방법
/*width, height 모두 메소드에서 값을 입력하지않고 처리하면 그 값의 주어진 값을 파악할 수 있는 기능 */
/*width(), innerWidth(), outerWidth(), outerWidth(ture)
height(), innerHeight(), outerHeight(), outerHeight(ture)*/

/*width()         : 가로값 파악(그냥 가로값)
innerWidth()    : 가로값 파악(padding값을 포함)
outerWidth()    : 가로값 파악(margin제외한 나머지 값, border값을 포함)
outerWidth(ture): 가로값 파악(margin포함한 값) 
*/

//offset().top값 변경
// var customOffset = attOffset - dH ;
// console.log(customOffset);

//브라우저에서 스크롤바가 움직였을 때 이벤트 처리
$(window).on('scroll',function() {
  //스크롤의 위치가 어디에 있는지 파악 ; 
  var scrollOffset = $(this).scrollTop();
  // console.log(scrollOffset);


// attOffset 변수값과 scrollOffset 변수값이 일치하거나 스크롤이 그 이상 처리되면 그 효과를 발휘.
if(attOffset <= scrollOffset){
  // console.log("둘의 위치가 일치하는 것 확인!!!");
  // console.log(scrollOffset - attOffset);
  var gap = scrollOffset - attOffset;
  $('.attachment').children('div').css({backgroundPosition:'center'+' '+ -gap/3 + 'px'});

     }

  });






})(this.jQuery);