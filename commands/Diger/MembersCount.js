module.exports = ({
    name: "üyeler",
    aliases: ['memberscount','memcount'],
    code: `$color[RANDOM]
    $author[$serverName;$serverIcon]
    $description[**$membersCount** Kişi Var!]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})