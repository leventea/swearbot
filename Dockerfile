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

COPY docker/entrypoint.sh .env* /bot/
RUN chmod +x /bot/entrypoint.sh

ENTRYPOINT /bot/entrypoint.sh