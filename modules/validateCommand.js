module.exports = function(message){
        global.commandList.forEach(function (info){ // grab command list, this has all data
            if (message.content.startsWith(global.config.prefix+info["Command"])){ // check for correct syntaxing
                var args = message.split(" "); // split by spaces into array
                args.shift(); // remove first arg AKA the command name
                info["Function"](message, args); // send data with arguments
            }
        });
}