module.exports = {
    "Command": "reload",
    "Description": "This reloads the bot.",
    "Function": function(message, args){
        global.loadCommands(()=>{
            message.channel.send("Reloaded all commands!")
        })
    }
}