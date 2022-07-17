module.exports = ({
 name: "kick",
 code: `
$kick[$mentioned[1]]
$description[🔞 **$username[$mentioned[1]]** Sunucudan Attı!

**📖Sebeb-** $nomentionMessage]
$color[RANDOM]
$sendDM[$mentioned[1];$serverName[$guildID]] Sunucusundan Atıldın!
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Bu kullanıcı rol pozisyonunda benden daha yüksek veya benimle aynı]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Bu kullanıcı rol pozisyonunda sizden daha yüksek.]
$onlyIf[$mentioned[1]!=$authorID;kendini vuramazsın :3]
$onlyIf[$mentioned[1]!=;Birinden bahsetmelisin.]
$onlyPerms[kick;{title:Missing Permissions}{color:RANDOM}{description:Bu komutu kullanmak için \`kick\` izniniz yok}]
$suppressErrors[HATA! Daha Sonra Tekrar Deneyin.]`
 })