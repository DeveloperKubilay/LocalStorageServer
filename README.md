# httpsrve

![httpsrv](https://i.imgur.com/O6lZAA6.png)

A lightweight HTTP server to browse and download files from your local directories.

## Features

- 🚀 Zero configuration web server
- 📂 Directory listing with navigation
- 📄 File serving with appropriate content types
- 🔗 Easy access to local files through a browser

## Installation

```bash
npm i httpsrve -g
```

## Usage

Basic usage (serves current directory on port 80):

```bash
httpsrv
```

Specify a different port:

```bash
httpsrv 8080
```

Specify a custom directory to serve:

```bash
httpsrv 80 files
```

Specify both port and directory:

```bash
httpsrv 3000 path/to/files
```

## How It Works

Once started, httpsrv will display a message like:

```
Serving HTTP on 0.0.0.0 port 80 (http://localhost:80/) ...
```

Visit the displayed URL in your browser to browse files and directories.

## Content Types

httpsrve automatically detects and serves files with appropriate content types including:

- HTML (.html, .htm)
- CSS (.css)
- JavaScript (.js)
- Images (.png, .jpg, .jpeg, .gif, .svg)
- Text (.txt)
- JSON (.json)
- Other files (served as binary downloads)
