module.exports = {
    "Command": "example", // command name / usage | h!example
    "Description": "This is an example command. Say hi!", // command description for command info if used
    "Function": function(message, args){ // function, main handler for commands
        message.channel.send("i am an example command, hello!");
    }
}