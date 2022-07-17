module.exports = ({
    name: "avatar",
    aliases: ['pp'],
    code: `$color[RANDOM]
    $author[$userTag;$authorAvatar]
    $description[<@$findMember[$message]> Kişisinin Avatarı!]
    $image[$userAvatar[$findMember[$message]]]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})