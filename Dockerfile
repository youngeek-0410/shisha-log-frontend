FROM node:21.2

WORKDIR /src

COPY package.json package-lock.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm","run","dev"]