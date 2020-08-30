
require('dotenv').config(); 
const Discord = require('discord.js');
const client = new Discord.Client();



const token_dc = process.env.TOKEN_DISCORD;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    //test text
  if (msg.content.toLowerCase() === 'jun ping') {
    msg.reply('Naon sih ping ping ');
  }
  if (msg.content.toLowerCase() === 'jun avatar') {
    // Send the user's avatar URL
    msg.reply(msg.author.displayAvatarURL());
    msg.channel.send('it\'s Juuni ');
  }
    //send attaachment msg
  if (msg.content.toLowerCase() === 'jun ribut') {
    // Create the attachment using MessageAttachment
    const attachment = new Discord.MessageAttachment('https://media.tenor.com/images/087a076902b4169cc6f8bbe3eb87cdf5/tenor.gif');
    // Send the attachment in the message channel
    msg.channel.send(attachment);
  }
  
  if(msg.content.toLowerCase()=== "jun guild info"){
    const embed = new Discord.MessageEmbed()
    // Set the title of the field
    .setTitle(msg.guild.name)
    // Set the color of the embed
    .setColor("GREEN")
    // Set the main content of the embed
    .setDescription(`This guild is called ${msg.guild.name} and have ${msg.guild.memberCount} member`)
    .setImage(msg.guild.iconURL());
    msg.channel.send(embed);
  }
  if(msg.content.toLowerCase()== "jun bot link"){
      msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=745506321100439552&permissions=1878523713&scope=bot');
     client.fetchApplication();
  }
  if(msg.content.toLowerCase()== "jun bot repo"){
    msg.channel.send('repository link: ');
  }  
  
  if(msg.content.toLowerCase() == "jun help"){
    msg.channel.send(`List Command : 
    - jun ping
    - jun avatar
    - jun ribut
    - jun guild info
    - jun bot link
    - jun bot repo
    Check repo to contribute . `)
  }


});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });
  

client.login(token_dc);
