# Sử dụng môt image node làm base
FROM node:18-alpine 

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build /app/dist .

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]
