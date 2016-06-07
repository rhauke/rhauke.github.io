/* ========================================
 *	Collapse menu after a selection was made 
 * ======================================*/
$(document).ready(function () {
		$("nav").find("li").on("click", "a", 	function () { $('.navbar-collapse.in').collapse('hide'); 
															}
								);
			}
	);
/* ========================================
 * Display the language according to function parameter
 * 'language'	values D,E,d,e
 * ======================================*/
function setLanguage(language){ 
	var lang;

	lang=language.toLowerCase();
	if ((lang != 'd') && (lang != 'e')){
		alert("Expected function parameter 'D' or 'E'");
		return;
	}
	if (lang == 'd') {
		displayByClassName("DE", true);
		displayByClassName("EN", false);
	}
	else {
		displayByClassName("EN", true);
		displayByClassName("DE", false);
	}
};

/* =================================================
	Hide Jumbotron, unhide all others - or vice versa	
	mode=true		hide Jumbotron, unhide all others
	mode=false		unhide Jumbotron, hide all others
 * ===============================================*/
 function setDisplay(mode){
	var elem, i, jumbo, others;
	if (mode){
		jumbo="none";
		others="block";
	}
	else {
		jumbo="block";
		others="none";
	}
 	elem=document.getElementsByClassName('jumbotron');
	for (i=0; i<elem.length; i++) {
			elem[i].style.display=jumbo;
	}
 	elem=document.getElementsByTagName('nav');
	for (i=0; i<elem.length; i++) {
			elem[i].style.display=others;
	}
	elem=document.getElementById('services');
	elem.style.display=others;
	elem=document.getElementById('contact');
	elem.style.display=others;
	elem=document.getElementById('about-us');
	elem.style.display=others;
	elem=document.getElementById('our-customers');
	elem.style.display=others;
 };
/* ========================================
	Show/hide all elements of a given class
	'cName'	String containing the class name
	'mode'	Boolean - true=Show, false=Hide
 * ======================================*/
function displayByClassName(cName, mode){
	var elem, i;
	elem=document.getElementsByClassName(cName);
	for (i=0; i<elem.length; i++) {
		if ( mode ) {
			elem[i].style.display = "block";
		}
		else {
			elem[i].style.display="none";
		}
	}
}

/* ========================================
	Show/hide element of a given ID
	'IdName'	String containing the ID 
	'mode'	Boolean - true=Show, false=Hide
 * ======================================*/
function displayById(idName, mode){
	var elem,i;
	elem=document.getElementById(idName);
	if ( mode ) {
		elem.style.display="block";
	}
	else {
		elem.style.display="none";
	}
}
