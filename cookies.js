function crearCookie(nombre, valor, caducidad) { 
	var d = new Date();
	d.setTime(d.getTime() + (caducidad * 24 * 60 * 60 * 1000));
	var expira = "expires=" + d.toUTCString();
	document.cookie = nombre + "=" + valor + ";" + expira;
}
function borrarCookies(nombre) {
    document.cookie = nombre + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function leerCookies(nombre) {
	/* Creamos una variable con el string a buscar mas el = */
	var cadena = nombre + "=";
	/* comprobamos si existen cookies */
	if (document.cookie.length > 0) {
		/* Creamos una variable que contiene el indice de la cadena 
			-1 si no existe cadena */
		i = document.cookie.indexOf(cadena);
		/* comprobamos si existe la cadena */
		if (i !== -1) {
			i += cadena.length;
			j = document.cookie.indexOf(';', i);
			if (j === -1)
				j = document.cookie.length;
				return unescape(document.cookie.substring(i, j)); 
		}
		console.log("No se encuentra el nombre de la cookie");
	}
	return console.log("No hay cookies almacenadas");	
}
