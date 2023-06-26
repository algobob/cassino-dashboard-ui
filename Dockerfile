FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN npm i --silent
CMD ["npm", "run", "dev"]