const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

global.validateCommand = require("./modules/validateCommand");
global.loadCommands = require("./modules/loadCommands");
global.config = JSON.parse(fs.readFileSync("./config.json"))

client.on("ready",()=>{
    loadCommands();
    console.log("Bot Framework has successfully initialized and connected to Discord's Services.");
});

client.on("message",(message)=>{
    // Command Handler
    validateCommand(message);
});















































client.login("NzA0NTI0MzEyOTA3ODc0MzE0.XroFHw.caNGIEHQ5BepVgACvB-s0MACibA");