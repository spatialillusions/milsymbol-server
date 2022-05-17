## Using a smaller image like Alpine does
## not work because of missing dependencies
## to libpng
FROM node:10

WORKDIR /app
COPY package.json ./
RUN npm install --production
EXPOSE 2525

COPY index.js .

USER node
CMD ["node", "./index.js"]