module.exports = ({
 name: "unban",
 code: `$unban[$message[1];$userTag[$authorID] Sebeb: $sliceMessage[1]]
$username[$message[1]] **Kişinin Banı Açıldı ✅**
$onlyBotPerms[ban;**⛔  Yetkim Eksik, Bir Kontrol Et!]
$argsCheck[>1;**⛔ Bİr Kullanıcı İD Girin.**]
$onlyPerms[ban;**⛔ Ban Yetki Yok!**]
$suppressErrors[**⛔ o kullanıcıyı bulamıyorum**]`
})