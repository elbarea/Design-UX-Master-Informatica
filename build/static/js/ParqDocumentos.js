// 03/06/2016 12:37
//Nombre: 	Parqdocumentos.js
//Version:	1.00
//Fecha:	20160603
//Autor:	Arquitectura Prosa

function inicializar_desplegables() {

	var doc = document.getElementById('documentos');
	var serv = document.getElementById('servicios');
	var info = document.getElementById('informes');

	if (info != null) {
		info.style.display = 'none';
	}
	if (doc != null) {
		doc.style.display = 'none';
		document.getElementById('imagen_doc').src = document.getElementById('imagen_doc').src.replace('Replegar','Desplegar');
		document.getElementById('imagen_doc').setAttribute('aria-expanded','false');
		document.getElementById('imagen_doc').setAttribute('alt','Desplegar');
	}
	if (serv != null) {
		serv.style.display = 'none';
		document.getElementById('imagen_serv').src = document.getElementById('imagen_serv').src.replace('Replegar','Desplegar');
		document.getElementById('imagen_doc').setAttribute('aria-expanded','false');
		document.getElementById('imagen_doc').setAttribute('alt','Desplegar');
	}
}

function muestra_oculta_doc() {

	if (document.getElementById) {
		
		var doc = document.getElementById('documentos');
		var serv = document.getElementById('servicios');
		var info = document.getElementById('informes');
		
		if (serv != null) {
			serv.style.display = 'none';
			document.getElementById('imagen_serv').src = document.getElementById('imagen_serv').src.replace('Replegar','Desplegar');
			document.getElementById('imagen_doc').setAttribute('aria-expanded','false');
			document.getElementById('imagen_doc').setAttribute('alt','Desplegar');
		}
		if (info != null) {
			if (info.style.display == 'none'){
				info.style.display = 'block'
				document.getElementById('imagen_doc').src = document.getElementById('imagen_doc').src.replace('Desplegar','Replegar');
				document.getElementById('imagen_doc').setAttribute('aria-expanded','true');
				document.getElementById('imagen_doc').setAttribute('alt','Replegar');
			}else{
				info.style.display = 'none'
				document.getElementById('imagen_doc').src = document.getElementById('imagen_doc').src.replace('Replegar','Desplegar');
				document.getElementById('imagen_doc').setAttribute('aria-expanded','false');
				document.getElementById('imagen_doc').setAttribute('alt','Desplegar');
			}
		}
		if (doc != null) {
			if (doc.style.display == 'none') {
				doc.style.display = 'block'
				document.getElementById('imagen_doc').src = document.getElementById('imagen_doc').src.replace('Desplegar','Replegar');
				document.getElementById('imagen_doc').setAttribute('aria-expanded','true');
				document.getElementById('imagen_doc').setAttribute('alt','Replegar');
			} else {
				doc.style.display = 'none'
				document.getElementById('imagen_doc').src = document.getElementById('imagen_doc').src.replace('Replegar','Desplegar');
				document.getElementById('imagen_doc').setAttribute('aria-expanded','false');
				document.getElementById('imagen_doc').setAttribute('alt','Desplegar');
			}
		}
	}
	if (document.getAttribute){
		
		var contraido = document.getAttribute('aria-expanded','false');
		console.log(contraido);
		
	}
}
function muestra_oculta_serv() {

	if (document.getElementById) {

		var serv = document.getElementById('servicios');
		var doc = document.getElementById('documentos');
		var info = document.getElementById('informes');

		if (doc != null) {
			doc.style.display = 'none';
			document.getElementById('imagen_doc').src = document.getElementById('imagen_doc').src.replace('Replegar','Desplegar');
			document.getElementById('imagen_doc').setAttribute('aria-expanded','false');
			document.getElementById('imagen_doc').setAttribute('alt','Desplegar');
		}
		if (info != null) {
			info.style.display = 'none'
		}
		if (serv != null) {
			if (serv.style.display == 'none') {
				serv.style.display = 'block'
				document.getElementById('imagen_serv').src = document.getElementById('imagen_serv').src.replace('Desplegar','Replegar');
				document.getElementById('imagen_doc').setAttribute('aria-expanded','true');
				document.getElementById('imagen_doc').setAttribute('alt','Replegar');
			} else {
				serv.style.display = 'none'
				document.getElementById('imagen_serv').src = document.getElementById('imagen_serv').src.replace('Replegar','Desplegar');
				document.getElementById('imagen_doc').setAttribute('aria-expanded','false');
				document.getElementById('imagen_doc').setAttribute('alt','Desplegar');
			}
		}
	}
}

window.onload = function() {

	inicializar_desplegables();
}