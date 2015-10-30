(function(k,n,t){
	n=n||'trackperf';window['hyojun.track-perf']=n;
	window[n]=window[n]||{'k':k,'u':'//localhost:1144/api/track'};
	try {
		window.performance.timing; new Image;
		t = document.createElement('script');
		t.async = true; t.src = 'https://cdn.rawgit.com/hankpillow/hyojun-trackperf/working/src/track-perf.js';
		document.documentElement.appendChild(t);
	} catch (e) { }
})();
