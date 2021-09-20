#!/bin/bash
while true
do
cd /root/DiscordBotMaker/GithubRepo/GlattModded
git pull
echo Starting Bot
node bot.js

done
