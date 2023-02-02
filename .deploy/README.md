# Deployment information

## Docker Compose

Run `docker compose up --build` to run the services.\
Follow it up with a docker compose for getting the reverse proxy running (required to access the services)

A `.env` file is optional. If missing, defaults will be set instead. They can be found in the [docker-compose.yml](../docker-compose.yml) file. Some of the functionality will not work since they don't have defaults.

To create your own `.env` file you can use the [.env.example](../.env.example) file. The created `.env` should be placed in the root of the project, at the same directory level as the docker compose.

To build and run the images use the following command:

```
docker compose up --build -d
```

### Mapping the domain to specific services

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

## Useful commands and info

### SSH

The SSH config is a way to alias ssh connections to specific words. For example, an alias can be made to connect to the test omnihost deployment by just typing `ssh test-omnihost` instead of typing out the entire command like this

`ssh -i ~/.ssh/omnihost-developer-key  developer@test.dangleterre.omnihost.app`

On Mac, simply place the following lines in the `~/.ssh/config` file

```sh
Host omnihost-test
    HostName test.dangleterre.omnihost.app
    User test
    Port 22
    UseKeychain yes
    AddKeysToAgent yes
    IdentityFile ~/.ssh/omnihost-developer-key
```

On Windows and with WSL the setup may differ.

The IdentityFile is the private SSH key. It should have a corresponding file ending with `.pub`, which is uploaded to wherever you need SSH access to. The easiest way to set up such access is to modify the `authorized_keys` file.
On Linode Debian 11 instances, this file can be found in the `~/.ssh/` directory.\
Simply append the contents on the public key in the `~/.ssh/authorized_keys` file. Make sure that the parsed file is all on one line. Each Public key is a separate line.

Once the `authorized_keys` file is updated, you can apply the changes with `sudo systemctl restart sshd`.

#### SSH Keys

We use the following keys:

- `omnihost-ci-key` - used by the CI/CD pipelines
- `omnihost-deployment-root-key` - used to connect to the deployments as root
- `omnihost-developer-key` - keys to be used by the developers

To gain access to them, contact Calli or Cris
