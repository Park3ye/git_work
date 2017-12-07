// jquery_base_method_03.js


(function($){
  // jquery start==============================
var wrap = $('#wrap');
// #headBox  생성
wrap.html('<header id="headBox"></header>');
// #headBox made it. and choice plz
var headBox = $('#headBox');
headBox.wrap('<div id="headBoxWrap"></div>')

// #headBox가 가지고 있는 배경색을 가져와보자!!
var headColor = headBox.css('backgroundColor');
// console.log(headColor); 
var headWrap = $('#headBoxWrap');
headWrap.css({backgroundColor:headColor});

// Let`s get it~ the footBox made it!
wrap.append('<footer id="footBox"></footer>');
var footBox = $('#footBox');

footBox.wrap('<div id="footBoxWrap"></div>');
var footColor = footBox.css('backgroundColor');
var footWrap = $('#footBoxWrap');
footWrap.css({backgroundColor:footColor});

// #headBox(#headBoxWrap) 동레벨의 뒤에 section#bannerBox를 생성

headWrap.after('<section id="bannerBox"></section>');



// #footBox(#footBoxWrap)  동레벨의 앞에 article#contentBox를 생성
footWrap.before('<article id="contentBox"></article>');

var contentBox= $('contentBox');
var contentBox = $('#contentBox');
    contentBox.html('<p></p>');
var myp = contentBox.find('p');
myp.text('What is it???');
myp.css({color:'#fff', fontSize:'2rem', fontWeight:'bold', textAlign:'center',
paddingTop:20+'rem'});
//  jquery end=====================================
})(this.jQuery);