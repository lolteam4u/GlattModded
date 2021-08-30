var errorThrown = false;
try {
    const gitPullOrClone = require('git-pull-or-clone')

    if (process.cwd() == "/root/DiscordBotMaker/GlattModded"){
        gitPullOrClone('https://github.com/lolteam4u/GlattModded', "../GlattModded", (err) => {
            if (err) throw err
            console.log('SUCCESS!')
        })

        try {
            const { exec } = require("child_process");
            exec("node ../GlattModded/bot.js", (error, data, getter) => {
                if(error){
                    console.log("error",error.message);
                    return;
                }
                if(getter){
                    console.log("data",data);
                    return;
                }
                console.log("data",data);
            });
        } catch (error) {
            console.log("Error: bot.js not found")
        }
    } else {

        console.log("Error: Wrong folder")
        console.log('Current directory: ' + process.cwd());
    }
}
catch (e) {
    errorThrown = true
  console.log("Error: git-pull-or-clone not installed");
}