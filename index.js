const Discord = require("discord.js");

const TOKEN = "NDM1MTE0NjY4NzE4MDMwODU4.DbUPow.iXZ4hYI-0yKye8t4Lpw2iWtCE3E";
const PREFIX = "+";
const StartupPrefix = "| SjokoBot | "

var fortunes = [
    "https://absurdintellectual.com/wp-content/uploads/2017/02/maxresdefault1.jpg",
    "https://i.pinimg.com/originals/45/c9/ff/45c9ff2506f0e1950d0185c69f6e541e.jpg",
    "http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-collection.jpg",
    "http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-meme-pics.jpg",
    "http://quotesnhumor.com/wp-content/uploads/2015/08/Top-50-Funniest-Memes-Collection-memes-famous.jpg",
];

var rates = [
    "4%",
    "14%",
    "26%",
    "32%",
    "41%",
    "58%",
    "69%",
    "72%",
    "84%",
    "92%",
    "100%",
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log(StartupPrefix + "Restarter SjokoBot 1.0..");
    console.log(StartupPrefix + "SjokoBot 1.0 restartet!");
    bot.user.setActivity("ikke noe spess egentlig", {type: "PLAYING"});
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {

        case "hjelp":
        var hjelp = [
            "Mine kommandoer er:",
            "**▬▬▬▬▬**",
            "**+hjelp** - Viser dette.",
            "**+meme** - Morsomme memes.",
            "**+info** - Informasjon om botten.",
            "**+rate** - Rate en ting."
        ]
        message.channel.send("Hei " + message.author.toString() + "! Mitt navn er **SjokoBot 1.0**")
        message.channel.send(hjelp);
        break;

        case "test":
        var test = new Discord.RichEmbed()
        .addField("Kommandoer", "Her er alle kommandoene til SjokoBot", true)
        .addField(":bell: Informasjons kommandoer", "+hjelp, +info", true)
        .addField(":smile: Morsomme kommandoer", "+meme, +rate & mer!", true)
        .setColor(0x00FFFF)
        message.channel.send(test);
        break;

        case "botinfo":
        var botembed = new Discord.RichEmbed()
        .setDescription("Bot informasjon")
        .setColor("0x00FFFF")
        .setThumbnail(bot.user.avatarURL)
        .addField("Bot navn", bot.user.username)
        .addField("Utviklet av", "Nexianz")
        .addField("Laget", bot.user.createdAt);

        message.channel.send(botembed);
        break;

        case "serverinfo":
        var serverembed = new Discord.RichEmbed()
        .setDescription("Server informasjon")
        .setColor("0x00FFFF")
        .setThumbnail(bot.user.avatarURL)
        .addField("Server navn", message.guild.name)
        .addField("Laget", message.guild.createdAt)
        .addField("Du joinet", message.member.joinedAt)
        .addField("Totalt medlemmer", message.guild.memberCount);

        message.channel.send(serverembed);
        break;
            
                case "report":
        var rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Kunne ikke finne spilleren!");
        var reason = args.join(" ").slice(22);
        
        var reportmsg = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("0x00FFFF")
        .addField("Du rapporterte", rUser.get + "med ID" + rUser.id)
        .addField("Grunn", reason);
        var reportembed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("0x00FFFF")
        .addField("Rapportert", rUser.get + "med ID" + rUser.id)
        .addField("Rapportert av", message.author + "med ID:" + message.author.id)
        .addField("Kanal", message.channel)
        .addField("Tid", message.createdAt)
        .addField("Grunn", reason);

        var reportchannel = messgae.guild.channels.find("name", "rapporter");
        if (!reportchannel) return message.channel.send("Kunne ikke finne rapport kanal");

        message.delete.catch(O_o=>{});
        reportchannel.send(reportembed);
        message.channel.send(reportmsg);
        break;

        case "meme":
        if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.send("Det er en feil i koden, kontakt **Nexianz#8554**");
        break;

        case "rate":
        if (args[1]) message.channel.send("Jeg rater " + args[1] + " - " + "**" + (rates[Math.floor(Math.random() * rates.length)] + "**"));
        else message.channel.send("**Feil bruk!** *+rate (Ting)*");
        break;

        default:
        message.channel.send("*Feil kommando*, bruk **+hjelp**");
    }
});

bot.login(process.env.TOKEN);
