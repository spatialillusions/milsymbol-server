## Using a smaller image like Alpine does
## not work because of missing dependencies
## to libpng
FROM node:8

WORKDIR /app
COPY package.json ./
RUN npm install --production
EXPOSE 3000

COPY index.js .

USER node
CMD ["node", "./index.js"]