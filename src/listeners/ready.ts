/**
 * "ready" event listener for the bot.
 */

import { ActivityType, Client } from 'discord.js';
import { AUTOBOT, DailyReminderAtEmpiric, GITFITBOT } from '../utils';
import { registerCommands } from '../Commands';

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return;
    }

    // Set status (i.e. activity) of the "GitFitBot" bot.
    if (client.user.username.toLowerCase() === GITFITBOT) {
      client.user.setActivity('"Do Androids Dream of ⚡🐑?" audio book', {
        type: ActivityType.Listening,
      });
    }

    // Set status (i.e. activity) of the "autobot" bot.
    if (client.user.username.toLowerCase() === AUTOBOT) {
      client.user.setActivity('the world slowly 🔥 itself', { type: ActivityType.Watching });
    }

    // Register slash commands with the client.
    registerCommands(client);

    console.log(`${client.user.username} is online`);
  });
};
