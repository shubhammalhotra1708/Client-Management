FROM node:18-alpine AS build

WORKDIR /app


COPY package.json package.json 
COPY package-lock.json package-lock.json

RUN npm install next@latest -g
RUN npm install 

COPY . .

CMD ["npm", "run", "dev"]