FROM node:22
WORKDIR /root/running-shop-api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
