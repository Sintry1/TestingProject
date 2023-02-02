#!/bin/bash

# This file requires the permissions: -rwxr-xr-x aka chmod 755

# This script is meant to be used on Debian 11 distro on Linode. It may not work on other systems

echo "Hello, it seems you would like to configure a new deployment instance"
echo "This script is meant to update, install packages and overall set up a Debian-based Linode distro."
echo "It may encounter issues when run on other systems!"
echo

# Values used by the system
domain="dangleterre.omnihost.app"
newUser="developer"
newUserPassword=""
githubRepo="https://github.com/omnihost-systems/hotel-dangleterre.git"

echo "================================"
echo "Step 1 - getting the needed information"
until [[ $environment = "TEST" ]] || [[ $environment = "STAGING" ]] || [[ $environment = "DEMO" ]] || [[ $environment = "PRODUCTION" ]]; do
    read -p "What is the environment this system runs in [TEST, STAGING, DEMO, PRODUCTION]: " environment
    echo "$environment"
done
echo "You have chosen environment '$environment'"
echo

echo "================================"
echo "Step 2 - Setting up the system"

# Make it so command calls get logged to terminal
set -x

echo "================================"
echo "Disable warnings about mismatched locale..."
mkdir -p /var/lib/cloud/instance/ && touch /var/lib/cloud/instance/locale-check.skip
echo "Locale rules updated"
echo

echo "================================"
echo "Creating the new less-privileged user. You will be asked to provide a password"
adduser --gecos "" $newUser
adduser $newUser sudo
echo "New user created '$newUser'"
echo

echo "================================"
echo "Beyond this point there will be no other user prompts until the setup is finished. Go make some tea!"

echo "================================"
echo "Setup ssh access for the created user..."
mkdir /home/$newUser/.ssh
touch /home/$newUser/.ssh/authorized_keys
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDA5a9PgpGbEoHxzT4760ULi8fXixWiF+y6Aj8O1SZEodqlpPgwqy+tCoVgFFCtERs3JZj2/nED/LORA7Qyt/M7WIUMo9vUdB9202BqRA15M5jduh55j1NX9Dk2NZC8QJpTfyZfJfeodN+OVbX2dR4wfitx/S2loxc8sb/MTJzvwFLmtz/1n1XRAyIAmm6TpM+12EfnKZrkErutS0rMNTIayVH1ODy7xEg+bV4C3//S1f6toizmKV6RWNeO8fxDqxZNVf90DXfb/dp+0MhlURy1vNhufaFBL//Q55BMH7FZi9opaBhEb2o8KnNc8OmHocHvVxIqpgHzDiFBY3Uks9x5kbmRzYGVjBioXIeUzf0doU2KvJ0aLE5SQXaperf+hQ+N3TffoFcA+EaMtBMJ/zdCtmjuQaxeXx87iEd0PYebjJEGgoKekflXKfzy7OgkjIq2Y1x5RaLBNV+bO36fbDHBRYGFQQ7rsTWTIIbb9zK2RTf+2P+n/0nwACsoWbEXekQD5S9faWUz6e/niSLNM6zVzksbLPb8mLGpItxGLwvGwQ4VxskONLUUVBX1h8I55pAU66iN7/y0C87ooPuu9ELwDxb1ftGc0SsMoCj7yJIJkhaD6spIMvuRwb+dM1shI9hXzxAI3bh4Xb4qOPm/3woh2QBV6Rtax4p47Xt6VRhETQ== info@omnihost.app" >>/home/$newUser/.ssh/authorized_keys
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCsoN8fsup6W5FXk9syVpdKGVGpugsp/GB/OW4lKiuofO5pplYNXdpnvPUI2cZJ8B/WP+PxQvUzpVWWLL5n/hyP49hZoYa6euhdSnLB3Psm6U/das5UEXem/pxIOYvYLLpOe5Xhh28txFoJ7+uuDstptyQagwHirhmhiqDbuE7t7I0jtxQYLMJY4Jst57Jik7AHQ21YAHW1rrBZ/2+WCU1lZNHAShiktN3YvNfymIc1ClQYYEXmv6PgfUtRUSlydZSQ0Vgpzb538B2IbXRsmfllGXVa0AKuCdiQ5iWzWseEWUvrQaOqos1MteHLYB5muINpIUT8PADsUnEt59/+bB0oQFc9U3dvq4Ks747t+S4RAugeVnNetQGZSTH5jHQpq2eomKH1q0jv8NdSoYIvV67P1Wd5Gog+LtbDN5J9O1/Iv8NSvYwUSxH1b44ZvmeZozULZY+WCe2n7WSX1Z68L/pw6TMIz3yiJVA6J8+fc7dwpOErHjci6Ym4cfLan4SUaefV52pt0nV4H84u6LV+LG70oVc5Ttylk6auTjXcvuYcgNzoMZ12bYIhqj9wpg83dMvTX7Oz3U/Mj5wj6tA7U8IdCxLqDMM7QO2QxtIZbdZpOH9niuLAnsgieQqvbYEjE6dkVC8dtYHZEo99yy5UKA+EsMtO+8tHqEo7KyFdo2AdBQ== dev@omnihost.app" >>/home/$newUser/.ssh/authorized_keys
chown -R $newUser:$newUser /home/$newUser/.ssh
echo "$newUser ssh access has been set up"
echo

echo "================================"
echo "Updating the system ..."
apt update --yes && apt upgrade --yes
echo "System update completed"
echo

echo "================================"
echo "Setting the timezone"
timedatectl set-timezone 'Europe/Copenhagen'
echo "Timezone set to 'Europe/Copenhagen'"
echo

echo "================================"
echo "Setting the hostname"
lowercaseEnv=$(echo $environment | tr '[:upper:]' '[:lower:]')
hostname="$lowercaseEnv-omnihost"
hostnamectl set-hostname $hostname
printf "127.0.0.1 staging-omnihost\n" >>/etc/hosts
echo "Hostname set to '$hostname'"
echo

echo "================================"
echo "Install NVM and Node"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh -y | bash
nvm install node
echo "Node installed and set up"
echo

echo "================================"
echo "Changing security rules for SSH..."
echo "===  Dissallowing Root Login..."
sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
echo "===  Dissallowing Password Authentication..."
sed -i 's/PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
echo "===  Limiting SSH access to only use IPv4..."
printf "\n# Limit traffic on port 22 to IPv4 only\nAddressFamily inet\n" >>/etc/ssh/sshd_config
echo "Applying the SSH config changes..."
systemctl restart sshd
echo "SSH rules have been updated"
echo

echo "================================"
echo "Installing and setting up the firewall..."
apt-get --yes install ufw

echo "===  Settings the firewall rules..."
ufw default allow outgoing
ufw default deny incoming
ufw allow ssh
ufw allow 80
ufw allow 443
echo "===  Enabling the firewall..."
echo "y" | ufw enable
echo "===  Checking firewall status..."
ufw status verbose
echo "Firewall setup using UFW"
echo

echo "================================"
echo "Installing Git"
apt --yes install git
git --version
echo "Git setup finished"
echo

echo "================================"
echo "Installing and setting up Docker and Docker Compose..."
echo "=== Cleaning up potential existing installations (missing packages output is okay)..."
echo "===  Installing the required packages..."
apt-get --yes update
apt-get --yes install ca-certificates curl gnupg lsb-release
echo "===  Installing Docker..."
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list >/dev/null
apt-get --yes update
apt-get --yes install docker-ce docker-ce-cli containerd.io docker-compose-plugin
echo "===  Setting up the Docker user..."
usermod -aG docker $newUser
echo "===  Veryfing the setup..."
docker version
docker compose version
echo "Docker setup finished"
echo

set +x

echo "================================"
echo "The setup is complete. The device needs to be rebooted. You won't be able to log in with root account anymore, use the new $newUser account instead!"
until [[ $rebootConfirmation = "yes" ]] || [[ $rebootConfirmation = "no" ]]; do
    read -p "Type 'yes' to reboot now, type 'no' to reboot manually: " rebootConfirmation
done
if [ $rebootConfirmation = "yes" ]; then
    echo "Rebooting now..."
    echo "reboot"
    reboot
fi
if [ $rebootConfirmation = "no" ]; then
    echo "Setup is finished. Please remember to reboot the system!"
fi
