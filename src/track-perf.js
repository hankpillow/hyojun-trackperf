(function(){
	'use strict';
	
	if (!window || !document)return;
	var trackperf, win = window, doc = document;
	
	trackperf = win[win['hyojun.track-perf']];
	if (!trackperf || !!trackperf && !trackperf.k){
		trackperf.status = 'missing api';
	   	return;
	}
	trackperf.status = 'ready';
	
	function push(t,d){
		(new Image()).src = [
			trackperf.u+'?k='+trackperf.k,
			't='+t]
			.concat(d)
			.join('&');
	}
	
	function collect(t){
		return [
			['ce', t.connectEnd],
			['cs', t.connectStart],
			['dc', t.domComplete],
			['dce', t.domContentLoadedEventEnd],
			['dcs', t.domContentLoadedEventStart],
			['de', t.domainLookupEnd],
			['di', t.domInteractive],
			['dl', t.domLoading],
			['ds', t.domainLookupStart],
			['fs', t.fetchStart],
			['le', t.loadEventEnd],
			['ls', t.loadEventStart],
			['ns', t.navigationStart],
			['re', t.redirectEnd],
			['rpe', t.responseEnd],
			['rps', t.responseStart],
			['rqs', t.requestStart],
			['rs', t.redirectStart],
			['sc', t.secureConnectionStart],
			['ue', t.unloadEventEnd],
			['us', t.unloadEventStart]
		];
	}
	
	function loaded(){
		push('page', collect(win.performance.timing).map(function(blob){
			blob[1] = parseInt(blob[1]/1000)||0;
			return blob.join('=');
		}));
	}

	if (doc.readyState === 'complete'){
		loaded();
		return;
	}
	win.onload = function(old){
		return function(evt){
			loaded();
			return old? old(evt) : evt;
		};
	}(win.onload);
})();
