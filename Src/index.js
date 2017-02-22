var gaze = require('gaze');
var FTPS = require('ftps');
//var sftp_config = require('sftp-config.json');

var ftps = new FTPS({
  host: '10.10.20.101', // required 
  username: 'zhangtianhua', // Optional. Use empty username for anonymous access. 
  password: '123456', // Required if username is not empty, except when requiresPassword: false 
  protocol: 'sftp', // Optional, values : 'ftp', 'sftp', 'ftps', ... default: 'ftp' 
  // protocol is added on beginning of host, ex : sftp://domain.com in this case 
  port: 22, // Optional 
  // port is added to the end of the host, ex: sftp://domain.com:22 in this case 
  escape: true, // optional, used for escaping shell characters (space, $, etc.), default: true 
  retries: 2, // Optional, defaults to 1 (1 = no retries, 0 = unlimited retries) 
  timeout: 10, // Optional, Time before failing a connection attempt. Defaults to 10 
  retryInterval: 5, // Optional, Time in seconds between attempts. Defaults to 5 
  retryMultiplier: 1, // Optional, Multiplier by which retryInterval is multiplied each time new attempt fails. Defaults to 1 
  requiresPassword: true, // Optional, defaults to true 
  autoConfirm: false, // Optional, is used to auto confirm ssl questions on sftp or fish protocols, defaults to false 
  cwd: '', // Optional, defaults to the directory from where the script is executed 
  additionalLftpCommands: '' // Additional commands to pass to lftp, splitted by ';' 
});
// Do some amazing things 
ftps.cd('/home/zhangtianhua/maizhikun').exec(console.log);
//console.log(ftps.cd('/home/zhangtianhua/maizhikun'));
ftps.pwd().exec(console.log);

gaze('**/*',function(err, watcher){
    this.on('all', function(event, filepath) {
        console.log(filepath + ' was ' + event);
        
        ftps.cd('/home/zhangtianhua/maizhikun').put(filepath).exec(console.log);

    });
});

