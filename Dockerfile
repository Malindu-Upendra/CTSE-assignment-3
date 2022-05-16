FROM node:14.17.6

# RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "node" ]

CMD [ "dist/main.js" ]
