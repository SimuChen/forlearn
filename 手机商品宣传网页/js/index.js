// 获取元素


var getElem= function(selector){
	return document.querySelector(selector);
}

var getAllElem=function(selector){
	return document.querySelectorAll(selector);
}

//获取元素样式

var getCls=function(element){
	return element.getAttribute('class');
}

//设置元素样式

var setCls=function(element,cls){
	return element.setAttribute('class',cls);
}

//为元素添加样式

var addCls=function(element,cls){
	var baseCls=getCls(element);
	if(baseCls.indexOf(cls)===-1){
		setCls(element,baseCls+' '+cls);
	}
}

//为元素删除样式
var delCls=function(element,cls){
	var baseCls=getCls(element);
	if(baseCls.indexOf(cls) !=-1){
		setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '))
	}
} 

// 第一步：初始化样式 init

var screenAnimateElements={
	'.screen-1' : [
		'.screen-1__heading',
		'.screen-1__phone',
		'.screen-1__shadow',
	],
	'.screen-2' : [
		'.screen-2__heading',
		'.screen-2__phone',
		'.screen-2__subheading',
		'.screen-2__point_i_1',
		'.screen-2__point_i_2',
		'.screen-2__point_i_3',
	],
	'.screen-3' : [
		'.screen-3__heading',
		'.screen-3__phone',
		'.screen-3__subheading',
		'.screen-3__features',
	],
	'.screen-4' : [
		'.screen-4__heading',
		'.screen-4__subheading',
		'.screen-4__type__item-i-1',
		'.screen-4__type__item-i-2',
		'.screen-4__type__item-i-3',
		'.screen-4__type__item-i-4',
	],
	'.screen-5' : [
		'.screen-5__heading',
		'.screen-5__bg',
		'.screen-5__subheading',
	],
};

//设置屏内元素为初始状态
var setScreenAnimateInit =function(screenCls){
	var screen = document.querySelector(screenCls); // 获取当前屏的元素
	var animateElements=screenAnimateElements[screenCls]; // 需要设置动画的元素

	for (var i=0;i<animateElements.length;i++) {
		var element = document.querySelector(animateElements[i]);
		var baseCls = element.getAttribute('class');

		element.setAttribute('class',baseCls +' '+animateElements[i].substr(1)+'_animate_init');
	}
}

//设置播放屏内的元素动画

var playScreenAnimateDone=function(screenCls){
	var screen = document.querySelector(screenCls); // 获取当前屏的元素
	var animateElements=screenAnimateElements[screenCls]; // 需要设置动画的元素
	for (var i=0;i<animateElements.length;i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');

				element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));

			}
}

window.onload = function(){
	for(k in screenAnimateElements){
		setScreenAnimateInit(k);
	}
}

//第二步：滚动的到哪里，就播放到哪里

window.onscroll = function(){
	var top = document.body.scrollTop || document.documentElement.scrollTop;

	if (top>80) {
		addCls(getElem('.header'),'header_status_black');
	}else{
		delCls(getElem('.header'),'header_status_black');
	}

	if(top>1){
		playScreenAnimateDone('.screen-1');
	}
	if(top>800*1){
		playScreenAnimateDone('.screen-2');
	}
	if(top>800*2){
		playScreenAnimateDone('.screen-3')
	}
	if(top>800*3){
		playScreenAnimateDone('.screen-4')
	}
	if(top>800*4){
		playScreenAnimateDone('.screen-5')
	}
}