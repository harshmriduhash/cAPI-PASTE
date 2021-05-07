$('#importHeader').load('htmlexports/headerfooter.html #exportHeader', function(){
	$('.homeURL').attr('href', 'index.html');
	$('#capi-paste-logo').attr('src', 'images/capipastelogo.gif');
});
$('#importFooter').load('htmlexports/headerfooter.html #exportFooter');