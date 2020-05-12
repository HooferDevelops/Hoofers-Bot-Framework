module.exports = function(callback){
    // load folder contents
    var loaded = 0;
    var commands = ""
    global.commandList = [];
    global.fs.readdir(global.mainDir + "/commands", function(err, files){
        if (err) {
            console.log("Command Root could not be found? | " + global.mainDir + "/commands");
            return;
        }
        // go through each file
        files.forEach(function (file,index){
            var info = global.requireUncached(global.mainDir + "/commands" + "/" + file); // load module
            if (info && info["Command"] && info["Description"] && info["Function"]){ // validate Module
                loaded++; // add to list
                commandList.push(info); // add to predefined list
                commands+= "Name: " + info["Command"] + " | "
            } else {
                console.log("A command failed to load? Make sure all defaults are defined. | " + file); // didn't do all config for the module
            }
        });
        callback("Loaded " + loaded + " commands. | " + commands); // return with callback | success!
    });
}