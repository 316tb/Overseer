const Discord = require("discord.js");
const bot = new Discord.Client();
const https = require('https');
const snekfetch = require("snekfetch");
const ms = require("ms");
const prefix = ">";
const version = "9.0.0";
const memeCount = 22;
const token1 = "";
const game = `${prefix}help || Version - ${version}`;
const status = "online"/* online, dnd, offline, idle*/
const muteTimeList = {};
/*const devList = [
    bot.fetchUser(338825657436078091),
    bot.fetchUser(320666534932643840)
]*/

//embedColors

const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777

var help = [(`
--------------------------------------
**>dm** DMs a player without using your username. [\`>dm @User#1234 Message Body\`]
**>ping** Pong!
**>info** Tells current bot version
**>kick** Kicks a user from the server [\`>kick @User#1234 reason\`]
**>ban** Bans a user from the server [\`>ban @User#1234 reason\`]
**>warn** Warns a user [\`>warn @User#1234 reason\`]
**>invite** Invite Overseer to your server
**>report** Reports a user to the owner [\`>report @User#1234 reason\`]
**>help** Displays this message [\`>help\`]
**>embed** Creates a custom embed [\`>embed title!@description\`]
**>wrd** Do some math using the WolframDelta API [\`>wrd (WolframDelta  syntax)\`]
**>mute** Mutes a user from messaging a text channel for a specified amount of time [\`>mute @User#1234 time\`]
**>unmute** UnMutes a user from messaging a text channel [\`>unmute @User#1234\`]
**>purge** Deletes the specified number of messages [\`>purge amount\`]


`),(`
--------------------------------------
**>8ball** Ask me a question! [\`>8ball Question\`]
**>roll** Rolls a 6 sided die
**>admin** Give urshmelf admin priveledges
**>slap** Slap dem b#tches! [\`>slap @User#1234\`]
**>meme** Fetches a reddit post from either r/Memes_Of_The_Dank or r/okbuddyretard
**>cringe** Fetches a reddit post from either r/MakeMeSuffer or r/Cringetopoia
**>strange** Fetches a reddit post from either r/cursedimages or r/bl
**>vote** Start a public Yes/No poll. [\`>vote title!@description\`]
`)]

var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];


var fortunes = [
    "Yes.",
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definelty.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now...",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good...",
    "Very doubtful.",
];


var subs = [
    "okbuddyretard",
    "Memes_Of_The_Dank"
]

var imgsubs = [
    "blursedimages",
    "cursedimages"
]

var crngsubs = [
  "MakeMeSuffer",
  "Cringetopia"
]

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

//bot ready
bot.on("ready", () => {
    bot.user.setStatus(status)
    bot.user.setActivity(game)
    console.log("Bot Ready For Use")
})

//Cleverbot

/*bot.on("message", message => {
    var response = Math.floor(Math.random() * 10);

    if (((message.content).toLowerCase()).includes("hello") || ((message.content).toLowerCase()).includes("hi ") || ((message.content).toLowerCase()).includes("hoi") || ((message.content).toLowerCase()).includes("howdy")){
        if (message.author == bot.user) return;
        switch (response){
            case 1:
                message.channel.send("Hello!");
                break;
            case 2:
                message.channel.send("Hi");
                break;
            case 3:
                message.channel.send("hOi.");
                break;
            case 4:
                message.channel.send("Howdy!");
                break;
            case 5:
                message.channel.send("What is up my dude?");
                break;
            case 6:
                message.channel.send(`Hello ${message.author}.`);
                break;
            case 7:
                message.channel.send("HoWdY PaRtNeR!");
                break;
            case 8:
                message.channel.send(`GET DOWN ${message.author} HAS A BOMB!`);
                setTimeout( () => {
                    message.channel.send("Oh wait, nvm. False alarm.");
                  }, 500);
                break;
            case 9:
                message.channel.send("I was beginning to get lonely.")
                break;
            default:
                console.log("null")
                break;
            }
        
        }
        if (((message.content).toLowerCase()).includes("bye") || ((message.content).toLowerCase()).includes("cya") || ((message.content).toLowerCase()).includes("gtg")){
            if (message.author == bot.user) return;
            switch (response){
                case 1:
                    message.channel.send("Goodbye!");
                    break;
                case 2:
                    message.channel.send("bye bye");
                    break;
                case 3:
                    message.channel.send("adios");
                    break;
                case 4:
                    message.channel.send("cya");
                    break;
                case 5:
                    message.channel.send("later aligator");
                    break;
                case 6:
                    message.channel.send(`See you later ${message.author}.`);
                    break;
                case 7:
                    message.channel.send("Catch ya later!");
                    break;
                case 8:
                    message.channel.send(`What the hell mom? I don't have to do this anymo-`);
                    setTimeout( () => {
                        message.channel.send("Oh wait...");
                      }, 1000);
                    break;
                case 9:
                    message.channel.send("bye");
                    break;
                default:
                    console.log("null")
                    break;
            }
        }
        else if (((message.content).toLowerCase()).includes("lol") || ((message.content).toLowerCase().includes(":joy:"))) {
            if (message.author == bot.user) return;
            if (response >= 4){
                message.channel.send(":joy:")
            }
            else if (response <= 5){
                message.channel.send("lol")
            }
        }
        
        else if (((message.content).toLowerCase()).includes("fuck you")) {
            if (message.author == bot.user) return;
            if (response >= 4){
                message.channel.send("Right back at ya buddy!")
            }
            else if (response <= 5){
                message.channel.send("Fuck you to!")
            }
        }
        else if (((message.content).toLowerCase()).includes("how are you") && ((message.content).toLowerCase()).includes("overseer")) {
            if (message.author == bot.user) return;
            if (response >= 4){
                message.channel.send("I'm doing mighty fine. And you?")
            }
            else if (response <= 5){
                message.channel.send("Doing good. How about you?")
            }
        }
        else if (message.content.includes("9081234")){
            message.channel.send(`Congradulations, You decoded the **SECRET MESSAGE!**`)
        }


});*/

//swear detector

/*bot.on('message', message => {
    let user = message.author;
    let modlog = bot.channels.find("name", "mod-log");
    let reason = "No Swearing";

    
    if (message.content.toLowerCase().includes("fuck") || message.content.toLowerCase().includes("bitch") || message.content.toLowerCase().includes("ass") || message.content.toLowerCase().includes("shit") || message.content.toLowerCase().includes("penis") || message.content.toLowerCase().includes("pussy") || message.content.toLowerCase().includes("vagina") || message.content.toLowerCase().includes("sex")){
      message.guild.member(user).kick(reason + `\n ***You can rejoin by joining Error 316; Too MLG, clicking on the __#partners__ text channel, and selecting your server from the list.***`);
      const kembed = new Discord.RichEmbed()
        .setAuthor(`${user.username} has been kicked from the server.`, user.displayAvatarURL)
        .addField("Kick information", `**Kicked User:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
        .setColor(embedRed);
      modlog.send({
      embed : kembed
    })}
    else{}
});*/


//commands


bot.on("message", async(message) => {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    var muteTimer = 0;

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.send({embed: {
            color: embedRed,
            title: "Pong!",
            }});
            break;
        
        case "info":
            message.channel.send({embed: {
            color: 0xf50107,
            title: "Currently using latest version of Overseer.",
            description: "(Version " + version + ")",
            }});
            break;

        case "8ball":
            if (args[1]) {
                //message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
                message.channel.send({embed: {
                    color: embedRed,
                    title: "Hmmm...",
                    description: (fortunes[Math.floor(Math.random() * fortunes.length)]),
                    }});
            }
            else {
                message.channel.send({embed: {
                    color: embedRed,
                    title: "Oops...",
                    description: "The usage of this command is: **/8ball [Question]**",
                    }});
            }
            break;
            
        case "roll":
          message.channel.send({embed: {
                    color: embedRed,
                    title: "You rolled...",
                    description: Math.floor(Math.random() * 6) + 1,
                    }});
                    break;
                    
        case "admin":
            message.reply("Nice try, but no.");
            break;  

        case "kick":
            if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("It appears you don't have permission to do this.")
            if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return message.reply("It appears I don't have permission to do this.")
            
            let user = message.mentions.users.first();
            let reason = message.content.split(" ").slice(2).join(" ");
        
            if(message.mentions.users.size < 1) return message.reply("You must mention someone in order to kick them!");
            if(!reason) return message.reply("Please enter a reason for kick.");
            if(!message.guild.member(user).kickable) return message.reply("I can't kick the owner!");
            
            message.guild.member(user).kick(reason + `You can re-join by going to Error 316; Too MLG by going to https://discordapp.com/invite/ArsJtNd, and then click on the "#partnerships" chat`);
            
            var kickembed = new Discord.RichEmbed()
            .setAuthor(`${user.username} has been kicked from the server.`, user.displayAvatarURL)
            .addField("Kick information", `**Kicked User:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
            .setColor(embedRed);
            message.channel.send({
            embed : kickembed
            });
            break;

        case "ban":
            if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("It appears you don't have permission to do this.")
            if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return message.reply("It appears I don't have permission to do this.")
            
            let user1 = message.mentions.users.first();
            let reason1 = message.content.split(" ").slice(2).join(" ");

            if(message.mentions.users.size < 1) return message.reply("You must mention someone in order to ban them!");
            if(!reason1) return message.reply("Enter a reason for ban.");
            if(!message.guild.member(user1).kickable) return message.reply("Error banning member.");
            
            message.guild.member(user1).ban(reason1);
            
            var banembed = new Discord.RichEmbed()
            .setAuthor(`✅ ${user1.username} has been banned from the server.`, user1.displayAvatarURL)
            .addField("Ban information", `**Banned User:** ${user1.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason1}`)
            .setColor(embedGreen);
            message.channel.send({
            embed : banembed
            });
            break;

        case "mute":
          let tomute = message.mentions.members.first();
          let tomuteuser = message.mentions.users.first()
          let muterole = message.guild.roles.find("name", "muted")
          let mutetime = args[2]

          if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("You don't have permission to do that, do you?")
          if (!mutetime) mutetime = Infinity
          if (!tomute) return message.reply("Now I cant mute someone who doesn't exist, now can I?")
          if (tomute.roles.find(r => r.name === "muted")) return message.channel.send(`<@${tomute.id}>, You must have really messed up to have someone want to double mute you.`)
          if (tomute.hasPermission("MANAGE_ROLES")) return message.reply("No I don't think I will mute them.")
          if (!muterole){
            try{
              muterole = await message.guild.createRole({
                name: "muted",
                color: "#818386",
                permissions: []
              })
              message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
                })
              })
            }catch(e){
              console.log(e.stack);
            }
          }

          await(tomute.addRole(muterole.id));

          let muteembed = new Discord.RichEmbed()
          .setAuthor(`${tomuteuser.username} has been muted.`, tomuteuser.displayAvatarURL)
          .addField("Mute information", `**Muted User:** ${tomuteuser.username}\n**Moderator:** ${message.author.username}\n**Time:** ${mutetime}`)
          .setColor(embedGreen)
          message.channel.send({
            embed : muteembed
          })

          muteTimeList[`${tomute}`] = setTimeout(function(){
            tomute.removeRole(muterole.id)
            let muteembed = new Discord.RichEmbed()
            .setAuthor(`${tomuteuser.username} has been unmuted.`, tomuteuser.displayAvatarURL)
            .addField("UnMute information", `**UnMuted User:** ${tomuteuser.username}\n**Reason:** Mute time expired.`)
            .setColor(embedRed)
            message.channel.send({
              embed : muteembed
            })
          }, ms(mutetime))

          break;

        case "unmute":
            let tounmute = message.mentions.members.first();
            let tounmuteuser = message.mentions.users.first()
  
            if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("You don't have permission to do that, do you?")
            if (!tounmute) return message.reply("Now I cant unmute someone who doesn't exist, now can I?")
            if (!tounmute.roles.find("name", "muted")) return message.reply("I may be takling out of my rear here, but it doesn't appear that that user is muted.")

            let unmuteembed = new Discord.RichEmbed()
            .setAuthor(`${tounmuteuser.username} has been unmuted.`, tounmuteuser.displayAvatarURL)
            .addField("UnMute information", `**UnMuted User:** ${tounmuteuser.username}\n**Reason:** unmuted by ${message.author.username}`)
            .setColor(embedGreen)

            try {
              await(tounmute.removeRole(message.guild.roles.find("name", "muted").id));
              clearTimeout(muteTimeList[`${tounmute}`]);
              delete muteTimeList[`${tounmute}`];
              message.channel.send({
                  embed : unmuteembed
              })
            } catch (e) {
                console.log(e);
                message.reply("I may be takling out of my rear here, but it doesn't appear that that user is muted.")
            }

          break;

        case "wrd":

          console.log(bot.user.displayAvatarURL)

          let syntax = message.content.split(" ").slice(1).join(" ");

          var parsedEquation = encodeURIComponent(syntax.replaceAll("^","**"));

          if (!parsedEquation.includes("=")){
            parsedEquation = parsedEquation + "=x"
          }

          var result = null;
          var scriptUrl = `https://wrdapi--raw.repl.co/api/solveAlg?equation=${parsedEquation}`;
          var options = {
            hostname: 'wrdapi.raw.repl.co',
            path: `/api/solveAlg?equation=${parsedEquation}`,
            method: 'GET'
          }

          const req = https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)

            res.on('data', d => {
              console.log(d)
              result = d
            })
          })

          console.log(result)
          
          message.channel.send(JSON.parse(result/*.replaceAll("'", '"')*/).Response)

          new Discord.RichEmbed()
            .setAuthor(`WolframDelta`, `http://wrd.316tb.net/assets/images/icon.png`)
            .addField(`${syntax}`)
            .setColor(embedRed);
            member.send({
            embed : helpEmbed
          });
          break;

        case"update":
            function resetBot(channel) {
                // send channel a message that you're resetting bot [optional]
                message.channel.send('`Resetting...`')
                .then(msg => client.destroy())
                .then(() => client.login(token1))
                .then(bot.user.setStatus("offline"));
            }
            resetBot(message.channel);
            bot.user.setAvatar("default.jpg");
            bot.user.setStatus(status);
            bot.user.setGame(game);
            message.channel.send({embed: {
                color: embedRed,
                title: ":white_check_mark: Updated To Latest Version!",
                description: "(Version " + version + ")",
            }});
            break;
        /*case "invite":
            message.channel.send({embed: {
                    color: embedMagenta,
                    title: `Thinking of inviting someone to this server? ${bot.guilds.get(message.author).id}`,
                    description: "Send them the following link to have them join! https://discord.gg/Z386W5R",
                    }});
                    break;
        */
        case "help":
            let member = message.author;
            
            const helpEmbed = new Discord.RichEmbed()
            .setAuthor(`All Commands`, bot.user.displayAvatarURL)
            .addField("**General**", help[0])
            .addField("**Fun**", help[1])
            .setColor(embedRed);
            member.send({
            embed : helpEmbedhasPermission
            });
            message.reply("I have DM'd you the list of help commands!")
            break;

        case "purge":
            if (!bot.user.hasPermission("MANAGE_MESSAGES")) return message.reply("it appears the mods have not given me permission to do this.")
            try{
                message.channel.bulkDelete(args[1] + 1)
            } catch (e) {
                console.log(e)
                message.channel.send("Cant...Delete...")
            }
            break;
            
        case "slap":
            let slappedUser = message.mentions.users.first();
            console.log(slappedUser)
            if(message.mentions.users.size < 1) return message.reply("You forgot to name a betch to slap.");
            if(slappedUser == message.author){
                message.channel.send(slappedUser + " just slapped themself.");
            }else{
                message.reply("You just slapped da fauq out of " + slappedUser);
            }
            //if(slappedUser)
            break;

        case "invite":
            const oInviteEmbed = new Discord.RichEmbed()
            .setAuthor(`Overseer`, bot.user.displayAvatarURL)
            .addField("Thinking of inviting me to your server?","Go to https://www.316tb.net/ and click `Get Overseer`")
            .setColor(embedRed);
            message.channel.send({
                embed : oInviteEmbed
            });
            break;

        case "dm":
            let person = message.mentions.users.first();
            let msg = message.content.split(" ").slice(2).join(" ");

            if(message.mentions.users.size < 1) return message.reply("Usage: `/dm @Player#0000 I Like Ponies`");
            if(!msg) return message.reply("Usage: `/dm @Player#0000 I Like Ponies`");

            const customEmbed = new Discord.RichEmbed()
            .setAuthor(`UNKNOWN`, message.author.displayAvatarURL)
            .addField(`__And Unknown User Says:__`, `${msg}\n==========================================================\n*F.Y.I You will not be able to respond to **UNKNOWN** through this chat.* `)
            .setColor(embedOrange);
            person.send({
                embed : customEmbed
            });
            message.author.send(`I have DM'd ${person}, ${msg}`);
            message.channel.send("Deleting...")
            setTimeout( () => {
                message.channel.bulkDelete(2);
            }, 1000);
            break;

        case "punish":
            let yeet = message.mentions.users.first();
            let Punished = message.guild.roles.find(`name`, `Punished`)
            
            yeet.addRole(Punished).catch(console.error);
            break;
        case "echo":
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
            
            let message_content = message.content.split(" ").slice(1).join(" ");
            message.channel.send(message_content)
            
            break;
            
        case "spiton":
            fakequeen = message.mentions.users.first();
            fakequeen.addRole("name", "Spat On");
            break;

        case "meme":
            try {
                const subchoice = Math.floor(Math.random() * subs.length)
                let subicon = "null"
                switch (subs[subchoice]) {
                    case "okbuddyretard":
                        subicon = "https://styles.redditmedia.com/t5_74is2/styles/communityIcon_7s6ixw6m34w31.png"
                        break;
                    
                    case "Memes_Of_The_Dank":
                        subicon = "https://styles.redditmedia.com/t5_3hd4p/styles/communityIcon_dn83312v22w01.png"
                        break;

                    default:
                        return;
                }
                const { body } = await snekfetch
                    .get(`https://www.reddit.com/r/${subs[subchoice]}.json?sort=top&t=week`)
                    .query({ limit: 800 });
                const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
                if (!allowed.length) return message.channel.send("Sh*t. It seems Im fresh out of spicy memes. Idk, maybe I'll be getting another shipment soon...");
                const randomnumber = Math.floor(Math.random() * allowed.length)
                const embed = new Discord.RichEmbed()
                .setColor(embedRed)
                .setAuthor(`r/${subs[subchoice]}`, subicon)
                .setTitle(allowed[randomnumber].data.title)
                .setImage(allowed[randomnumber].data.url)
                .setFooter("Memes provided by: \nr/okbuddyretard & r/Memes_Of_The_Dank")
                message.channel.send(embed)
            } catch (err) {
                return console.log(err);
            }

            break;

        case "strange":
            try {
                const subchoice = Math.floor(Math.random() * imgsubs.length)
                let imgsubicon = "null"
                switch (imgsubs[subchoice]) {
                    case "blursedimages":
                        imgsubicon = "https://styles.redditmedia.com/t5_j34kt/styles/communityIcon_ear10u0yhrq31.png"
                        break;
                    
                    case "cursedimages":
                        imgsubicon = "https://b.thumbs.redditmedia.com/idkL6xlYE_o3eBCL0Dz7V7UjrwzYWr-qw4KfKjTLtGg.png"
                        break;

                    default:
                        return;
                }
                const { body } = await snekfetch
                    .get(`https://www.reddit.com/r/${imgsubs[subchoice]}.json?sort=top&t=week`)
                    .query({ limit: 800 });
                const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
                if (!allowed.length) return message.channel.send("Son of a - ... looks like I forgot to restock on my srange image supply :nervous:... you should ***definetly*** check in with me later to remind me or something ");
                const randomnumber = Math.floor(Math.random() * allowed.length)
                const embed = new Discord.RichEmbed()
                .setColor(embedRed)
                .setAuthor(`r/${imgsubs[subchoice]}`, imgsubicon)
                .setTitle(allowed[randomnumber].data.title)
                .setImage(allowed[randomnumber].data.url)
                .setFooter("Images provided by: \nr/cursedimages & r/blursedimages")
                message.channel.send(embed)
            } catch (err) {
                return console.log(err);
            }

            break;

        case "cringe":
            try {
                const subchoice = Math.floor(Math.random() * crngsubs.length)
                let crngsubicon = "null"
                switch (crngsubs[subchoice]) {
                    case "MakeMeSuffer":
                        crngsubicon = "https://styles.redditmedia.com/t5_mf29x/styles/communityIcon_zzp1yfj234841.png"
                        break;
                    
                    case "Cringetopoia":
                        crngsubicon = "https://styles.redditmedia.com/t5_ovfhp/styles/communityIcon_p8mos2ouyr221.png"
                        break;

                    default:
                        return;
                }
                const { body } = await snekfetch
                    .get(`https://www.reddit.com/r/${crngsubs[subchoice]}.json?sort=top&t=week`)
                    .query({ limit: 800 });
                const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
                if (!allowed.length) return message.channel.send('**Epic Bruh Moment.** Huh, somehow I managed to run out of cringe material. I mean, if you still *really* want some you could go check out r/furry yourself!');
                const randomnumber = Math.floor(Math.random() * allowed.length)
                const embed = new Discord.RichEmbed()
                .setColor(embedRed)
                .setAuthor(`r/${crngsubs[subchoice]}`, crngsubicon)
                .setTitle(allowed[randomnumber].data.title)
                .setImage(allowed[randomnumber].data.url)
                .setFooter("Images provided by: \nr/MakeMeSuffer & r/Cringetopoia")
                message.channel.send(embed)
            } catch (err) {
                return console.log(err);
            }

            break;

        case "pembed":
            message.channel.send("NULL")
            message.channel.bulkDelete(2);

            let pUser = message.mentions.users.first();
            let pHeading = message.content.split(" ").slice(2).join(" ").split("!@");
            let pBody = message.content.split("!@").slice(1).join(" ");

              pUser.send({
                  embed: {
                      author: {
                          name: message.author.username,
                          icon_url: message.author.avatarURL
                      },
                      color: embedRed,
                      title: `${pHeading[0]}`,
                      description: `${pBody}`,
                  }
              });
              message.channel.send({
                embed: {
                    author: {
                        name: message.author.username,
                        icon_url: message.author.avatarURL
                    },
                    color: embedRed,
                    title: `✅ Completed`,
                    description: `${message.author.username}, I have sent ${pUser.username} a private embed.`,
                }
            });
            
            break;
        case "embed":
              message.channel.send("NULL")
              message.channel.bulkDelete(2);

              let heading = message.content.split(" ").slice(1).join(" ").split("!@");
              let body = message.content.split("!@").slice(1).join(" ");

                message.channel.send({
                    embed: {
                        author: {
                            name: message.author.username,
                            icon_url: message.author.avatarURL
                        },
                        color: embedRed,
                        title: `${heading[0]}`,
                        description: `${body}`,
                    }
                });
              break;
        case "vote":

                let vTitle = message.content.split(" ").slice(1).join(" ");
                let vDescription = message.content.split("!@").slice(1).join(" ");
                let vTitle2 = vTitle;

                if (vTitle == '' || vTitle == [ '' ]){
                    message.reply("Correct Syntax:\n`/vote <VoteTitle>!@[VoteDescription]`");
                    break;
                }
                if (vDescription == [ '' ]){
                    vDescription = '';
                }
                else{vTitle2 = vTitle.split("!@").slice(0,1).join(" ");}
                
                message.channel.send({
                    embed: {
                        author: {
                            name: `${message.author.username} Has called a vote`,
                            icon_url: message.author.avatarURL
                        },
                        color: embedPurple,
                        title: `${vTitle2}`,
                        description: `${vDescription}`,
                    }
                }).then(function (message) {
                    message.react("👎");
                    message.react("👍");
                  }).catch( async () => {
                    //Something
                   });
            break;
        case "warn":
              message.channel.send("NULL")
              message.channel.bulkDelete(2);

              let embedUser = message.mentions.users.first();
              let heading1 = message.content.split(" ").slice(2).join(" ").split(" ").slice(1).join(" ").split("!@");
              let body1 = message.content.split("!@").slice(1).join(" ");

              if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("It appears you don't have permission to do this.")
              if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return message.reply("It appears I don't have permission to do this.")
    
            
              if (heading1 == [ '' ]){
                  message.reply("Correct Syntax:\n`/warn @User#1234 (Reason)!@[Extra]`");
                  break;
              }
              if (body1 == [ '' ]){
                  body1 = [ '' ];   
              }
                embedUser.send({
                    embed: {
                        author: {
                            name: message.author.username,
                            icon_url: message.author.avatarURL
                        },
                        color: embedRed,
                        title: `${heading1[0]}`,
                        description: `${body1}`,
                    }
                });
                message.channel.send({
                    embed: {
                        author: {
                            name: message.author.username,
                            icon_url: message.author.avatarURL
                        },
                        color: embedGreen,
                        title: `${message.author.username} issued a warning`,
                        description: `${embedUser} has been warned by ${message.author.username}!`,
                    }
                }).then(function (message) {
                    message.react("✅")
                  }).catch( async () => {
                    //Something
                   });
              break; 
  
        case "report":
                var owner = message.guild.owner;
                var rUser = message.mentions.users.first();
                var reasonz = message.content.split(" ").slice(2).join(" ");
                
                if (!rUser) {msg.reply("You forgot to mention a person to report!")}
                if (!reasonz) {reasonz = "Unknown"}

                owner.send({
                    embed: {
                        author: {
                            name: rUser.username,
                            icon_url: rUser.avatarURL
                        },
                        color: embedRed,
                        title: "Reported User",
                        description: (`Hello ${owner.username}, ${message.author} has reported ${rUser.username} for the following reason: ${reasonz}`)
                    }
                });
                message.channel.send({
                    embed: {
                        author: {
                            name: message.author.username,
                            icon_url: message.author.avatarURL
                        },
                        color: embedRed,
                        title: `:white_check_mark: Reported ${rUser.username}`,
                        description: (`I have reported ${rUser} to ${owner}`)
                    }
                });
                break;
                
        default:
            message.channel.send("You Appear to have typed an invalid command!");
            break;
    }
});

bot.login(token1);
