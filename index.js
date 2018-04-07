// Minimal military symbol server using nodejs and milsymbol
const http = require("http");
const ms = require("milsymbol");
const Canvas = require("canvas-prebuilt"); // switch to canvas when node-pre-gyp follows redirects
const url = require("url");
const hostname = "127.0.0.1";
const port = 3000;

ms.Symbol.prototype.asNodeCanvas = function() {
  const MAX_SIZE = 2000; // Maximum width/hight for the canvas to aviod out of memory
  ms._brokenPath2D = true; // Make it use our custom polyfill for Path2D
  const ratio = 1;
  const canvas = new Canvas(
    Math.min(this.width, MAX_SIZE),
    Math.min(this.height, MAX_SIZE)
  );
  const ctx = canvas.getContext("2d");
  ctx.scale(ratio * this.style.size / 100, ratio * this.style.size / 100);
  ctx.translate(
    -(this.bbox.x1 - this.style.strokeWidth - this.style.outlineWidth),
    -(this.bbox.y1 - this.style.strokeWidth - this.style.outlineWidth)
  );
  this.canvasDraw.call(this, ctx, this.drawInstructions);
  return canvas;
};

const server = http.createServer((req, res) => {
  var url_parts = url.parse(req.url, true);
  var url_pathname = url_parts.pathname.split("/");
  var url_filename = url_pathname[url_pathname.length - 1];
  var url_filenametype = url_filename.split(".");
  if (url_filenametype[1].toUpperCase() == "SVG") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/svg+xml");
    var symbol = new ms.Symbol(
      url_filenametype[0],
      Object.assign({}, url_parts.query)
    ).asSVG();
    res.end(symbol);
    return;
  }
  if (url_filenametype[1].toUpperCase() == "PNG") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/png");
    new ms.Symbol(url_filenametype[0], Object.assign({}, url_parts.query))
      .asNodeCanvas()
      .pngStream()
      .pipe(res);
    return;
  }
  res.statusCode = 404;
  res.end("404 Not found");
});

server.listen(port, hostname, () => {
  console.log(
    `Try out the symbol server: http://${hostname}:${port}/SFG-UCI---.png`
  );
});
