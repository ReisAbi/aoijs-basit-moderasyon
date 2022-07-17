module.exports = ({
 name:"ban",
 code: `$deletecommand
$color[RANDOM] 
$author[🛠️ Başarıyla yasaklandı]
$addField[Hakkında:;
Sebeb:
> $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Bir sebep sunulmadı.];false;$messageSlice[1]]
Tarih:> $day $month $year
]
$addField[Kullanıcı Bilgileri;
$userTag[$findUser[$message[1]]] - $findUser[$message[1]]]
$addField[Moderator;
$userTag - $authorID]
$thumbnail[$userAvatar[$findUser[$message[1]]]]
$ban[$findUser[$message[1]];$userTag: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Bir sebep sunulmadı.];false;$messageSlice[1]];7]
$if[$memberExists[$findUser[$message[1]]]==true]
$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];⛔ - Bunu kullanmak için belirtilen kullanıcıdan daha yüksek bir rütbeye sahip olmanız gerekir.]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - Kendini banlayamazsın (Yoksa ben o kullanıcıyı bulamadım)**]
$onlyIf[$findUser[$message[1]]!=$clientID;**⛔ - Kendimi yasaklayamam, bu yasa dışı**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**⛔ - sunucunun sahibini banlayamam**]
$elseIf[$memberExists[$findUser[$message[1]]]==false]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - Kendini banlayamazsın (Yoksa ben o kullanıcıyı bulamadım)**]
$endelseIf
$endif
$onlyIf[$isBanned[$findUser[$message[1]]]==false;**⛔ - Bu kullanıcı bu sunucuda zaten yasaklanmış**]
$onlyIf[$message!=;**⛔ - Lütfen yasaklamak istediğiniz kullanıcıyı belirtin. Doğru kullanım:** \`$getServerVar[prefix]ban <@User> [Nedeni\\]\`]
$onlyPerms[ban;**⛔ - Bunu kullanmak için \`BAN_MEMBERS\` iznine**] ihtiyacınız var.
 $onlyBotPerms[ban;**⛔ - Bu komutu yürütmek için yeterli iznim yok. Eksik izinler:** \`BAN_MEMBERS\`]`
})