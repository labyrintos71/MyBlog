!function(t){
	var a,e,n;
	return a=function(t){
		return Array.prototype.slice.call(document.querySelectorAll(t))
	},	
		e={
			home:"0%",about:"100%",friends:"200%",projects:"300%"},
		
		n=function(){
			var t;
			return t=location.hash.substr(3),
			0===a('section[data-name="'+t+'"]').length?location.hash="#!/home":(a("#nav a.active")[0].classList.remove("active"),
				a('#nav a[href="#!/'+t+'"]')[0].classList.add("active"),
				document.body.className=t+"-on"+(document.body.classList.contains("loaded")?" loaded":""),
				a("#main")[0].style.cssText="-webkit-transform: translate3d(-"+e[t]+", 0, 0); transform: translate3d(-"+e[t]+", 0, 0)")},
			
			t.onhashchange=n,
			
			n(),

			setTimeout(function(){return document.body.classList.add("loaded")},1500)}(this);