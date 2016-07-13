var connect = require('connect'),
    serveStatic = require('serve-static');
 
connect().use( serveStatic ("angularjs")).listen(5000);