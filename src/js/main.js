var a = 1, // Active work
al = 4, // Work length
i = 0,
iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent ),
ii;

// Query Selector
function q(s) {
	return document.querySelector(s);
}

// Next Work
function n(e) {
	q('#w'+a).className = '';
	a++;
	if (a > al) a = 1;
	q('#w'+a).className = 'active';

	// Reset slider timer
	nii();

	if (e) e.preventDefault();
}

if (iOS) {
	q('#nx').addEventListener("touchstart", n);	
}

// Setup work image clicks
var ol = document.querySelectorAll('#w ol');
for ( var ol_i = ol.length-1; ol_i >= 0; ol_i-- ) {
	if (iOS) {
		ol[ol_i].addEventListener("touchstart", ni);
	} else {
		ol[ol_i].addEventListener("click", ni);
	}
}

// Next image interval
function nii() {
	clearTimeout(ii);
	ii = setTimeout( ni, 2500 );
}

nii();

// Next image within work
function ni() {

	// Count length
	var ai = document.querySelectorAll('#w' + a + ' li'),
		l = ai.length;

	// Increment active
	i++;
	if ( i >= l ) i = 0;

	// Place class
	q('#w' + a + ' .active').className = '';
	ai[i].className = 'active';

	nii();
	
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-133608-17', 'auto');
ga('send', 'pageview');