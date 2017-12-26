/*base.js*/

(function($) {
  //jquery start ===================================================

// $('#wrap').load('../../html/src/headBox.html')

var wrap = $('#wrap');/*wrap을 변수로 지정 */

var baseUrl = '../../html/src/';
var loadFile = {headBox:baseUrl + 'headBox.html',
                bannerBox:baseUrl + 'bannerBox.html',
                imageBox:baseUrl + 'imageBox.html',
                newsBox:baseUrl + 'newsBox.html',
                blogBox:baseUrl + 'blogBox.html',
                etcBox:baseUrl + 'etcBox.html',
                etc2Box:baseUrl + 'etc2Box.html',
                footBox:baseUrl + 'footBox.html'};

wrap.prepend('<div id="headBoxWrap"></div>'); 
var headBoxWrap = $('#headBoxWrap'); 

// headBoxWrap.load(loadFile.headBox, function(){
//   var headBox = $('#headBox');
//   var headBoxBg = headBox.css('backgroundColor');
//   headBoxWrap.css({'backgroundColor':headBoxBg});
// });

ImportFile(headBoxWrap, loadFile.headBox, true);

//bannerBox

headBoxWrap.after('<div id="bannerBoxWrap"></div');
var bannerBoxWrap = $('#bannerBoxWrap');
// bannerBoxWrap.load(loadFile.bannerBox);

ImportFile(bannerBoxWrap, loadFile.bannerBox, true);

//imageBox

bannerBoxWrap.after('<div id="imageBoxWrap"></div');
var imageBoxWrap = $('#imageBoxWrap');
// imageBoxWrap.load(loadFile.imageBox);

ImportFile(imageBoxWrap, loadFile.imageBox, true);

//newsBox

imageBoxWrap.after('<div id="newsBoxWrap"></div>');
var newsBoxWrap = $('#newsBoxWrap');
// newsBoxWrap.load(loadFile.newsBox);

ImportFile(newsBoxWrap, loadFile.newsBox, true);

//blogBox

newsBoxWrap.after('<div id="blogBoxWrap"></div>');
var blogBoxWrap = $('#blogBoxWrap');
// blogBoxWrap.load(loadFile.blogBox);

ImportFile(blogBoxWrap, loadFile.blogBox, true);

//etcBox

blogBoxWrap.after('<div id="etcBoxWrap"></div>');
var etcBoxWrap = $('#etcBoxWrap');
// etcBoxWrap.load(loadFile.etcBox);

ImportFile(etcBoxWrap, loadFile.etcBox, true);

//etc2Box

etcBoxWrap.after('<div id="etc2BoxWrap"></div>');
var etc2BoxWrap = $('#etc2BoxWrap');
// etc2BoxWrap.load(loadFile.etc2Box);

ImportFile(etc2BoxWrap, loadFile.etc2Box, true);

//footBox

wrap.append('<div id="footBoxWrap"></div>');
var footBoxWrap = $('#footBoxWrap');

// footBoxWrap.load(loadFile.footBox, function(){
//   var footBox = $('#footBox');
//   var footBoxBg = footBox.css('backgroundColor');
//     footBoxWrap.css({'backgroundColor':footBoxBg});
// })

ImportFile(footBoxWrap, loadFile.footBox, true);

//각 기능을 요약해서 처리할 함수로 바꾸기 

function ImportFile(select, file, bgIf) {
  select.load(file, function() {
    select.addClass('clearfix');
    var childrenBox = select.children();
    childrenBox.css({margin:'0 auto'});
    if(bgIf == true){
      var bgColor = childrenBox.css('backgroundColor');
      // console.log( 'select: ' + childrenBox, 'background: ' + bgColor );
      select.css({'backgroundColor':bgColor});
    }
  });
}

//jquery end =========================================================
})(this.jQuery);
