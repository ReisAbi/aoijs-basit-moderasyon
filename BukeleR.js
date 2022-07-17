const BukeleR = require("aoi.js");
const bot = new BukeleR.Bot({
  token: process.env.TOKEN,
  prefix: "!",
  fetchInvites: true //Elleme
});  
 bot.onMessage(), 

bot.onJoined(),
bot.onLeave(),
bot.loadCommands('./commands/'),

bot.status({
  text: `LightCodes | Moderasyon BOtu`,
  type: "COMPETING", 
  status: "idle", 
  time: 10
});



bot.joinCommand({ 
        channel: "993785726393143316",      //GELEN-GİDEN LOG KANAL İDSİ  
        code: `
        <@$authorID> $randomText[Yeni Bir Kuş İndi :);Aramıza Yeni Katılanlar Var!;Sen Neredeydin?;Gözlerim Yollarda Kaldı!!;İyiki Geldin Canım] $customEmoji[944946246546751488]
        $title[ Hoşgeldin!]
        $description[$customEmoji[megaafon] **Merhaba <@$authorID>!, $serverName'e hoş geldiniz! Lütfen <#991274697956266124> içindeki $customEmoji[adalet] Kuralları okuyun ve Keyfini Çıkarın**]
        $color[GREEN]`
})

bot.leaveCommand({ 
        channel: "993785726393143316",    //GELEN-GİDEN LOG KANAL İDSİ
        code: `
        $title[Güle Güle!]
$description[ $customEmoji[megaafon] **Güle güle $username, umarım LightCodes'i Sevmişsindir!**]
$color[GREEN]

`
})



bot.variables({
  antilink: "false",
  muted: "",
});

bot.loadCommands("./commands/");
