/*base.js*/

(function($) {
  //jquery start ===================================================

// $('#wrap').load('../../html/src/headBox.html')

var wrap = $('#wrap');/*wrap을 변수로 지정 */

var baseUrl = '../../html/src/';
var loadFile = {headBox:baseUrl + 'headBox.html'.,
                bannerBox:baseUrl + 'bannerBox.html',
                footBox:baseUrl + 'footBox.html'};

wrap.prepend('<div id="headBoxWrap"></div>'); 
var headBoxWrap = $('#headBoxWrap'); 

headBoxWrap.load(loadFile.headBox, function(){
  var headBox = $('#headBox');
  var headBoxBg = headBox.css('backgroundColor');
  headBoxWrap.css({'backgroundColor':headBoxBg});
});

//bannerBox import
headBoxWrap.after().load(loadFIle.bannerBox);


wrap.append('<div id="footBoxWrap"></div>');
var footBoxWrap = $('#footBoxWrap');

footBoxWrap.load(loadFile.footBox, function(){
  var footBox = $('#footBox');
  var footBoxBg = footBox.css('backgroundColor');
    footBoxWrap.css({'backgroundColor':footBoxBg});
})



//jquery end =========================================================
})(this.jQuery);
