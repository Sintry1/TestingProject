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
echo "Configuring Cron jobs..."
echo "We will open a file editor. Parse the following lines into it:"
echo "0 4 * * * date >> /home/developer/logs/cron/docker-cleanup.log"
echo "0 4 * * * /usr/bin/docker system prune -f >> /home/developer/logs/cron/docker-cleanup.log"
echo '0 4 * * * /home/developer/hotel-dangleterre/.deploy/scripts/seed.sh >> /home/developer/logs/cron/seeding.log"
read -p "Press any button once you have copied the two lines above:" temp
crontab -e
echo "You have set up the Cron jobs"
echo

echo "================================"
echo "Configuring Git credentials..."
echo "git config --global credential.helper cache"
cd hotel-dangleterre
git config --global credential.helper store
git config pull.ff only
cd ..
echo "git clone https://github.com/omnihost-systems/hotel-dangleterre.git"
git clone https://github.com/omnihost-systems/hotel-dangleterre.git
echo "You have set up credentials for git"
echo

echo "================================"
echo "Configuring Docker credentials..."
echo "docker login -u omnihost"
docker login -u omnihost
echo "You have set up credentials for Docker"
echo

echo "================================"
if [[ $lowercaseEnv != "production" ]]; then
    echo "Install NVM and Node"
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm install node
    echo "Node installed and set up"
else
    echo "Skipping NVM and Node setup since this is the production environment"
fi
echo

echo "================================"
echo "Pulling the repo..."
cd hotel-dangleterre
read -p "Branch to use for deployment: " branch
echo "git checkout $branch"
git checkout $branch
echo "git pull"
git pull
echo "Updating the ENVs..."
echo "# Paste the .env in here..." >>.env
nano .env
echo ".env file has been updated"
echo "Updating the Caddyfile"
fullEnv=$(cat .env | grep API_ENVIRONMENT)
env=$(echo $fullEnv | sed "s/API_ENVIRONMENT=//g")
lowercaseEnv=$(echo $env | tr '[:upper:]' '[:lower:]')
# If the env is production, keep just the raw domain. If not prod, add the env
if [[ $lowercaseEnv != "production" ]]; then
    echo "sed -i "s/dangleterre.omnihost.app/$lowercaseEnv.dangleterre.omnihost.app/" .deploy/caddy/Caddyfile"
    echo "Set main domain to $lowercaseEnv.dangleterre.omnihost.app"
else
    echo "Set main domain to dangleterre.omnihost.app"
fi
echo

echo "================================"
echo "Deploying the images..."
echo "docker compose pull"
docker compose pull
echo "docker compose up -d"
docker compose up -d
echo "docker compose -f docker-compose.caddy.yml up -d"
docker compose -f docker-compose.caddy.yml up -d
echo "docker ps"
docker ps
echo "free -h"
free -h
echo "The images have been deployed"
echo

echo "================================"
echo "The final setup is complete."
