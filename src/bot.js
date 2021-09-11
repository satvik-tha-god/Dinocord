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

require("dotenv").config({
  path: '../.env'
});


//client class and it's instance
const { Client, Intents, CommandInteraction } = require('discord.js');

const client = new Client({
  partials: ['MESSAGE', 'REACTION'],
  intents: ["GUILDS", "GUILD_MESSAGES"]
});


const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});
//client.on(event, action)
//checkout discord bot events by googling

client.on('message', async (message) => {
  if (message.author.bot) return;

  if(message.content == 'enlighten me'){
    var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
  }

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  
  if(cmd === 'ping'){
    message.channel.send('pong!!');
  }
  
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
