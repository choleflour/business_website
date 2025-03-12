# build stage
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY / .
ENV NODE_OPTIONS=--openssl-legacy-provider \
    TZ=Asia/Taipei \
    PORT=5000
RUN npm run docs:build
RUN npm install -g serve
WORKDIR /app/docs/.vitepress
CMD ["serve", "-s", "dist"]