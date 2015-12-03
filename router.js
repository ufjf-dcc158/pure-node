function route(pathname, handlers, request, response){
	console.log("Roteando: '"+ pathname+"'");
	if(typeof handlers[pathname] === 'function'){
		handlers[pathname](request, response);
	} else {
		console.log("Caminho não encontrado!");
		handlers['/404.html'](request, response);
	}

}

exports.route = route