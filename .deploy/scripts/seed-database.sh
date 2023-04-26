#!/bin/bash

# This file requires the permissions: -rwxr-xr-x aka chmod 755

# This script is meant to be used on Debian 11 distro on Linode. It may not work on other systems

# This script populates the database with sample data. Only meant to be used in deployment via a cronjob
# THIS SCRIPT WON'T WORK ON LOCAL DEVELOPMENT ENVIRONMENT!

echo "======================================" >>/home/developer/logs/cron/seeding.log
date >>/home/developer/logs/cron/seeding.log
cd /home/developer/hotel-dangleterre

# Modify the .env to connect to the database via localhost
echo "== Backing up the .env file and updating the API_POSTGRES_HOST property to localhost..." >>/home/developer/logs/cron/seeding.log
cp .env .env.bak
sed -i "s/API_POSTGRES_HOST=omnihost-postgres/API_POSTGRES_HOST=localhost/" .env >>/home/developer/logs/cron/seeding.log
cat .env | grep API_POSTGRES_HOST >>/home/developer/logs/cron/seeding.log
# Populate the database
echo "== Populating the database with 'npm run seed'..." >>/home/developer/logs/cron/seeding.log
npm run seed >>/home/developer/logs/cron/seeding.log 2>&1
# Set the .env to its previous state
echo "== Resetting the .env file to its original state..." >>/home/developer/logs/cron/seeding.log
mv .env.bak .env
cat .env | grep API_POSTGRES_HOST >>/home/developer/logs/cron/seeding.log
echo "== Seeding process completed" >>/home/developer/logs/cron/seeding.log
