try {
    const gitPullOrClone = require('git-pull-or-clone')

    if (process.cwd() == "/root/DiscordBotMaker/GithubRepo's/GlattModded"){
        gitPullOrClone('https://github.com/lolteam4u/GlattModded', "../GlattModded", (err) => {
            if (err) throw err
            console.log('SUCCESS!')
        })

    } else {

        console.log("Error: Wrong folder")
        console.log('Current directory: ' + process.cwd());
    }
}
catch (e) {
  console.log("Error: git-pull-or-clone not installed");
}