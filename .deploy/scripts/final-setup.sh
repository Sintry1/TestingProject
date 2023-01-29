#!/bin/bash

# This file requires the permissions: -rwxr-xr-x aka chmod 755

# This script is meant to be used on Debian 11 distro on Linode. It may not work on other systems

echo "Hello, it seems you would like to finish the set of of already configured linode instance."
echo "This script is meant to setup git login, docekr login, clone the repo and deploy the system."
echo "This script is meant to only be used on Linode Debian 11 instanves. It may encounter issues when run on other systems!"
echo

# Values used by the system
domain="dangleterre.omnihost.app"
newUser="developer"
newUserPassword=""
githubRepo="https://github.com/omnihost-systems/hotel-dangleterre.git"

echo "================================"
echo "Configuring Git credentials..."
git config --global credential.helper cache
git clone https://github.com/omnihost-systems/hotel-dangleterre.git
echo "You have set up credentials for git"
echo

echo "================================"
echo "Configuring Docker credentials..."
docker login -u omnihost
echo "You have set up credentials for Docker"
echo

echo "================================"
echo "Pulling the repo..."
cd hotel-dangleterre
read -p "Branch to use for deployment: " branch
git checkout $branch
git pull
echo "Updating the ENVs..."
touch .env
echo "# Paste the .env in here..." >>.envs
nano .env
echo ".env file has been updated"
echo "Updating the Caddyfile"
fullEnv = cat .env | grep API_ENVIRONMENT
env = echo "$fullEnv/API_ENVIRONMENT/"
lowercaseEnv=$(echo $env | tr '[:upper:]' '[:lower:]')
sed -i "s/dangleterre.omnihost.app/'$lowercaseEnv'.dangleterre.omnihost.app/" /.deploy/caddy/Caddyfile
echo "Set main domain to $lowercaseEnv.dangleterre.omnihost.app"
echo

echo "================================"
echo "Deploying the images..."
docker compose pull
docker compose up -d
docker compose -f docker-compose.caddy.yml up -d
docker ps
free -h
echo "You have set up credentials for Docker"
echo

set +x

echo "================================"
echo "The final setup is complete."
