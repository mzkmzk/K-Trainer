var spawn = require('child_process').spawn,
    _execute = require('./Execute')
    Shell = function( option ){
        this.start_shell( option );
    }

Shell.prototype.start_shell = function(option){
    var child,
        option_shell = option.shell || {}
    if ( !(option_shell instanceof Array ) ) option_shell = [ option_shell ];

    option_shell.forEach(function(element){
        //console.log("shell : ",element.options.cwd);
        //console.log("shell start "+element.command +" "+( element.args instanceof Array ?  ))
        _execute.set_execute(option,function(){
            child = spawn(element.command, element.args, element.options);
        
            //监听子进程输出数据
             child.stdout.on('data', function(data){
                console.log("listener on data, cwd is " + ( element.options && (element.options.cwd || '') ),
                             " command is  " + element.command,
                             " args is ",
                             element.args
                            )
                console.log(data.toString()+"\n")
            })

            //监听子进程结束
            child.on('exit', function(code){
                console.log("listener on exit, cwd is " + ( element.options && (element.options.cwd || '') ),
                             " command is  " + element.command,
                             " args is ",
                             element.args,
                             "exit code is "+code +"\n"
                            )

            })
        },null,[] );
         


    });

}

module.exports = Shell;