// Require discord.js package and prefix/token from config file
import { Client } from "discord.js";
import { prefix, token } from './config.json';

// Create a new client using the new keyword
const client = new Client();

// Display a message when the bot comes online
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Check for new messages
client.on('message', msg => {
    // Check if the command starts with the correct prefix
    if(msg.content.startsWith(prefix) !== true)  return;
    
    // Reply with a "Hello World message to the user that sent the msg"
    msg.channel.send(`Hello there, ${msg.author}, you are my world!`);
});

// Login to the bot using your token
client.login(token);

