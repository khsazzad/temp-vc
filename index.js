const Discord = require("discord.js");
const client = new Discord.Client();

const TempChannels = require("discord-temp-channels");
const tempChannels = new TempChannels(client);
const  channel  = require('./config.json')
console.log(channel)
channel.forEach((value) =>{
  tempChannels.registerChannel(value.channel_id, value.option);
})

client.login(process.env.token);
