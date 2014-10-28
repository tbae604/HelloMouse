// ==UserScript==
// @name        Hello Mouse
// @namespace   http://cis.apsc.ubc.ca
// @description popup image appears when mouseover Connect quick_links_wrap
// @include 	  http*//connect.ubc.ca/*
// @version     1
// @grant       none
// ==/UserScript==


// Include jQuery - CURRENTLY NOT IN USE
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-latest.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// div elements in Connect
var bbf = document.getElementById('bbFrameset');
var qlw = document.getElementById('quick_links_wrap');

// hovering div element
var hello = document.createElement('div');

// css class for hover elements - does not seem to work in GM
// var hs = document.createElement('style');
// hs.type = 'text/css';
// hs.innerHTML = '.hsClass{z-index: 9999; position: absolute; left: 0px; top: 0px;}';
// bff.appendChild(hs);



qlw.onmouseover = function() {
  var pug = document.createElement('img');
  pug.setAttribute('src', 'http://www.i-love-pugs.com/images/PugPuppyFullView.jpg');
  hello.appendChild(pug);
  bbf.appendChild(hello);
    
  // This doesn't work
//   hello.css({
//     z-index: 9999;
//     position: absolute;
//     left: 0px;
//     top: 0px;
//   });

  // This works, though not ideal
  hello.style.zIndex = 9999;
  hello.style.position = 'absolute';
  hello.style.left = '250px';
  hello.style.top = '250px';
  hello.style.display = 'block';
  
}

qlw.onmouseout = function() {
  while (hello.hasChildNodes()) {hello.removeChild(hello.lastChild)};
  hello.style.display = 'none';
} 