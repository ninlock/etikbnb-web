# build
FROM node:13 as build-stage

ENV NUXT_HOST: 0.0.0.0

COPY ./ /var/etikbnb-web

WORKDIR /var/etikbnb-web

RUN ls -l /var/etikbnb-web
RUN npm install
RUN npm run build

# expose
FROM nginx:1.15

COPY --from=build-stage /var/etikbnb-web/dist /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
