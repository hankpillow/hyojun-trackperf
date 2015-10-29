(function(k,n,t){
	n=n||'trackperf';window['hyojun.track-perf']=n;
	window[n]=window[n]||{'k':k,'u':'//localhost:1144/api/track'};
	try {
		window.performance.timing; new Image;
		t = document.createElement('script');
		t.async = true; t.src = 'https://app.getmeat.io/igor-almeida/js-trackperf/repository/raw/branch/working/src/track-perf.js';
		document.documentElement.appendChild(t);
	} catch (e) { }
})();
