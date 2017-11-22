var http = require('http');

function onCreate(request, response){
    console.log("사용자가 request합니다"+request.url);
    response.writeHead(200,{"Context-Type": "text/plan" });
    response.write("this is server response(data....)");
    response.end();
}

http.createServer(onCreate).listen(8080);
console.log("launching server");