var port = 3000

const app = require('express')()
fs = require('fs')
app.listen(port)

try{fs.readdirSync('./files')}catch{fs.mkdirSync('./files')}
app.get('/file/:file', function (req, res) {
 if(fs.existsSync('./files/'+req.params.file)) {
 res.download('./files/'+req.params.file)
 }else return res.end();
})
