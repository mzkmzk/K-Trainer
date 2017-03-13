var exec = require('child_process').exec,
    spawn = require('child_process').spawn,
    queue = require('queue'),
    colors = require('colors'),
    moment = require('moment'),
    _execute = require('./Execute'),
    q = new queue({
            concurrency:  1
        }),
    promise = Promise.resolve(), //new Promise(function(resolve, reject){
        //resolve()
    //}),//= new Promise(fun),
    Shell = function( option ){
        this.start_shell(option)
    }

function console_tips(type, element, result){
    var cmd_text = [    
                        element.options && (element.options.cwd || '') ,
                        element.command,
                        element.args && element.args.join(' ')
                   ].join(' ')
    console.log(moment().format('YY-MM-DD H:mm:ss')+":",type.cyan, cmd_text, result || '')
      
}

Shell.prototype.start_shell = function(option){
    var option_shell = option.shell || {},
        _self = this
    if ( !(option_shell instanceof Array ) ) option_shell = [ option_shell ];

    option_shell.forEach(function(element){
        
        _execute.set_execute(option,function(){
            
            if ( element.args instanceof Array ) { 
                _self.spawn(element)
            }else {
                _self.exec(element)
            }

        },null,[] );
         
    });
    q.start()

}

Shell.prototype.spawn = function(element){
    q.push(function(cb){

        console_tips('start spawn',element)
        var child = spawn(element.command, element.args, element.options);

        //监听子进程输出数据
        child.stdout.on('data', function(data){
                console_tips('data', element, "\n"+ data.toString().trim().green)
        })
        
        //监听错误
        child.stderr.on('data', (data) => {
            console_tips('stderr', "\n"+element, data.toString().trim().red)
        });

        //监听子进程结束 包含了error的情况
        child.on('exit', function(code){
            console_tips('exit', element, code.toString().green)
            cb()
        })
        
    })
        
    //})
    
}


Shell.prototype.exec = function(element){
    q.push(function(cb){
    
        console_tips('start',element)
        var child = exec(element.command, element.options,  (error, stdout, stderr) => {
                        if (error) {
                            console_tips('error', element, "\n"+error.toString().trim().red)
                            return
                        }

                        if(stderr) {
                            console_tips('stderr', element, "\n"+stderr.toString().trim().red)
                        }
                        
                        if (stdout) {
                            console_tips('data', element, "\n"+stdout.toString().trim().green)
                        }
                        
                        console_tips('exit', element)
                        cb()
                     })
        
    })
    
}

module.exports = Shell;