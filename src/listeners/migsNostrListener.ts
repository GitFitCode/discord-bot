import { Client } from 'discord.js';
import { relayInit, validateEvent, verifySignature } from 'nostr-tools';
import WebSocket from 'ws';
import { useWebSocketImplementation } from 'nostr-tools/relay';


useWebSocketImplementation(WebSocket);

export default async (client: Client): Promise<void> => {
  const relay: any = relayInit('wss://notes.miguelalmodo.com');
  
  relay.on('connect', async () => {
    console.log('WEPA! Conectado.')
  });

  relay.on('error', async (err: any) => {
    console.log('oop, no se pudo conectar al relé', err)
  });
  
  relay.on('event', async (event: any) => {
    // Lets validate the event and signatures
    if (validateEvent(event) && verifySignature(event)) {
      // Lets get our channel that we want to send the message to
      const channel: any = client.channels.cache.get('');

      if (channel?.isText()) {
        // Lets send the message to the channel
        channel.send(`From Migs Nostr: ${event.data}`);
      }
    }
  });

  try {
    await relay.connect();
  } catch (err) {
    console.error('oop, no se pudo conectar al relé', err);
  }
}


