
// 즉시 실행 함수 (IIFE)
(function($){
    // jQuery
    $('.banner>ul>li').last().prependTo('.banner>ul'); /*  맨 뒤에거를 앞으로 이동시킨다. */
    $('.banner>ul').css({marginLeft:'-100%'});
    $('.banner').css({overflow:'hidden'});
})(this.jQuery);

//함수의 종류

// 함수 선언식 : 
// 먼저 호출하고, 나중에 함수기능을 작성해도 실햄됨 (순서 상관없이 진행 가능,하지만 한번 사용하면 더 사용할 수 없음
//  초기 작업시, 가장 큰 범위의 작업 )
// function Fn(){}
// Fn();

// 함수 표현식 :
// 먼저 작업 후에 호출해야만 동작 가능
//  ex) Fun();
// var Fun = function (){};                  <X>

                                        //  N O N O !!

// var Fun = function(){};
// Fun();                                    <O>

                                        // YES YES YES !!

// 즉시 실행함수(익명함수)
// 별도의 호출이 필요 없을때 사용
// 외부의 접근을 강제로 막을떄
// ( funtion(){})(this.jQuery);
// 또는
// ( fintion(){}() );