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

        case "info":
        var info = [
            "**SjokoBot 1.0**",
            "Programert og laget av **Nexianz#8554**",
            "Versjon: 1.0test3"
        ]
        message.channel.send(info);
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
