var errorThrown = false;
try {
    const gitPullOrClone = require('git-pull-or-clone')

    if (process.cwd() == "/root/DiscordBotMaker/GithubRepo's/GlattModded"){
        gitPullOrClone('https://github.com/lolteam4u/GlattModded.git', "../GlattModded", (err) => {
            if (err) throw err
            console.log('SUCCESS!')
			console.log('Loaded Bot!')
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
				console.log('Loaded Bot!')
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