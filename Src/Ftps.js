require('json-comments')

var path = require('path'),
    fs = require('fs'),
    gaze = require('gaze'),
    FTPS = require('ftps')
    /**
     * options = {  }
     */
    Ftps = function( options ){
        var sftp_config = this.get_sftp_config( options.path ),
            ftps
        if ( !sftp_config ) {
            console.error('options: ', options)
            throw new Error(options + 'sftp_config is not exists')
        }
        ftps = this.set_ftps( sftp_config.content )
        if ( !ftps ) {
            console.error('sftp_config_content: ', sftp_config.content)
            console.error('check ' + sftp_config.dir + 'sftp-config.js')
            throw new Error('ftps crate fails')
        }
        this.listen_up( options, sftp_config, ftps )

    };

Ftps.prototype.listen_up = function( options, sftp_config, ftps ){
    var remote_path 
    gaze( options.path+'/**/*',function(err, watcher){
        if ( err ) {
            throw error;
        }
        console.log(options.path + " listen " + options.type + " execute is "+ options.execute)
        this.on('all', function(event, filepath) {
            //console.log(filepath + ' was ' + event);
            remote_path_dir = path.dirname( sftp_config.content.remote_path + "/" + filepath.replace( sftp_config.dir,'' ))
            
            ftps.cd( remote_path_dir ).put(filepath).exec(function(err, res){
                if ( err ) {
                    console.log(filepath + "uplaod fail ")
                    console.log(err)
                    return;
                }
                console.log( filepath + ' upload to \n' + remote_path_dir)
                
            });
            
        });
    });
}

Ftps.prototype.get_sftp_config = function( check_path ){
    var index = 20;
    //遗留问题  
    //1. 没有对~进行处理
    //2. 没有根据相对路径进行选取,智能绝对路径
    while(index !== 0) {
        //console.log( path.join( path.dirname(check_path) , 'sftp-config.json')  );
        if ( fs.existsSync( path.join( path.dirname(check_path) , 'sftp-config.json') ) ) {
            return {
                dir: path.join( path.dirname(check_path) ),
                content: require(path.join( path.dirname(check_path) , 'sftp-config.json'))
            }
        }
        if ( check_path === '/') {
            //console.log('not find sftp-config.json');
            return ;
        }
        check_path = path.join(check_path, '../');
        index--;
    }
    //console.log('not find sftp-config.json');
    return ;
}

Ftps.prototype.set_ftps = function(sftp_config_content){
    //console.log(sftp_config_content)
    return ( new FTPS({
        protocol: sftp_config_content.type,
        host: sftp_config_content.host,
        username: sftp_config_content.user,
        password: sftp_config_content.password,
        //port: 22, // Optional  // port is added to the end of the host, ex: sftp://domain.com:22 in this case 
        escape: true, // optional, used for escaping shell characters (space, $, etc.), default: true 
        retries: 2, // Optional, defaults to 1 (1 = no retries, 0 = unlimited retries) 
        timeout: sftp_config_content.connect_timeout || 10, // Optional, Time before failing a connection attempt. Defaults to 10 
        retryInterval: 5, // Optional, Time in seconds between attempts. Defaults to 5 
        retryMultiplier: 1, // Optional, Multiplier by which retryInterval is multiplied each time new attempt fails. Defaults to 1 
        requiresPassword: true, // Optional, defaults to true 
        autoConfirm: false, // Optional, is used to auto confirm ssl questions on sftp or fish protocols, defaults to false 
        cwd: '', // Optional, defaults to the directory from where the script is executed 
        additionalLftpCommands: '' // Additional commands to pass to lftp, splitted by ';' 
    }) )
};

module.exports = Ftps
