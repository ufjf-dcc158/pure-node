var http = require('http');
var url = require('url');

function iniciar(route, handlers){
	console.log("Criando o servidor...");
	var server = http.createServer(trataRequisicao);

	function trataRequisicao (request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Requisição realizada em:", pathname);
		route(pathname, handlers, request, response);
	}
	console.log("Iniciando servidor...");
	server.listen(8888);
	console.log("Tratando requisições http://localhost:8888...");
}

exports.iniciar = iniciar;
