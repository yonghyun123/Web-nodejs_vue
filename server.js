var connect = require('connect');
var http = require('http');

var app = connect();

function about(request, response){
    console.log("about 페이지를 요청했습니다.");
    
}
function email(request,response){
    console.log("email 페이지를 요청했습니다");
}
app.use('/about', about);
app.use('/email', email);

http.createServer(app).listen(8080);
console.log("server launching...");

