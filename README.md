# etikbnb-web

## Technology

Nuxtjs : framework for vuejs
docker-compose.yml : to dev mode (start server in watch mode)
Dockerfile : to production mode (build dist with node and copy it in nginx container)

## Start dev with docker-compose

Run server as dev mode (watched) : 
```
docker-compose up -d
```

## Start production mode with docker

``` 
docker build -t etikbnb-web .
docker run -p 80:80 etikbnb-web
```

## Build Setup Nuxtjs

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
