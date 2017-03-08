var exec = require('child_process').exec,
    Git = function( option ){
        var option_shell = option.shell || {},
            child = spawn(option_shell.command, option_shell.args, option_shell.options);
        child.stdout.on('data', function(data){
            console.log("listener on data, cwd is " + ( option_shell.options && (option_shell.options.cwd || '') ),
                         " command is  " + option_shell.command,
                         " args is ",
                         option_shell.args
                        )
            console.log(data.toString())
        })
    }

Git.prototype.push = function( options ){
    var options = {
        
    }
    exec(' git add . && git commit -m "fix" && git push ',)
}

module.exports = Git;