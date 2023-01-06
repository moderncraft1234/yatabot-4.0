#!/usr/bin/zsh -f
# property of modernmods1234 (use at ur own discretion)


echo "yatabot startup script"


curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash &> startup.log

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash &> startup.log

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" >> startup.log
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" &> startup.log # This loads nvm




nvm -v

nvm install 16.17.0

    nvm use 16.17.0



nvm -v

node index.js &> startup.log

echo "bot logs can be founded within statup.log"

cat startup.log

