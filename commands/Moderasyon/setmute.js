module.exports = ({
  name: "setmute",
  aliases: ["setmuterole"],
  code: `
  $color[GREEN]
 $title[Ayarlandı]
$description[Mute Rolü, <@&$findRole[$message[1]]> olarak ayarlandı..]
$setServerVar[muted;$findRole[$message[1]]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;{description:Bu rol mevcut değil}{color:RED}]
$onlyIf[$message[1]!=;{title:Error:Çok az argüman verildi}
{field:**Kullanım**:\`mute-rol <Rol| rolID>\`}{color:RED}]
$onlyPerms[admin;Yetkiniz Yok, Gereken Yetki:\`admin\`]
$onlyBotPerms[admin;Yetkiniz Yok, Gereken Yetki:\`admin\`]
$suppressErrors` 
})