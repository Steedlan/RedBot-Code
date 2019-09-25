const Discord = require("discord.js")
const bot = new Discord.Client()
const fs = require("fs")

let config = require ("./assets/config.json")
let inv = require("./assets/inventory.json")

let shard = require("./assets/shards/shard-choice.json")

let top = require("./assets/top/top-global.json")

let xp = require("./assets/level.json")

let job = require("./assets/jobs.json")

let build = require("./assets/build.json")
const labo = require("./assets/builds/labo.json")

let sword = require("./assets/sword.json")
let chest = require("./assets/chest.json")
let daily = require("./assets/daily.json")

let badge = require("./assets/badge.json")
let premium = require("./assets/premium.json")
let talkedRecently3 = new Set()
const TalkedRecently = new Set();
const timer = new Set();
const TalkedRecently2 = new Set();
const minestamp = new Set();
const countime = new Set();

bot.login(config.ditoken)

bot.on('ready', function(){
    bot.user.setStatus("dnd");

    var prefix = "r!"

bot.user.setActivity("r!help")
bot.channels.get("510515532315754516").send(`Bot allumé et connecté sur ${bot.guilds.size} serveurs :white_check_mark:`)
//  bot.user.setActivity(`${prefix}help  ||  ${bot.guilds.size} serveurs pour ${bot.users.size} utilisateurs`, {type: "WATCHING"});

var today = new Date()



console.log(`-------------------------------------------------------------- \nConnecté au compte: ${bot.user.tag}\nAvec l'id ${bot.user.id}\nAu service de ${bot.guilds.size} serveurs et de ${bot.users.size} personnes\nDate de connection: ${today}\n--------------------------------------------------------------`)

});

bot.on('guildCreate', guild => {
    
            var bienvenue_logs = new Discord.RichEmbed()
            .setColor('01FE5E')
            .setTitle('<a:blobjoining:507491465010741258>  NOUVEAU SERVEUR! <a:blobjoining:507491465010741258> ')
            .setDescription(`On m'a ajouté sur le serveur \`${guild.name}\`, \n Son ID est \`${guild.id}\`, \n Son proprietaire est \`${guild.owner.user.username}\`\n et il a \`${guild.memberCount}\` membres !`)
            const channel = bot.channels.get(`510515841989738500`).send(bienvenue_logs);
		bot.channels.get("510515532315754516").send(`Bot ajouté sur 1 serveur :inbox_tray:`)
                	
    bot.channels.get("510515532315754516").send(`Bot allumé et connecté sur ${bot.guilds.size} serveurs :white_check_mark:`)
	});
	
		bot.on('guildDelete', guild => {
            
            var bienvenue_logs = new Discord.RichEmbed()
            .setColor('FE0101')
            .setTitle('<a:ablobleaving:507491465178513409> DELETE SERVEUR! <a:ablobleaving:507491465178513409>')
            .setDescription(`On m'a retiré du serveur \`${guild.name}\`, \n Son ID était \`${guild.id}\`, \n Son propriétaire était \`${guild.owner.user.username}\` et il avait \`${guild.memberCount}\` membres !`)
            const channel = bot.channels.get(`510515841989738500`).send(bienvenue_logs);
				bot.channels.get("510515532315754516").send(`Bot retiré sur 1 serveur :outbox_tray:`)
         	bot.channels.get("510515532315754516").send(`Bot allumé et connecté sur ${bot.guilds.size} serveurs :white_check_mark:`)
});
bot.on("message", async message => { 
    var prefix = "r!"
    
    if(message.author.bot) return
    if(message.channel.id === "543905093498568704"){
        await message.react("👍")
        await message.react("👎")
    }
    if(message.channel.type === "dm") {
    var argsss = message.content.split(" ").slice(0)
    var argss = argsss.slice(0).join(" ")
if(message.content.startsWith("r!")) return message.channel.send(":x:  Je n'accepte pas les commandes en message privé car cela cause divers bug! :x:")
message.channel.send("Ce message a été envoyé au staff afin d'améliorer nos services :incoming_envelope:");
if(message.content.startsWith(prefix)) return
if(argss.length > 256) return message.reply("Votre message contient trop de caractères, merci de reformuler en raccourcicant celle ci!")
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle("Un MP a été envoyé à moi!")
.addField(argss, "Message envoyé par " + message.author.username + " avec l'ID: " + message.author.id)
bot.channels.get("510524304228614185").send(embed)
return;
}
if(message.content.startsWith(prefix + "reply")) {
    if(message.author.id === "ID") {
          var args = message.content.split(" ").slice(0)
              var Rargs = message.content.split(" ").slice(2).join(" ")
      var userID = args[1]
      if(isNaN(args[1])) return message.reply("Il me faut une ID valide!")
      var embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle("Vous avez reçu un message de la part de l'équipe RedBot !")
      .setDescription(Rargs)
      .setFooter("Ce message vous a été envoyé par: " + message.author.username + " !")
      bot.users.get(userID).send(embed)
      message.channel.send("Cet utilisateur a reçu un message privé!").catch(console.error)
      console.log("Un mp a été envoyé par un Helpeur!")
   }
     if(message.author.id === "ID") {
          var args = message.content.split(" ").slice(0)
              var Rargs = message.content.split(" ").slice(2).join(" ")
      var userID = args[1]
      if(isNaN(args[1])) return message.reply("Il me faut une ID valide!")
      var embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle("Vous avez reçu un message de la part du l'équipe RedBot !")
      .setDescription(Rargs)
      .setFooter("Ce message vous a été envoyé par: " + message.author.username + " !")
      bot.users.get(userID).send(embed)
      message.channel.send("Cet utilisateur a reçu un message privé!").catch(console.error)
      console.log("Un mp a été envoyé par un Helpeur!")
   }
   }



const counter = require("./assets/counter.json")
if(!counter[message.author.id]) {
    counter[message.author.id] = {
        count: 0,
        actif: false,
        theme: " ",
        goal: 0
    }
}

if(counter[message.author.id].actif == true) {
    if (countime.has(message.author.id)) {

    } else {
 
           // the user can type the command ... your command code goes here :)
 
        // Adds the user to the set so that they can't talk for a minute
        countime.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          countime.delete(message.author.id);
        },  2000);
counter[message.author.id] = {
   count: counter[message.author.id].count + 1,
   actif: counter[message.author.id].actif,
   theme: counter[message.author.id].theme,
   goal: counter[message.author.id].goal
}
fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
    }
}
if(!job[message.author.id]) {
    job[message.author.id] = {
        primaire: "none",
        secondaire: "none"
    }
}

if(!badge[message.author.id]) {
    badge[message.author.id] = {
        badge: "** **",
        premium: "** **"
    }
}

if(!premium[message.author.id]){
premium[message.author.id] = {
    premium: false,
    color: "RED"
}
}

if(!build[message.author.id]) {
    build[message.author.id] = {
        labo: false,
        laboLvl: 0
        
    }
}  
if(!chest[message.author.id]) {
    chest[message.author.id] = {
        normal: 0,
        rare: 0,
        ultra: 0,
        premium: 0
    }
}

let color = premium[message.author.id].color;
if(message.content.startsWith(prefix + "premium")) {
    var args = message.content.split(" ").slice(1)
    var Rargs = message.content.split(" ").slice(2).join(" ")

    var embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle("Quelque chose cloche...")
    .setDescription("Dans notre monde se trouve des pierres de sagesse <:Premium:586894745662652431>, toute personne en obtenant une possède de grands pouvoir.\nMalheureusement il semblerait que vous n'en ayez aucune sur vous...")
    .addField("** **", "Voici ce qu'une pierre de sagesse peut vous apportez:")
    .addField(":calendar: Votre salaire journalier monte de 50%", "** **")
    .addField("<:chest:586958753526579239> Les pierre de sagesse savent ouvrir les coffres magique", "** **")
    .addField(":paintbrush: Personnalisez votre expérience de jeu", "** **")
    .addField(":eyes: Voyez dans le futur, accédez aux nouveautés avant tout le monde et rejoignez les autres possesseurs de la pierre sur mon serveur de support", "** **")
    .addField(":high_brightness: + de puissance, + d'énergie, obtenez plus d'énergie plus rapidement!", "** **")
    .addField("<:Premium:586894745662652431> Obtenez un badge présent partout sur vous !", "** **")
    .addField(":x: Maîtrisez des armes et costume à la pointe de la technologie !", "** **")
    .addField("=======================", "Obtenez une pierre de sagesse en boostant [le serveur de support](https://discord.gg/quF5dQM) <:boost:586259380660469761>")
    if(premium[message.author.id].premium === false) {return message.channel.send(embed)}else{

if(message.content === prefix + "premium") {
    let embed_ = new Discord.RichEmbed()
    .setColor(color)
    .setTitle("Premium - Panneau de configuration")
    .addField(":paintbrush: "+prefix+"premium color [code couleur html]", "** **")
    message.channel.send(embed_)
}
if(message.content.startsWith(prefix + "premium color")) {
     
        if(!Rargs) {
            let embedd = new Discord.RichEmbed()
            .setColor(color)
            .setImage("https://i.imgur.com/hL6P3Jf.png")
            .setTitle("Premium - Couleur d'embed")
            .addField(":arrow_backward: La couleur d'embed modifie la couleur de la ligne gauche", "** **")
            .addField("** **", `Pour la changer, cliquez sur [ce lien](https://www.w3schools.com/colors/colors_picker.asp) choissisez une couleur, (avec l'hexagone ou html5), puis copiez le #`)
            .addField("** **", "Astuce: vous pouvez choisir la luminosité juste à côté (toujours prendre son # à droite)")
            return message.channel.send(embedd)
        }


        let tesst = new Discord.RichEmbed()
        .setColor(Rargs)
        .setTitle("Embed de test")
        .setThumbnail(bot.user.displayAvatarURL)
        .setImage("https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftestcreative.co.uk%2Fwp-content%2Fuploads%2F2017%2F10%2FTest-Logo-Circle-black-transparent.png&f=1")
        .addField("Voici un embed avec la couleur demandée", "Si ce n'est pas le cas, cliquez sur ❌ et refaite la commande avec une couleur valide (#FFFFFF donne du blanc par exemple)")
        .setFooter( "Pied d'embed", message.author.displayAvatarURL)
      
var emoji = "\u274C";
    var emoji2 = "\u2705";
    message.channel.send(tesst)
        .then(msg => {
            msg.react(emoji).then(r => {
                msg.react(emoji2)
                const V = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
                const X = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
              
                        const Vok= msg.createReactionCollector(V, {
                    time: 1000000
                });
                const Xok = msg.createReactionCollector(X, {
                    time: 1000000
                });
              
              
                Vok.on('collect', r => {
                  msg.delete()
        return message.channel.send("Changement annulé") 
                })
                  
              Xok.on('collect', r => {
                  msg.delete()
    
                  premium[message.author.id] = {
                    premium: true,
                    color: Rargs
                }
                fs.writeFile("./assets/premium.json", JSON.stringify(premium), (err)=>console.log(err));
    return message.reply("Couleur changée avec succès :white_check_mark:")
                })})})
    
        
    }
    }
}
if(!message.content.startsWith("prefix")) {
    if(inv[message.author.id]) {
        if (TalkedRecently.has(message.author.id)) {
    
        } else {
     
               // the user can type the command ... your command code goes here :)
     
            // Adds the user to the set so that they can't talk for a minute
            TalkedRecently.add(message.author.id);
            setTimeout(() => {
              // Removes the user from the set after a minute
              TalkedRecently.delete(message.author.id);
            },  10000);
            let bonus = 2;
            if(premium[message.author.id].premium === true) {
bonus = 4
            }
    var enregy_amount =  inv[message.author.id].energy + bonus

    if(enregy_amount <= 1000)  {
        //inv
    inv[message.author.id] = {
        // minerais
        ruby: inv[message.author.id].ruby,
        fer: inv[message.author.id].fer,
        saphir: inv[message.author.id].saphir,
        emerald: inv[message.author.id].emerald,
    
        gold: inv[message.author.id].gold,
    stone: inv[message.author.id].stone,
    aluminium: inv[message.author.id].aluminium,
    platine: inv[message.author.id].platine,
    cuivre: inv[message.author.id].cuivre,
    bismuth: inv[message.author.id].bismuth,
    //bois
    sapin: inv[message.author.id].sapin,
    bambou: inv[message.author.id].bambou,
    pin: inv[message.author.id].pin,
    bouleau: inv[message.author.id].bouleau,
    //laboratoire
    am: inv[message.author.id].am,
    p4d: inv[message.author.id].p4d,
    radium: inv[message.author.id].radium,
    radon: inv[message.author.id].radon,
    uranium: inv[message.author.id].uranium,
        // Matériel
        pickaxe: inv[message.author.id].pickaxe,
        axe: inv[message.author.id].axe,
        // autres
    energy: enregy_amount,
    money: inv[message.author.id].money,
    }
    fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
    }else{
    
    }} }}





//labo
 let counting_radium = 150 / build[message.author.id].laboLvl 
 let counting_radon = 125 / build[message.author.id].laboLvl 
 let counting_uranium = 175 / build[message.author.id].laboLvl 
 let counting_am = 300 / build[message.author.id].laboLvl 
 let counting_prisme = 600 / build[message.author.id].laboLvl 

 if(counter[message.author.id].actif == true) {
     
    if(counter[message.author.id].theme === "Radium") {
        if(!inv[message.author.id].money >= 50) {
            counter[message.author.id] = {
                count: 0,
                actif: false,
                theme: " ",
                goal: 0
            }
            fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
            
                labo[message.author.id] = {
                    radium: false,
                    radon: false,
                    uranium: false,
                    am: false,
                    prisme: false
                }
                fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
    return message.channel.reply("Oups,\nLa fabrication de radium a échoué dû au manque de 50 :moneybag: dans votre inventaire")
         }
            if(counter[message.author.id].goal <= counter[message.author.id].count) {
                counter[message.author.id] = {
                    count: 0,
                    actif: false,
                    theme: " ",
                    goal: 0
                }
                fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
                
                    labo[message.author.id] = {
                        radium: false,
                        radon: false,
                        uranium: false,
                        am: false,
                        prisme: false
                    }
                    fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
    
                
inv[message.author.id] = {
    // minerais
    ruby: inv[message.author.id].ruby,
    saphir: inv[message.author.id].saphir,
    emerald: inv[message.author.id].emerald,
    radium: inv[message.author.id].radium + 50,
    radon: inv[message.author.id].radon,
    gold: inv[message.author.id].gold,
    fer: inv[message.author.id].fer,
energy: inv[message.author.id].energy, // retirer l'énergie après minage
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone,
platine: inv[message.author.id].platine,
cuivre: inv[message.author.id].cuivre,
am: inv[message.author.id].am,
p4d: inv[message.author.id].p4d,
aluminium: inv[message.author.id].aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth,
uranium: inv[message.author.id].uranium,
//bois
sapin: inv[message.author.id].sapin,
bambou: inv[message.author.id].bambou,
pin: inv[message.author.id].pin,
bouleau: inv[message.author.id].bouleau,

money: inv[message.author.id].money - 50
}

fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

message.reply(`:tada: Votre laboratoire vient de finir la production de 50gr de Radium`)
        }
    }
  else if(counter[message.author.id].theme === "Radon") {
    if(!inv[message.author.id].money >= 100) {
        counter[message.author.id] = {
            count: 0,
            actif: false,
            theme: " ",
            goal: 0
        }
        fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
        
            labo[message.author.id] = {
                radium: false,
                radon: false,
                uranium: false,
                am: false,
                prisme: false
            }
            fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
return message.channel.reply("Oups,\nLa fabrication de radon a échoué dû au manque de 100 :moneybag: dans votre inventaire")
     }
        if(counter[message.author.id].goal <= counter[message.author.id].count) {
            counter[message.author.id] = {
                count: 0,
                actif: false,
                theme: " ",
                goal: 0
            }
            fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
            
                labo[message.author.id] = {
                    radium: false,
                    radon: false,
                    uranium: false,
                    am: false,
                    prisme: false
                }
                fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));

            
inv[message.author.id] = {
// minerais
ruby: inv[message.author.id].ruby,
saphir: inv[message.author.id].saphir,
emerald: inv[message.author.id].emerald,
radium: inv[message.author.id].radium,
radon: inv[message.author.id].radon + 50,
gold: inv[message.author.id].gold,
fer: inv[message.author.id].fer,
energy: inv[message.author.id].energy, // retirer l'énergie après minage
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone,
platine: inv[message.author.id].platine,
cuivre: inv[message.author.id].cuivre,
am: inv[message.author.id].am,
p4d: inv[message.author.id].p4d,
aluminium: inv[message.author.id].aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth,
uranium: inv[message.author.id].uranium,
//bois
sapin: inv[message.author.id].sapin,
bambou: inv[message.author.id].bambou,
pin: inv[message.author.id].pin,
bouleau: inv[message.author.id].bouleau,

money: inv[message.author.id].money - 100
}

fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

message.reply(`:tada: Votre laboratoire vient de finir la production de 50gr de Radon`)
    }
}

else if(counter[message.author.id].theme === "Uranium") {
    if(!inv[message.author.id].money >= 150) {
        counter[message.author.id] = {
            count: 0,
            actif: false,
            theme: " ",
            goal: 0
        }
        fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
        
            labo[message.author.id] = {
                radium: false,
                radon: false,
                uranium: false,
                am: false,
                prisme: false
            }
            fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
return message.channel.reply("Oups,\nLa fabrication d'uranium a échoué dû au manque de 150 :moneybag: dans votre inventaire")
     }
        if(counter[message.author.id].goal <= counter[message.author.id].count) {
            counter[message.author.id] = {
                count: 0,
                actif: false,
                theme: " ",
                goal: 0
            }
            fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
            
                labo[message.author.id] = {
                    radium: false,
                    radon: false,
                    uranium: false,
                    am: false,
                    prisme: false
                }
                fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));

            
inv[message.author.id] = {
// minerais
ruby: inv[message.author.id].ruby,
saphir: inv[message.author.id].saphir,
emerald: inv[message.author.id].emerald,
radium: inv[message.author.id].radium,
radon: inv[message.author.id].radon,
gold: inv[message.author.id].gold,
fer: inv[message.author.id].fer,
energy: inv[message.author.id].energy, // retirer l'énergie après minage
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone,
platine: inv[message.author.id].platine,
cuivre: inv[message.author.id].cuivre,
am: inv[message.author.id].am,
p4d: inv[message.author.id].p4d,
aluminium: inv[message.author.id].aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth,
uranium: inv[message.author.id].uranium + 50,
//bois
sapin: inv[message.author.id].sapin,
bambou: inv[message.author.id].bambou,
pin: inv[message.author.id].pin,
bouleau: inv[message.author.id].bouleau,

money: inv[message.author.id].money - 150
}

fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

message.reply(`:tada: Votre laboratoire vient de finir la production de 50gr d'Uranium`)
    }
}

else if(counter[message.author.id].theme === "Anti-Matière") {
    if(!inv[message.author.id].money >= 300) {
        counter[message.author.id] = {
            count: 0,
            actif: false,
            theme: " ",
            goal: 0
        }
        fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
        
            labo[message.author.id] = {
                radium: false,
                radon: false,
                uranium: false,
                am: false,
                prisme: false
            }
            fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
return message.channel.reply("Oups,\nLa fabrication d'anti-matière' a échoué dû au manque de 300 :moneybag: dans votre inventaire")
     }
        if(counter[message.author.id].goal <= counter[message.author.id].count) {
            counter[message.author.id] = {
                count: 0,
                actif: false,
                theme: " ",
                goal: 0
            }
            fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
            
                labo[message.author.id] = {
                    radium: false,
                    radon: false,
                    uranium: false,
                    am: false,
                    prisme: false
                }
                fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));

            
inv[message.author.id] = {
// minerais
ruby: inv[message.author.id].ruby,
saphir: inv[message.author.id].saphir,
emerald: inv[message.author.id].emerald,
radium: inv[message.author.id].radium,
radon: inv[message.author.id].radon,
gold: inv[message.author.id].gold,
fer: inv[message.author.id].fer,
energy: inv[message.author.id].energy, // retirer l'énergie après minage
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone,
platine: inv[message.author.id].platine,
cuivre: inv[message.author.id].cuivre,
am: inv[message.author.id].am + 1,
p4d: inv[message.author.id].p4d,
aluminium: inv[message.author.id].aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth,
uranium: inv[message.author.id].uranium,
//bois
sapin: inv[message.author.id].sapin,
bambou: inv[message.author.id].bambou,
pin: inv[message.author.id].pin,
bouleau: inv[message.author.id].bouleau,

money: inv[message.author.id].money - 300
}

fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

message.reply(`:tada: Votre laboratoire vient de finir la production de 1gr d'anti-matière'`)
    }
}
else if(counter[message.author.id].theme === "Prisme 4D") {
    if(!inv[message.author.id].money >= 500) {
        counter[message.author.id] = {
            count: 0,
            actif: false,
            theme: " ",
            goal: 0
        }
        fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
        
            labo[message.author.id] = {
                radium: false,
                radon: false,
                uranium: false,
                am: false,
                prisme: false
            }
            fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
return message.channel.reply("Oups,\nLa fabrication de radon a échoué dû au manque de 500 :moneybag: dans votre inventaire")
     }
        if(counter[message.author.id].goal <= counter[message.author.id].count) {
            counter[message.author.id] = {
                count: 0,
                actif: false,
                theme: " ",
                goal: 0
            }
            fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
            
                labo[message.author.id] = {
                    radium: false,
                    radon: false,
                    uranium: false,
                    am: false,
                    prisme: false
                }
                fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));

            
inv[message.author.id] = {
// minerais
ruby: inv[message.author.id].ruby,
saphir: inv[message.author.id].saphir,
emerald: inv[message.author.id].emerald,
radium: inv[message.author.id].radium,
radon: inv[message.author.id].radon,
gold: inv[message.author.id].gold,
fer: inv[message.author.id].fer,
energy: inv[message.author.id].energy, // retirer l'énergie après minage
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone,
platine: inv[message.author.id].platine,
cuivre: inv[message.author.id].cuivre,
am: inv[message.author.id].am,
p4d: inv[message.author.id].p4d +2,
aluminium: inv[message.author.id].aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth,
uranium: inv[message.author.id].uranium,
//bois
sapin: inv[message.author.id].sapin,
bambou: inv[message.author.id].bambou,
pin: inv[message.author.id].pin,
bouleau: inv[message.author.id].bouleau,

money: inv[message.author.id].money - 500
}

fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

message.reply(`:tada: Votre laboratoire vient de finir la production de 2gr de prisme 4D`)
    }
}
}

if(!sword[message.author.id]) {
    sword[message.author.id] = {
        sword: 1
    }
}

// var epee = "<:epeebasique:574864415049121802> "
if(sword[message.author.id].sword == 1) {let epee = "<:epeebasique:574864415049121802> "}
if(sword[message.author.id].sword == 2) {let epee = "<:epeebasiqueor:574864489862791168> "}
if(sword[message.author.id].sword == 3) {let epee = "<:epeebasique:574864307335069696> "}
if(sword[message.author.id].sword == 4) {let epee = "<:epeedieu:574864357708529675> "}
if(sword[message.author.id].sword == 5) {let epee = "<:epeemagique:574868596455374848>"}

if(message.content.startsWith(prefix + "help")) {
    let args = message.content.split(" ").slice(1).join(" ")
    if(!args) {
    var embed = new Discord.RichEmbed()
    .setColor(color)
    .setThumbnail(bot.user.displayAvatarURL)
    .setAuthor("RedBot | Menu d'aide")
    .setDescription("Vous pouvez faire **"+prefix+"help [nom de la commande]** afin d'avoir plus d'informations sur celle-ci")
    .addField("==============================", "Aventure:")
    .addField(`:briefcase: ${prefix}inv || ${prefix}inventory`, "** **")
    .addField(`:open_file_folder: ${prefix}profile`, "** **")
    .addField(`:pick: ${prefix}mine [chiffre / all]`, "** **")
    .addField(`:question: ${prefix}help`, "** **")
    .addField(`:first_place: ${prefix}top`, "** **")
    .addField(`:calendar: ${prefix}daily`, "** **")
    .addField(`:slot_machine: ${prefix}slot`, "** **")
    .addField(`🚧 ${prefix}build`, "** **")
    .addField(`:alembic: ${prefix}labo`, "** **")
    .addField(`<:axe:561219046268207113> ${prefix}cut [chiffre / all]`, "** **")
    .addField(`<:Premium:586894745662652431> ${prefix}premium`, "** **")
    .addField(`<:normal:586958753526579239> ${prefix}chest (open) [bois / rare / ultra / magique]`, "** **")
    message.channel.send(embed)
    }else{
        if(args == "inv" || args == "inventory") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Commande d'inventaire")
            .setDescription("Montre votre inventaire personnel\n`Usage: r!inv // r!inventory`")
        }
        else if(args == "profile") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Profil")
            .setDescription("Vous donne des informations sur votre compte\n`Usage: r!profile [ID / Mention]`\n[] = Optionnel")
        }
        else if(args == "mine") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Commande de minage")
            .setDescription("Permet de récolter des minerais, plus le niveau de votre pioche est élevé, plus vous récoltez de minerais en grande quantitée\n`Usage: r!mine [chiffre / all]`\n[] = Optionnel")
        
        }
        else if(args == "cut") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Commande de coupage de bois")
            .setDescription("Permet de récolter du bois, plus le niveau de votre hache est élevé, plus vous récoltez du bois en grande quantitée\n`Usage: r!cut [chiffre / all]`\n[] = Optionnel")
        
        }

        else if(args == "help") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Commande d'aide")
            .setDescription("T'es sérieux?\n`Usage: r!help` *...*")
        }
        else if(args == "top") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Commande de classement")
            .setDescription("Montre le top 3 des joueurs les plus riches, le classement se base sur votre niveau additionné à votre somme de :moneybag:\nNB: Le classement s'actualise à l'aide des messages des utilisateurs\n`Usage: r!top`")
        }
        else if(args == "daily") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Commande journalière")
            .setDescription("Vous donne un peu de :moneybag: ; commande fesable une fois / jour\n`Usage: r!daily`")
        }
        else if(args == "slot") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Commande de machine à sous")
            .setDescription("Lance une machine à sous, minimum 10 :moneybag: peuvent être misé\n`Usage: r!slot (somme)`\n() = Obligatoire")
        }
        else if(args == "build") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Commande de construction")
            .setDescription("Permet de construire des bâtiments, de débloquer des ressources, d'améliorer la productivité de fabrication de ressources,...\n`Usage r!build (bâtiment)`\n() = Obligatoire")
        }
        else if(args == "labo") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Commande de laboratoire")
            .setDescription("Permet de fabriquer les ressources de laboratoire\nNB: Demande de construire le laboratoire au lvl 1 minimum (à l'aide de la commande r!build)\n`Usage: r!labo (ressource)`\n() = Obligatoire")
        }
        else if(args == "premium") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Pierre de sagesse")
            .setDescription("Une pierre de sagesse (ou un premium si on veut sortir de l'histoire) donne accès à divers fonctionnalités, cette commande affiche des paramètres 100% réglables comme vous le voulez, pour obtenir une pierre (premium) il suffit de booster le serveur support (Avec nitro \"jeux\")\nUsage: `r!premium [color]`\n[ ] = Optionnel")
        }
        else if(args == "chest") {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Les coffres")
            .setDescription("Vous obtenez un coffre quand vous montez de niveau, sa rareté varie:\n-80% de chance d'avoir un coffre en bois\n-19% un coffre rare\n-1% un ultra rare\n0% (100% si vous avez une pierre de sagesse) un coffre magique\nLes lots sont les mêmes mais leurs quantitées varient.\n`Usage: r!chest [open] (bois / rare / ultra / magique`\n [ ] = Optionnel || () = Obligatoire")
        }
        else {
            var embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle("Redbot - Commande inexistante")
            .setDescription("Cette commande n'existe pas :/")
        }
        message.channel.send(embed)
    }
}
//add
//inv
if(message.content.startsWith(prefix)) {
if(!inv[message.author.id]) {
    inv[message.author.id] = {
        // minerais
        ruby: 0,
        saphir: 0,
        emerald: 0,

        gold: 0,
        fer: 0,
        stone: 0,
        platine: 0,
        cuivre: 0,
aluminium: 0,
bismuth: 0,
// bois
sapin: 0,
bambou: 0,
pin: 0,
bouleau: 0,
        // Énergie de laboratoire
        am: 0,
        p4d: 0,
        radium: 0,
        radon: 0,
        uranium: 0,
        // Matériel
        pickaxe: 1,
        axe: 1,
    
        // autres
energy: 100,
money: 1000
    }
    fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
}


}

if(!xp[message.author.id]){
    xp[message.author.id] = {
        xp: 0,
        lvl: 1
    }
}




let next = xp[message.author.id].lvl * 300
if(message.content.startsWith(prefix + "inv")) {
   
    
    var user = message.mentions.users.first() || bot.users.get(message.content.split(" ").slice(1).join(" ")) || message.author;

    if(!user) return message.reply("cet utilisateur n'existe pas :/")
    if(user.bot) return message.channel.send("Les bots ne peuvent pas faire une aventure en solo *pleure...*")

    if(!inv[user.id]) return message.reply("Cet utilisateur n'a pas démarré son aventure")
    
    if(!xp[user.id]) return message.reply("Cet utilisateur n'a pas de niveau :/")
    if(!build[user.id]) return message.reply("Cet utilisateur n'a généré son terrain de jeu, impossible donc de savoir l'état de ses bâtiments :/")

if(!sword[user.id]) return message.reply("Cet utilisateur n'a pas eu tout son matériel :/")

var rubinity = inv[user.id].ruby + " gr"
var saphirity = inv[user.id].saphir + " gr"
var emeraldity = inv[user.id].emerald + " gr"

var goldity = inv[user.id].gold + " gr"
var ferity = inv[user.id].fer + " gr"
var stonity = inv[user.id].stone + " gr"
var planity = inv[user.id].platine + " gr"
var cuivrity = inv[user.id].cuivre + " gr"
var alunity = inv[user.id].aluminium + " gr"
var bismity = inv[user.id].bismuth + " gr"


var sapinity = inv[user.id].sapin + " gr"
var bambity = inv[user.id].bambou + " gr"
var pinity = inv[user.id].pin + " gr"
var boulity = inv[user.id].bouleau + " gr"

var amity = inv[user.id].am + " gr"
var primity = inv[user.id].p4d + " gr"
var radinity = inv[user.id].radium + " gr"
var radonity = inv[user.id].radon + " gr"
var uranity = inv[user.id].uranium + " gr"

// ============================================================================================
if(inv[user.id].uranium >= 1000) {
    var amount = inv[user.id].uranium / 100
    var uranity =  amount + " kg"
}

if(inv[user.id].uranium >= 1000000000) {
    var amount = inv[user.id].uranium / 1000000000
    var uranity =  amount.toFixed(2) + " t"
}

if(inv[user.id].radon >= 1000) {
    var amount = inv[user.id].radon / 100
    var radonity =  amount + " kg"
}

if(inv[user.id].radon >= 1000000000) {
    var amount = inv[user.id].radon / 1000000000
    var radonity=  amount.toFixed(2) + " t"
}
if(inv[user.id].bismuth >= 1000) {
    var amount = inv[user.id].bismuth / 100
    var bismity =  amount + " kg"
}

if(inv[user.id].bismuth >= 1000000000) {
    var amount = inv[user.id].bismuth / 1000000000
    var bismity =  amount.toFixed(2) + " t"
}
if(inv[user.id].bouleau >= 1000) {
    var amount = inv[user.id].bouleau / 100
    var boulity =  amount + " kg"
}

if(inv[user.id].bouleau >= 1000000000) {
    var amount = inv[user.id].bouleau / 1000000000
    var boulity =  amount.toFixed(2) + " t"
}

if(inv[user.id].pin >= 1000) {
    var amount = inv[user.id].pîn / 100
    var pinity =  amount + " kg"
}

if(inv[user.id].pin >= 1000000000) {
    var amount = inv[user.id].pin / 1000000000
    var pinity =  amount.toFixed(2) + " t"
}

if(inv[user.id].bambou >= 1000) {
    var amount = inv[user.id].bambou / 100
    var bambity =  amount + " kg"
}

if(inv[user.id].bambou >= 1000000000) {
    var amount = inv[user.id].bambou / 1000000000
    var bambity =  amount.toFixed(2) + " t"
}

if(inv[user.id].sapin >= 1000) {
    var amount = inv[user.id].sapin / 100
    var sapinity=  amount + " kg"
}

if(inv[user.id].sapin >= 1000000000) {
    var amount = inv[user.id].sapin / 1000000000
    var sapinity =  amount.toFixed(2) + " t"
}

if(inv[user.id].ruby >= 1000) {
    var amounti = inv[user.id].ruby / 100
    var rubinity =  amounti + " kg"
}

if(inv[user.id].ruby >= 1000000000) {
    var amounti = inv[user.id].ruby / 1000000000
    var rubinity =  amounti.toFixed(2) + " t"
} 
if(inv[user.id].aluminium >= 1000) {
    var amount = inv[user.id].aluminium / 100
    var alunity =  amount + " kg"
}

if(inv[user.id].aluminium >= 1000000000) {
    var amount = inv[user.id].aluminium / 1000000000
    var alunity =  amount.toFixed(2) + " t"
}

if(inv[user.id].p4d >= 1000) {
    var amount = inv[user.id].p4d / 100
    var primity =  amount + " kg"
}

if(inv[user.id].p4d >= 1000000000) {
    var amount = inv[user.id].p4d / 1000000000
    var primity =  amount.toFixed(2) + " t"
}

if(inv[user.id].am >= 1000) {
    var amount = inv[user.id].am / 100
    var amity =  amount + " kg"
}

if(inv[user.id].am >= 1000000000) {
    var amount = inv[user.id].am / 1000000000
    var amity =  amount.toFixed(2) + " t"
}

if(inv[user.id].cuivre >= 1000) {
    var amount = inv[user.id].cuivre / 100
    var cuivrity =  amount + " kg"
}

if(inv[user.id].cuivre >= 1000000000) {
    var amount = inv[user.id].cuivre / 1000000000
    var cuivrity =  amount.toFixed(2) + " t"
}

if(inv[user.id].platine >= 1000) {
    var amount = inv[user.id].platine / 100
    var planity=  amount + " kg"
}


if(inv[user.id].platine >= 1000000000) {
    var amount = inv[user.id].platine / 1000000000
    var planity =  amount.toFixed(2) + " t"
}

if(inv[user.id].stone >= 1000) {
    var amount = inv[user.id].stone / 100
    var stonity =  amount + " kg"
}

if(inv[user.id].stone >= 1000000000) {
    var amount = inv[user.id].stone / 1000000000
    var stonity =  amount.toFixed(2) + " t"
}

if(inv[user.id].saphir >= 1000) {
    var amount = inv[user.id].saphir / 100
    var saphirity =  amount + " kg"
}

if(inv[user.id].saphir >= 1000000000) {
    var amount = inv[user.id].saphir / 1000000000
    var saphirity =  amount.toFixed(2) + " t"
}

if(inv[user.id].gold >= 1000) {
    var amount = inv[user.id].gold / 100
    var goldity =  amount + " kg"
}

if(inv[user.id].gold >= 1000000000) {
    var amount = inv[user.id].gold / 1000000000
    var goldity=  amount.toFixed(2) + " t"
}



if(inv[user.id].emerald >= 1000) {
    var amount = inv[user.id].emerald / 100
    var emeraldity =  amount + " kg"
}

if(inv[user.id].emerald >= 1000000000) {
    var amount = inv[user.id].emerald / 1000000000
    var emeraldity =  amount.toFixed(2) + " t"
}

if(inv[user.id].radium >= 1000) {
    var amount = inv[user.id].radium / 100
    var radinity =  amount + " kg"
}

if(inv[user.id].radium >= 1000000000) {
    var amount = inv[user.id].radium / 1000000000
    var radinity =  amount.toFixed(2) + " t"
}


if(inv[user.id].fer >= 1000) {
    var amount = inv[user.id].fer / 100
    var ferity =  amount + " kg"
}

if(inv[user.id].fer >= 1000000000) {
    var amount = inv[user.id].fer / 1000000000
    var ferity =  amount.toFixed(2) + " t"
}

var epee = "<:epeebasique:574864415049121802>"
if(sword[user.id].sword === 1) {let epee = "<:epeebasique:574864415049121802>"}
else if(sword[user.id].sword === 2) {let epee = "<:epeebasiqueor:574864489862791168>"}
else if(sword[user.id].sword === 3) {let epee = "<:epeebasique:574864307335069696>"}
else if(sword[user.id].sword === 4) {let epee = "<:epeedieu:574864357708529675>"}
else if(sword[user.id].sword === 5) {let epee = "<:epeemagique:574868596455374848>"}else{let epee = "<:epeebasique:574864415049121802>"}
// =====================================================================================
/*
var job1 = job[message.author.id].primaire
var job2 = job[message.author.id].secondaire 
if(job[user.id].primaire === "none") { var job1 = "Vous êtes au chômage !"}
if(job[user.id].secondaire === "none") { var job2= "Vous n'avez pas d'emploi secondaire"} */

var locked = ":unlock:"
if(build[user.id].labo == false) { var locked = ":lock:"}

var locked2 = ":lock:"
if(build[user.id].laboLvl >= 1) { var locked2 = ":unlock:"}

var locked3 = ":lock:"
if(build[user.id].laboLvl >= 3) { var locked3 = ":unlock:"}
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle("Inventaire de " + user.username)
    .addField(`:high_brightness: Energie : ${inv[user.id].energy} / 1000\n:moneybag: Argent : ${inv[user.id].money}$`, "** **", true)
    .addField("==============================", "Minerais:")
  //  .addField("** **", "Minerais commun")
  .addField(`:x: Pierre: ${stonity}\n:x: Aluminium : ${alunity}`, "** **", true)
  .addField(`<:gold:556075656765636610> Or : ${goldity}\n:x: Fer : ${ferity}\n:x: Cuivre : ${cuivrity}`, "** **", true)
  
  .addField(`:x: Platine: ${planity}\n:x: Bismuth : ${bismity}`, "** **", true) 
    .addField(`<:emerald:546055070802771988> Émeraude : ${emeraldity}\n<:Ruby:546047939618013194> Rubis : ${rubinity}\n<:saphir:546055100637118474> Saphir : ${saphirity}`, "** **", true)
   // .addField("** **", "Minerais rarissime")
    
    .addField("==============================", "Bois:")
    .addField(`:christmas_tree: Sapin : ${sapinity}\n:bamboo: Bambou : ${bambity}\n:evergreen_tree: Pin : ${pinity}`, "** **", true)
    .addField(`:x: Bouleau : ${boulity}`, "** **", true)
    .addField("==============================", "Ressources de laboratoire " + locked)
    .addField(`:microscope: Quantique: ${locked3} (lvl3)`, `:x: Anti-Matière : ${amity}\n:x: Prisme 4D : ${primity}`, true)
    .addField(`:radioactive: Radioactif: ${locked2} (lvl1)`, `<:radium:546055082811195392> Radium : ${radinity}\n:x: Radon : ${radonity}\n:x: Uranium : ${uranity}`, true)
    .addField("==============================", "Matériel:")
    .addField(`:pick: Pioche : lvl ${inv[user.id].pickaxe}\n<:axe:561219046268207113> Hache : lvl ${inv[user.id].axe}\n${epee} Épée: lvl ${sword[message.author.id].sword}`, "** **", true)

// ⚗
    message.channel.send(embed)

}


if(message.content.startsWith(prefix + "craft")) {
    var args = message.content.split(" ").slice(1).join(" ")
    if(!args) {
        var embed = new Discord.RichEmbed()
        .setColor(color)
        .setTitle("Menu de craft")
        .addField("Usage correct: "+`${prefix}craft [pickaxe / axe]`, "** **")
        .setDescription("```css\n- pickaxe\n- axe```")
        return message.channel.send(embed)
    }
if(args == "srgizeuifhrqvaefez") {
    if(!sword[message.author.id] || sword[message.author.id].sword == 0) {
        return message.channel.send("Vous n'avez pas d'épée :/")
    }
    var first = 300
    var ft = "Fer"
    var second = 500
    var st = "Or"
    var third = " "
    var tt = " "
    var bonus = " "
   var bonus2 = " "
   if(sword[message.author.id].sword == 1) {
    let first = 300
    let ft = "Fer"
    let second = 500
    let st = "Or"
    let third = " "
    let tt = " "
    let bonus = " "
    let bonus2 = " "
}else if(sword[message.author.id].sword == 2) {
let first = 300
let ft = "Sapin"
let second = 600
let st = "Saphir"
let third = " "
let tt = " "
let bonus = " "
let bonus2 = " "
}else  if(sword[message.author.id].sword == 3){
    let first = 1000
    let ft = "Fer"
    let second = 20
    let st = "Émeraude"
    let third = 200
    let tt = "Rubis"
    let bonus = "gr"
    let bonus2 = ":"
}else  if(sword[message.author.id].sword == 4) {
    const first = 200
    const ft = "Émeraude"
    const second = 2000
    const st = "Saphir"
    const third = 50
    const tt = "Prisme 4D"
    const bonus = "gr"
    const bonus2 = ":"
}else  if(sword[message.author.id].sword == 5) {
return message.channel.send("Votre épée est déjà à son niveau maximum!")
}

var embed = new Discord.RichEmbed()
.setColor(color)
.setTitle("Amélioration de l'épée:")
.addField("Ressources nécéssaires:", `${ft}: ${first}gr\n${st}: ${second}gr\n${tt} ${third}${bonus}`)
.addField("Voulez vous améliorer votre épée?", "** **")
message.channel.send(embed)
}
else if(args == "pickaxe"){ 
    let iron = 100 * inv[message.author.id].pickaxe
    let wood = 300 * inv[message.author.id].pickaxe
    
    var embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle("Table de craft - Pioche")
    .setDescription(`**__Matériel nécéssaire:__**\n:evergreen_tree: Pin: ${wood}gr\n:x: Fer: ${iron}gr`)
    .setFooter("Cliquez sur la réaction afin de valider le payement")
    var emoji = "\u274C";
    var emoji2 = "\u2705";
    message.channel.send(embed).then(msg => {
      msg.react(emoji).then(r => {
          msg.react(emoji2)
          const V = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
          const X = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
        
                  const Vok= msg.createReactionCollector(V, {
              time: 1000000
          });
          const Xok = msg.createReactionCollector(X, {
              time: 1000000
          });
        
        
          Vok.on('collect', r => {
            msg.delete()
    return message.channel.send("Craft annulé suite à votre demande") 
          })
            
        Xok.on('collect', r => {
            msg.delete()
            var ress = " "
            
    if(inv[message.author.id].fer < iron) {var ress = `- Fer: ${iron - inv[message.author.id].fer}gr`}
    if(inv[message.author.id].pin < wood) {var ress = ress + `\n- Pin: ${wood - inv[message.author.id].pin}gr`}
    if(ress === " "){
    
    inv[message.author.id] = {
        // minerais
        ruby: inv[message.author.id].ruby,
        saphir: inv[message.author.id].saphir,
        emerald: inv[message.author.id].emerald,
        radium: inv[message.author.id].radium,
        radon: inv[message.author.id].radon,
        gold: inv[message.author.id].gold,
        fer: inv[message.author.id].fer - iron,
    energy: inv[message.author.id].energy,
    pickaxe: inv[message.author.id].pickaxe + 1,
    stone: inv[message.author.id].stone,
    platine: inv[message.author.id].platine,
    cuivre: inv[message.author.id].cuivre,
    am: inv[message.author.id].am,
    p4d: inv[message.author.id].p4d,
    aluminium: inv[message.author.id].aluminium,
    axe: inv[message.author.id].axe,
    bismuth: inv[message.author.id].bismuth,
    uranium: inv[message.author.id].uranium,
    //bois
    sapin: inv[message.author.id].sapin,
    bambou: inv[message.author.id].bambou,
    pin: inv[message.author.id].pin - wood,
    bouleau: inv[message.author.id].bouleau,
    money: inv[message.author.id].money
    };
    const fs = require("fs");
    fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
    
    message.reply("Amélioration de votre pioche\n"+`lvl ${inv[message.author.id].pickaxe - 1} => lvl ${inv[message.author.id].pickaxe}`)
    
    xp[message.author.id] = {
    xp: xp[message.author.id].xp + 60,
    lvl: xp[message.author.id].lvl
    }
    fs.writeFile("./assets/level.json", JSON.stringify(xp), (err)=>console.log(err));
    
    
    
    }else{
        return message.channel.send(`Vous n'avez pas assez de ressources!\nVoici une liste de ce qu'il vous manque:\n` + "```diff\n"+ress+"\n```")
    }
    }
        )})})}else if(args == "axe"){ 
            let iron = 250 * inv[message.author.id].axe
            let wood = 400 * inv[message.author.id].axe
            
            var embed = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("Table de craft - Hache")
            .setDescription(`**__Matériel nécéssaire:__**\n:christmas_tree: Sapin: ${wood}gr\n:x: Fer: ${iron}gr`)
            .setFooter("Cliquez sur la réaction afin de valider le payement")
            var emoji = "\u274C";
            var emoji2 = "\u2705";
            message.channel.send(embed).then(msg => {
              msg.react(emoji).then(r => {
                  msg.react(emoji2)
                  const V = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
                  const X = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
                
                          const Vok= msg.createReactionCollector(V, {
                      time: 1000000
                  });
                  const Xok = msg.createReactionCollector(X, {
                      time: 1000000
                  });
                
                
                  Vok.on('collect', r => {
                    msg.delete()
            return message.channel.send("Craft annulé suite à votre demande") 
                  })
                    
                Xok.on('collect', r => {
                    msg.delete()
                    var ress = " "
                    
            if(inv[message.author.id].fer < iron) {var ress = `- Fer: ${iron - inv[message.author.id].fer}gr`}
            if(inv[message.author.id].pin < wood) {var ress = ress + `\n- Sapin: ${wood - inv[message.author.id].pin}gr`}
            if(ress === " "){
            
            inv[message.author.id] = {
                // minerais
                ruby: inv[message.author.id].ruby,
                saphir: inv[message.author.id].saphir,
                emerald: inv[message.author.id].emerald,
                radium: inv[message.author.id].radium,
                radon: inv[message.author.id].radon,
                gold: inv[message.author.id].gold,
                fer: inv[message.author.id].fer - iron,
            energy: inv[message.author.id].energy,
            pickaxe: inv[message.author.id].pickaxe,
            stone: inv[message.author.id].stone,
            platine: inv[message.author.id].platine,
            cuivre: inv[message.author.id].cuivre,
            am: inv[message.author.id].am,
            p4d: inv[message.author.id].p4d,
            aluminium: inv[message.author.id].aluminium,
            axe: inv[message.author.id].axe + 1,
            bismuth: inv[message.author.id].bismuth,
            uranium: inv[message.author.id].uranium,
            //bois
            sapin: inv[message.author.id].sapin - wood,
            bambou: inv[message.author.id].bambou,
            pin: inv[message.author.id].pin,
            bouleau: inv[message.author.id].bouleau,
            money: inv[message.author.id].money
            };
            const fs = require("fs");
            fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
            
            message.reply("Amélioration de votre hache\n"+`lvl ${inv[message.author.id].pickaxe - 1} => lvl ${inv[message.author.id].pickaxe}`)
            
            xp[message.author.id] = {
            xp: xp[message.author.id].xp + 63,
            lvl: xp[message.author.id].lvl
            }
            fs.writeFile("./assets/level.json", JSON.stringify(xp), (err)=>console.log(err));
            
            
            
            }else{
                return message.channel.send(`Vous n'avez pas assez de ressources!\nVoici une liste de ce qu'il vous manque:\n` + "```diff\n"+ress+"\n```")
            }
            }
                )})})}
}

/*
if(message.content === prefix + "serverlist") {
    if(message.author.id !== "409091614414209054") return message.reply("Cette commande est réservé à mon créateur") 

   let tosend = [];
     bot.guilds.forEach((guild, number) => { tosend.push(`\`${guild.name}\` / ID : ${guild.id} / **${guild.memberCount}** membres`) })
  let pages = [
         `${tosend.slice(0, 9).join('\n')}`,
         `${tosend.slice(10, 19).join('\n')}`  //rajouter une page si besoin !
     /*    `${tosend.slice(20, 29).join('\n')}`,
         `${tosend.slice(30, 39).join('\n')}`,
         `${tosend.slice(40, 49).join('\n')}`,
         `${tosend.slice(50, 59).join('\n')}`,
         `${tosend.slice(60, 69).join('\n')}`,
         `${tosend.slice(70, 79).join('\n')}`,
         `${tosend.slice(80, 89).join('\n')}`,
         `${tosend.slice(90, 99).join('\n')}`     
     ];
     
   let page = 1; 
  
   const embed = new Discord.RichEmbed() 
     .setColor(color)
     .setFooter(`Page ${page} sur ${pages.length}`) 
     .addField(`Serveurs: ${bot.guilds.size} || Utilisateurs: ${bot.users.size}`, "r!topserv pour voir le classement des plus gros serveurs")
     .setDescription(pages[page-1])
   
  
   message.channel.send(embed).then(msg => { 
    
     msg.react('\u23EA').then( r => { 
       msg.react('\u23E9')
 
      
       const backwardsFilter = (reaction, user) => reaction.emoji.name === '\u23EA' && user.id === message.author.id;
       const forwardsFilter = (reaction, user) => reaction.emoji.name === '\u23E9' && user.id === message.author.id; 
      
       const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
       const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
       
       
        msg.react("\u274C")
       const X = (reaction, user) => reaction.emoji.name === "\u274C" && user.id === message.author.id;
         
           const Xok = msg.createReactionCollector(X, {
               time: 1000000
           });
         
         
           Xok.on('collect', r => {
             msg.delete()
           })
       
       backwards.on('collect', r => { 
         if (page === 1) return; 
         page--; 
         embed.setDescription(pages[page-1]); 
         embed.setFooter(`Page ${page} sur ${pages.length}`); 
         msg.edit(embed) 
       })
      
       forwards.on('collect', r => { 
         if (page === pages.length) return; 
         page++; 
         embed.setDescription(pages[page-1]); 
         embed.setFooter(`Page ${page} sur ${pages.length}`); 
         msg.edit(embed) 
       })
    
     })
  
   })
  
 }
 
*/
if(message.content.startsWith(prefix + "mine")) {
    var args = message.content.split(" ").slice(1).join(" ")
   /* if (minestamp.has(message.author.id)) {
return message.channel.send("/!\\Commande sous cooldown /!\\ \nMerci de patienter 5 secondes")
    } else {
 
           // the user can type the command ... your command code goes here :)
 
        // Adds the user to the set so that they can't talk for a minute
       minestamp.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          minestamp.delete(message.author.id);
        },  5000);  */
        var base = 1

        if(args === "all") {
            var base = inv[message.author.id].energy
              }else{
                  var base = args 
              }

              if(!args){
                var base = 1
            }

   if(base <= 0) return message.reply("**Vous n'avez pas assez d'énergie !**\n*Pour en obtenir, il vous suffit d'écrire, à chaque message vous obtiendrez 2 point d'énergie (cooldown de 10 secondes)*")
   if(base > parseInt(inv[message.author.id].money)) return message.reply("**Vous n'avez pas assez d'argent !**\n*Pour en obtenir, il vous suffit de vendre des ressources*")

 
   if(args !== "all") {
if(isNaN(args)) {
    var base = 1
}
if(message.content.includes(".")) return message.reply("L'énergie n'est pas un nombre à virgule!")
   }

   if(parseInt(base) > inv[message.author.id].energy) return message.reply("**Vous n'avez pas assez d'énergie !**\n*Pour en obtenir, il vous suffit d'écrire, à chaque message vous obtiendrez 2 point d'énergie (cooldown de 10 secondes)*")
 
    /* var random = Math.floor(Math.random() * 9) + 1 */
var base2 = base

if(args === "all") { 
    var base2 = base2 * 3
    var base2 = base2 - 4
}
// var base2 = base2 // + random


// gain =====================================================================
var ruby = inv[message.author.id].pickaxe * 5 + parseInt(base2)
var gold = inv[message.author.id].pickaxe * 33 + parseInt(base2)
var saphir = inv[message.author.id].pickaxe * 7 + parseInt(base2)
var emerald = inv[message.author.id].pickaxe * 6 + parseInt(base2)
var radium = inv[message.author.id].pickaxe * 5 + parseInt(base2)
var fer = inv[message.author.id].pickaxe * 30 + parseInt(base2)
var stone = inv[message.author.id].pickaxe * 100 + parseInt(base2)
var platine = inv[message.author.id].pickaxe * 4 + parseInt(base2)
var cuivre = inv[message.author.id].pickaxe * 10 + parseInt(base2)
var aluminium = inv[message.author.id].pickaxe * 50 + parseInt(base2)
var bismuth = inv[message.author.id].pickaxe * 3 + parseInt(base2)
// ===========================================================================

   



let pioche = inv[message.author.id].pickaxe



var rubinity = ruby + " gr"
var saphirity = saphir + " gr"
var emeraldity = emerald + " gr"
var radinity = radium + " gr"
var goldity = gold + " gr"
var ferity = fer + " gr"
var stonity = stone + " gr"
var planity = platine + " gr"
var cuivrity = cuivre + " gr"
var alunity = aluminium + " gr"
var bismity = bismuth + " gr"

var user = message.author
if(bismuth >= 1000) {
    var amount = bismuth / 100
    var bismity =  amount + " kg"
}

if(bismuth >= 1000000000) {
    var amount = bismuth / 1000000000
    var bismity =  amount.toFixed(2) + " t"
}
if(ruby >= 1000) {
    var amount = ruby / 100
    var rubinity =  amount + " kg"
}

if(ruby >= 1000000000) {
    var amount = ruby / 1000000000
    var rubinity =  amount.toFixed(2) + " t"
}

if(aluminium >= 1000) {
    var amount = aluminium / 100
    var alunity =  amount + " kg"
}

if(aluminium >= 1000000000) {
    var amount = aluminium / 1000000000
    var alunity =  amount.toFixed(2) + " t"
}


if(cuivre >= 1000) {
    var amount = cuivre / 100
    var cuivrity =  amount + " kg"
}

if(cuivre >= 1000000000) {
    var amount = cuivre / 1000000000
    var cuivrity =  amount.toFixed(2) + " t"
}


if(platine >= 1000) {
    var amount = platine / 100
    var planity =  amount + " kg"
}

if(platine >= 1000000000) {
    var amount = platine / 1000000000
    var planity =  amount.toFixed(2) + " t"
}


if(gold >= 1000) {
    var amount = gold / 100
    var goldity =  amount + " kg"
}

if(gold >= 1000000000) {
    var amount = gold / 1000000000
    var goldity =  amount.toFixed(2) + " t"
}

if(saphir >= 1000) {
    var amount = saphir / 100
    var saphirity =  amount + " kg"
}

if(saphir >= 1000000000) {
    var amount = saphir / 1000000000
    var saphirity =  amount.toFixed(2) + " t"
}

if(stone >= 1000) {
    var amount = stone / 100
    var stonity =  amount + " kg"
}

if(saphir >= 1000000000) {
    var amount = stone / 1000000000
    var stonity =  amount.toFixed(2) + " t"
}



if(emerald >= 1000) {
    var amount = emerald / 100
    var emeraldity =  amount + " kg"
}

if(emerald>= 1000000000) {
    var amount = emerald / 1000000000
    var emeraldity =  amount.toFixed(2) + " t"
}

if(radium >= 1000) {
    var amount = radium / 100
    var radinity =  amount + " kg"
}

if(radium >= 1000000000) {
    var amount = radium / 1000000000
    var radinity =  amount.toFixed(2) + " t"
}

if(fer >= 1000) {
    var amount = fer / 100
    var ferity =  amount + " kg"
}

if(radium >= 1000000000) {
    var amount = fer / 1000000000
    var ferity =  amount.toFixed(2) + " t"
}

var moneyl = base / 2
var money1 = parseInt(moneyl)
const mineembed = new Discord.RichEmbed()
.setColor(color)
.setTitle("Résultat de votre minage:")
.addField(":high_brightness: Energie utilisée : " + base, "** **",true)
.addField(`:moneybag: Argent dépensé: ${moneyl}`, "** **", true)
.addField(":pick: Pioche : lvl " + inv[message.author.id].pickaxe, "** **", true)
.addField("Minerais:", "==============================")
.addField(`:x: Pierre : ${stonity}\n:x: Aluminium : ${alunity}`, "** **", true)
.addField(`<:gold:556075656765636610> Or : ${goldity}\n:x: Fer: ${ferity}\n:x: Cuivre : ${cuivrity}`, "** **", true)
.addField(`:x: Platine : ${planity}`, "** **", true)
.addField(`<:Ruby:546047939618013194> Rubis: ${rubinity}\n<:saphir:546055100637118474> Saphir : ${saphirity}\n<:emerald:546055070802771988> Emeraude : ${emeraldity}`, "** **", true)
.addField(`:x: Bismuth : ${bismity}`, "** **", true)
// .addField(`<:radium:546055082811195392> Radium: ${radinity}`, "** **", true)


xp[message.author.id] = {
    xp: xp[message.author.id].xp + moneyl,
    lvl: xp[message.author.id].lvl
}
fs.writeFile("./assets/level.json", JSON.stringify(xp), (err)=>console.log(err));

inv[message.author.id] = {
    // minerais
    ruby: inv[message.author.id].ruby + ruby,
    saphir: inv[message.author.id].saphir + saphir,
    emerald: inv[message.author.id].emerald + emerald,
    radium: inv[message.author.id].radium,
    radon: inv[message.author.id].radon,
    gold: inv[message.author.id].gold + gold,
    fer: inv[message.author.id].fer + fer,
energy: inv[message.author.id].energy - base, // retirer l'énergie après minage
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone + stone,
platine: inv[message.author.id].platine + platine,
cuivre: inv[message.author.id].cuivre + cuivre,
am: inv[message.author.id].am,
p4d: inv[message.author.id].p4d,
aluminium: inv[message.author.id].aluminium + aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth + bismuth,
uranium: inv[message.author.id].uranium,
//bois
sapin: inv[message.author.id].sapin,
bambou: inv[message.author.id].bambou,
pin: inv[message.author.id].pin,
bouleau: inv[message.author.id].bouleau,
money: inv[message.author.id].money - moneyl
}

fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

mineembed.setFooter(`Energie restante: ${inv[message.author.id].energy}`)
return message.channel.send(mineembed)


}

if(message.content.startsWith(prefix + "profile")) {
    var user = message.mentions.users.first() || bot.users.get(message.content.split(" ").slice(1).join(" ")) || message.author;

    if(!user) return message.reply("Une erreur est survenue\n> L'utilisateur n'a pas pu être choisis\n> Une possible ID rentrée ne serait existante\n etc...")
    if(user.bot) return message.channel.send("Les bots ne peuvent pas faire une aventure en solo *pleure...*")


    if(!inv[user.id]) return message.reply("Une erreur fait que le profil de cet utilisateur est incomplet :/")
    if(!build[user.id]) return message.reply("Une rreur fait que le profil de cet utilisateur est incomplet :/")
    if(!xp[user.id]) return message.reply("Une erreur fait que le profil de cet utilisateur est incomplet :/")
    if(!premium[user.id]) return message.reply("Une rreur fait que le profil de cet utilisateur est incomplet :/")
    if(!badge[user.id]) return message.reply("Une rreur fait que le profil de cet utilisateur est incomplet :/")
    var money =  inv[user.id].money

    if(money <= 1000) { var ranking = "<:nothing:546044779360813069>" }
    if(money > 3000) { var ranking = "<:bronze:546044792711282738>" }
    if(money > 5000) {var ranking = "<:silver:546044811124408331>"}
    if(money > 10000) {var ranking = "<:gold:546044826089422878>"}
    if(money > 20000) {var ranking = "<:platine:546044841264414721>"}
    if(money > 30000) {var ranking = "<:diamant:546044850315722780>"}
if(money > 50000) {var ranking = "<:master:546044867256778777>"}
if(money > 100000) {var ranking = "<:special:546044881030873099>"}

var laboo = `⚗ Laboratoire : Lvl ${build[user.id].laboLvl}`
if(build[user.id].labo == false) { var laboo = "⚗ Laboratoire : :house_abandoned:" }
var nnext = xp[user.id].lvl * 300

var badgess = `${badge[user.id].badge}` + " | <:Premium:586894745662652431>"
if(premium[user.id].premium == false) {
     
var badgess = `${badge[user.id].badge}`;
}

    var embed = new Discord.RichEmbed()
   .setColor(color)
   .setTitle(`Profil de : ${user.tag}`)
   .setThumbnail(user.displayAvatarURL)
   .addField(`:high_brightness: Energie : ${inv[user.id].energy} / 1000\n<:level:550001365225832489> Lvl ${xp[user.id].lvl}`, "** **", true)
   .addField(`:incoming_envelope: XP : ${xp[user.id].xp}xp / ${nnext}xp`, "** **", true)
   .addField(`:moneybag:  Argent : ${inv[user.id].money}$\nBadges: ${ranking} | ${badgess}`, "** **", true)
   .addField("==============================", "Bâtiments:")
   .addField(laboo, "** **")

   message.channel.send(embed)

}


let TalkedRecently4 = new Set()
if(message.content === prefix + "ping") {
    const ms = require("ms")
    if (TalkedRecently4.has(message.guild.id)) {
     
             return message.channel.send(":x: Afin d'éviter de me faire ralentir, merci de patienter 30 secondes entre 2 mesures.");
     } else {
  
            // the user can type the command ... your command code goes here :)
  
         // Adds the user to the set so that they can't talk for a minute
         TalkedRecently4.add(message.guild.id);
         setTimeout(() => {
           // Removes the user from the set after a minute
           TalkedRecently4.delete(message.guild.id);
         },  30000);
  
    var starting = Date.now(); message.channel.send("<a:okgoogle:510519842873409556> " + inv[message.author.id].money).then(msgg => {
      msgg.delete()
      const diff2 = (Date.now() - starting); 
      
    
      
        var start = Date.now(); message.channel.send("Loading... <a:okgoogle:510519842873409556>").then(msg => { 
               const diff = (Date.now() - start); 
               let API = (bot.ping).toFixed(2)
               let msgping1 = new Date();
           let msgping2 = new Date() - msgping1;
                   
        
        
                   var embed = new Discord.RichEmbed()
                   .addField(`:ping_pong: Pong!`, '** **')
                   .setColor(0xff2f2f)
                   .addField(`<:WiFi:546045030822051870> Ping/Latence:`, `${diff}ms`, true)
                   .addField(`<:level:550001365225832489> API de Discord: `, `${API}ms`, true)
                   .addField("<:gear:546044966540148746> Base de donnée:", `${diff2}ms`)
           
                 console.log("Le bot a trouvé son ping"+ `[commande lance par ${message.author.username} avec l'id ${message.author.id} sur le serveur ${message.guild.name}]`)
          
                 
          
                 setTimeout(() => msg.edit(embed), ms(5000))
                 
               });
              })
                   }}
if(message.content.startsWith(prefix + "mine")) {
    var args = message.content.split(" ").slice(1).join(" ")
   /* if (minestamp.has(message.author.id)) {
return message.channel.send("/!\\Commande sous cooldown /!\\ \nMerci de patienter 5 secondes")
    } else {
 
           // the user can type the command ... your command code goes here :)
 
        // Adds the user to the set so that they can't talk for a minute
       minestamp.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          minestamp.delete(message.author.id);
        },  5000);  */
        var base = 1

        if(args === "all") {
            var base = inv[message.author.id].energy
              }else{
                  var base = args 
              }

              if(!args){
                var base = 1
            }

   if(base <= 0) return message.reply("**Vous n'avez pas assez d'énergie !**\n*Pour en obtenir, il vous suffit d'écrire, à chaque message vous obtiendrez 2 point d'énergie (cooldown de 10 secondes)*")
   if(base > parseInt(inv[message.author.id].money)) return message.reply("**Vous n'avez pas assez d'argent !**\n*Pour en obtenir, il vous suffit de vendre des ressources*")

 
   if(args !== "all") {
if(isNaN(args)) {
    var base = 1
}
if(message.content.includes(".")) return message.reply("L'énergie n'est pas un nombre à virgule!")
   }

   if(parseInt(base) > inv[message.author.id].energy) return message.reply("**Vous n'avez pas assez d'énergie !**\n*Pour en obtenir, il vous suffit d'écrire, à chaque message vous obtiendrez 2 point d'énergie (cooldown de 10 secondes)*")
 
    /* var random = Math.floor(Math.random() * 9) + 1 */
var base2 = base

if(args === "all") { 
    var base2 = base2 * 3
    var base2 = base2 - 4
}
// var base2 = base2 // + random


// gain =====================================================================
var ruby = inv[message.author.id].pickaxe * 5 + parseInt(base2)
var gold = inv[message.author.id].pickaxe * 33 + parseInt(base2)
var saphir = inv[message.author.id].pickaxe * 7 + parseInt(base2)
var emerald = inv[message.author.id].pickaxe * 6 + parseInt(base2)
var radium = inv[message.author.id].pickaxe * 5 + parseInt(base2)
var fer = inv[message.author.id].pickaxe * 30 + parseInt(base2)
var stone = inv[message.author.id].pickaxe * 100 + parseInt(base2)
var platine = inv[message.author.id].pickaxe * 4 + parseInt(base2)
var cuivre = inv[message.author.id].pickaxe * 10 + parseInt(base2)
var aluminium = inv[message.author.id].pickaxe * 50 + parseInt(base2)
var bismuth = inv[message.author.id].pickaxe * 3 + parseInt(base2)
// ===========================================================================

   



let pioche = inv[message.author.id].pickaxe



var rubinity = ruby + " gr"
var saphirity = saphir + " gr"
var emeraldity = emerald + " gr"
var radinity = radium + " gr"
var goldity = gold + " gr"
var ferity = fer + " gr"
var stonity = stone + " gr"
var planity = platine + " gr"
var cuivrity = cuivre + " gr"
var alunity = aluminium + " gr"
var bismity = bismuth + " gr"

var user = message.author
if(bismuth >= 1000) {
    var amount = bismuth / 100
    var bismity =  amount + " kg"
}

if(bismuth >= 1000000000) {
    var amount = bismuth / 1000000000
    var bismity =  amount.toFixed(2) + " t"
}
if(ruby >= 1000) {
    var amount = ruby / 100
    var rubinity =  amount + " kg"
}

if(ruby >= 1000000000) {
    var amount = ruby / 1000000000
    var rubinity =  amount.toFixed(2) + " t"
}

if(aluminium >= 1000) {
    var amount = aluminium / 100
    var alunity =  amount + " kg"
}

if(aluminium >= 1000000000) {
    var amount = aluminium / 1000000000
    var alunity =  amount.toFixed(2) + " t"
}


if(cuivre >= 1000) {
    var amount = cuivre / 100
    var cuivrity =  amount + " kg"
}

if(cuivre >= 1000000000) {
    var amount = cuivre / 1000000000
    var cuivrity =  amount.toFixed(2) + " t"
}


if(platine >= 1000) {
    var amount = platine / 100
    var planity =  amount + " kg"
}

if(platine >= 1000000000) {
    var amount = platine / 1000000000
    var planity =  amount.toFixed(2) + " t"
}


if(gold >= 1000) {
    var amount = gold / 100
    var goldity =  amount + " kg"
}

if(gold >= 1000000000) {
    var amount = gold / 1000000000
    var goldity =  amount.toFixed(2) + " t"
}

if(saphir >= 1000) {
    var amount = saphir / 100
    var saphirity =  amount + " kg"
}

if(saphir >= 1000000000) {
    var amount = saphir / 1000000000
    var saphirity =  amount.toFixed(2) + " t"
}

if(stone >= 1000) {
    var amount = stone / 100
    var stonity =  amount + " kg"
}

if(saphir >= 1000000000) {
    var amount = stone / 1000000000
    var stonity =  amount.toFixed(2) + " t"
}



if(emerald >= 1000) {
    var amount = emerald / 100
    var emeraldity =  amount + " kg"
}

if(emerald>= 1000000000) {
    var amount = emerald / 1000000000
    var emeraldity =  amount.toFixed(2) + " t"
}

if(radium >= 1000) {
    var amount = radium / 100
    var radinity =  amount + " kg"
}

if(radium >= 1000000000) {
    var amount = radium / 1000000000
    var radinity =  amount.toFixed(2) + " t"
}

if(fer >= 1000) {
    var amount = fer / 100
    var ferity =  amount + " kg"
}

if(radium >= 1000000000) {
    var amount = fer / 1000000000
    var ferity =  amount.toFixed(2) + " t"
}

var moneyl = base / 2
var money1 = parseInt(moneyl)
const mineembed = new Discord.RichEmbed()
.setColor(color)
.setTitle("Résultat de votre minage:")
.addField(":high_brightness: Energie utilisée : " + base, "** **",true)
.addField(`:moneybag: Argent dépensé: ${moneyl}`, "** **", true)
.addField(":pick: Pioche : lvl " + inv[message.author.id].pickaxe, "** **", true)
.addField("Minerais:", "==============================")
.addField(`:x: Pierre : ${stonity}\n:x: Aluminium : ${alunity}`, "** **", true)
.addField(`<:gold:556075656765636610> Or : ${goldity}\n:x: Fer: ${ferity}\n:x: Cuivre : ${cuivrity}`, "** **", true)
.addField(`:x: Platine : ${planity}`, "** **", true)
.addField(`<:Ruby:546047939618013194> Rubis: ${rubinity}\n<:saphir:546055100637118474> Saphir : ${saphirity}\n<:emerald:546055070802771988> Emeraude : ${emeraldity}`, "** **", true)
.addField(`:x: Bismuth : ${bismity}`, "** **", true)
// .addField(`<:radium:546055082811195392> Radium: ${radinity}`, "** **", true)


xp[message.author.id] = {
    xp: xp[message.author.id].xp + moneyl,
    lvl: xp[message.author.id].lvl
}
fs.writeFile("./assets/level.json", JSON.stringify(xp), (err)=>console.log(err));

inv[message.author.id] = {
    // minerais
    ruby: inv[message.author.id].ruby + ruby,
    saphir: inv[message.author.id].saphir + saphir,
    emerald: inv[message.author.id].emerald + emerald,
    radium: inv[message.author.id].radium,
    radon: inv[message.author.id].radon,
    gold: inv[message.author.id].gold + gold,
    fer: inv[message.author.id].fer + fer,
energy: inv[message.author.id].energy - base, // retirer l'énergie après minage
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone + stone,
platine: inv[message.author.id].platine + platine,
cuivre: inv[message.author.id].cuivre + cuivre,
am: inv[message.author.id].am,
p4d: inv[message.author.id].p4d,
aluminium: inv[message.author.id].aluminium + aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth + bismuth,
uranium: inv[message.author.id].uranium,
//bois
sapin: inv[message.author.id].sapin,
bambou: inv[message.author.id].bambou,
pin: inv[message.author.id].pin,
bouleau: inv[message.author.id].bouleau,
money: inv[message.author.id].money - moneyl
}

fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

mineembed.setFooter(`Energie restante: ${inv[message.author.id].energy}`)
return message.channel.send(mineembed)


}


if(xp[message.author.id].xp >= next) {
 //   var xpr = parseInt(xp[message.author.id].xp) + 300
    
    const levelup = new Discord.RichEmbed()
.setColor(color)
.setDescription(`:arrow_up: Level Up :arrow_up:\n<:level:550001365225832489> + 1\n:incoming_envelope: ${xp[message.author.id].xp}xp / ${next + 300}xp pour le niveau suivant\n<:level:550001365225832489> lvl ${xp[message.author.id].lvl + 1}`)
.setImage("https://i.imgur.com/GIBzBdQ.png")

xp[message.author.id] = {
    xp: xp[message.author.id].xp,
    lvl: xp[message.author.id].lvl + 1
}
fs.writeFile("./assets/level.json", JSON.stringify(xp), (err)=>console.log(err));

let chances = (Math.floor(Math.random() * 100))
if(chances >= 0 && chances <= 80)  {
levelup.addField("Vous avez obtenu un coffre:", "<:chest:586958753526579239> **Coffre en bois**")
chest[message.author.id] = {
    normal: chest[message.author.id].normal + 1,
    rare: chest[message.author.id].rare,
    ultra: chest[message.author.id].ultra,
    premium: chest[message.author.id].premium,
}
fs.writeFile("./assets/chest.json", JSON.stringify(chest), (err)=>console.log(err));
if(premium[message.author.id].premium === true) {
    chest[message.author.id] = {
        normal: chest[message.author.id].normal,
        rare: chest[message.author.id].rare,
        ultra: chest[message.author.id].ultra,
        premium: chest[message.author.id].premium + 1,
    }
    fs.writeFile("./assets/chest.json", JSON.stringify(chest), (err)=>console.log(err));
    levelup.addField("Vous avez obtenu un coffre secondaire:", ":x: **Coffre magique**")
}
 return message.channel.send(levelup)
}else if(chances > 80 && chances <= 99)  {
    levelup.addField("Vous avez obtenu un coffre:", "<:rare:589490506610901022> **Coffre rare**")
    chest[message.author.id] = {
        normal: chest[message.author.id].normal,
        rare: chest[message.author.id].rare+1,
        ultra: chest[message.author.id].ultra,
        premium: chest[message.author.id].premium,
    }
    fs.writeFile("./assets/chest.json", JSON.stringify(chest), (err)=>console.log(err));
    if(premium[message.author.id].premium === true) {
        chest[message.author.id] = {
            normal: chest[message.author.id].normal,
            rare: chest[message.author.id].rare,
            ultra: chest[message.author.id].ultra,
            premium: chest[message.author.id].premium + 1,
        }
        fs.writeFile("./assets/chest.json", JSON.stringify(chest), (err)=>console.log(err));
        levelup.addField("Vous avez obtenu un coffre secondaire:", ":x: **Coffre magique**")
    }
     return message.channel.send(levelup)
    }
    else if(chances == 100)  {
        levelup.addField("Vous avez obtenu un coffre:", "<:ultra:589490365774692402> **Coffre ultra rare**")
        chest[message.author.id] = {
            normal: chest[message.author.id].normal,
            rare: chest[message.author.id].rare,
            ultra: chest[message.author.id].ultra+1,
            premium: chest[message.author.id].premium,
        }
        fs.writeFile("./assets/chest.json", JSON.stringify(chest), (err)=>console.log(err));
        if(premium[message.author.id].premium === true) {
            chest[message.author.id] = {
                normal: chest[message.author.id].normal,
                rare: chest[message.author.id].rare,
                ultra: chest[message.author.id].ultra,
                premium: chest[message.author.id].premium + 1,
            }
            fs.writeFile("./assets/chest.json", JSON.stringify(chest), (err)=>console.log(err));
            levelup.addField("Vous avez obtenu un coffre secondaire:", ":x: **Coffre magique**")
        }
         return message.channel.send(levelup)
        }



}

if(message.content.startsWith(prefix + "chest")) {
    let embed = new Discord.RichEmbed()
.setColor(color)
.setDescription("**__Vos coffres:__**")
.addField(`<:chest:586958753526579239> Bois: ${chest[message.author.id].normal}\n<:rare:589490506610901022> Rare: ${chest[message.author.id].rare}\n<:ultra:589490365774692402> Ultra Rare: ${chest[message.author.id].ultra}\n:x: Magique: ${chest[message.author.id].premium}`, "** **")
.setFooter(prefix+"chest open [bois / rare / ultra / magique]")
if(!message.content.startsWith(prefix + "chest open")) {return message.channel.send(embed)}
if(message.content.startsWith(prefix + "chest open bois")) {
    if(chest[message.author.id].normal == 0) return message.reply("Vous n'avez pas de coffre en bois!")
    let chances = (Math.floor(Math.random() * 1000))
    let chances2 = (Math.floor(Math.random() * 300))
    let chances3 = (Math.floor(Math.random() * 300))
    let chances4 = (Math.floor(Math.random() * 200))
    let open = new Discord.RichEmbed()
.setColor(color)
.addField("<:chest:586958753526579239> Ouverture d'un coffre en bois <:chest:586958753526579239>", "** **")
.addField(`:x: Pierre: ${chances}gr\n:evergreen_tree: Pin: ${chances2}gr\n<:gold:556075656765636610> Or: ${chances3}gr\n:moneybag: Argent: ${chances4}$`, "** **")
message.channel.send(open)
inv[message.author.id] = {
    // minerais
    ruby: inv[message.author.id].ruby,
    saphir: inv[message.author.id].saphir,
    emerald: inv[message.author.id].emerald,
    radium: inv[message.author.id].radium,
    radon: inv[message.author.id].radon,
    gold: inv[message.author.id].gold + chances3,
    fer: inv[message.author.id].fer,
energy: inv[message.author.id].energy,
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone + chances,
platine: inv[message.author.id].platine,
cuivre: inv[message.author.id].cuivre,
am: inv[message.author.id].am,
p4d: inv[message.author.id].p4d,
aluminium: inv[message.author.id].aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth,
uranium: inv[message.author.id].uranium,
//bois
sapin: inv[message.author.id].sapin,
bambou: inv[message.author.id].bambou,
pin: inv[message.author.id].pin + chances2,
bouleau: inv[message.author.id].bouleau,
money: inv[message.author.id].money + chances4
}
fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
chest[message.author.id] = {
    normal: chest[message.author.id].normal - 1,
    rare: chest[message.author.id].rare,
    ultra: chest[message.author.id].ultra,
    premium: chest[message.author.id].premium
}
fs.writeFile("./assets/chest.json", JSON.stringify(chest), (err)=>console.log(err));
}
if(message.content.startsWith(prefix + "chest open rare")) {
    if(chest[message.author.id].rare == 0) return message.reply("Vous n'avez pas de coffre rare!")
    let chances = (Math.floor(Math.random() * 600))
    let chances2 = (Math.floor(Math.random() * 200))
    let chances3 = (Math.floor(Math.random() * 4)) + 1
    let chances4= (Math.floor(Math.random() * 1500))
    let chances5 = (Math.floor(Math.random() * 9)) + 1
    let open = new Discord.RichEmbed()
.setColor(color)
.addField("<:rare:589490506610901022> Ouverture d'un coffre rare <:rare:589490506610901022>", "** **")
.addField(`<:Ruby:546047939618013194> Rubis: ${chances}gr\n:x: Bouleau: ${chances2}gr\n<:radium:546055082811195392> Radium: ${chances3}gr\n:x: Uranium: ${chances5}gr\n:moneybag: Argent: ${chances4}$`, "** **")
message.channel.send(open)
inv[message.author.id] = {
    // minerais
    ruby: inv[message.author.id].ruby + chances,
    saphir: inv[message.author.id].saphir,
    emerald: inv[message.author.id].emerald,
    radium: inv[message.author.id].radium + chances3,
    radon: inv[message.author.id].radon,
    gold: inv[message.author.id].gold,
    fer: inv[message.author.id].fer,
energy: inv[message.author.id].energy,
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone,
platine: inv[message.author.id].platine,
cuivre: inv[message.author.id].cuivre,
am: inv[message.author.id].am,
p4d: inv[message.author.id].p4d,
aluminium: inv[message.author.id].aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth,
uranium: inv[message.author.id].uranium + chances5,
//bois
sapin: inv[message.author.id].sapin,
bambou: inv[message.author.id].bambou,
pin: inv[message.author.id].pin + chances2,
bouleau: inv[message.author.id].bouleau,
money: inv[message.author.id].money + chances4
}
fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
chest[message.author.id] = {
    normal: chest[message.author.id].normal,
    rare: chest[message.author.id].rare - 1,
    ultra: chest[message.author.id].ultra,
    premium: chest[message.author.id].premium
}
fs.writeFile("./assets/chest.json", JSON.stringify(chest), (err)=>console.log(err));
}
if(message.content.startsWith(prefix + "chest open ultra")) {
    if(chest[message.author.id].ultra == 0) return message.reply("Vous n'avez pas de coffre ultra rare!")
    let chances = (Math.floor(Math.random() * 9)) + 1
    let chances2 = (Math.floor(Math.random() * 100))
    let chances3 = (Math.floor(Math.random() * 10000)) + 1
    let chances4= (Math.floor(Math.random() * 3000))
    let chances5 = (Math.floor(Math.random() * 4)) + 1
    let open = new Discord.RichEmbed()
.setColor(color)
.addField("<:ultra:589490365774692402> Ouverture d'un coffre ultra rare <:ultra:589490365774692402>", "** **")
.addField(`:x: Anti-Matière: ${chances}gr\n:x: Radon: ${chances2}gr\n:christmas_tree: Sapin: ${chances3}gr\n:x: Prisme 4D ${chances5}gr\n:moneybag: Argent: ${chances4}$`, "** **")
message.channel.send(open)
inv[message.author.id] = {
    // minerais
    ruby: inv[message.author.id].ruby ,
    saphir: inv[message.author.id].saphir,
    emerald: inv[message.author.id].emerald,
    radium: inv[message.author.id].radium,
    radon: inv[message.author.id].radon + chances2,
    gold: inv[message.author.id].gold,
    fer: inv[message.author.id].fer,
energy: inv[message.author.id].energy,
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone,
platine: inv[message.author.id].platine,
cuivre: inv[message.author.id].cuivre,
am: inv[message.author.id].am + chances,
p4d: inv[message.author.id].p4d + chances5,
aluminium: inv[message.author.id].aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth,
uranium: inv[message.author.id].uranium,
//bois
sapin: inv[message.author.id].sapin + chances3,
bambou: inv[message.author.id].bambou,
pin: inv[message.author.id].pin,
bouleau: inv[message.author.id].bouleau,
money: inv[message.author.id].money + chances4
}
fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
chest[message.author.id] = {
    normal: chest[message.author.id].normal,
    rare: chest[message.author.id].rare ,
    ultra: chest[message.author.id].ultra- 1,
    premium: chest[message.author.id].premium
}
fs.writeFile("./assets/chest.json", JSON.stringify(chest), (err)=>console.log(err));
}

if(message.content.startsWith(prefix + "chest open magique")) {
    if(chest[message.author.id].premium == 0) return message.reply("Vous n'avez pas de coffre magique!")
    let chances = (Math.floor(Math.random() * 9)) + 1
    let chances2 = (Math.floor(Math.random() * 100))
    let chances3 = (Math.floor(Math.random() * 11000)) + 1
    let chances4= (Math.floor(Math.random() * 1500))
    let chances5 = (Math.floor(Math.random() * 5)) + 1
    let open = new Discord.RichEmbed()
.setColor(color)
.addField(":x: Ouverture d'un coffre magique :x:", "** **")
.addField(`:x: Anti-Matière: ${chances}gr\n:x: Uranium: ${chances2}gr\n:bamboo: Bambou: ${chances3}gr\n:x: Prisme 4D ${chances5}gr\n:moneybag: Argent: ${chances4}$`, "** **")
message.channel.send(open)
inv[message.author.id] = {
    // minerais
    ruby: inv[message.author.id].ruby ,
    saphir: inv[message.author.id].saphir,
    emerald: inv[message.author.id].emerald,
    radium: inv[message.author.id].radium,
    radon: inv[message.author.id].radon,
    gold: inv[message.author.id].gold,
    fer: inv[message.author.id].fer,
energy: inv[message.author.id].energy,
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone,
platine: inv[message.author.id].platine,
cuivre: inv[message.author.id].cuivre,
am: inv[message.author.id].am + chances,
p4d: inv[message.author.id].p4d + chances5,
aluminium: inv[message.author.id].aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth,
uranium: inv[message.author.id].uranium + chances2,
//bois
sapin: inv[message.author.id].sapin,
bambou: inv[message.author.id].bambou + chances3,
pin: inv[message.author.id].pin,
bouleau: inv[message.author.id].bouleau,
money: inv[message.author.id].money + chances4
}
fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
chest[message.author.id] = {
    normal: chest[message.author.id].normal,
    rare: chest[message.author.id].rare ,
    ultra: chest[message.author.id].ultra,
    premium: chest[message.author.id].premium - 1
}
fs.writeFile("./assets/chest.json", JSON.stringify(chest), (err)=>console.log(err));
}





}


if(message.content.startsWith(prefix + "bash")) {
    if (message.author.id !== '409091614414209054') return message.channel.send("Cette commande est trop puissante pour toi!") // commande réservée à Steedlan => permet d'exécuter du code js depuis discord
    try {
      var argssss = message.content.split(" ").slice(1)
                 
        let codein = argssss.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
      
        .setColor(color)
        .addField(':inbox_tray: Entrée', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Sortie:', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
 };
 
if(message.content.startsWith(prefix + "cut")) {
    var args = message.content.split(" ").slice(1).join(" ")
   /* if (minestamp.has(message.author.id)) {
return message.channel.send("/!\\Commande sous cooldown /!\\ \nMerci de patienter 5 secondes")
    } else {
 
           // the user can type the command ... your command code goes here :)
 
        // Adds the user to the set so that they can't talk for a minute
       minestamp.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          minestamp.delete(message.author.id);
        },  5000);  */
        var base = 1

        if(args === "all") {
            var base = inv[message.author.id].energy
              }else{
                  var base = args 
              }

              if(!args){
                var base = 1
            }

   if(base <= 0) return message.reply("**Vous n'avez pas assez d'énergie !**\n*Pour en obtenir, il vous suffit d'écrire, à chaque message vous obtiendrez 2 point d'énergie (cooldown de 10 secondes)*")
   if(base > parseInt(inv[message.author.id].money)) return message.reply("**Vous n'avez pas assez d'argent !**\n*Pour en obtenir, il vous suffit de vendre des ressources*")

 
   if(args !== "all") {
if(isNaN(args)) {
    var base = 1
}
if(message.content.includes(".")) return message.reply("L'énergie n'est pas un nombre à virgule!")
   }

   if(parseInt(base) > inv[message.author.id].energy) return message.reply("**Vous n'avez pas assez d'énergie !**\n*Pour en obtenir, il vous suffit d'écrire, à chaque message vous obtiendrez 2 point d'énergie (cooldown de 10 secondes)*")
 
    /* var random = Math.floor(Math.random() * 9) + 1 */
var base2 = base

if(args === "all") { 
    var base2 = base2 * 3
    var base2 = base2 - 4
}
// var base2 = base2 // + random


// gain =====================================================================
var sapin = inv[message.author.id].pickaxe * 50 + parseInt(base2)
var bambou = inv[message.author.id].pickaxe * 45 + parseInt(base2)
var pin = inv[message.author.id].pickaxe * 30 + parseInt(base2)
var bouleau = inv[message.author.id].pickaxe * 28 + parseInt(base2)

// ===========================================================================

   



let pioche = inv[message.author.id].pickaxe



var sapinity = sapin + " gr"
var bambity = bambou + " gr"
var pinity = pin + " gr"
var boulity = bouleau + " gr"


var user = message.author
if(sapin >= 1000) {
    var amount = sapin / 100
    var sapinity =  amount + " kg"
}

if(sapin >= 1000000000) {
    var amount =  sapin / 1000000000
    var sapinity =  amount.toFixed(2) + " t"
}
if(bambou >= 1000) {
    var amount = bambou / 100
    var bambity =  amount + " kg"
}

if(bambou >= 1000000000) {
    var amount = bambou / 1000000000
    var bambity =  amount.toFixed(2) + " t"
}

if(pin >= 1000) {
    var amount = pin / 100
    var pinity =  amount + " kg"
}

if(pin >= 1000000000) {
    var amount =  pin / 1000000000
    var pinity =  amount.toFixed(2) + " t"
}
if(bouleau >= 1000) {
    var amount = bouleau / 100
    var boulity =  amount + " kg"
}

if(bouleau >= 1000000000) {
    var amount = bouleau / 1000000000
    var boulity =  amount.toFixed(2) + " t"
}


var moneyl = base / 2
var money1 = parseInt(moneyl)
const mineembed = new Discord.RichEmbed()
.setColor(color)
.setTitle("Résultat de votre coupage:")
.addField(":high_brightness: Energie utilisée : " + base, "** **",true)
.addField(`:moneybag: Argent dépensé: ${moneyl}`, "** **", true)
.addField("<:axe:561219046268207113> Hache : lvl " + inv[message.author.id].axe, "** **", true)
.addField("Minerais:", "==============================")
.addField(`:christmas_tree: Sapin : ${sapinity}\n:evergreen_tree: Pin : ${pinity}`, "** **", true)
.addField(`:bamboo: Bambou : ${bambity}\n:x: Bouleau: ${boulity}`, "** **", true)

// .addField(`<:radium:546055082811195392> Radium: ${radinity}`, "** **", true)


xp[message.author.id] = {
    xp: xp[message.author.id].xp + moneyl,
    lvl: xp[message.author.id].lvl
}
fs.writeFile("./assets/level.json", JSON.stringify(xp), (err)=>console.log(err));

inv[message.author.id] = {
    // minerais
    ruby: inv[message.author.id].ruby,
    saphir: inv[message.author.id].saphir,
    emerald: inv[message.author.id].emerald,
    radium: inv[message.author.id].radium,
    radon: inv[message.author.id].radon,
    gold: inv[message.author.id].gold,
    fer: inv[message.author.id].fer,
energy: inv[message.author.id].energy - base, // retirer l'énergie après minage
pickaxe: inv[message.author.id].pickaxe,
stone: inv[message.author.id].stone,
platine: inv[message.author.id].platine,
cuivre: inv[message.author.id].cuivre,
am: inv[message.author.id].am,
p4d: inv[message.author.id].p4d,
aluminium: inv[message.author.id].aluminium,
axe: inv[message.author.id].axe,
bismuth: inv[message.author.id].bismuth,
uranium: inv[message.author.id].uranium,
//bois
sapin: inv[message.author.id].sapin + sapin,
bambou: inv[message.author.id].bambou + bambou,
pin: inv[message.author.id].pin + pin,
bouleau: inv[message.author.id].bouleau + bouleau,

money: inv[message.author.id].money - moneyl
}

fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

mineembed.setFooter(`Energie restante: ${inv[message.author.id].energy}`)
return message.channel.send(mineembed)


}

if(!inv[message.author.id]) return;
const playerr = inv[message.author.id].money + xp[message.author.id].lvl

let actu = require("./assets/top/actualisation.json")

if(!actu[message.author.id]) {
    actu[message.author.id] = {
        player: playerr
    }
}

if(playerr !== actu[message.author.id].player) {
    actu[message.author.id] = {
        player: playerr
    }
    fs.writeFile("./assets/top/actualisation.json", JSON.stringify(actu), (err)=>console.log(err));
}

const player = actu[message.author.id].player
if(message.content.startsWith(prefix)) {



if(!top[bot.user.id]) {
    top[bot.user.id] = {
//player
        first: "** **",
        second: "** **",
        third: "** **",
        fourth: "** **",
        five: "** **",
        //richesse
       firstr: 0,
        secondr: 0,
        thirdr: 0,
        fourthr: 0,
        fiver: 0
}
    fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));
}


}







 if(!labo[message.author.id]) {
     labo[message.author.id] = {
         radium: false,
         radon: false,
         uranium: false,
         am: false,
         prisme: false
     }
 }

if(message.content.startsWith(prefix + "labo")) {
    if(counter[message.author.id].actif == true) {

    let restant = counter[message.author.id].goal - counter[message.author.id].count
  return  message.reply("Vous fabriquez déjà quelque chose\n:arrow_forward: "+ counter[message.author.id].theme+`\nEncore: ${restant.toFixed()} messages`)
}
    if(build[message.author.id].labo === false) return message.reply(":house_abandoned: Difficile de travailler dans un lieu de travail détruit... Construisez le laboratoire avec `r!build labo`")
let args = message.content.split(" ").slice(1).join(" ")

var emoji = "\u274C";
var emoji2 = "\u2705";

if(!args) {
    if(build[message.author.id].laboLvl < 2) {var list = "```css\n- radium\n- radon\n- uranium```"}else{var list = "```css\n- radium\n- radon\n- uranium\n- am\n- prisme```"}
    var embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle("Laboratoire")
    .setDescription("Voici la liste des matières obtenables: \n" + `Faites ${prefix}labo create [matière]\n${list}`)
    message.channel.send(embed)
}

if(args == "radium") {
   
    message.reply("\n⚗ Laboratoire\n:arrow_forward: Construction de la ressource: Radium (50gr)\n:arrow_forward:"+counting_radium.toFixed()+" messages - 50 :moneybag:")
  .then(msg => {
    msg.react(emoji).then(r => {
        msg.react(emoji2)
        const V = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
        const X = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
      
                const Vok= msg.createReactionCollector(V, {
            time: 1000000
        });
        const Xok = msg.createReactionCollector(X, {
            time: 1000000
        });
      
      
        Vok.on('collect', r => {
          msg.delete()
return message.channel.send("Demande annulée") 
        })
          
      Xok.on('collect', r => {
          msg.delete()

          counter[message.author.id] = {
              count: 0,
              actif: true,
              theme: "Radium",
              goal: counting_radium.toFixed()
          }
          fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
          if(!labo[message.author.id]) {
              labo[message.author.id] = {
                  radium: true,
                  radon: false,
                  uranium: false,
                  am: false,
                  prisme: false
              }
              fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
          }
          message.channel.send("La construction de 50gr de Radium a commencé, il va falloir envoyer "+counting_radium.toFixed()+" messages afin de finaliser sa construction!\n:warning: Attention :warning:\nUne fois la production finie, si vous ne possédez pas suffisament d'argent, aucun gramme de la ressource en cours ne sera enregistrée")
})})})
}



if(args == "radon") {
   
    message.reply("\n⚗ Laboratoire\n:arrow_forward: Construction de la ressource: Radon (50gr)\n:arrow_forward:"+counting_radon.toFixed()+" messages - 100 :moneybag:")
  .then(msg => {
    msg.react(emoji).then(r => {
        msg.react(emoji2)
        const V = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
        const X = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
      
                const Vok= msg.createReactionCollector(V, {
            time: 1000000
        });
        const Xok = msg.createReactionCollector(X, {
            time: 1000000
        });
      
      
        Vok.on('collect', r => {
          msg.delete()
return message.channel.send("Demande annulée") 
        })
          
      Xok.on('collect', r => {
          msg.delete()
          counter[message.author.id] = {
              count: 0,
              actif: true,
              theme: "Radon",
              goal: counting_radon.toFixed()
          }
          fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
          if(!labo[message.author.id]) {
              labo[message.author.id] = {
                  radium: false,
                  radon: true,
                  uranium: false,
                  am: false,
                  prisme: false
              }
              fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
          }
          message.channel.send("La construction de 50gr de Radon a commencé, il va falloir envoyer "+counting_radon.toFixed()+" messages afin de finaliser sa construction!\n:warning: Attention :warning:\nUne fois la production finie, si vous ne possédez pas suffisament d'argent, aucun gramme de la ressource en cours ne sera enregistrée")
})})})
}



if(args == "uranium") {
   
    message.reply("\n⚗ Laboratoire\n:arrow_forward: Construction de la ressource: Uranium (50gr)\n:arrow_forward:"+counting_uranium.toFixed()+" messages - 150 :moneybag:")
  .then(msg => {
    msg.react(emoji).then(r => {
        msg.react(emoji2)
        const V = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
        const X = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
      
                const Vok= msg.createReactionCollector(V, {
            time: 1000000
        });
        const Xok = msg.createReactionCollector(X, {
            time: 1000000
        });
      
      
        Vok.on('collect', r => {
          msg.delete()
return message.channel.send("Demande annulée") 
        })
          
      Xok.on('collect', r => {
          msg.delete()
          counter[message.author.id] = {
              count: 0,
              actif: true,
              theme: "Uranium",
              goal: counting_uranium.toFixed()
          }
          fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
          if(!labo[message.author.id]) {
              labo[message.author.id] = {
                  radium: false,
                  radon: false,
                  uranium: true,
                  am: false,
                  prisme: false
              }
              fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
          }
          message.channel.send("La construction de 50gr d'Uranium a commencé, il va falloir envoyer "+counting_radium.toFixed()+" messages afin de finaliser sa construction!\n:warning: Attention :warning:\nUne fois la production finie, si vous ne possédez pas suffisament d'argent, aucun gramme de la ressource en cours ne sera enregistrée")
})})})
}


if(args == "am") {
   if(build[message.author.id].laboLvl < 2) return message.reply("Votre laboratoire n'est pas assez puissant pour former cette ressource, augmentez-le au niveau 3 :)")
    message.reply("\n⚗ Laboratoire\n:arrow_forward: Construction de la ressource: Anti-Matière (1gr)\n:arrow_forward:"+counting_am.toFixed()+" messages - 300 :moneybag:")
  .then(msg => {
    msg.react(emoji).then(r => {
        msg.react(emoji2)
        const V = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
        const X = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
      
                const Vok= msg.createReactionCollector(V, {
            time: 1000000
        });
        const Xok = msg.createReactionCollector(X, {
            time: 1000000
        });
      
      
        Vok.on('collect', r => {
          msg.delete()
return message.channel.send("Demande annulée") 
        })
          
      Xok.on('collect', r => {
          msg.delete()

          counter[message.author.id] = {
              count: 0,
              actif: true,
              theme: "Anti-Matière",
              goal: counting_am.toFixed()
          }
          fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
          if(!labo[message.author.id]) {
              labo[message.author.id] = {
                  radium: false,
                  radon: false,
                  uranium: false,
                  am: true,
                  prisme: false
              }
              fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
          }
          message.channel.send("La construction de 1gr d'anti-matière' a commencé, il va falloir envoyer "+counting_am.toFixed()+" messages afin de finaliser sa construction!\n:warning: Attention :warning:\nUne fois la production finie, si vous ne possédez pas suffisament d'argent, aucun gramme de la ressource en cours ne sera enregistrée")
})})})
}
if(args == "prisme") {
    if(build[message.author.id].laboLvl < 2) return message.reply("Votre laboratoire n'est pas assez puissant pour former cette ressource, augmentez-le au niveau 3 :)")
    message.reply("\n⚗ Laboratoire\n:arrow_forward: Construction de la ressource: Prisme 4D (2gr)\n:arrow_forward:"+counting_prisme.toFixed()+" messages - 500 :moneybag:")
  .then(msg => {
    msg.react(emoji).then(r => {
        msg.react(emoji2)
        const V = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
        const X = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
      
                const Vok= msg.createReactionCollector(V, {
            time: 1000000
        });
        const Xok = msg.createReactionCollector(X, {
            time: 1000000
        });
      
      
        Vok.on('collect', r => {
          msg.delete()
return message.channel.send("Demande annulée") 
        })
          
      Xok.on('collect', r => {
          msg.delete()

          counter[message.author.id] = {
              count: 0,
              actif: true,
              theme: "Prisme 4D",
              goal: counting_prisme.toFixed()
          }
          fs.writeFile("./assets/counter.json", JSON.stringify(counter), (err)=>console.log(err));
          if(!labo[message.author.id]) {
              labo[message.author.id] = {
                  radium: false,
                  radon: false,
                  uranium: false,
                  am: false,
                  prisme: true
              }
              fs.writeFile("./assets/builds/labo.json", JSON.stringify(labo), (err)=>console.log(err));
          }
          message.channel.send("La construction de 2gr de prisme 4D a commencé, il va falloir envoyer "+counting_prisme.toFixed()+" messages afin de finaliser sa construction!\n:warning: Attention :warning:\nUne fois la production finie, si vous ne possédez pas suffisament d'argent, aucun gramme de la ressource en cours ne sera enregistrée")
})})})
}
}


if(message.content.startsWith(prefix + "slot")) {
    let clang = "fr"
    var args = message.content.split(' ').slice(1).join(" ")
    if(!args)  return message.reply("Combien de :moneybag: voulez vous miser? (minimum 10)")

    
    if(isNaN(args))  return message.reply("Combien de :moneybag: voulez vous miser? (minimum 10)")
 
    
    if(args < 9) return message.reply("Minimum 10 :moneybag: svp.")
    if(inv[message.author.id].money < args) {
    
        if(clang === "fr"){
          return message.reply("T'as pas assez d'argent pour donner tout ça, sale pauvre!") 
        }
    }
    
        if(args < 1) {

            return message.reply("Tente de miser en négatif!")  
          }
        
    
    
    if(message.content.includes(".")) {
   
        return message.channel.send("Les nombres à virgules ne sont pas autorisé, *des centimes de 💰 srx...*")
      }
    
     
    if (talkedRecently3.has(message.author.id)) {
                return message.channel.send("Merci de patienter 10 secondes entre 2 jeux du Casino !!");
        
        } else {
    
            let slots = [":seven:", ":cherries:", ":strawberry:", ":lemon:", ":x:", ":dollar:", ":tangerine:"];
            let result1 = Math.floor((Math.random() * slots.length));
            let result2 = Math.floor((Math.random() * slots.length));
            let result3 = Math.floor((Math.random() * slots.length));
    
    
            let result4 = Math.floor((Math.random() * slots.length));
            let result5 = Math.floor((Math.random() * slots.length));
            let result6 = Math.floor((Math.random() * slots.length));
    
            let result7 = Math.floor((Math.random() * slots.length));
            let result8 = Math.floor((Math.random() * slots.length));
            let result9 = Math.floor((Math.random() * slots.length));
    
            let name = message.author.displayName;
            let aicon = message.author.displayAvatarURL;
    
            const sloting = new Discord.RichEmbed()
            .setColor(color)
            .setTitle("ERROR")
            .setDescription(`**-------------------**\n${slots[result1]} | ${slots[result7]} | ${slots[result6]}\n${slots[result4]} | ${slots[result2]} | ${slots[result9]}  **<==**\n${slots[result8]} | ${slots[result2]} | ${slots[result9]}\n**-------------------**`)
    
            if(clang === "fr") {
              sloting.setTitle(`:slot_machine: ${message.author.username} a lancé la machine à sous! :slot_machine:`)
            }else{
              sloting.setTitle(`:slot_machine: ${message.author.username} has launched the slot machine! :slot_machine:`)
            }
            message.channel.send(sloting) .then(msg => {
    
              const sloting2 = new Discord.RichEmbed()
              .setColor(color)
              .setTitle("ERROR")
              .setDescription(`**-------------------**\n${slots[result7]} | ${slots[result8]} | ${slots[result9]}\n${slots[result1]} | ${slots[result2]} | ${slots[result2]}  **<==**\n${slots[result4]} | ${slots[result5]} | ${slots[result6]}\n**-------------------**`)
              if(clang === "fr") {
                sloting2.setTitle(`:slot_machine: ${message.author.username} a lancé la machine à sous! :slot_machine:`)
              }else{
                sloting2.setTitle(`:slot_machine: ${message.author.username} has launched the slot machine! :slot_machine:`)
              }
              setTimeout(() => {  msg.edit(sloting2) }, 500)
    
              const sloting3 = new Discord.RichEmbed()
              .setColor(color)
              .setTitle("ERROR")
             .setDescription(`**-------------------**\n${slots[result7]} | ${slots[result8]} | ${slots[result6]}\n${slots[result1]} | ${slots[result2]} | ${slots[result7]}  **<==**\n${slots[result4]} | ${slots[result5]} | ${slots[result3]}\n**-------------------**`)
            
             if(clang === "fr") {
              sloting3.setTitle(`:slot_machine: ${message.author.username} a lancé la machine à sous! :slot_machine:`)
            }else{
              sloting3.setTitle(`:slot_machine: ${message.author.username} has launched the slot machine! :slot_machine:`)
            }
            
             setTimeout(() => {  msg.edit(sloting3) }, 1000)
    
             const sloting4 = new Discord.RichEmbed()
             .setColor(color)
             .setTitle("ERROR")
             .setDescription(`**-------------------**\n${slots[result7]} | ${slots[result8]} | ${slots[result3]}\n${slots[result1]} | ${slots[result2]} | ${slots[result3]}  **<==**\n${slots[result4]} | ${slots[result5]} | ${slots[result9]}\n**-------------------**`)
           
             if(clang === "fr") {
               sloting4.setTitle(`:slot_machine: ${message.author.username} a lancé la machine à sous! :slot_machine:`)
             }else{
               sloting4.setTitle(`:slot_machine: ${message.author.username} has launched the slot machine! :slot_machine:`)
             }
             setTimeout(() => {  msg.edit(sloting4) }, 2500)
    
    
             const sloting5 = new Discord.RichEmbed()
             .setColor(color)
             .setTitle("ERROR")
             .setDescription(`**-------------------**\n${slots[result7]} | ${slots[result8]} | ${slots[result3]}\n${slots[result1]} | ${slots[result2]} | ${slots[result3]}  **<==**\n${slots[result4]} | ${slots[result5]} | ${slots[result6]}\n**-------------------**`, true)
         
             if(clang === "fr") {
               sloting4.setTitle(`:slot_machine: ${message.author.username} a lancé la machine à sous! :slot_machine:`)
             }else{
               sloting4.setTitle(`:slot_machine: ${message.author.username} has launched the slot machine! :slot_machine:`)
             }
             setTimeout(() => {  msg.edit(sloting4) }, 4000)
    
    
    
          const slot_embed = new Discord.RichEmbed()
          .setFooter("ERROR!", aicon)
          .setTitle(`:slot_machine: ${message.author.username} has launched the slot machine! :slot_machine:`)
          .setDescription(`**-------------------**\n${slots[result7]} | ${slots[result8]} | ${slots[result9]}\n${slots[result1]} | ${slots[result2]} | ${slots[result3]}  **<==**\n${slots[result4]} | ${slots[result5]} | ${slots[result6]}\n**-------------------**`, true)
          .setColor("#3EAD24")
    
    if(clang === "fr") {
      slot_embed.setTitle(`:slot_machine: ${message.author.username} a lancé la machine à sous! :slot_machine:`)
    }
       setTimeout(() => {
    
    
        if(slots[result1] === slots[result2]) {
          if(slots[result2] === slots[result3]) {
            if(slots[result1] === ":x:") {
              if(clang === "en") {
                slot_embed.setTitle(`:slot_machine: ${message.author.username} has launched the slot machine! :slot_machine:`)
                slot_embed.setFooter("You lost", aicon)
                slot_embed.setColor("RED")
            }else{
              slot_embed.setTitle(`:slot_machine: ${message.author.username} a lancé la machine à sous! :slot_machine:`)
              slot_embed.setFooter("Vous avez perdu !", aicon)
     slot_embed.setColor("RED")
            }
            slot_embed.setAuthor("- "+args+" 💰")
            inv[message.author.id] = {
                // minerais
                ruby: inv[message.author.id].ruby,
                saphir: inv[message.author.id].saphir,
                emerald: inv[message.author.id].emerald,
                radium: inv[message.author.id].radium,
                radon: inv[message.author.id].radon,
                gold: inv[message.author.id].gold,
                fer: inv[message.author.id].fer,
            energy: inv[message.author.id].energy,
            pickaxe: inv[message.author.id].pickaxe,
            stone: inv[message.author.id].stone,
            platine: inv[message.author.id].platine,
            cuivre: inv[message.author.id].cuivre,
            am: inv[message.author.id].am,
            p4d: inv[message.author.id].p4d,
            aluminium: inv[message.author.id].aluminium,
            axe: inv[message.author.id].axe,
            bismuth: inv[message.author.id].bismuth,
            uranium: inv[message.author.id].uranium,
            //bois
            sapin: inv[message.author.id].sapin,
            bambou: inv[message.author.id].bambou,
            pin: inv[message.author.id].pin,
            bouleau: inv[message.author.id].bouleau,
            money: inv[message.author.id].money - args
         };
         const fs = require("fs");
         fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
         
            }
            if(slots[result1] === ":strawberry:") {
                inv[message.author.id] = {
                    // minerais
                    ruby: inv[message.author.id].ruby,
                    saphir: inv[message.author.id].saphir,
                    emerald: inv[message.author.id].emerald,
                    radium: inv[message.author.id].radium,
                    radon: inv[message.author.id].radon,
                    gold: inv[message.author.id].gold,
                    fer: inv[message.author.id].fer,
                energy: inv[message.author.id].energy,
                pickaxe: inv[message.author.id].pickaxe,
                stone: inv[message.author.id].stone,
                platine: inv[message.author.id].platine,
                cuivre: inv[message.author.id].cuivre,
                am: inv[message.author.id].am,
                p4d: inv[message.author.id].p4d,
                aluminium: inv[message.author.id].aluminium,
                axe: inv[message.author.id].axe,
                bismuth: inv[message.author.id].bismuth,
                uranium: inv[message.author.id].uranium,
                //bois
                sapin: inv[message.author.id].sapin,
                bambou: inv[message.author.id].bambou,
                pin: inv[message.author.id].pin,
                bouleau: inv[message.author.id].bouleau,
                money: inv[message.author.id].money + 20
             };
             const fs = require("fs");
             fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
    
           slot_embed.setAuthor("+ 20 💰")
            }
    
    
            if(slots[result1] === ":tangerine:") {
                inv[message.author.id] = {
                    // minerais
                    ruby: inv[message.author.id].ruby,
                    saphir: inv[message.author.id].saphir,
                    emerald: inv[message.author.id].emerald,
                    radium: inv[message.author.id].radium,
                    radon: inv[message.author.id].radon,
                    gold: inv[message.author.id].gold,
                    fer: inv[message.author.id].fer,
                energy: inv[message.author.id].energy,
                pickaxe: inv[message.author.id].pickaxe,
                stone: inv[message.author.id].stone,
                platine: inv[message.author.id].platine,
                cuivre: inv[message.author.id].cuivre,
                am: inv[message.author.id].am,
                p4d: inv[message.author.id].p4d,
                aluminium: inv[message.author.id].aluminium,
                axe: inv[message.author.id].axe,
                bismuth: inv[message.author.id].bismuth,
                uranium: inv[message.author.id].uranium,
                //bois
                sapin: inv[message.author.id].sapin,
                bambou: inv[message.author.id].bambou,
                pin: inv[message.author.id].pin,
                bouleau: inv[message.author.id].bouleau,
                money: inv[message.author.id].money + 25
             };
             const fs = require("fs");
             fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
    
           slot_embed.setAuthor("+ 25 💰")
            }
    
    
            if(slots[result1] === ":lemon:") {
                inv[message.author.id] = {
                    // minerais
                    ruby: inv[message.author.id].ruby,
                    saphir: inv[message.author.id].saphir,
                    emerald: inv[message.author.id].emerald,
                    radium: inv[message.author.id].radium,
                    radon: inv[message.author.id].radon,
                    gold: inv[message.author.id].gold,
                    fer: inv[message.author.id].fer,
                energy: inv[message.author.id].energy,
                pickaxe: inv[message.author.id].pickaxe,
                stone: inv[message.author.id].stone,
                platine: inv[message.author.id].platine,
                cuivre: inv[message.author.id].cuivre,
                am: inv[message.author.id].am,
                p4d: inv[message.author.id].p4d,
                aluminium: inv[message.author.id].aluminium,
                axe: inv[message.author.id].axe,
                bismuth: inv[message.author.id].bismuth,
                uranium: inv[message.author.id].uranium,
                //bois
                sapin: inv[message.author.id].sapin,
                bambou: inv[message.author.id].bambou,
                pin: inv[message.author.id].pin,
                bouleau: inv[message.author.id].bouleau,
                money: inv[message.author.id].money + 30
             };
             const fs = require("fs");
             fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
            
           slot_embed.setAuthor("+ 30 💰")
            }
    
            if(slots[result1] === ":cherries:") {
              var ledemi = args * 2
              inv[message.author.id] = {
                // minerais
                ruby: inv[message.author.id].ruby,
                saphir: inv[message.author.id].saphir,
                emerald: inv[message.author.id].emerald,
                radium: inv[message.author.id].radium,
                radon: inv[message.author.id].radon,
                gold: inv[message.author.id].gold,
                fer: inv[message.author.id].fer,
            energy: inv[message.author.id].energy,
            pickaxe: inv[message.author.id].pickaxe,
            stone: inv[message.author.id].stone,
            platine: inv[message.author.id].platine,
            cuivre: inv[message.author.id].cuivre,
            am: inv[message.author.id].am,
            p4d: inv[message.author.id].p4d,
            aluminium: inv[message.author.id].aluminium,
            axe: inv[message.author.id].axe,
            bismuth: inv[message.author.id].bismuth,
            uranium: inv[message.author.id].uranium,
            //bois
            sapin: inv[message.author.id].sapin,
            bambou: inv[message.author.id].bambou,
            pin: inv[message.author.id].pin,
            bouleau: inv[message.author.id].bouleau,
            money: inv[message.author.id].money + ledemi
         };
         const fs = require("fs");
         fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

           slot_embed.setAuthor("+ "+ledemi+" 💰")
            }
    
            if(slots[result1] === ":dollar:") {
              var lefoisdeux = args * 3
              inv[message.author.id] = {
                // minerais
                ruby: inv[message.author.id].ruby,
                saphir: inv[message.author.id].saphir,
                emerald: inv[message.author.id].emerald,
                radium: inv[message.author.id].radium,
                radon: inv[message.author.id].radon,
                gold: inv[message.author.id].gold,
                fer: inv[message.author.id].fer,
            energy: inv[message.author.id].energy,
            pickaxe: inv[message.author.id].pickaxe,
            stone: inv[message.author.id].stone,
            platine: inv[message.author.id].platine,
            cuivre: inv[message.author.id].cuivre,
            am: inv[message.author.id].am,
            p4d: inv[message.author.id].p4d,
            aluminium: inv[message.author.id].aluminium,
            axe: inv[message.author.id].axe,
            bismuth: inv[message.author.id].bismuth,
            uranium: inv[message.author.id].uranium,
            //bois
            sapin: inv[message.author.id].sapin,
            bambou: inv[message.author.id].bambou,
            pin: inv[message.author.id].pin,
            bouleau: inv[message.author.id].bouleau,
            money: inv[message.author.id].money + lefoisdeux
         };
         const fs = require("fs");
         fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

              slot_embed.setAuthor("+ "+lefoisdeux+" 💰")
               }
    
               
    
               if(slots[result1] === ":seven:") {
                var lefoistrois = args * 3
                inv[message.author.id] = {
                    // minerais
                    ruby: inv[message.author.id].ruby,
                    saphir: inv[message.author.id].saphir,
                    emerald: inv[message.author.id].emerald,
                    radium: inv[message.author.id].radium,
                    radon: inv[message.author.id].radon,
                    gold: inv[message.author.id].gold,
                    fer: inv[message.author.id].fer,
                energy: inv[message.author.id].energy,
                pickaxe: inv[message.author.id].pickaxe,
                stone: inv[message.author.id].stone,
                platine: inv[message.author.id].platine,
                cuivre: inv[message.author.id].cuivre,
                am: inv[message.author.id].am,
                p4d: inv[message.author.id].p4d,
                aluminium: inv[message.author.id].aluminium,
                axe: inv[message.author.id].axe,
                bismuth: inv[message.author.id].bismuth,
                uranium: inv[message.author.id].uranium,
                //bois
                sapin: inv[message.author.id].sapin,
                bambou: inv[message.author.id].bambou,
                pin: inv[message.author.id].pin,
                bouleau: inv[message.author.id].bouleau,
                money: inv[message.author.id].money + lefoistrois
             };
             const fs = require("fs");
             fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
    
                slot_embed.setAuthor("+ "+lefoistrois+" 💰")
                 }
     if(clang === "fr") {
                 slot_embed.setFooter("Vous avez gagné !", aicon)
     }else{
      slot_embed.setFooter("You won!", aicon)
     }
        msg.edit(slot_embed)
           return
    
          }
        }
            if (slots[result1] === slots[result2] && slots[result3]) {
              
                if(clang === "en") {
                  slot_embed.setTitle(`:slot_machine: ${message.author.username} has launched the slot machine! :slot_machine:`)
                  slot_embed.setFooter("You won!", aicon)
                  slot_embed.setColor("#3EAD24")
               //     msg.edit(slot_embed)
                }else{
                  slot_embed.setTitle(`:slot_machine: ${message.author.username} a lancé la machine à sous! :slot_machine:`)
            slot_embed.setFooter("Vous avez gagné!", aicon)
       slot_embed.setColor("#3EAD24")
         //   msg.edit(slot_embed)
                }
    
                if(slots[result1] === ":x:") {
                  if(clang === "en") {
                    slot_embed.setTitle(`:slot_machine: ${message.author.username} has launched the slot machine! :slot_machine:`)
                    slot_embed.setFooter("You lost", aicon)
                    slot_embed.setColor("RED")
                    slot_embed.setAuthor("- " + args +" 💰")
                    inv[message.author.id] = {
                        // minerais
                        ruby: inv[message.author.id].ruby,
                        saphir: inv[message.author.id].saphir,
                        emerald: inv[message.author.id].emerald,
                        radium: inv[message.author.id].radium,
                        radon: inv[message.author.id].radon,
                        gold: inv[message.author.id].gold,
                        fer: inv[message.author.id].fer,
                    energy: inv[message.author.id].energy,
                    pickaxe: inv[message.author.id].pickaxe,
                    stone: inv[message.author.id].stone,
                    platine: inv[message.author.id].platine,
                    cuivre: inv[message.author.id].cuivre,
                    am: inv[message.author.id].am,
                    p4d: inv[message.author.id].p4d,
                    aluminium: inv[message.author.id].aluminium,
                    axe: inv[message.author.id].axe,
                    bismuth: inv[message.author.id].bismuth,
                    uranium: inv[message.author.id].uranium,
                    //bois
                    sapin: inv[message.author.id].sapin,
                    bambou: inv[message.author.id].bambou,
                    pin: inv[message.author.id].pin,
                    bouleau: inv[message.author.id].bouleau,
                    money: inv[message.author.id].money + args
                 };
                 const fs = require("fs");
                 fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
        
                
                }else{
                  slot_embed.setTitle(`:slot_machine: ${message.author.username} a lancé la machine à sous! :slot_machine:`)
                  slot_embed.setFooter("Vous avez perdu !", aicon)
         slot_embed.setColor("RED")
                }
                }
                if(slots[result1] === ":strawberry:") {
                    inv[message.author.id] = {
                        // minerais
                        ruby: inv[message.author.id].ruby,
                        saphir: inv[message.author.id].saphir,
                        emerald: inv[message.author.id].emerald,
                        radium: inv[message.author.id].radium,
                        radon: inv[message.author.id].radon,
                        gold: inv[message.author.id].gold,
                        fer: inv[message.author.id].fer,
                    energy: inv[message.author.id].energy,
                    pickaxe: inv[message.author.id].pickaxe,
                    stone: inv[message.author.id].stone,
                    platine: inv[message.author.id].platine,
                    cuivre: inv[message.author.id].cuivre,
                    am: inv[message.author.id].am,
                    p4d: inv[message.author.id].p4d,
                    aluminium: inv[message.author.id].aluminium,
                    axe: inv[message.author.id].axe,
                    bismuth: inv[message.author.id].bismuth,
                    uranium: inv[message.author.id].uranium,
                    //bois
                    sapin: inv[message.author.id].sapin,
                    bambou: inv[message.author.id].bambou,
                    pin: inv[message.author.id].pin,
                    bouleau: inv[message.author.id].bouleau,
                    money: inv[message.author.id].money + args
                 };
                 const fs = require("fs");
                 fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
        
               slot_embed.setAuthor("+ 10 💰")
                }
    
    
                if(slots[result1] === ":tangerine:") {
                    inv[message.author.id] = {
                        // minerais
                        ruby: inv[message.author.id].ruby,
                        saphir: inv[message.author.id].saphir,
                        emerald: inv[message.author.id].emerald,
                        radium: inv[message.author.id].radium,
                        radon: inv[message.author.id].radon,
                        gold: inv[message.author.id].gold,
                        fer: inv[message.author.id].fer,
                    energy: inv[message.author.id].energy,
                    pickaxe: inv[message.author.id].pickaxe,
                    stone: inv[message.author.id].stone,
                    platine: inv[message.author.id].platine,
                    cuivre: inv[message.author.id].cuivre,
                    am: inv[message.author.id].am,
                    p4d: inv[message.author.id].p4d,
                    aluminium: inv[message.author.id].aluminium,
                    axe: inv[message.author.id].axe,
                    bismuth: inv[message.author.id].bismuth,
                    uranium: inv[message.author.id].uranium,
                    //bois
                    sapin: inv[message.author.id].sapin,
                    bambou: inv[message.author.id].bambou,
                    pin: inv[message.author.id].pin,
                    bouleau: inv[message.author.id].bouleau,
                    money: inv[message.author.id].money + 5
                 };
                 const fs = require("fs");
                 fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
        
               slot_embed.setAuthor("+ 5 💰")
                }
    
    
                if(slots[result1] === ":lemon:") {
                    inv[message.author.id] = {
                        // minerais
                        ruby: inv[message.author.id].ruby,
                        saphir: inv[message.author.id].saphir,
                        emerald: inv[message.author.id].emerald,
                        radium: inv[message.author.id].radium,
                        radon: inv[message.author.id].radon,
                        gold: inv[message.author.id].gold,
                        fer: inv[message.author.id].fer,
                    energy: inv[message.author.id].energy,
                    pickaxe: inv[message.author.id].pickaxe,
                    stone: inv[message.author.id].stone,
                    platine: inv[message.author.id].platine,
                    cuivre: inv[message.author.id].cuivre,
                    am: inv[message.author.id].am,
                    p4d: inv[message.author.id].p4d,
                    aluminium: inv[message.author.id].aluminium,
                    axe: inv[message.author.id].axe,
                    bismuth: inv[message.author.id].bismuth,
                    uranium: inv[message.author.id].uranium,
                    //bois
                    sapin: inv[message.author.id].sapin,
                    bambou: inv[message.author.id].bambou,
                    pin: inv[message.author.id].pin,
                    bouleau: inv[message.author.id].bouleau,
                    money: inv[message.author.id].money + 10
                 };
                 const fs = require("fs");
                 fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
        
               slot_embed.setAuthor("+ 10 💰")
                }
    
                if(slots[result1] === ":cherries:") {
                  var ledemi = args / 2
                  inv[message.author.id] = {
                    // minerais
                    ruby: inv[message.author.id].ruby,
                    saphir: inv[message.author.id].saphir,
                    emerald: inv[message.author.id].emerald,
                    radium: inv[message.author.id].radium,
                    radon: inv[message.author.id].radon,
                    gold: inv[message.author.id].gold,
                    fer: inv[message.author.id].fer,
                energy: inv[message.author.id].energy,
                pickaxe: inv[message.author.id].pickaxe,
                stone: inv[message.author.id].stone,
                platine: inv[message.author.id].platine,
                cuivre: inv[message.author.id].cuivre,
                am: inv[message.author.id].am,
                p4d: inv[message.author.id].p4d,
                aluminium: inv[message.author.id].aluminium,
                axe: inv[message.author.id].axe,
                bismuth: inv[message.author.id].bismuth,
                uranium: inv[message.author.id].uranium,
                //bois
                sapin: inv[message.author.id].sapin,
                bambou: inv[message.author.id].bambou,
                pin: inv[message.author.id].pin,
                bouleau: inv[message.author.id].bouleau,
                money: inv[message.author.id].money + ledemi
             };
             const fs = require("fs");
             fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
    
               slot_embed.setAuthor("+ "+ledemi+" 💰")
                }
    
                if(slots[result1] === ":dollar:") {
                  var lefoisdeux = args * 2
                  inv[message.author.id] = {
                    // minerais
                    ruby: inv[message.author.id].ruby,
                    saphir: inv[message.author.id].saphir,
                    emerald: inv[message.author.id].emerald,
                    radium: inv[message.author.id].radium,
                    radon: inv[message.author.id].radon,
                    gold: inv[message.author.id].gold,
                    fer: inv[message.author.id].fer,
                energy: inv[message.author.id].energy,
                pickaxe: inv[message.author.id].pickaxe,
                stone: inv[message.author.id].stone,
                platine: inv[message.author.id].platine,
                cuivre: inv[message.author.id].cuivre,
                am: inv[message.author.id].am,
                p4d: inv[message.author.id].p4d,
                aluminium: inv[message.author.id].aluminium,
                axe: inv[message.author.id].axe,
                bismuth: inv[message.author.id].bismuth,
                uranium: inv[message.author.id].uranium,
                //bois
                sapin: inv[message.author.id].sapin,
                bambou: inv[message.author.id].bambou,
                pin: inv[message.author.id].pin,
                bouleau: inv[message.author.id].bouleau,
                money: inv[message.author.id].money + lefoisdeux
             };
             const fs = require("fs");
             fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
    
                  slot_embed.setAuthor("+ "+lefoisdeux+" 💰")
                   }
    
                   
    
                   if(slots[result1] === ":seven:") {
                    var lefoistrois = args * 3
                    inv[message.author.id] = {
                        // minerais
                        ruby: inv[message.author.id].ruby,
                        saphir: inv[message.author.id].saphir,
                        emerald: inv[message.author.id].emerald,
                        radium: inv[message.author.id].radium,
                        radon: inv[message.author.id].radon,
                        gold: inv[message.author.id].gold,
                        fer: inv[message.author.id].fer,
                    energy: inv[message.author.id].energy,
                    pickaxe: inv[message.author.id].pickaxe,
                    stone: inv[message.author.id].stone,
                    platine: inv[message.author.id].platine,
                    cuivre: inv[message.author.id].cuivre,
                    am: inv[message.author.id].am,
                    p4d: inv[message.author.id].p4d,
                    aluminium: inv[message.author.id].aluminium,
                    axe: inv[message.author.id].axe,
                    bismuth: inv[message.author.id].bismuth,
                    uranium: inv[message.author.id].uranium,
                    //bois
                    sapin: inv[message.author.id].sapin,
                    bambou: inv[message.author.id].bambou,
                    pin: inv[message.author.id].pin,
                    bouleau: inv[message.author.id].bouleau,
                    money: inv[message.author.id].money + lefoistrois
                 };
                 const fs = require("fs");
                 fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
        
                    slot_embed.setAuthor("+ "+lefoistrois+" 💰")
                     }
         
            msg.edit(slot_embed)
               
              
            } else { 
              if (slots[result1] === slots[result2] && slots[result3]) {
    if(slots[result2] === slots[result3]) {
    
    }
              }
            
              if(clang === "en") {
                slot_embed.setTitle(`:slot_machine: ${message.author.username} has launched the slot machine! :slot_machine:`)
                slot_embed.setFooter("You lost", aicon)
                slot_embed.setColor("RED")
    
                slot_embed.setAuthor("- " + args +" 💰")
                inv[message.author.id] = {
                    // minerais
                    ruby: inv[message.author.id].ruby,
                    saphir: inv[message.author.id].saphir,
                    emerald: inv[message.author.id].emerald,
                    radium: inv[message.author.id].radium,
                    radon: inv[message.author.id].radon,
                    gold: inv[message.author.id].gold,
                    fer: inv[message.author.id].fer,
                energy: inv[message.author.id].energy,
                pickaxe: inv[message.author.id].pickaxe,
                stone: inv[message.author.id].stone,
                platine: inv[message.author.id].platine,
                cuivre: inv[message.author.id].cuivre,
                am: inv[message.author.id].am,
                p4d: inv[message.author.id].p4d,
                aluminium: inv[message.author.id].aluminium,
                axe: inv[message.author.id].axe,
                bismuth: inv[message.author.id].bismuth,
                uranium: inv[message.author.id].uranium,
                //bois
                sapin: inv[message.author.id].sapin,
                bambou: inv[message.author.id].bambou,
                pin: inv[message.author.id].pin,
                bouleau: inv[message.author.id].bouleau,
                money: inv[message.author.id].money - args
             };
             const fs = require("fs");
             fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
    
            
    
    
               msg.edit(slot_embed)
    
            }else{
              slot_embed.setTitle(`:slot_machine: ${message.author.username} a lancé la machine à sous! :slot_machine:`)
              slot_embed.setFooter("Vous avez perdu !", aicon)
     slot_embed.setColor("RED")
     slot_embed.setAuthor("- " + args +" 💰")
     inv[message.author.id] = {
        // minerais
        ruby: inv[message.author.id].ruby,
        saphir: inv[message.author.id].saphir,
        emerald: inv[message.author.id].emerald,
        radium: inv[message.author.id].radium,
        radon: inv[message.author.id].radon,
        gold: inv[message.author.id].gold,
        fer: inv[message.author.id].fer,
    energy: inv[message.author.id].energy,
    pickaxe: inv[message.author.id].pickaxe,
    stone: inv[message.author.id].stone,
    platine: inv[message.author.id].platine,
    cuivre: inv[message.author.id].cuivre,
    am: inv[message.author.id].am,
    p4d: inv[message.author.id].p4d,
    aluminium: inv[message.author.id].aluminium,
    axe: inv[message.author.id].axe,
    bismuth: inv[message.author.id].bismuth,
    uranium: inv[message.author.id].uranium,
    //bois
    sapin: inv[message.author.id].sapin,
    bambou: inv[message.author.id].bambou,
    pin: inv[message.author.id].pin,
    bouleau: inv[message.author.id].bouleau,
    money: inv[message.author.id].money - args
 };
 const fs = require("fs");
 fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

    
                msg.edit(slot_embed)
            }
     
            
            }
          },  4500);
    
        })
        }
    
               // the user can type the command ... your command code goes here :)
    
            // Adds the user to the set so that they can't talk for a minute
            talkedRecently3.add(message.author.id);
            setTimeout(() => {
              // Removes the user from the set after a minute
              talkedRecently3.delete(message.author.id);
            }, 10000);
    
        }
        /*
 if(message.content === prefix + "daily") {
    if (TalkedRecently2.has(message.author.id)) {
            return message.channel.send(":x: Vous avez déjà récupérer votre daily, merci de repasser dans 24 heures!");

     } else {
 
            // the user can type the command ... your command code goes here :)
 
         // Adds the user to the set so that they can't talk for a minute
         TalkedRecently2.add(message.author.id);
         setTimeout(() => {
           // Removes the user from the set after a minute
           TalkedRecently2.delete(message.author.id);
         },  86400000);
     
     var pdaily = "0%"
   
 
         
     let pcoinAmt2 = (Math.floor(Math.random() * 50) + 50)
let pcoinAmt = pcoinAmt2;
let pcoinAmt3 = pcoinAmt2 / 2;
     if(premium[message.author.id].premium === true) {
pcoinAmt = pcoinAmt2 + pcoinAmt3
     }
    inv[message.author.id] = {
        // minerais
        ruby: inv[message.author.id].ruby,
        saphir: inv[message.author.id].saphir,
        emerald: inv[message.author.id].emerald,
        radium: inv[message.author.id].radium,
        radon: inv[message.author.id].radon,
        gold: inv[message.author.id].gold,
        fer: inv[message.author.id].fer,
    energy: inv[message.author.id].energy,
    pickaxe: inv[message.author.id].pickaxe,
    stone: inv[message.author.id].stone,
    platine: inv[message.author.id].platine,
    cuivre: inv[message.author.id].cuivre,
    am: inv[message.author.id].am,
    p4d: inv[message.author.id].p4d,
    aluminium: inv[message.author.id].aluminium,
    axe: inv[message.author.id].axe,
    bismuth: inv[message.author.id].bismuth,
    uranium: inv[message.author.id].uranium,
    //bois
    sapin: inv[message.author.id].sapin,
    bambou: inv[message.author.id].bambou,
    pin: inv[message.author.id].pin,
    bouleau: inv[message.author.id].bouleau,
    money: inv[message.author.id].money + pcoinAmt
 };
 const fs = require("fs");
 fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
 
 message.channel.send(":calendar: Daily récupéré avec succès, "+pcoinAmt+" :moneybag: ont été ajoutés à votre compte, on se revoit dans 24H :)")
   if(premium[message.author.id].premium === true) {message.channel.send(`Avantage pierre de sagesse <:Premium:586894745662652431>, + ${pcoinAmt3} :moneybag:`)}
}}
*/
if(message.content.startsWith(prefix + "daily")) {
    if(!daily[message.author.id]) {
        daily[message.author.id] = {
            day: 0,
            streak: 0
        }
    }
    if(daily[message.author.id].streak >= -1) {
        if(daily[message.author.id].streak == 0 || daily[message.author.id].streak == 1) {}else{
        daily[message.author.id] = {
            day: 0,
            streak: 0
        }
        const fs = require("fs");
        fs.writeFile("./assets/daily.json", JSON.stringify(daily), (err)=>console.log(err));
    }}
    
    if (TalkedRecently2.has(message.author.id)) {
        return message.channel.send(":x: Vous avez déjà récupéré votre daily, merci de repasser dans 24 heures!");
    
    } else {
    
        // the user can type the command ... your command code goes here :)
    
     // Adds the user to the set so that they can't talk for a minute
     TalkedRecently2.add(message.author.id);
     setTimeout(() => {
        // Removes the user from the set after a minute
        TalkedRecently2.delete(message.author.id);
      },  86400000);
      // 86400000
      setTimeout(() => {
        daily[message.author.id] = {
            day: daily[message.author.id].day,
            streak: daily[message.author.id].streak - 1
        }
        const fs = require("fs");
        fs.writeFile("./assets/daily.json", JSON.stringify(daily), (err)=>console.log(err));
      },  144000000);
    // 144000000
    
     daily[message.author.id] = {
        day: daily[message.author.id].day + 1,
        streak: 1
    }
    const fs = require("fs");
    fs.writeFile("./assets/daily.json", JSON.stringify(daily), (err)=>console.log(err));
    let prize = daily[message.author.id].day * 10;
    if (premium[message.author.id].premium === true) {
        prize = prize * 2
    }
    
    inv[message.author.id] = {
        // minerais
        ruby: inv[message.author.id].ruby,
        saphir: inv[message.author.id].saphir,
        emerald: inv[message.author.id].emerald,
        radium: inv[message.author.id].radium,
        radon: inv[message.author.id].radon,
        gold: inv[message.author.id].gold,
        fer: inv[message.author.id].fer,
    energy: inv[message.author.id].energy,
    pickaxe: inv[message.author.id].pickaxe,
    stone: inv[message.author.id].stone,
    platine: inv[message.author.id].platine,
    cuivre: inv[message.author.id].cuivre,
    am: inv[message.author.id].am,
    p4d: inv[message.author.id].p4d,
    aluminium: inv[message.author.id].aluminium,
    axe: inv[message.author.id].axe,
    bismuth: inv[message.author.id].bismuth,
    uranium: inv[message.author.id].uranium,
    //bois
    sapin: inv[message.author.id].sapin,
    bambou: inv[message.author.id].bambou,
    pin: inv[message.author.id].pin,
    bouleau: inv[message.author.id].bouleau,
    money: inv[message.author.id].money + prize
    };
    
    fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));
    if(premium[message.author.id].premium === false) {
    return message.reply(`:white_check_mark: Vous avez récupérer votre ${daily[message.author.id].day}e daily, vous remportez ${prize} :moneybag:`)
    }else{
    return message.reply(`:white_check_mark: Vous avez récupérer votre ${daily[message.author.id].day}e daily, vous remportez ~~${prize / 2}~~ ${prize} :moneybag:\n:chart_with_upwards_trend: Bonus premium x2`)
    }
    }}
let fight = require("./assets/fight.json")


if(message.content.startsWith(prefix + "build")) {
    let args = message.content.split(" ").slice(1).join(" ")

    if(args !== "labo"){
        return message.channel.send("Commande invalide, voici la liste des bâtiments proposés:\n```diff\n+ r!build labo\n```")
    }

    if(args === "labo") {
        var ferr = build[message.author.id].laboLvl * 1000
        var stoner = build[message.author.id].laboLvl * 10000
        var sapinr = build[message.author.id].laboLvl * 1000
        var moneyr = build[message.author.id].laboLvl * 500
if(build[message.author.id].labo == false) {
    var emoji = "\u274C";
    var emoji2 = "\u2705";
    message.reply("\n⚗ Laboratoire\n:arrow_forward: Donne accès aux ressources: Radium ; Radon ; Uranium\nÉtat: :house_abandoned: Détruit\nRessources demandées:\n :x: Fer : 1kg | :x: Pierre : 10kg\n :christmas_tree: Sapin : 1kg | 500 :moneybag:\n\nVoulez vous améliorer le laboratoire?")
    .then(msg => {
      msg.react(emoji).then(r => {
          msg.react(emoji2)
          const V = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
          const X = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
        
                  const Vok= msg.createReactionCollector(V, {
              time: 1000000
          });
          const Xok = msg.createReactionCollector(X, {
              time: 1000000
          });
        
        
          Vok.on('collect', r => {
            msg.delete()
 return message.channel.send("Construction annulée suite à votre demande") 
          })
            
        Xok.on('collect', r => {
            msg.delete()
            var ress = " "
            
if(inv[message.author.id].fer < 1000) {var ress = `- Fer: ${1000 - inv[message.author.id].fer}gr`}
if(inv[message.author.id].stone < 10000) {var ress = ress + `\n- Pierre: ${10000 - inv[message.author.id].stone}gr`}
if(inv[message.author.id].sapin < 1000) {var ress = ress + `\n- Sapin : ${1000 - inv[message.author.id].sapin}gr`}
if(inv[message.author.id].money < 500) {var ress = ress + `\n- Argent : ${500 - inv[message.author.id].money}$`}
if(ress === " "){
    
    inv[message.author.id] = {
        // minerais
        ruby: inv[message.author.id].ruby,
        saphir: inv[message.author.id].saphir,
        emerald: inv[message.author.id].emerald,
        radium: inv[message.author.id].radium,
        radon: inv[message.author.id].radon,
        gold: inv[message.author.id].gold,
        fer: inv[message.author.id].fer - 1000,
    energy: inv[message.author.id].energy,
    pickaxe: inv[message.author.id].pickaxe,
    stone: inv[message.author.id].stone - 10000,
    platine: inv[message.author.id].platine,
    cuivre: inv[message.author.id].cuivre,
    am: inv[message.author.id].am,
    p4d: inv[message.author.id].p4d,
    aluminium: inv[message.author.id].aluminium,
    axe: inv[message.author.id].axe,
    bismuth: inv[message.author.id].bismuth,
    uranium: inv[message.author.id].uranium,
    //bois
    sapin: inv[message.author.id].sapin - 1000,
    bambou: inv[message.author.id].bambou,
    pin: inv[message.author.id].pin,
    bouleau: inv[message.author.id].bouleau,
    money: inv[message.author.id].money - 500
 };
 const fs = require("fs");
 fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));

 build[message.author.id] = {
    labo: true,
    laboLvl: 1
    
}
fs.writeFile("./assets/build.json", JSON.stringify(build), (err)=>console.log(err));

xp[message.author.id] = {
    xp: xp[message.author.id].xp + 100,
    lvl: xp[message.author.id].lvl
}
fs.writeFile("./assets/level.json", JSON.stringify(xp), (err)=>console.log(err));

 message.reply(`\n⚗ Laboratoire construit\n:arrow_up: Votre laboratoire est désormais au niveau 1 \n:incoming_envelope: +100xp\n:arrow_forward: Nouvelles ressources débloquées: Radium ; Radon ; Uranium`)
}else{
    return message.channel.send(`Vous n'avez pas assez de ressources!\nVoici une liste de ce qu'il vous manque:\n` + "```diff\n"+ress+"\n```")
}
})})})


}else{
    var emoji = "\u274C";
    var emoji2 = "\u2705";
 
    var msg = `\n⚗ Laboratoire (Niveau ${build[message.author.id].laboLvl})\n:arrow_forward: Améliore la productivité de vos ressources\nÉtat: :house_with_garden: En service\nRessources demandées:\n:x: Fer : ${ferr / 1000}kg :x: Pierre : ${stoner / 1000}kg\n :christmas_tree: Sapin : ${sapinr / 1000}kg | ${moneyr} :moneybag:\n\nVoulez vous améliorer le laboratoire?`
if(build[message.author.id].laboLvl === 2) {  var msg = `\n⚗ Laboratoire (Niveau ${build[message.author.id].laboLvl})\n:arrow_forward: Donne accès aux ressources: Anti-Matière ; Prisme 4D\nÉtat: :house: En service\nRessources demandées:\n :x: Fer : ${ferr / 1000}kg| :x: Pierre : ${stoner / 1000}kg\n :christmas_tree: Sapin : ${sapinr / 1000}kg | ${moneyr} :moneybag:\n\nVoulez vous améliorer le laboratoire?`}
    message.reply(msg)
    .then(msg => {
      msg.react(emoji).then(r => {
          msg.react(emoji2)
          const V = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
          const X = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
        
                  const Vok= msg.createReactionCollector(V, {
              time: 1000000
          });
          const Xok = msg.createReactionCollector(X, {
              time: 1000000
          });
        
        
          Vok.on('collect', r => {
            msg.delete()
 return message.channel.send("Construction annulée suite à votre demande") 
          })
            
        Xok.on('collect', r => {
            msg.delete()
            var ress = " "
            // Ressources demandées:\n :x: Fer : 2kg| :x: Pierre : 20kg\n :christmas_tree: Sapin : 2kg | 1 000 :moneybag:
if(inv[message.author.id].fer < ferr) {var ress = `- Fer: ${ferr - inv[message.author.id].fer}gr`}
if(inv[message.author.id].stone < stoner) {var ress = ress + `\n- Pierre: ${stoner - inv[message.author.id].stone}gr`}
if(inv[message.author.id].sapin < sapinr) {var ress = ress + `\n- Sapin : ${sapinr - inv[message.author.id].sapin}gr`}
if(inv[message.author.id].money < moneyr) {var ress = ress + `\n- Argent : ${moneyr - inv[message.author.id].money}$`}
if(ress === " "){
    
    inv[message.author.id] = {
        // minerais
        ruby: inv[message.author.id].ruby,
        saphir: inv[message.author.id].saphir,
        emerald: inv[message.author.id].emerald,
        radium: inv[message.author.id].radium,
        radon: inv[message.author.id].radon,
        gold: inv[message.author.id].gold,
        fer: inv[message.author.id].fer - ferr,
    energy: inv[message.author.id].energy,
    pickaxe: inv[message.author.id].pickaxe,
    stone: inv[message.author.id].stone - stoner,
    platine: inv[message.author.id].platine,
    cuivre: inv[message.author.id].cuivre,
    am: inv[message.author.id].am,
    p4d: inv[message.author.id].p4d,
    aluminium: inv[message.author.id].aluminium,
    axe: inv[message.author.id].axe,
    bismuth: inv[message.author.id].bismuth,
    uranium: inv[message.author.id].uranium,
    //bois
    sapin: inv[message.author.id].sapin - sapinr,
    bambou: inv[message.author.id].bambou,
    pin: inv[message.author.id].pin,
    bouleau: inv[message.author.id].bouleau,
    money: inv[message.author.id].money - moneyr
 };
 const fs = require("fs");
 fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));


xp[message.author.id] = {
    xp: xp[message.author.id].xp + 50,
    lvl: xp[message.author.id].lvl
}
fs.writeFile("./assets/level.json", JSON.stringify(xp), (err)=>console.log(err));


build[message.author.id] = {
    labo: true,
    laboLvl: build[message.author.id].laboLvl + 1
    
}
fs.writeFile("./assets/build.json", JSON.stringify(build), (err)=>console.log(err));

var bonus = "** **"
if(build[message.author.id].laboLvl === 3) { var bonus = "\n:arrow_forward: Ressources débloquées: Anti-Matière ; Prisme 4D"}
 message.reply(`\n⚗ Laboratoire amélioré\n:arrow_up: Votre laboratoire est désormais au niveau ${build[message.author.id].laboLvl} \n:incoming_envelope: +50xp` + bonus)
}else{
    return message.channel.send(`Vous n'avez pas assez de ressources!\nVoici une liste de ce qu'il vous manque:\n` + "```diff\n"+ress+"\n```")
}
})})})
}
    }
}
if(message.content.startsWith(prefix + "top")) {
    var first = bot.users.get(top[bot.user.id].first)
    var second = bot.users.get(top[bot.user.id].second)
    var third = bot.users.get(top[bot.user.id].third)


    if(!first) { var firsta = `<@${top[bot.user.id].first}>`}
    if(!second) { var seconda = `<@${top[bot.user.id].second}>`} 
if(!third) { var thirda = `<@${top[bot.user.id].third}>`}  

   if(first) { var firsta = bot.users.get(top[bot.user.id].first).tag }
    if(second){ var seconda = bot.users.get(top[bot.user.id].second).tag }
    if(third){var thirda = bot.users.get(top[bot.user.id].third).tag }

    let topembed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle("Top 3 des joueurs les plus riches")
    .setFooter("Le classement se base sur votre niveau + votre argent")
    .addField(`:first_place: ${firsta} => ${top[bot.user.id].firstr}`, "** **")
    .addField(`:second_place: ${seconda} => ${top[bot.user.id].secondr}`, "** **")
    .addField(`:third_place: ${thirda} => ${top[bot.user.id].thirdr}`, "** **")
/*
    .addField(`:medal: ${top[bot.user.id].fourth} => ${top[bot.user.id].fourthr}`, "** **")
    .addField(`:medal: ${top[bot.user.id].five} => ${top[bot.user.id].fiver}`, "** **") */
    .addField("** **", `**Vous avez ${inv[message.author.id].money + xp[message.author.id].lvl} points**`)
    message.channel.send(topembed)
}







if(message.content.startsWith(prefix)) {
    xp[message.author.id] = {
        xp: xp[message.author.id].xp + 10,
        lvl: xp[message.author.id].lvl
    }
    fs.writeFile("./assets/inventory.json", JSON.stringify(inv), (err)=>console.log(err));


}





  








      












 
if(message.author.id === top[bot.user.id].first) {
    if(player !== top[bot.user.id].firstr) {
        top[bot.user.id] = {
            //player
                    first: message.author.id,
                    second: top[bot.user.id].second,
                    third: top[bot.user.id].third,
                    fourth: top[bot.user.id].fourth,
                    five: top[bot.user.id].five,
                    //richesse
                   firstr: player,
                    secondr: top[bot.user.id].secondr,
                    thirdr: top[bot.user.id].thirdr,
                    fourthr: top[bot.user.id].fourthr,
                    fiver: top[bot.user.id].fiver   
            }
                fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
                
    }
}

if(message.author.id !== top[bot.user.id].first) {
    if(message.author.id !== top[bot.user.id].second) {
        if(message.author.id !== top[bot.user.id].third) {
            if(player > top[bot.user.id].thirdr) {
                top[bot.user.id] = {
                    //player
                            first: top[bot.user.id].first,
                            second: top[bot.user.id].second,
                            third: message.author.id,
                            fourth: top[bot.user.id].fourth,
                            five: top[bot.user.id].five,
                            //richesse
                           firstr: top[bot.user.id].firstr,
                            secondr: top[bot.user.id].secondr,
                            thirdr: player,
                            fourthr: top[bot.user.id].fourthr,
                            fiver: top[bot.user.id].fiver   
                    }
                        fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
                        
            }
        }
    }
}
if(message.author.id === top[bot.user.id].first) {
    if(player !== top[bot.user.id].firstr) {
       top[bot.user.id] = {
           //player
                   first: top[bot.user.id].first,
                   second: top[bot.user.id].second,
                   third: top[bot.user.id].third,
                   fourth: top[bot.user.id].fourth,
                   five: top[bot.user.id].five,
                   //richesse
                  firstr: player,
                   secondr: top[bot.user.id].secondr,
                   thirdr: top[bot.user.id].thirdr,
                   fourthr: top[bot.user.id].fourthr,
                   fiver: top[bot.user.id].fiver   
           }
               fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
              
    }
}


if(message.author.id === top[bot.user.id].second) {
    if(player !== top[bot.user.id].secondr) {
       top[bot.user.id] = {
           //player
                   first: top[bot.user.id].first,
                   second: top[bot.user.id].second,
                   third: top[bot.user.id].third,
                   fourth: top[bot.user.id].fourth,
                   five: top[bot.user.id].five,
                   //richesse
                  firstr: top[bot.user.id].firstr,
                   secondr: player,
                   thirdr: top[bot.user.id].thirdr,
                   fourthr: top[bot.user.id].fourthr,
                   fiver: top[bot.user.id].fiver   
           }
               fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
              
    }
}


if(message.author.id === top[bot.user.id].third) {
    if(player !== top[bot.user.id].thirdr) {
       top[bot.user.id] = {
           //player
                   first: top[bot.user.id].first,
                   second: top[bot.user.id].second,
                   third: top[bot.user.id].third,
                   fourth: top[bot.user.id].fourth,
                   five: top[bot.user.id].five,
                   //richesse
                  firstr: top[bot.user.id].firstr,
                   secondr: top[bot.user.id].secondr,
                   thirdr: player,
                   fourthr: top[bot.user.id].fourthr,
                   fiver: top[bot.user.id].fiver   
           }
               fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
              
    }
}


if(top[bot.user.id].secondr > top[bot.user.id].firstr) {

    top[bot.user.id] = {
        //player
                first: top[bot.user.id].second,
                second: top[bot.user.id].first,
                third: top[bot.user.id].third,
                fourth: top[bot.user.id].fourth,
                five: top[bot.user.id].five,
                //richesse
               firstr: top[bot.user.id].secondr,
                secondr: top[bot.user.id].firstr,
                thirdr: top[bot.user.id].thirdr,
                fourthr: top[bot.user.id].fourthr,
                fiver: top[bot.user.id].fiver   
        }
            fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
}


if(top[bot.user.id].thirdr > top[bot.user.id].secondr) {

    top[bot.user.id] = {
        //player
                first: top[bot.user.id].first,
                second: top[bot.user.id].third,
                third: top[bot.user.id].second,
                fourth: top[bot.user.id].fourth,
                five: top[bot.user.id].five,
                //richesse
               firstr: top[bot.user.id].firstr,
                secondr: top[bot.user.id].thirdr,
                thirdr: top[bot.user.id].secondr,
                fourthr: top[bot.user.id].fourthr,
                fiver: top[bot.user.id].fiver   
        }
            fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
}


if(top[bot.user.id].first !== "** **") {
if(top[bot.user.id].second !== "** **") {
    if(message.author.id === top[bot.user.id].second) {
        return
        }else if(message.author.id=== top[bot.user.id].first) {
            return
            }else
    top[bot.user.id] = {
        //player
                first: top[bot.user.id].first,
                second: top[bot.user.id].second,
                third: message.author.id,
                fourth: top[bot.user.id].fourth,
                five: top[bot.user.id].five,
                //richesse
               firstr: top[bot.user.id].firstr,
                secondr: top[bot.user.id].secondr,
                thirdr: player,
                fourthr: top[bot.user.id].fourthr,
                fiver: top[bot.user.id].fiver   
        }
            fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
            
}}



 if(top[bot.user.id].first === "** **") {
    if(message.author.id === top[bot.user.id].second) {
    return
    }else{
    top[bot.user.id] = {
        //player
                first: message.author.id,
                second: top[bot.user.id].second,
                third: top[bot.user.id].third,
                fourth: top[bot.user.id].fourth,
                five: top[bot.user.id].five,
                //richesse
               firstr: player,
                secondr: top[bot.user.id].secondr,
                thirdr: top[bot.user.id].thirdr,
                fourthr: top[bot.user.id].fourthr,
                fiver: top[bot.user.id].fiver   
        }
            fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
            
}}



if(top[bot.user.id].first !== "** **") {
if(top[bot.user.id].second === "** **"){
if(message.author.id === top[bot.user.id].first){
        return
    }else if(top[bot.user.id].second !== "** **") {
        return
    }else{
        
    top[bot.user.id] = {
        //player
                first: top[bot.user.id].first,
                second: message.author.id,
                third: top[bot.user.id].third,
                fourth: top[bot.user.id].fourth,
                five: top[bot.user.id].five,
                //richesse
               firstr: top[bot.user.id].firstr,
                secondr: player,
                thirdr: top[bot.user.id].thirdr,
                fourthr: top[bot.user.id].fourthr,
                fiver: top[bot.user.id].fiver   
        }
            fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
            
} }}





/*
if(message.author.username === top[bot.user.id].second) {
if(message.author.username === top[bot.user.id].third){
        return
    }else{
    if(player !== top[bot.user.id].secondr) {
        top[bot.user.id] = {
            //player
                    first: top[bot.user.id].first,
                    second: message.author.username,
                    third: top[bot.user.id].third,
                    fourth: top[bot.user.id].fourth,
                    five: top[bot.user.id].five,
                    //richesse
                   firstr: top[bot.user.id].firstr,
                    secondr: player,
                    thirdr: top[bot.user.id].thirdr,
                    fourthr: top[bot.user.id].fourthr,
                    fiver: top[bot.user.id].fiver   
            }
                fs.writeFile("./assets/top/top-global.json", JSON.stringify(top), (err)=>console.log(err));  
                
    }}
} */















})