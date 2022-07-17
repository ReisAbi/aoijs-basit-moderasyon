module.exports = ({
name:"clear",
code:`$author[Mesajlar Sİlindi!]
$title[$usertag]
$description[<@$authorid>, başarıyla temizledim $replacetext[$replacetext[$checkcondition[$splittext[1]==$message];true;all($message/$message)];false;$splittext[1]/$message] messages!]
$footer[Beni kullandığın için teşekkürler!;$authoravatar]
$thumbnail[$useravatar[$clientid]]
$color[GREEN]
$textsplit[$clear[$message;everyone;$channelid;yes]; ]
$onlybotperms[managemessages;Mesajları yönetme iznim yok!]
$onlyperms[managemessages;Mesajları yönetme izniniz yok!]
$onlyif[$isnumber[$message]==true;Temizlemek için geçerli bir mesaj sayısı girin!]
$deleteIn[3s]
$deletecommand`
})