import { GuildScheduledEventStatus } from 'discord.js';

export type Attendee = { discordID: string; retroDone: boolean };
export type GFCEvent = {
  _id: string;
  name: string;
  description: string;
  id_discord: string;
  url_discord: string;
  id_gcal: string;
  url_gcal: string;
  status: GuildScheduledEventStatus;
  starts_at: number;
  ends_at: number;
};

export type GCalEventDetails = { eventID: string; eventLink: string };
