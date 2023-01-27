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
cp ~/.ssh/authorized_keys /home/$newUser/.ssh/
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
