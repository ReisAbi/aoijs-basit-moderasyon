module.exports = ({
name: "giverole",
code: `$color[GREEN]
$giveRoles[$mentioned[1];$mentionedRoles[1]]
$title[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]] Verilen Rol.
$description[**$username** <@&$mentionedRoles[1]> **rolünü** $username[$mentioned[1;yes]]]'e verdi
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ Bu kullanıcı rol pozisyonunda benden daha yüksek**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ Bu kullanıcı rol pozisyonunda sizden daha yüksek/eşit**]
$onlyIf[$mentionedRoles[1]!=;⛔ **Bir rolden bahsedin**]
$onlyIf[$mentioned[1]!=;**⛔ Birinden bahsetmelisin**]
$onlyBotPerms[manageroles;⛔ **Benim** \`MANAGAGE_ROLES\` iznim yok]
$onlyPerms[manageroles;⛔ **** \`MANAGAGE_ROLES\` izniniz yok]`
})