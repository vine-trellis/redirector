#! /bin/bash

npm install
mkdir /var/lib/redirector
cp -r ./index.js ./config.js ./node_modules/ ./keys/ /var/lib/redirector
cp ./redirector.service /etc/systemd/system/ 

systemctl enable redirector.service
