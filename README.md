## Milsymbol in Node.js

![milsymbol-server](https://raw.githubusercontent.com/spatialillusions/milsymbol-server/master/milsymbol-server.png?raw=true)

This is an example of how you can create a minimal military symbol server using Node.js and milsymbol.

It supports output of military symbols as **SVG** and as **PNG**, you can use all options available for milsymbol to add modifiers for your symbols as well.

Installation:

```
npm install milsymbol-server
```

To start the server, navigate to this folder in a terminal and run:

```
node index.js
```

Docker Container:

milsymbol-server is also available from Docker Hub. In order to run the server as a daemon and map the exposed port to your host just run

```
docker run -d -p 3000:3000 spatialillusions/milsymbol-server:1.0.0
```

The symbols are named **SIDC**.**FILETYPE**, and you can access them using:

http://${hostname}:${port}/SFG-UCI---.png _or_

http://${hostname}:${port}/SFG-UCI---.svg

You can add any milsymbol options to the query string

SFG-UCI---.png?uniqueDesignation=BA01&square=true
