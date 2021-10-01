# specify the node base image with your desired version node:<version>
FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY . .

RUN npm install
RUN npm run build

FROM node:16-alpine as worker

WORKDIR /app
COPY --from=builder ./app/dist ./
COPY package*.json ./
ENV NODE_ENV=production
ENV PORT=3000
RUN npm install
EXPOSE 3000

CMD [ "npm", "start" ]
