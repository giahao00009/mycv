# Sử dụng môt image node làm base
FROM node:18-alpine 

RUN mkdir /app
WORKDIR /app

COPY ./package.json /app

RUN npm install --force

COPY . .

RUN npm run build

CMD ["npm", "run", "preview"]
