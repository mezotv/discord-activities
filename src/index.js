const { Client, GatewayIntentBits } = require('discord.js');

/* Initialize client */
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
    ],
});

const activitieComponents = async () => {
  await require('./util/activityClient.js')(client);
}

activitieComponents();