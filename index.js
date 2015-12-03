var servidor = require('./servidor');
var route = require('./router').route;
var handlers = require('./handlers');

var mapa = {};
mapa["/"] = handlers.index;
mapa["/index.html"] = handlers.index;
mapa["/modelo.html"] = handlers.modelo;
mapa["/loop.html"] = handlers.loop;
mapa["/soma.html"] = handlers.soma;
mapa["/404.html"] = handlers.notfound;

console.log("Iniciando a aplicação...");
servidor.iniciar(route, mapa);

