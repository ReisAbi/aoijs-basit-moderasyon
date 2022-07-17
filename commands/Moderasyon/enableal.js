module.exports = ({
 name: "enable-anti-link",
 aliases: ['enableal'],
 code: `$description[**✔️ Bu Sunucuda Anti Link Aktifleştirildi.**]
 $color[RANDOM]
$setServerVar[antilink;true]
$onlyIf[$getServerVar[antilink]!=true;{description: **Anti Link Koruması Zatena Aktif ❓**}{color:RANDOM}]
$onlyPerms[manageserver;Bu komutu kullanmak için \`MANAGE_SERVER\` iznine ihtiyacınız var]`
})