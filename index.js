#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = Number(process.argv[2]) || 80;
const customPath = process.argv[3] ? path.join(__dirname, process.argv[3]) : null || process.cwd();

try {
    const pathStats = fs.statSync(customPath);
    if (!pathStats.isDirectory()) {
        console.error(`Error: ${customPath} is not a directory`);
        process.exit(1);
    }
} catch (error) {
    console.error(`Error: ${customPath} does not exist`);
    process.exit(1);
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    const requestedPath = path.join(customPath, pathname);

    fs.stat(requestedPath, (err, stats) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('Not found');
        }

        if (stats.isDirectory()) {
            fs.readdir(requestedPath, (err, files) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Error reading directory');
                }

                let html = `<html><head><title>Directory listing for ${pathname}</title></head>`;
                html += `<body><h1>Directory listing for ${pathname}</h1><hr><ul>`;
                
                if (pathname !== '/') {
                    html += `<li><a href="${path.dirname(pathname)}">Parent Directory</a></li>`;
                }

                files.forEach(file => {
                    const filePath = path.join(pathname, file);
                    let isDir = false;
                    try {
                        isDir = fs.statSync(path.join(requestedPath, file)).isDirectory();
                    } catch (e) {}
                    html += `<li><a href="${filePath}">${file}${isDir ? '/' : ''}</a></li>`;
                });
                
                html += '</ul><hr></body></html>';
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(html);
            });
        } else {
            fs.readFile(requestedPath, (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Error reading file');
                }

                let contentType = 'application/octet-stream';
                const ext = path.extname(requestedPath).toLowerCase();
                switch(ext) {
                    case '.html': case '.htm': contentType = 'text/html'; break;
                    case '.css': contentType = 'text/css'; break;
                    case '.js': contentType = 'text/javascript'; break;
                    case '.json': contentType = 'application/json'; break;
                    case '.png': contentType = 'image/png'; break;
                    case '.jpg': case '.jpeg': contentType = 'image/jpeg'; break;
                    case '.gif': contentType = 'image/gif'; break;
                    case '.svg': contentType = 'image/svg+xml'; break;
                    case '.txt': contentType = 'text/plain'; break;
                }

                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
            });
        }
    });
});

server.listen(port, () => 
    console.log(`Serving HTTP on 0.0.0.0 port ${port} (http://localhost:${port}/) ...`)
);
