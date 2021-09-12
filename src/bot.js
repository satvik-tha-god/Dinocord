//packages used: discord.js and dotenv
//our token is in .env, please make it private after seeing

const {facts, myths, memes, commands, welcomeMessage} = require('../config/data');


var isMyth;
var isFact;

require("dotenv").config({
  path: '../.env'
});


//client class and it's instance
const { Client, Intents, CommandInteraction } = require('discord.js');
const google = require('google-it');


const client = new Client({
  partials: ['MESSAGE', 'REACTION'],
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
});

function randomIndex (arr){
  var res= Math.floor(Math.random() * arr.length);
  return res;
}


const PREFIX = "$";

client.on('ready', (message) => {
  console.log(`${client.user.tag} has logged in.`);
});
//client.on(event, action)
//checkout discord bot events by googling

client.on('message', async (message) => {
  if (message.author.bot) return;

  // search
  if (/!dinocord-search/.test(message.content)){
    const search  = message.content.replace('!dinocord-search', '');
          
    google({'query': search}).then(results => {
        message.channel.send(results[0].title+"- "+results[0].link);
    }).catch(e => {
        // any possible errors that might have occurred (like no Internet connection)
        message.channel.send("Invalid Search Query");
    });
  }

  //command list
  if(message.content == 'dinocord commands'){
    message.channel.send(commands);
  }

  //memes
  if(message.content == 'dinocord send meme'){
    var meme = randomIndex(memes);
    message.channel.send(memes[meme]);
    message.channel.send("Haha 😆");
  }

  //random facts
  if(message.content == 'dinocord enlighten me'){
    var fact = randomIndex(facts);
    message.channel.send(facts[fact]);
  }

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  
  // Myths vs facts game
  if(message.content == 'dinocord play')
  {
    // send a fact
    if(Math.round(Math.random())){
      isFact = true;
      isMyth = false;
      var fact = randomIndex(facts);
      message.channel.send(facts[fact]);
      message.channel.send('Type "fact" if you think it is a fact and "myth" otherwise');
    }
    else{
      isFact = false;
      isMyth = true;
      var myth = randomIndex(myths);
      message.channel.send(myths[myth]);
      message.channel.send('Type "fact" if you think it is a fact and "myth" otherwise');
    }
  }

  if(message.content == 'myth'){
    if(isMyth)
      message.channel.send("Spot on!");
    else
      message.channel.send("Nah, that is a fact 🦖");
  }

  if(message.content == 'fact')
  {
    if(isFact)
      message.channel.send("Yes, that is correct!");
    else
      message.channel.send("No, that is a myth🤯");
  }
  if(cmd === 'ping'){
    message.channel.send('pong!!');
  }


  
});

client.on('guildCreate', guild => {
  guild.systemChannel.send(welcomeMessage);
});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '738666523408990258') {
    switch (name) {
      case '🍎':
        member.roles.add('738664659103776818');
        break;
      case '🍌':
        member.roles.add('738664632838782998');
        break;
      case '🍇':
        member.roles.add('738664618511171634');
        break;
      case '🍑':
        member.roles.add('738664590178779167');
        break;
    }
  }
});

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '738666523408990258') {
    switch (name) {
      case '🍎':
        member.roles.remove('738664659103776818');
        break;
      case '🍌':
        member.roles.remove('738664632838782998');
        break;
      case '🍇':
        member.roles.remove('738664618511171634');
        break;
      case '🍑':
        member.roles.remove('738664590178779167');
        break;
    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
