//packages used: discord.js and dotenv
//our token is in .env, please make it private after seeing
const facts = [
  "A dinosaur called the Pegomastax is one of the weirdest dinosaurs known. Described as a cross between a parrot and porcupine, it had a beak with teeth that sharpened themselves against each other.",
  "People have only been on Earth about 2.5 million years. Dinosaurs lived on Earth for about 160 million years, which is about 64 times longer than people been around.",
  "The name 'Velociraptor' means speedy thief.",
  "In 2015, scientist discovered a new dinosaur species. They nicknamed it 'Hellboy' because the stubby horns above its eyes looked like the comic book character of the same name. They also had a 'hellish' time excavating it from hard rock.",
  "Dinosaurs lived on all the continents, including Antarctica.",
  "Though mosasaurs, ichthyosaurs, pterosaurs, plesiosaurs, and Dimetrodon are commonly believed to be dinosaurs, they are not technically dinosaurs. The term 'dinosaur' refers to just land-dwelling reptiles that have a specific hip structure, among other traits.",
  "The word 'dinosaur' was coined by British paleontologist Richard Owen in 1842. It is Greek, meaning 'terrible lizard'. Rather than implying that dinosaurs were fearsome, Owen used the term to refer to their majesty and size",
  "Dinosaurs dominated Earth for over 165 million years. Humans have been around for only 2 million years.",
  "The first dinosaurs were carnivores, or meat eaters. Later herbivores (plant eaters) and omnivores (both meat and plant eaters) appeared.",
  "Small meat eaters were most likely the smartest type of dinosaurs.",
  "Humans’ eyes face forward so that they can see in 3D. Plant-eating dinosaurs, like the Triceratops, had eyes looking out to each side, so they could watch for danger while they fed.",
  "Dinosaurs often swallowed large rocks. These rocks stayed in the stomach and helped them grind up food.",
  "Dinosaurs that could run on two legs were called bipeds.",
  "Modern birds and reptiles have a single body opening for urination, defecation, and reproduction: a cloaca (Latin for 'sewer'). Paleontologists believe that dinosaurs were similarly designed and reproduced by pressing their cloacas together in a 'cloacal kiss'. Additionally, some dinosaurs may have had a penis like some birds do or other 'intromittent organs' like crocodiles. Paleontologists believe a Tyrannosaurus rex male reproductive organ might have been up to 12 feet in length.",
  "Dinosaurs that lived near water often left the best fossils.",
  "The smartest dinosaur was probably the Troodon ('tooth that wounds'). It had a brain the size of a mammal or bird today. It also had grasping hands and stereoscopic vision.",
  "Scientists can guess how fast a dinosaur walked or ran by looking at the gaps between its footprints.",
  "Some pterosaurs had fur on their bodies to keep them warm.",
  "The oldest known dinosaur is Saltopus. A small carnivore, this dinosaur lived over 245 million years ago.",
  "Dinosaurs lived during a period of Earth’s history called the Mesozoic ('middle life') Era. They lived during all three periods of this era: the Triassic, Jurassic, and Cretaceous."
];

const myths = [
  "Dinosaurs could fly",
  "Dinosaurs dragged their tails",
  "Humans and dinosaurs lived together",
  "Dinosaurs walked the earth, then mammals came",
  "A giant meteor killed the dinosaurs",
  "The Brontosaurus was a popular dinosaur",
  "Some dinosaurs lived in water",
  "Dinosaurs didn't have feathers",
  "Archeologists dig up dinosaurs",
  "Dinosaurs are lizards",
  "We could clone dinosaur DNA in the future",
  "T-Rex arms were small and weak",
];

var isMyth;
var isFact;

const memes = [
  "https://preview.redd.it/r7c4x7t2fk061.png?width=960&crop=smart&auto=webp&s=6671666197eb4ae8714bf88007f9fdc486a271bc",
  "https://preview.redd.it/dnh699bgoek61.png?width=2155&format=png&auto=webp&s=0c67c6f7be505ad91008aa1d70f2b5db21b881d8",
  "https://preview.redd.it/lv7rljnrryk51.jpg?width=640&crop=smart&auto=webp&s=d074f5ca2224b04299539fea82347287d4345e22",
  "https://preview.redd.it/t58reqwuw0l61.png?width=640&format=png&auto=webp&s=9a587aadb549dd2dbb4173ae081beb5ff9332dd5",
  "https://i.redd.it/mhxi3olw9bs51.jpg",
  "https://preview.redd.it/43wdwn8c7fj61.png?width=1280&format=png&auto=webp&s=2e75eb7faf2a7168e511b6ac73b4cda9aa64c462",
  "https://preview.redd.it/htsovbjuslj61.png?width=212&format=png&auto=webp&s=c26ae27ef3b8ce4784041a0f877c8db039ee1e03",
  "https://preview.redd.it/9zu0btukl2k61.png?width=640&format=png&auto=webp&s=4203da16c8c2a4ab0f4c0dc42e912cf80037747d",
  "https://preview.redd.it/97nqikgko9e11.png?width=960&crop=smart&auto=webp&s=f040c851340e1be6f9baba2e5fa8dcbd4d71bcee",
  "https://preview.redd.it/w7mve2pbltp21.jpg?width=640&crop=smart&auto=webp&s=504622d263f1891795f643d12f22139d71479515",
  "https://i.redd.it/6n8li2kmu7n31.jpg",
  "https://preview.redd.it/qwn2bdhnwoh41.jpg?width=960&crop=smart&auto=webp&s=9f12859d54a8c9067791251aa25ad54f3781b46d",
  "https://i.redd.it/70bkdz94ve231.jpg",
  "https://i.redd.it/a3waydgbqed31.jpg",
  "https://i.redd.it/hmjoxb4hnni21.jpg",
  "https://preview.redd.it/mr6rhvtuwm371.jpg?width=640&crop=smart&auto=webp&s=813ae7d84dd7df5b129c24216e39812f95145aea",
  "https://www.rd.com/wp-content/uploads/2021/04/dinosaur-jokes-tyranno-chorus.jpg?resize=696,696"
];

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

    });
  }

  //command list
  if(message.content == 'dinocord commands'){
    message.channel.send("Type\n  1. 'dinocord enlighten me' to get a random fact about pre-historic era 🤔\n 2. 'dinocord send meme' to get a funny meme based on pre historic era 😂\n 3. 'dinocord play' to play a game based on myths vs facts 🎲\n 4. 'dinocord classify' to give info about an image uploaded 👏\n 5. ' <search_query> !dinocord-search' to search prehistoric and dinosaur info 👀🔎");
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
  guild.systemChannel.send("Greetings! I am Dinocord :cloud_lightning:\n Your companion for dinos and beyond  :smile: \nTo see what I can do and get started, enter the following command-\n\ndinocord commands");
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
