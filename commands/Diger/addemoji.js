module.exports = ({
  name: "addemoji",
  aliases: "ad",
  code: `
 Emoji $addEmoji[https://cdn.discordapp.com/emojis/$replaceText[$replaceText[$checkCondition[$checkContains[$message[1];<]$checkContains[$message[1];:]$checkContains[$message[1];>]==truetruetrue]$isNumber[$message[1]];truefalse;$replaceText[$advancedTextSplit[$message[1];:;3];>;]];falsetrue;$message[1]];$message[2];yes] Emoji -> **$message[2]** adı ile eklendi 
 $onlyIf[$charCount[$message[2]]>=2;⛔ **\`2 karakterden\`** daha uzun bir ad koymalısınız
 $onlyIf[$message[2]!=;**Kullanım**: \`addemoji <emoji | emojiID> <name>\`]
$onlyPerms[manageemojis;**Bu komutu kullanma izniniz yok**]
$onlyBotPerms[manageemojis;**Bu komutu kullanma iznim yok**]
$suppressErrors`
})