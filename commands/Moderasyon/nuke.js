module.exports = ({
 name: "nuke",
 code: `
 $djsEval[
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(d.message.channel.position)
 c.send(d.message.author.tag + ' Bu Kanal Bombalandı!! https://tenor.com/bko4E.gif')

 })
 .catch(() => d.message.channel.send('yeterli iznim yok'))
]
$onlyPerms[managechannels;{title:Eksik izinler!} {description:Bu komutu çalıştırmak için gerekli olan \`MANAGE_CHANNELS\` izniniz yok} {color:RANDOM}]
$deleteIn[3s]`
});