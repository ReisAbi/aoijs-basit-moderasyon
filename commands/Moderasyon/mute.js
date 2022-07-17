module.exports = ({
  name: "mute",
  code: `
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[MUTE VERİLDİ!]
$description[$username[$findMember[$message[1]]] Muteledi.]
$addField[Sebeb;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;❌ Hiçbir sebep belirtilmedi];false;$messageSlice[1]]]
$color[GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];Bu kullanıcının rolü benimle eşit veya benden yüksek]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:Bu kullanıcı sizinle eşit veya daha yüksek bir role sahip}{color:RED}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:kendini susturamazsın}{color:RED}]
$onlyIf[$message[1]!=;{title:Hata}{field:**Kullanım**:\`mute <kişi | userID>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute  rolünü sessize alma yapılandırılmamış, ayarlamak için \`$getServerVar[prefix]setmute\` yazın}{color:RED}]
$onlyPerms[mutemembers;Eksik izin:\`mutemembers\`]
$onlyBotPerms[mutemembers;Eksik izin:\`mutemembers\`]
$suppressErrors`
})