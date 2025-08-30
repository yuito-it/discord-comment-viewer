const { Client, GatewayIntentBits } = require("discord.js");

// Botのトークンをここに
const TOKEN = "";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log("Ready");
});

client.on("messageCreate", (message) => {
  // Bot自身のメッセージは無視するよ
  if (message.author.bot) return;
  if (message.channelId !== "1224530438282936400") return; // 特定のチャンネルだけ監視したい場合

  console.log(`new message: ${message.content}`);
  fetch(`http://localhost:4000/api/1/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: message.content }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Posted to API:", data);
    })
    .catch((err) => {
      console.error("Error posting to API:", err);
    });
});

client.login(TOKEN);
