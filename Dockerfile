FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["cross-env", "NODE_ENV=dev", "node", "./index.js"]
