FROM node:latest as build
WORKDIR /usr/local/app/
COPY ./ /usr/local/app/

RUN npm install pnpm
RUN npm run pnpm

RUN npm run build

FROM nginx:latest as server

COPY --from=build /usr/local/app/dist/ui /usr/share/nginx/html

EXPOSE 80