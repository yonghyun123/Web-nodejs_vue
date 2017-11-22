express Framework사용할때,

npm install -g express-generator

기본 view templete을 html로 사용하고 싶을때,

npm install ejs
app.js에서 
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');