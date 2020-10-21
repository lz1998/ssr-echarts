FROM node:12.18-slim AS builder

ENV LANG C.UTF-8
RUN apt-get update \
    && apt-get install -qq libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++ ttf-wqy-microhei
RUN ln /etc/fonts/conf.d/65-wqy-microhei.conf /etc/fonts/conf.d/69-language-selector-zh-cn.conf

WORKDIR /home/node/app
COPY package.json /home/node/app/
COPY package-lock.json /home/node/app/
COPY server.js /home/node/app/
RUN npm install --registry=https://registry.npm.taobao.org

FROM node:12.19-slim as prod
MAINTAINER lz1998
WORKDIR /home/node/app
RUN apt-get update \
    && apt-get install -qq ttf-wqy-microhei
COPY --from=builder /home/node/app /home/node/app

CMD npm run serve
