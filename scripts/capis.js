var editorJS = ace.edit("editor-javascript");
editorJS.setTheme("ace/theme/monokai");
editorJS.getSession().setMode("ace/mode/javascript");

var editorHTML = ace.edit("editor-html");
editorHTML.setTheme("ace/theme/monokai");
editorHTML.getSession().setMode("ace/mode/html");

var editorCSS = ace.edit("editor-css");
editorCSS.setTheme("ace/theme/monokai");
editorCSS.getSession().setMode("ace/mode/css");

$(document).ready(function() {
	$('#editor-html').hide();
	$('#editor-css').hide();
	$('#editor-javascript').hide();
});

$('#preview-button').click(function(){
	$('#website-preview').show();
	$('#editor-html').hide();
	$('#editor-css').hide();
	$('#editor-javascript').hide();
})

$('#html-button').click(function(){
	$('#website-preview').hide();
	$('#editor-html').show();
	$('#editor-css').hide();
	$('#editor-javascript').hide();
	var editorHTML = ace.edit("editor-html");
    editorHTML.setTheme("ace/theme/monokai");
    editorHTML.getSession().setMode("ace/mode/html");
})

$('#css-button').click(function(){
	$('#website-preview').hide();
	$('#editor-html').hide();
	$('#editor-css').show();
	$('#editor-javascript').hide();
	var editorCSS = ace.edit("editor-css");
    editorCSS.setTheme("ace/theme/monokai");
    editorCSS.getSession().setMode("ace/mode/css");
})

$('#js-button').click(function(){
	$('#website-preview').hide();
	$('#editor-html').hide();
	$('#editor-css').hide();
	$('#editor-javascript').show();
	var editorJS = ace.edit("editor-javascript");
    editorJS.setTheme("ace/theme/monokai");
    editorJS.getSession().setMode("ace/mode/javascript");
})

for(i=0; i<tags.length; i++){
	$('#append-tags').append('<button class="tag">'+tags[i]+'</button>');
};

$('#pageTitle-change').text(pageTitle);
$('#username-change').text(submitter);
$('#APIType-change').text(APIType);