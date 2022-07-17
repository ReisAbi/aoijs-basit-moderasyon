module.exports = ({
  name: "tempmute",
  code: `
$channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] kaldırıldı}
{field:Reason:Tempmute finished}{color:GREEN}]
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$wait[$message[2]]
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
 $channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] Susturuldu, =  \`$message[2]\`}
{field:Reason:$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;$customEmoji[fail] hiçbir sebep verilmedi];false;$messageSlice[2]]}{color:GREEN}]
 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];Bu kullanıcının rolü benimle eşit veya benden yüksek]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:Bu kullanıcı sizinle eşit veya daha yüksek bir role sahip}{color:RED}]
 
$onlyIf[$checkContains[$message[2];h;m;s]==true;{description:Geçerli bir zaman koyun (h,m,s)}{color:RED}]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$onlyIf[$message[2]!=;{title:Error}{field:**Kullanım**:\`sustur <kullanıcı| userID> <zaman>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute Rol, Ayarlanmamış, Lütfen Şu Komutu Girin: \`$getServerVar[prefix]set-mute \` yazın. }{color:RED}]
$onlyPerms[mutemembers;Yetkin Yok, Gereken Yetki:\`mutemembers\`]
$onlyBotPerms[mutemembers;Yetkin Yok, Gereken Yetki:\`mutemembers\`]
$suppressErrors`
})