!function(e){var t={};function r(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(c,a,function(t){return e[t]}.bind(null,a));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ua=navigator.userAgent,this.type="pc"}var t,c,a;return t=e,(c=[{key:"dvType",value:function(){return this.ua.indexOf("iPhone")>0||this.ua.indexOf("Android")>0&&this.ua.indexOf("Mobile")>0?this.type="sp":(this.ua.indexOf("iPad")>0||this.ua.indexOf("Android")>0)&&(this.type="tb"),this.type}}])&&r(t.prototype,c),a&&r(t,a),e}()},function(e,t){e.exports=function(e,t,r){var c=1,a=window.innerWidth;e.DOMReadBefore(t),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(t.PAGE_FLAG).className!=r&&void 0!==r||(e.DOMReadAfter(t),window.addEventListener("load",(function(){e.imageReadAfter(t)}),!1)),window.addEventListener("resize",(function(){c||(c=setTimeout((function(){if(c=0,"pc"!=t.UA){if(a==window.innerWidth)return;a=window.innerWidth,e.windowResize(t)}else e.windowResize(t)}),500))})),window.addEventListener("scroll",(function(){c||(c=setTimeout((function(){c=0,e.windowScroll(t)}),300))})),c=setTimeout((function(){c=0}),100)}),!1)}},function(e,t,r){"use strict";var c=r(3),a=r(4),i=r(12),n=r(0),o={W_WIDTH:window.innerWidth,SP_WIDTH:768,PC_WIDTH:1200,UA:(new n).dvType(),PAGE_FLAG:"html"};c(o),a(o),i(o)},function(e,t,r){function c(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}var a=r(1),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a;return t=e,(r=[{key:"DOMReadBefore",value:function(e){}},{key:"DOMReadAfter",value:function(e){}},{key:"imageReadAfter",value:function(e){}},{key:"windowResize",value:function(e){}},{key:"windowScroll",value:function(e){}}])&&c(t.prototype,r),a&&c(t,a),e}();e.exports=function(e){var t=new i;a(t,e)}},function(e,t,r){function c(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}var a=r(1),i=r(5),n=r(6),o=r(7),s=r(8),h=r(9),p=r(10),y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a;return t=e,(r=[{key:"DOMReadBefore",value:function(e){}},{key:"DOMReadAfter",value:function(e){i(),n(),o(),s(),h(),p(),hljs.initHighlightingOnLoad()}},{key:"imageReadAfter",value:function(e){}},{key:"windowResize",value:function(e){}},{key:"windowScroll",value:function(e){}}])&&c(t.prototype,r),a&&c(t,a),e}();e.exports=function(e){var t=new y;a(t,e,"is-component")}},function(e,t,r){var c=this;e.exports=function(e){var t,a={className:".js-matchHeight",UA:(new(r(0))).dvType()},i=Object.assign(a,e),n=document.querySelectorAll(i.className);if(null!=n){var o=function(e){var t=this;t.offTop=0,[].slice.call(n).forEach((function(e,r){0!==t.offTop&&t.offTop!==e.getBoundingClientRect().top+window.pageYOffset&&p++,t.offTop=e.getBoundingClientRect().top+window.pageYOffset}));for(var r=0;r<=p;r++)e.push([]);s(e)},s=function(e){var t=this;t.offTop=0,[].slice.call(n).forEach((function(r,c){0!==t.offTop&&t.offTop!==r.getBoundingClientRect().top+window.pageYOffset&&arrayCount++,e[arrayCount].push(r),t.offTop=r.getBoundingClientRect().top+window.pageYOffset})),h(e)},h=function(e){var t=this;t.height=0;for(var r=function(r){t.height=0,e[r].forEach((function(c,a){if(0===a||a%e[r].length==0){for(var i=a;i<=a+a+e[r].length-1;i++)e[r][i].style.height="inherit";height=c.clientHeight;for(var n=a+1;n<=a+e[r].length-1;n++)t.height<e[r][n].clientHeight&&(t.height=e[r][n].clientHeight);for(var o=a;o<=a+a+e[r].length-1;o++)e[r][o].style.height=t.height+"px"}}))},c=0;c<=arrayCount;c++)r(c)},p=0;arrayCount=0;var y=function(e,t){e||(e=setTimeout((function(){e=0,t()}),100))};(t=c).timeoutId=1,t.array=[],t.currentWidth=window.innerWidth,o(t.array),window.addEventListener("resize",(function(){y(t.timeoutId,(function(){if("pc"!=i.UA){if(t.currentWidth==window.innerWidth)return;t.currentWidth=window.innerWidth,o(t.array)}else o(t.array)}))})),t.timeoutId=setTimeout((function(){t.timeoutId=0}),100)}}},function(e,t,r){e.exports=function(e){var t={className:".js-tellLink",UA:(new(r(0))).dvType()},c=Object.assign(t,e),a=document.querySelectorAll(c.className);"pc"==c.UA&&Array.prototype.slice.call(a).forEach((function(e){e.outerHTML=e.innerHTML}))}},function(e,t){var r=this;function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}e.exports=function(e){var t=Object.assign({target:".js-accordion",parentName:".js-accordion-parent",childName:".js-accordion-child",speed:300,timing:"ease",linkage:!0,collapsible:!0,setBefore:function(){},setAfter:function(){},animationAfter:function(){}},e),a={};fArray={},arrayLength=0;var n,o=function(){function e(r){c(this,e);var a=this;a.tg=r,a.targetParents=a.tg.querySelectorAll(t.parentName),a.arrayLength=a.targetParents.length}return i(e,[{key:"set",value:function(){var e=this;e.fArray={},[].slice.call(e.targetParents).forEach((function(t,r){e.fArray[r]=new s(t,e.fArray,e.arrayLength),e.fArray[r].set()}))}}]),e}(),s=function(){function e(r,a,i){c(this,e);var n=this;n.targetParent=r,n.targetParent.style.cursor="pointer",n.targetChild=r.nextElementSibling,n.targetChild.style.overflow="hidden",n.targetChild.style.transitionProperty="height",n.targetChild.style.transitionDuration=t.speed+"ms",n.targetChild.style.transitionTimingFunction=t.timing,n.clientH=n.targetChild.clientHeight,n.currentFlag=!1,n.array=a,n.arrayLength=i}return i(e,[{key:"set",value:function(){var e=this;t.setBefore(),e.targetParent.classList.contains("is-open")?e.open(e):e.close(e),e.targetParent.addEventListener("click",(function(){e.lastH=e.targetChild.style.height;for(var r=0;r<e.arrayLength;r++)e.array[r].currentFlag=!1;e.currentFlag=!0,"0px"==e.lastH?e.open():t.collapsible&&e.close(),t.linkage&&e.linkage()}),!1),e.targetChild.addEventListener("transitionend",(function(){1==e.currentFlag&&t.animationAfter()}),!1),t.setAfter()}},{key:"open",value:function(){this.targetChild.style.height=this.clientH+"px"}},{key:"close",value:function(){this.targetChild.style.height="0px",this.currentFlag=!1}},{key:"linkage",value:function(){var e=this;e.lastH=e.targetChild.style.height;for(var t=0;t<e.arrayLength;t++)0==e.array[t].currentFlag&&e.array[t].close()}}]),e}();a={},(n=r).target=document.querySelectorAll(t.target),[].slice.call(n.target).forEach((function(e,t){a[t]=new o(e),a[t].set()}))}},function(e,t,r){var c=this;function a(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}e.exports=function(e){var t,i,n={className:".js-inview",UA:(new(r(0))).dvType(),changeTiming:0,reverse:!0},o=Object.assign(n,e),s=document.querySelectorAll(o.className),h=function(e,t){[].slice.call(e.target).forEach((function(r,c){1==t&&(e.array[c]=new g(r)),e.array[c].set()}))},p=function(){t=void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop,i=t+window.innerHeight,t+=window.innerHeight*o.changeTiming,i-=window.innerHeight*o.changeTiming},y=function(e,t){e||(e=setTimeout((function(){e=0,t()}),100))},g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.tg=t}var r,c,n;return r=e,(c=[{key:"set",value:function(){p();var e=this;e.tgRect=e.tg.getBoundingClientRect(),e.tgTop=e.tgRect.top+t,e.tgBottom=e.tgTop+e.tg.clientHeight,t<e.tgTop&&e.tgBottom<i?e.tg.classList.add("is-inview"):1==o.reverse&&e.tg.classList.remove("is-inview")}},{key:"debug",value:function(){console.log("スクロールトップ:"+t),console.log("スクロールボトム:"+i),console.log("ターゲットトップ:"+this.tgTop),console.log("ターゲットボトム:"+this.tgBottom)}}])&&a(r.prototype,c),n&&a(r,n),e}();!function(){if(null!=s){var e=c;e.target=s,e.array={},e.timeoutId=1,e.currentWidth=window.innerWidth,p(),h(e,!0),window.addEventListener("resize",(function(){y(e.timeoutId,(function(){if("pc"!=o.UA){if(e.currentWidth==window.innerWidth)return;e.currentWidth=window.innerWidth,h(e)}else h(e)}))})),window.addEventListener("scroll",(function(){y(e.timeoutId,(function(){h(e)}))})),e.timeoutId=setTimeout((function(){e.timeoutId=0}),100)}}()}},function(e,t){e.exports=function(e){var t,r;!function(){function e(e,t,r){var c=this;e.each((function(){c.$str=$(this).find(t).text(),c.$str=function(e,t,r){return this.reg=new RegExp(t,"g"),e.replace(this.reg,r)}(c.$str,r,""),$(this).find(t).text(c.$str)}))}!function(){this.$target=$(".l-markupBlock"),e(this.$target,".pug+.source code","                        "),e(this.$target,".js+.source code","                        ")}()}(),t=$(".c-memoSet01"),r=".group.is-before .tab li",t.on("click",r,(function(){$(this).parents(".c-memoSet01").find(r).removeClass("is-current"),$(this).parents(".c-memoSet01").find(".group.is-primary").removeClass("is-current"),$(this).addClass("is-current"),$(this).parents(".c-memoSet01").find(".group.is-primary").eq($(this).index()).addClass("is-current")}))}},function(e,t,r){var c=r(11);e.exports=function(e){var t=new c;t.set(".js-mainvisualSet01"),t.option({arrows:!0,appendArrows:$(".c-mainvisualSet01"),prevArrow:'<p class="slick-prev"></p>',nextArrow:'<p class="slick-next"></p>',customPaging:function(e,t){return"<span></span>"},dots:!0});var r=new c;r.set(".js-slickSlider"),r.option()}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaultOp={arrows:!1,dots:!1}}var t,c,a;return t=e,(c=[{key:"set",value:function(e){this.tg=e,$(this.tg).slick()}},{key:"option",value:function(e){this.defaultOp=Object.assign(this.defaultOp,e),$(this.tg).slick("slickSetOption",this.defaultOp,!0)}}])&&r(t.prototype,c),a&&r(t,a),e}()},function(e,t,r){function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}var n=r(1),o=r(13),s=function(){function e(){c(this,e)}return i(e,[{key:"DOMReadBefore",value:function(e){}},{key:"DOMReadAfter",value:function(e){var t;$("#type01_start").on("click",(function(){t.type01_start()})),$("#type01_end").on("click",(function(){t.type01_end()})),$("#type02_start").on("click",(function(){t.type02_start()})),$("#type02_end").on("click",(function(){t.type02_end()})),$("#type03_start").on("click",(function(){t.type03_start()})),$("#type03_end").on("click",(function(){t.type03_end()})),$("#type04_start").on("click",(function(){t.type04_start()})),$("#type04_end").on("click",(function(){t.type04_end()})),$("#type05_start").on("click",(function(){t.type05_start()})),$("#type05_end").on("click",(function(){t.type05_end()})),(t=new o({tg:document.querySelector("#js-canvasLoadingAnimation")})).set(),new(function(){function e(t){c(this,e),this.target=t.tg,this.queue=new createjs.LoadQueue(!1),this.imageArray=[{src:"../images/sample01.jpg"}],this.imagePath={}}return i(e,[{key:"set",value:function(){var e=this,t=this,r=function(){function e(){t.stageTarget.canvas.width=500,t.stageTarget.canvas.height=500}e(),window.addEventListener("resize",e)},c=function(){var t=e;t.containerTarget=new createjs.Container,t.graphicTarget=new createjs.Shape,t.imageTarget=new createjs.Bitmap(t.imageArray[0].src),t.maskTarget=new createjs.Shape,t.stageTarget.addChild(t.containerTarget),t.containerTarget.addChild(t.graphicTarget),t.containerTarget.addChild(t.imageTarget),t.imageTarget.x=0,t.imageTarget.y=0,t.imageTarget.scale=.3,t.maskTarget.set({x:0,y:0,scaleX:1,scaleY:1}),t.point0101=t.maskTarget.graphics.moveTo(0,0).command,t.point0102=t.maskTarget.graphics.lineTo(25,0).command,t.point0103=t.maskTarget.graphics.lineTo(25,0).command,t.point0104=t.maskTarget.graphics.lineTo(0,0).command,t.maskTarget.graphics.closePath().command,t.point0201=t.maskTarget.graphics.moveTo(50,60).command,t.point0202=t.maskTarget.graphics.lineTo(75,60).command,t.point0203=t.maskTarget.graphics.lineTo(75,60).command,t.point0204=t.maskTarget.graphics.lineTo(50,60).command,t.maskTarget.graphics.closePath().command,t.point0301=t.maskTarget.graphics.moveTo(100,0).command,t.point0302=t.maskTarget.graphics.lineTo(125,0).command,t.point0303=t.maskTarget.graphics.lineTo(125,0).command,t.point0304=t.maskTarget.graphics.lineTo(100,0).command,t.maskTarget.graphics.closePath().command,t.point0401=t.maskTarget.graphics.moveTo(150,0).command,t.point0402=t.maskTarget.graphics.lineTo(175,0).command,t.point0403=t.maskTarget.graphics.lineTo(175,0).command,t.point0404=t.maskTarget.graphics.lineTo(150,0).command,t.maskTarget.graphics.closePath().command,t.graphicTarget.graphics.beginFill("#000000").drawRect(0,0,t.stageTarget.canvas.width,t.stageTarget.canvas.height),t.containerTarget.set({mask:t.maskTarget})},a=function(){var t=e;function r(){createjs.Tween.get(t.point0203,{override:!0}).to({y:60},0).to({y:180},600,createjs.Ease.cubicOut),createjs.Tween.get(t.point0204,{override:!0}).to({y:60},0).to({y:180},600,createjs.Ease.cubicOut).call(c)}function c(){createjs.Tween.get(t.point0303,{override:!0}).to({y:0},0).to({y:120},600,createjs.Ease.cubicOut),createjs.Tween.get(t.point0304,{override:!0}).to({y:0},0).to({y:120},600,createjs.Ease.cubicOut).call(a)}function a(){createjs.Tween.get(t.point0403,{override:!0}).to({y:0},0).to({y:60},600,createjs.Ease.cubicOut),createjs.Tween.get(t.point0404,{override:!0}).to({y:0},0).to({y:60},600,createjs.Ease.cubicOut)}createjs.Tween.get(t.point0103,{override:!0}).to({y:0},0).to({y:120},600,createjs.Ease.cubicOut),createjs.Tween.get(t.point0104,{override:!0}).to({y:0},0).to({y:120},600,createjs.Ease.cubicOut).call(r)};t.stageTarget=new createjs.Stage(t.target),createjs.Ticker.addEventListener("tick",(function(){t.stageTarget.update()}),!1),createjs.Ticker.timingMode=createjs.Ticker.RAF_SYNCHED,$.each(t.imageArray,(function(e,r){t.imagePath[e]=new Image,t.imagePath[e].src=r.src,r.width=t.imagePath[e].naturalWidth,r.height=t.imagePath[e].naturalHeight})),t.queue.loadManifest(t.imageArray),t.queue.setMaxConnections(3),t.queue.addEventListener("complete",(function(e){r(),c(),a()}))}}]),e}())({tg:document.querySelector("#js-logoTarget")}).set(),new(function(){function e(t){c(this,e),this.target=t.tg,this.C_WIDTH=500,this.C_HEIGHT=500}return i(e,[{key:"set",value:function(){var e=this,t=this;(function(){var t=e;t.stage=new createjs.Stage(t.target),t.container=new createjs.Container,t.stage.addChild(t.container),t.graphic=new createjs.Shape,t.graphic.graphics.f("#F00").dr(0,0,t.C_WIDTH,t.C_HEIGHT),t.container.addChild(t.graphic),t.maskWrap=new createjs.Shape,t.maskWrap.cache(0,0,t.C_WIDTH,t.C_HEIGHT),t.sSet=[{type:"mt",s:"231.47, 148.81"},{type:"bt",s:"205.84, 123.35, 159.47, 121.42, 125.06, 116.05000000000001"},{type:"lt",s:"125.06, 143.37"},{type:"bt",s:"76.12, 138.45, 68.14, 96, 94.86, 71.67"},{type:"bt",s:"125.1, 48.14, 185.51, 61.36, 206.35, 83.85"},{type:"lt",s:"249.73, 41"},{type:"bt",s:"217, 8.62, 173.24, -3.25, 119.91, 0.74"},{type:"bt",s:"-27.66, 14, -19.93, 207.07, 125.1, 207.28"},{type:"lt",s:"125.1, 180"},{type:"bt",s:"223.56, 181.27, 206.86, 276, 125.1, 268.65999999999997"},{type:"lt",s:"125.1, 296"},{type:"bt",s:"94.17999999999999, 295.36, 65.69, 287.75, 44.459999999999994, 266.51"},{type:"lt",s:"0, 310.89"},{type:"bt",s:"33.83, 345.21, 73.38, 356.77, 125.06, 357.24"},{type:"lt",s:"125.06, 33"},{type:"bt",s:"280.78, 330.43, 276.88, 190.43, 231.47, 148.8"}],t.sx=0,t.sy=0,t.ss=.5,t.s=t.maskWrap.graphics.mt((231.47+t.sx)*t.ss,(148.81+t.sy)*t.ss).bt((205.84+t.sx)*t.ss,(123.35+t.sy)*t.ss,(159.47+t.sx)*t.ss,(121.42+t.sy)*t.ss,(125.06+t.sx)*t.ss,(116.05000000000001+t.sy)*t.ss).lt((125.06+t.sx)*t.ss,(143.37+t.sy)*t.ss).bt((76.12+t.sx)*t.ss,(138.45+t.sy)*t.ss,(68.14+t.sx)*t.ss,(96+t.sy)*t.ss,(94.86+t.sx)*t.ss,(71.67+t.sy)*t.ss).bt((125.1+t.sx)*t.ss,(48.14+t.sy)*t.ss,(185.51+t.sx)*t.ss,(61.36+t.sy)*t.ss,(206.35+t.sx)*t.ss,(83.85+t.sy)*t.ss).lt((249.73+t.sx)*t.ss,(41+t.sy)*t.ss).bt((217+t.sx)*t.ss,(8.62+t.sy)*t.ss,(173.24+t.sx)*t.ss,(-3.25+t.sy)*t.ss,(119.91+t.sx)*t.ss,(.74+t.sy)*t.ss).bt((-27.66+t.sx)*t.ss,(14+t.sy)*t.ss,(-19.93+t.sx)*t.ss,(207.07+t.sy)*t.ss,(125.1+t.sx)*t.ss,(207.28+t.sy)*t.ss).lt((125.1+t.sx)*t.ss,(180+t.sy)*t.ss).bt((223.56+t.sx)*t.ss,(181.27+t.sy)*t.ss,(206.86+t.sx)*t.ss,(276+t.sy)*t.ss,(125.1+t.sx)*t.ss,(268.65999999999997+t.sy)*t.ss).lt((125.1+t.sx)*t.ss,(296+t.sy)*t.ss).bt((94.17999999999999+t.sx)*t.ss,(295.36+t.sy)*t.ss,(65.69+t.sx)*t.ss,(287.75+t.sy)*t.ss,(44.459999999999994+t.sx)*t.ss,(266.51+t.sy)*t.ss).lt((0+t.sx)*t.ss,(310.89+t.sy)*t.ss).bt((33.83+t.sx)*t.ss,(345.21+t.sy)*t.ss,(73.38+t.sx)*t.ss,(356.77+t.sy)*t.ss,(125.06+t.sx)*t.ss,(357.24+t.sy)*t.ss).lt((125.06+t.sx)*t.ss,(330+t.sy)*t.ss).bt((280.78+t.sx)*t.ss,(330.43+t.sy)*t.ss,(276.88+t.sx)*t.ss,(190.43+t.sy)*t.ss,(231.47+t.sx)*t.ss,(148.81+t.sy)*t.ss).closePath().command,t.container.set({mask:t.maskWrap}),createjs.Ticker.addEventListener("tick",(function(){t.stage.update()}),!1),createjs.Ticker.timingMode=createjs.Ticker.RAF_SYNCHED})(),t.scaleInit()}},{key:"scaleInit",value:function(){var e=this;e.stage.canvas.width=e.C_WIDTH,e.stage.canvas.height=e.C_HEIGHT}}]),e}())({tg:document.querySelector("#js-alphabetMask")}).set()}},{key:"imageReadAfter",value:function(e){}},{key:"windowResize",value:function(e){}},{key:"windowScroll",value:function(e){}}]),e}();e.exports=function(e){var t=new s;n(t,e,"is-canvas")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}e.exports=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=this;r.target=t.tg,r.contentsName=[{name:"type01",src:"../images/logo01.png"},{name:"type02",src:"../images/logo02.png"},{name:"type03",src:"../images/logo03.png"},{name:"type04",src:"../images/logo04.png"},{name:"type05",src:"../images/logo05.png"}],r.containerArray={},r.graphicArray={},r.pointArray={},r.bgArray={},r.imageArray={},r.queue=new createjs.LoadQueue(!1)}var t,c,a;return t=e,(c=[{key:"set",value:function(){var e=this;e.imagePath={};var t=function(){function t(){e.stage.canvas.width=window.innerWidth,e.stage.canvas.height=window.innerHeight}t(),window.addEventListener("resize",t)};e.stage=new createjs.Stage(e.target),createjs.Ticker.addEventListener("tick",(function(){e.stage.update()}),!1),createjs.Ticker.setFPS(60),createjs.Ticker.timingMode=createjs.Ticker.RAF_SYNCHED,e.queue.loadManifest(e.contentsName),e.queue.setMaxConnections(3),e.queue.addEventListener("complete",(function(r){$.each(e.contentsName,(function(t,r){e.imagePath[t]=new Image,e.imagePath[t].src=r.src,r.width=e.imagePath[t].naturalWidth,r.height=e.imagePath[t].naturalHeight})),t(),e.drawInit()}))}},{key:"drawInit",value:function(){var e=this;function t(){e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,$.each(e.contentsName,(function(t,r){switch(e.graphicArray[t]=new createjs.Shape,e.imageArray[t]=new createjs.Bitmap(r.src),e.containerArray[t]=new createjs.Container,e.bgArray[t]=new createjs.Shape,e.stage.removeChild(e.containerArray[t]),e.containerArray[t].removeChild(e.bgArray[t]),e.containerArray[t].removeChild(e.imageArray[t]),e.stage.addChild(e.containerArray[t]),e.containerArray[t].addChild(e.bgArray[t]),e.containerArray[t].addChild(e.imageArray[t]),r.name){case"type01":e.bgArray[t].graphics.beginFill("#355cfc").drawRect(0,0,e.cw,e.ch),e.pointArray[t]=[],chm=e.ch/9,e.pointArray[t][0]=e.graphicArray[t].graphics.moveTo(.5*e.cw,0).command,e.pointArray[t][1]=e.graphicArray[t].graphics.lineTo(.6*e.cw,0).command,e.pointArray[t][2]=e.graphicArray[t].graphics.bezierCurveTo(.7*e.cw,1*chm,.65*e.cw,2*chm,.75*e.cw,3*chm).command,e.pointArray[t][3]=e.graphicArray[t].graphics.bezierCurveTo(.85*e.cw,4*chm,.7*e.cw,5*chm,.85*e.cw,6*chm).command,e.pointArray[t][4]=e.graphicArray[t].graphics.bezierCurveTo(1.05*e.cw,7*chm,e.cw,8*chm,e.cw,9*chm).command,e.pointArray[t][5]=e.graphicArray[t].graphics.lineTo(.5*e.cw,e.ch).command,e.pointArray[t][6]=e.graphicArray[t].graphics.closePath().command,e.pointArray[t][7]=e.graphicArray[t].graphics.moveTo(.5*e.cw+10,e.ch).command,e.pointArray[t][8]=e.graphicArray[t].graphics.lineTo(0,e.ch).command,e.pointArray[t][9]=e.graphicArray[t].graphics.bezierCurveTo(0,8*chm,0,7*chm,0,6*chm).command,e.pointArray[t][10]=e.graphicArray[t].graphics.bezierCurveTo(0,5*chm,0,4*chm,0,3*chm).command,e.pointArray[t][11]=e.graphicArray[t].graphics.bezierCurveTo(0,2*chm,0,1*chm,0,0).command,e.pointArray[t][12]=e.graphicArray[t].graphics.lineTo(.5*e.cw+10,0).command,e.graphicArray[t].set({x:2*-e.cw,y:0,scaleX:1,scaleY:1});break;case"type02":e.bgArray[t].graphics.beginFill("#ff5b7f").drawRect(0,0,e.cw,e.ch),e.pointArray[t]=[],cwm=e.cw/6,e.pointArray[t][0]=e.graphicArray[t].graphics.moveTo(0,.5*e.ch).command,e.pointArray[t][1]=e.graphicArray[t].graphics.lineTo(0,.3*e.ch).command,e.pointArray[t][2]=e.graphicArray[t].graphics.bezierCurveTo(1*cwm,.1*e.ch,2*cwm,.22*e.ch,3*cwm,.2*e.ch).command,e.pointArray[t][3]=e.graphicArray[t].graphics.bezierCurveTo(4*cwm,.2*e.ch,5*cwm,0,6*cwm,.07*e.ch).command,e.pointArray[t][4]=e.graphicArray[t].graphics.lineTo(e.cw,e.ch/2).command,e.pointArray[t][5]=e.graphicArray[t].graphics.closePath().command,e.pointArray[t][6]=e.graphicArray[t].graphics.moveTo(e.cw,e.ch/2).command,e.pointArray[t][7]=e.graphicArray[t].graphics.lineTo(e.cw,e.ch).command,e.pointArray[t][8]=e.graphicArray[t].graphics.bezierCurveTo(5*cwm,e.ch,4*cwm,e.ch,3*cwm,e.ch).command,e.pointArray[t][9]=e.graphicArray[t].graphics.bezierCurveTo(2*cwm,e.ch,1*cwm,e.ch,0,e.ch).command,e.pointArray[t][10]=e.graphicArray[t].graphics.lineTo(0,e.ch/2).command,e.graphicArray[t].set({x:0,y:e.ch,scaleX:1,scaleY:1});break;case"type03":e.bgArray[t].graphics.beginFill("#22ad77").drawRect(0,0,e.cw,e.ch),e.pointArray[t]=[],cwm=e.cw/12,e.pointArray[t][0]=e.graphicArray[t].graphics.moveTo(0,.5*e.ch).command,e.pointArray[t][1]=e.graphicArray[t].graphics.lineTo(e.cw,.5*e.ch).command,e.pointArray[t][2]=e.graphicArray[t].graphics.lineTo(e.cw,.6*e.ch).command,e.pointArray[t][3]=e.graphicArray[t].graphics.bezierCurveTo(11*cwm,.52*e.ch,10*cwm,.75*e.ch,9*cwm,.55*e.ch).command,e.pointArray[t][4]=e.graphicArray[t].graphics.bezierCurveTo(8*cwm,.4*e.ch,7*cwm,.65*e.ch,6*cwm,.55*e.ch).command,e.pointArray[t][5]=e.graphicArray[t].graphics.bezierCurveTo(5*cwm,.45*e.ch,4*cwm,.8*e.ch,3*cwm,.65*e.ch).command,e.pointArray[t][6]=e.graphicArray[t].graphics.bezierCurveTo(2*cwm,.4*e.ch,1*cwm,.8*e.ch,0,.55*e.ch).command,e.pointArray[t][8]=e.graphicArray[t].graphics.lineTo(0,.6*e.ch).command,e.pointArray[t][9]=e.graphicArray[t].graphics.closePath().command,e.pointArray[t][10]=e.graphicArray[t].graphics.moveTo(0,.5*e.ch).command,e.pointArray[t][11]=e.graphicArray[t].graphics.lineTo(0,0).command,e.pointArray[t][12]=e.graphicArray[t].graphics.bezierCurveTo(1*cwm,0,2*cwm,0,3*cwm,0).command,e.pointArray[t][13]=e.graphicArray[t].graphics.bezierCurveTo(4*cwm,0,5*cwm,0,6*cwm,0).command,e.pointArray[t][14]=e.graphicArray[t].graphics.bezierCurveTo(7*cwm,0,8*cwm,0,9*cwm,0).command,e.pointArray[t][15]=e.graphicArray[t].graphics.bezierCurveTo(10*cwm,0,11*cwm,0,12*cwm,0).command,e.pointArray[t][17]=e.graphicArray[t].graphics.lineTo(e.cw,.5*e.ch).command,e.graphicArray[t].set({x:0,y:-e.ch,scaleX:1,scaleY:1});break;case"type04":e.bgArray[t].graphics.beginFill("#ffb000").drawRect(0,0,e.cw,e.ch),e.pointArray[t]=[],cwm=e.cw/9,e.pointArray[t][0]=e.graphicArray[t].graphics.moveTo(0,.5*e.ch).command,e.pointArray[t][1]=e.graphicArray[t].graphics.lineTo(e.cw,.5*e.ch).command,e.pointArray[t][2]=e.graphicArray[t].graphics.lineTo(e.cw,.55*e.ch).command,e.pointArray[t][3]=e.graphicArray[t].graphics.bezierCurveTo(8*cwm,.75*e.ch,7*cwm,.52*e.ch,6*cwm,.65*e.ch).command,e.pointArray[t][4]=e.graphicArray[t].graphics.bezierCurveTo(5*cwm,.8*e.ch,4*cwm,.65*e.ch,3*cwm,.85*e.ch).command,e.pointArray[t][5]=e.graphicArray[t].graphics.bezierCurveTo(2*cwm,1*e.ch,1*cwm,.96*e.ch,0,.95*e.ch).command,e.pointArray[t][6]=e.graphicArray[t].graphics.closePath().command,e.pointArray[t][7]=e.graphicArray[t].graphics.moveTo(0,.5*e.ch).command,e.pointArray[t][8]=e.graphicArray[t].graphics.lineTo(0,0*e.ch).command,e.pointArray[t][9]=e.graphicArray[t].graphics.bezierCurveTo(1*cwm,0*e.ch,2*cwm,0*e.ch,3*cwm,0*e.ch).command,e.pointArray[t][10]=e.graphicArray[t].graphics.bezierCurveTo(4*cwm,0*e.ch,5*cwm,0*e.ch,6*cwm,0*e.ch).command,e.pointArray[t][11]=e.graphicArray[t].graphics.bezierCurveTo(7*cwm,0*e.ch,8*cwm,0*e.ch,9*cwm,0*e.ch).command,e.pointArray[t][12]=e.graphicArray[t].graphics.lineTo(e.cw,.5*e.ch).command,e.pointArray[t][13]=e.graphicArray[t].graphics.closePath().command,e.graphicArray[t].set({x:0,y:-e.ch,scaleX:1,scaleY:1});break;case"type05":e.bgArray[t].graphics.beginFill("#e65024").drawRect(0,0,e.cw,e.ch),e.pointArray[t]=[],chm=e.ch/6,e.pointArray[t][0]=e.graphicArray[t].graphics.moveTo(.5*e.cw,0).command,e.pointArray[t][1]=e.graphicArray[t].graphics.lineTo(.5*e.cw,e.ch).command,e.pointArray[t][2]=e.graphicArray[t].graphics.lineTo(.15*e.cw,e.ch).command,e.pointArray[t][3]=e.graphicArray[t].graphics.bezierCurveTo(.15*e.cw,4*chm,.35*e.cw,5*chm,.25*e.cw,3*chm).command,e.pointArray[t][4]=e.graphicArray[t].graphics.bezierCurveTo(.18*e.cw,1*chm,.45*e.cw,2*chm,.4*e.cw,0).command,e.pointArray[t][5]=e.graphicArray[t].graphics.closePath().command,e.pointArray[t][6]=e.graphicArray[t].graphics.moveTo(.5*e.cw,0).command,e.pointArray[t][7]=e.graphicArray[t].graphics.lineTo(e.cw,0).command,e.pointArray[t][8]=e.graphicArray[t].graphics.bezierCurveTo(e.cw,1*chm,e.cw,2*chm,e.cw,3*chm).command,e.pointArray[t][9]=e.graphicArray[t].graphics.bezierCurveTo(e.cw,4*chm,e.cw,5*chm,e.cw,6*chm).command,e.pointArray[t][10]=e.graphicArray[t].graphics.lineTo(.5*e.cw,e.ch).command,e.pointArray[t][11]=e.graphicArray[t].graphics.closePath().command,e.graphicArray[t].set({x:e.cw,y:0,scaleX:1,scaleY:1})}e.containerArray[t].set({mask:e.graphicArray[t]}),e.imageArray[t].x=e.stage.canvas.width/2,e.imageArray[t].y=e.stage.canvas.height/2,e.imageArray[t].regX=r.width/2,e.imageArray[t].regY=r.height/2}))}t(),window.addEventListener("resize",t)}},{key:"type01_start",value:function(){var e=this;e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,createjs.Tween.get(e.graphicArray[0],{override:!0}).to({x:-e.cw},0).to({x:0},1200,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[0][1],{override:!0}).to({x:.6*e.cw},0).to({x:e.cw},1400,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[0][2],{override:!0}).to({cp1x:.7*e.cw,cp2x:.65*e.cw,x:.75*e.cw},0).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},1200,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[0][3],{override:!0}).to({cp1x:.85*e.cw,cp2x:.7*e.cw,x:.85*e.cw},0).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},1100,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[0][4],{override:!0}).to({cp1x:1.05*e.cw},0).to({cp1x:e.cw},600,createjs.Ease.cubicOut)}},{key:"type01_end",value:function(){var e=this;createjs.Tween.get(e.graphicArray[0],{override:!0}).to({x:0},0).to({x:e.cw},1400,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[0][8],{override:!0}).to({x:0},0).wait(100).to({x:.4*e.cw},1e3,createjs.Ease.cubicOut).to({x:0},0),createjs.Tween.get(e.pointArray[0][9],{override:!0}).to({cp1x:0,cp2x:0,x:0},0).wait(100).to({cp1x:.3*e.cw,cp2x:.35*e.cw,x:.25*e.cw},1200,createjs.Ease.cubicOut).to({cp1x:0,cp2x:0,x:0},0),createjs.Tween.get(e.pointArray[0][10],{override:!0}).to({cp1x:0,cp2x:0,x:0},0).wait(100).to({cp1x:.15*e.cw,cp2x:.3*e.cw,x:.15*e.cw},1300,createjs.Ease.cubicOut).to({cp1x:0,cp2x:0,x:0},0),createjs.Tween.get(e.pointArray[0][11],{override:!0}).to({cp1x:0},0).wait(100).to({cp1x:.05*e.cw},2e3,createjs.Ease.cubicOut).to({cp1x:0},0)}},{key:"type02_start",value:function(){var e=this;e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,createjs.Tween.get(e.graphicArray[1],{override:!0}).to({y:e.ch},0).to({y:0},1200,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[1][1],{override:!0}).to({y:.3*e.ch},0).to({y:0},1400,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[1][2],{override:!0}).to({cp1y:.1*e.ch,cp2y:.22*e.ch,y:.2*e.ch},0).to({cp1y:0,cp2y:0,y:0},1200,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[1][3],{override:!0}).to({cp1y:.2*e.ch,cp2y:0,y:.07*e.ch},0).to({cp1y:0,cp2y:0,y:0},1200,createjs.Ease.cubicOut)}},{key:"type02_end",value:function(){var e=this;createjs.Tween.get(e.graphicArray[1],{override:!0}).to({y:0},0).to({y:-e.ch},1200,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[1][7],{override:!0}).to({y:e.ch},0).to({y:.7*e.ch},1200,createjs.Ease.cubicOut).to({y:e.ch},0),createjs.Tween.get(e.pointArray[1][8],{override:!0}).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},0).to({cp1y:.9*e.ch,cp2y:.78*e.ch,y:.8*e.ch},1200,createjs.Ease.cubicOut).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},0),createjs.Tween.get(e.pointArray[1][9],{override:!0}).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},0).to({cp1y:.8*e.ch,cp2y:e.ch,y:.93*e.ch},1200,createjs.Ease.cubicOut).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},0)}},{key:"type03_start",value:function(){var e=this;e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,createjs.Tween.get(e.graphicArray[2],{override:!0}).to({y:-e.ch},0).to({y:0},1500),createjs.Tween.get(e.pointArray[2][2],{override:!0}).to({y:.4*e.ch},0).wait(600).to({y:.6*e.ch},600).to({y:e.ch},800,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[2][3],{override:!0}).to({cp1y:.4*e.ch,cp2y:.4*e.ch,y:.4*e.ch},0).wait(600).to({cp1y:.52*e.ch,cp2y:.75*e.ch,y:.55*e.ch},600).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},800,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[2][4],{override:!0}).to({cp1y:.4*e.ch,cp2y:.4*e.ch,y:.4*e.ch},0).wait(600).to({cp1y:.4*e.ch,cp2y:.65*e.ch,y:.55*e.ch},600).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},800,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[2][5],{override:!0}).to({cp1y:.4*e.ch,cp2y:.4*e.ch,y:.4*e.ch},0).wait(600).to({cp1y:.45*e.ch,cp2y:.8*e.ch,y:.65*e.ch},600).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},800,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[2][6],{override:!0}).to({cp1y:.4*e.ch,cp2y:.4*e.ch,y:.4*e.ch},0).wait(600).to({cp1y:.4*e.ch,cp2y:.8*e.ch,y:.55*e.ch},600).to({cp1y:e.ch,cp2y:e.ch,y:e.ch},800,createjs.Ease.cubicOut)}},{key:"type03_end",value:function(){var e=this;createjs.Tween.get(e.graphicArray[2],{override:!0}).to({y:0},0).to({y:e.ch},1e3),createjs.Tween.get(e.pointArray[2][11],{override:!0}).to({y:0},0).to({y:.4*e.ch},600).wait(500).to({y:0},0),createjs.Tween.get(e.pointArray[2][12],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.48*e.ch,cp2y:.25*e.ch,y:.45*e.ch},600).wait(500).to({y:0,cp1y:0,cp2y:0},0),createjs.Tween.get(e.pointArray[2][13],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.6*e.ch,cp2y:.35*e.ch,y:.45*e.ch},600).wait(500).to({y:0,cp1y:0,cp2y:0},0),createjs.Tween.get(e.pointArray[2][14],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.55*e.ch,cp2y:.2*e.ch,y:.35*e.ch},600).wait(500).to({y:0,cp1y:0,cp2y:0},0),createjs.Tween.get(e.pointArray[2][15],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.6*e.ch,cp2y:.2*e.ch,y:.45*e.ch},600).wait(500).to({y:0,cp1y:0,cp2y:0},0)}},{key:"type04_start",value:function(){var e=this;e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,createjs.Tween.get(e.graphicArray[3],{override:!0}).to({y:-e.ch},0).to({x:0,y:0},1e3,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[3][2],{override:!0}).to({y:.55*e.ch},0).wait(300).to({y:e.ch},1500,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[3][3],{override:!0}).to({y:.65*e.ch,cp1y:.75*e.ch,cp2y:.52*e.ch},0).wait(300).to({y:e.ch,cp1y:e.ch,cp2y:e.ch},1500,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[3][4],{override:!0}).to({y:.85*e.ch,cp1y:.8*e.ch,cp2y:.65*e.ch},0).wait(300).to({y:e.ch,cp1y:e.ch,cp2y:e.ch},1500,createjs.Ease.cubicOut),createjs.Tween.get(e.pointArray[3][5],{override:!0}).to({y:1*e.ch,cp1y:.96*e.ch,cp2y:.95*e.ch},0).wait(300).to({y:e.ch,cp1y:e.ch,cp2y:e.ch},1500,createjs.Ease.cubicOut)}},{key:"type04_end",value:function(){var e=this;createjs.Tween.get(e.graphicArray[3],{override:!0}).to({y:0},0).to({y:e.ch},1e3,createjs.Ease.cubicIn),createjs.Tween.get(e.pointArray[3][8],{override:!0}).to({y:0},0).to({y:.45*e.ch},1500,createjs.Ease.cubicOut).wait(500).to({y:0},0),createjs.Tween.get(e.pointArray[3][9],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.25*e.ch,cp2y:.48*e.ch,y:.35*e.ch},1500,createjs.Ease.cubicOut).wait(500).to({y:0,cp1y:0,cp2y:0},0),createjs.Tween.get(e.pointArray[3][10],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:.2*e.ch,cp2y:.35*e.ch,y:.15*e.ch},1500,createjs.Ease.cubicOut).wait(500).to({y:0,cp1y:0,cp2y:0},0),createjs.Tween.get(e.pointArray[3][11],{override:!0}).to({y:0,cp1y:0,cp2y:0},0).to({cp1y:0*e.ch,cp2y:.04*e.ch,y:.05*e.ch},1500,createjs.Ease.cubicOut).wait(500).to({y:0,cp1y:0,cp2y:0},0)}},{key:"type05_start",value:function(){var e=this;e.cw=1.5*e.stage.canvas.width,e.ch=1.5*e.stage.canvas.height,createjs.Tween.get(e.graphicArray[4],{override:!0}).to({x:e.cw},0).to({x:0},1500,createjs.Ease.cubicInOut),createjs.Tween.get(e.pointArray[4][2],{override:!0}).to({x:.15*e.cw},0).to({x:0},1500,createjs.Ease.cubicInOut),createjs.Tween.get(e.pointArray[4][3],{override:!0}).to({cp1x:.15*e.cw,cp2x:.35*e.cw,x:.25*e.cw},0).to({cp1x:0,cp2x:0,x:0},1500,createjs.Ease.cubicInOut),createjs.Tween.get(e.pointArray[4][4],{override:!0}).to({cp1x:.18*e.cw,cp2x:.45*e.cw,x:.4*e.cw},0).to({cp1x:0,cp2x:0,x:0},1500,createjs.Ease.cubicInOut)}},{key:"type05_end",value:function(){var e=this;createjs.Tween.get(e.graphicArray[4],{override:!0}).to({x:0},0).to({x:-e.cw},1500,createjs.Ease.cubicInOut),createjs.Tween.get(e.pointArray[4][7],{override:!0}).to({x:e.cw},0).to({x:.85*e.cw},1500,createjs.Ease.cubicInOut).to({x:e.cw},0),createjs.Tween.get(e.pointArray[4][8],{override:!0}).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},0).to({cp1x:.85*e.cw,cp2x:.65*e.cw,x:.75*e.cw},1500,createjs.Ease.cubicInOut).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},0),createjs.Tween.get(e.pointArray[4][9],{override:!0}).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},0).to({cp1x:.85*e.cw,cp2x:.55*e.cw,x:.6*e.cw},1500,createjs.Ease.cubicInOut).to({cp1x:e.cw,cp2x:e.cw,x:e.cw},0)}}])&&r(t.prototype,c),a&&r(t,a),e}()}]);