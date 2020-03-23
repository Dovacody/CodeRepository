// Require discord.js package
import { Client } from "discord.js";
import {prefix, token} from "./config.json";

// Create a new client using the new keyword
const client = new Client();

// Display a message once the bot has started
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});


// Log in the bot with the token
client.login(config.token);