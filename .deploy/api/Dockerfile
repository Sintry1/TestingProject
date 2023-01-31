FROM node:19-alpine as builder
WORKDIR /app/builder
COPY . .

# Remove the nx-cloud runner in order to not have to install it as a dependency
RUN sed -i 's+@nrwl\/nx-cloud+nx\/tasks-runners\/default+g' nx.json

# Install python because Mac M1 seems to be missing it
RUN apk --no-cache add --virtual .builds-deps build-base python3
RUN npm i --omit=dev

RUN npx nx build api --skip-nx-cache

FROM node:lts-alpine3.10 as runner

WORKDIR /app
COPY --from=builder /app/builder ./

CMD ["node", "./dist/apps/api/main.js"]