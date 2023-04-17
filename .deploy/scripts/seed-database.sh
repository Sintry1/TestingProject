#!/bin/bash

# This file requires the permissions: -rwxr-xr-x aka chmod 755

# This script is meant to be used on Debian 11 distro on Linode. It may not work on other systems

# This script populates the database with sample data. Only meant to be used in deployment via a cronjob
# THIS SCRIPT WON'T WORK ON LOCAL DEVELOPMENT ENVIRONMENT!

echo date >>/home/developer/logs/cron/seeding.log
# Modify the env to connect to the database via localhost
sed -i "s/API_POSTGRES_HOST=omnihost-postgres/API_POSTGRES_HOST=localhost/" /home/developer/hotel-dangleterre/.env >>/home/developer/logs/cron/seeding.log
# Populate the database
npm run seed >>/home/developer/logs/cron/seeding.log
# Modify the env to its previous state
sed -i "s/API_POSTGRES_HOST=localhost/API_POSTGRES_HOST=omnihost-postgres/" /home/developer/hotel-dangleterre/.env >>/home/developer/logs/cron/seeding.log
