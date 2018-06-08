## Milsymbol in Node.js

![milsymbol-server](https://raw.githubusercontent.com/spatialillusions/milsymbol-server/master/milsymbol-server.png)

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

milsymbol-server will be available from Docker Hub, but at the moment you will have to build the server by your self by running

```
docker build -t spatialillusions/milsymbol-server:1.0.0 .
```

In order to run the server as a daemon and map the exposed port to your host just run

```
docker run -d -p 2525:2525 spatialillusions/milsymbol-server:1.0.0
```

The symbols are named **SIDC**.**FILETYPE**, and you can access them using:

http://${hostname}:${port}/SFG-UCI---.png _or_

http://${hostname}:${port}/SFG-UCI---.svg

You can add any milsymbol options to the query string

SFG-UCI---.png?uniqueDesignation=BA01&square=true

## Public test server

Thanks to the wonderful people at [syncpoint.io](https://syncpoint.io) there is a public server that you can try out at:

https://milsymbol-server.syncpoint.io/

Here is a sample URL that you can try out:

https://milsymbol-server.syncpoint.io/SFGPEXL-----.svg?uniqueDesignation=MILSYMBOL&higherFormation=SYNCPOINT.IO
