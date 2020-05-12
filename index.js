const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

global.validateCommand = require("./modules/validateCommand");
global.loadCommands = require("./modules/loadCommands");
global.config = JSON.parse(fs.readFileSync("./config.json"));
global.mainDir = __dirname;
global.fs = fs;

global.requireUncached = function(module) {
    delete require.cache[require.resolve(module)];
    return require(module);
}

client.on("ready",()=>{
    loadCommands((result)=>{
        console.log(result);
        console.log("Bot Framework has successfully initialized and connected to Discord's Services.");
    });
});

client.on("message",(message)=>{
    // Command Handler
    validateCommand(message);
});

client.login(config.token);