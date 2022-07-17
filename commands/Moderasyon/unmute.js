module.exports = ({
  name: "unmute",
  code: `
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[Rol Alındı!]
$description[$username[$findMember[$message[1]]] kişisi, mutesi kaldırıldı]
$color[GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];Bu kullanıcının rolü benimle eşit veya benden yüksek]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:Bu kullanıcı sizinle eşit veya daha yüksek bir role sahip}{color:RED}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:kendi sesini açamazsın}{color:RED}]
$onlyIf[$message[1]!=;{title:Hata}{field:**Kullanım**:\`unmute <kişi | userID>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute Rol, Ayarlanmamış, Lütfen Şu Komutu Girin: \`$getServerVar[prefix]set-mute \` yazın.}{color:RED}]
$onlyPerms[mutemembers;Eksik İzin:\`mutemembers\`]
$onlyBotPerms[mutemembers;Eksik:\`mutemembers\`]
$suppressErrors`
})