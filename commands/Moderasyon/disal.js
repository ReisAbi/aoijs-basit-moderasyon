module.exports = ({
 name: "disable-anti-link",
 aliases: ['disableal'],
 code: `$description[❌ Anti Koruma Devre Dışı Bırakıldı! **]
 $color[RED]
$setServerVar[antilink;false]
$onlyIf[$getServerVar[antilink]!=false;{description: **Anti bağlantı etkin değil**}{color:RED}]
$onlyPerms[manageserver;Bu komutu kullanmak için \`MANAGE_SERVER\` iznine ihtiyacınız var]`
})