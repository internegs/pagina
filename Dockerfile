FROM node:20-alpine
LABEL authors="Moises"

RUN corepack enable && corepack install -g yarn@4.9.4

WORKDIR /app

COPY . .
RUN yarn install

EXPOSE 8082

CMD ["yarn", "dev", "--host"]