(function(k,n,t){
	n=n||'trackperf';window['hyojun.track-perf']=n;
	window[n]=window[n]||{'api_key':k};
	try {
		window.performance.timing; new Image;
		t = document.createElement('script');
		t.async = true; t.src = '//localhost:8000/src/track-perf.js';
		document.documentElement.appendChild(t);
	} catch (e) { }
})();
