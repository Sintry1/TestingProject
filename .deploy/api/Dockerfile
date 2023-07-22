FROM node:19-alpine as builder
WORKDIR /app
COPY . .

# Remove the nx-cloud runner in order to not have to install it as a dependency
RUN sed -i 's+@nx-cloud+nx\/tasks-runners\/default+g' nx.json
# Remove the unnecessary Angular dependencies
RUN sed -i '/angular/d' package.json

# Install python because Mac M1 seems to be missing it
RUN apk --no-cache add --virtual .builds-deps build-base python3
RUN npm i --omit=dev
RUN npm i @nrwl/webpack@15.9.4


RUN npx nx build api --configuration=production

FROM node:19-alpine as runner

WORKDIR /app
COPY --from=builder /app/dist/apps/api ./
RUN npm install --omit=dev

CMD ["node", "./main.js"]