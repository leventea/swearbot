FROM node:18-alpine3.16 AS builder

WORKDIR /bot
COPY ./ ./

RUN npm i
RUN npx tsc

FROM node:18-alpine3.16

COPY --from=builder /bot/dist /bot 
WORKDIR /bot

COPY --from=builder /bot/package* .
RUN npm i --only=prod

COPY .env .env
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT /entrypoint.sh