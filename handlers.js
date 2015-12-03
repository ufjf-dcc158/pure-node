var url = require('url');

function index(request, response){
	console.log("Handler: index");
	var pathname = url.parse(request.url).pathname;
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("<h1>Olá mundo!</h1>\n");
	response.write("Você solicitou:"+ pathname);
	response.end();
}

function notfound(request, response){
	console.log("Handler: notfound");
	var pathname = url.parse(request.url).pathname;
	response.writeHead(404, {"Content-Type":"text/html"});
	response.write("<h1>Página não encontrada!</h1>\n");
	response.write("Você solicitou: "+ pathname+" que não existe neste servidor!");
	response.end();
}

function modelo(request, response){
	console.log("Handler: modelo");
	var fs = require('fs');
	fs.readFile("./modelo.html", 'utf8', function (err, data) {
		if(!err){
			var teste = 'Alô!';
			response.writeHead(200, {"Content-Type":"text/html"});
			response.write(data.replace("%teste%", teste));
			response.end();
		}else{
			notfound(request, response);			
		}
	});
}

function loop(request, response){
	console.log("Handler: loop");
	var t = new Date().getTime()+10*1000;
	while(new Date().getTime()<t){}
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("<h1>Loop</h1>");	
	response.write("<p>loop executado.</p>");
	response.end();
	console.log("Fim do loop!");	
}

function soma(request, response){
	console.log("Handler: soma");
	var query = url.parse(request.url, true).query;
	response.writeHead(200, {"Content-Type":"text/html"});
	
	var a = parseInt(query["a"]);
	var b = parseInt(query["b"]);
	var soma = a+b;

	response.write("<h1>Soma</h1>");	
	response.write("<p>A soma de "+a+"+"+b+"="+soma+"</p>");
	response.end();
}


exports.index = index;
exports.notfound = notfound;
exports.modelo = modelo;
exports.loop = loop;
exports.soma = soma;