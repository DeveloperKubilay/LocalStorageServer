# LocalStorageServer
Allows downloading local files<br>
Installation: `npm init -y && npm i express fs`<br>
Start: `npm start`<br>
```
echo "const app = require('express')()
fs = require('fs')
app.listen(3000)

try{fs.readdirSync('./files')}catch{fs.mkdirSync('./files')}
app.get('/file/:file', function (req, res) {
 if(fs.existsSync('./files/'+req.params.file)) {
 res.download('./files/'+req.params.file)
 }else return res.end();
})" > index.js
```
