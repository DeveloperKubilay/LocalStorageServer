# httpserve

![httpserve](https://i.imgur.com/O6lZAA6.png)

A lightweight HTTP server to browse and download files from your local directories.

## Features

- 🚀 Zero configuration web server
- 📂 Directory listing with navigation
- 📄 File serving with appropriate content types
- 🔗 Easy access to local files through a browser

## Installation

```bash
npm i httpserve -g
```

## Usage

Basic usage (serves current directory on port 80):

```bash
httpserve
```

Specify a different port:

```bash
httpserve 8080
```

Specify a custom directory to serve:

```bash
httpserve 80 files
```

Specify both port and directory:

```bash
httpserve 3000 path/to/files
```

## How It Works

Once started, httpserve will display a message like:

```
Serving HTTP on 0.0.0.0 port 80 (http://localhost:80/) ...
```

Visit the displayed URL in your browser to browse files and directories.

## Content Types

httpserve automatically detects and serves files with appropriate content types including:

- HTML (.html, .htm)
- CSS (.css)
- JavaScript (.js)
- Images (.png, .jpg, .jpeg, .gif, .svg)
- Text (.txt)
- JSON (.json)
- Other files (served as binary downloads)

## License

MIT

## Contributing

Pull requests are welcome!
