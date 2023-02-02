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
# Append the CI public key to the authorized_keys file
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDz0Cxx/+Ur3tx9nTHiBPsGmDKcqSgF/BWBtxNGDolmovS5kl5UPzw+qOnd+zaf3vDSsVrCtKtMKVG8MEIQ/QZGRNNUp3J124f/+QOEGg3MzRk5AxJHm+Q7ROpoqBnucGYDwuIv6j2KLpHF4fESQGl2z4kzT+BhFNTHf4EV1cR9ZKnZBB2TVVJVeckll5UFDLErk5DB+k1/jPfaRTIN6cDtP4bKIshPlu5pEFGiKyQflIzntwdqQbnou36hJvts0YJQeRQOLZqTlloVtVIFRQCroFAwJ8RaXhwrwwvcinyHn6mhPW+DPBoJCtxSdRyqX0u+d+W5IJEBxdQ8SQ9b7u9t5N40AzlAHezxudY30ot4CMJ/ki3Aaa3B4cnSKybvWGQMq/bFhqG3xIVNSNITNj1scGibvfgzJSDmGzzhhkrj/AQunFzaFOEe2kyRHY2m9p8GGRm3OTtt/kgJ3NaZPcWIUxWiXvbuNeY5GWpmU1VFh8Lg2TovNDEjTv1NRs4YG1/kSLX46uSBoaUa8rT7YIPgsvJoJ2NgN3e9R24B2RG/5dv3OZO0r3l7R6mwvrA5BwjrpoM3KPITmDquC9kfM27kyFccM/3l8OJ/eYMvkvmKcK+/Mirct+C4FUs0Dxc2650F4DZybuheRmmQyDZEOPislvdR007U6rh3w1SPh8jPWw== ci@omnihost.app" >>/home/$newUser/.ssh/authorized_keys
# Append the developer public key to the authorized_keys file. If the environment is production, use the developer production key instead.
if [[ $environment = "PRODUCTION" ]]; then
    echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDguTs99DYvy9eZUQfxjdU4iowvz0Samt8EVz9yv1B+sda6TOUxkujyX3hDK+2BwPuQNT+T9I0v7HcBpxZ4OYoOnhJciVPAo3NSTBp9z3+dAsEzeuwcAB0mAkmmaAGn/jl+b7yoxTvZ0/nUOFZxYjMrw399EOQ7F9PiflE4dM4ETHLVAPKtCTUV2Aq1643pUb4OxsENxfDx5xCpY+C45YOsdZWYgoALxNZaYEwi6H21h4JRvQ3XME6V7IfzNDJZjf0k2KsG9oeQJSiooSeAuLDJ5Pb97viaWePpp+Boriui2SU5d3B07Fjtp9JbsPffBNn+CmMJPDTlRderK3z29Ao5hElar99RE4dOFBJsPncQ9EJuIx8Vz4/itcZt9pV0NJkZhHBGIElN2pLuRDqDZlvcNyJgg8WwLc7bq0BUs5Wh0Fgft7LbXhTc1pyPJyVGvUgGlFccViBZBS3618zng0EJJOIyjdrJj1PsnAl3VCtHkp6SqpQQ99W0Yhs8DxENpn0o9lCBGHNHySSKXJEZq6/cK3BWTRgG2uvJigWl6vQxobEeqag8oYqQbRpWE2USSU7Yzd1w+sGP4tLC5FBp1boAtvXb0024F2RbVcPprEr3QJoe1b/NN0H5B71AEnncs+bQW03NRBdy04k67Ujsm5PN+kfsfi9nZ//1c9WXMM8bKQ== developer-prod@omnihost.app" >>/home/$newUser/.ssh/authorized_keys
else
    echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCntWkkEJ1CWgY00fbEgpZKP+Y4QmPS53SOOZ+q1IzYOxJAut/uKdXaAqNKHYtz2HpPxHiok2HvshVwT967HLYjJvG+PfyAf70E2iPZmZAI6xd03VnZbzO1oVdRTe2jystzXpFr6nKJVohMgZ9VUk0n3gYzcOK0/V06aigtqGm/YSC0sonuc5nZUcMZkjBeoz3Afm3AJM+6ow6IKCA3Vxt/9r/2zMsnro9usi4OaNl1BKp2wb3OfpwjiMy/eld+ftJXO6sPtQEn8lTwQMDVNlbKkipm2G2GXty7kBwWGS48pCIrvRCP7LFcKxe0dtrDaAaugNnfk93hKprDZe5tYMxcR+WvnOn5S/StpD19jFxoOTdSdvJ3Yjekl+PNNe1kD2zlksGbIWUW6784vsIQTHrGGCSzjzJzJv6ZToW7WFqDKOPlky+II5BoZaSjybBCl5Zrgx5T0feNlRvp2PMQxIpx8mqEpxaMfxhkOLMcc0zHebZvyVeHN6z3xWbNn6bsIFy24XREvGoQFPOidwS+M+JPiXAvw3MeqCg1obOmEhYuDHT9T7RwlmfvXwzO+rjnEpNZKFU0lbvKV5+E2PjZNwPY3Yqd0Ff2ikXUCPcLPG69RkRpa6StV7+jXSdEtwqrEx82pRPnZyTHQAVOdNJwGDLnWlzM9xA3TFvmb/JxQLCiqQ== developer@omnihost.app" >>/home/$newUser/.ssh/authorized_keys
fi
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
