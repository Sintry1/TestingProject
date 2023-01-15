
## Docker Compose

Run `docker compose up --build` to run the services.\
Follow it up with a docker compose for getting the reverse proxy running (required to access the services)

A `.env` file is optional. If missing, defaults will be set instead. They can be found in the [docker-compose.yml](../docker-compose.yml) file.

To create your own `.env` file you can use the [.env.example](../.env.example) file. The created `.env` should be placed in the root of the project, at the same directory level as the docker compose.

To build and run the images use the following command:

```
docker compose up --build -d
```

### Deployment

For deployment purposes, the project includes a Caddy reverse proxy. It is set up to provide HTTPS connection to the specific services using the domain.

The domain routing details can be found and configured in the [Caddyfile](./caddy/Caddyfile)

To run a Caddy reverse proxy use

```sh

docker compose -f docker-compose.caddy.yml up --build -d
```

If you change the Caddyfile config and wish to reload it, use the following commands:

```sh
docker cp .deploy/caddy/Caddyfile caddy:/config/caddy/Caddyfile
```

and

```sh
docker exec -w /config/caddy caddy caddy reload
```
