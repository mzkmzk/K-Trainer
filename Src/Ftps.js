var path = require('path'),
    fs = require('fs'),
    /**
     * options = {  }
     */
    Ftps = function( options ){
        
    };

Ftps.prototype.get_sftp_config = function( check_path ){
    var index = 20;
    while(index !== 0) {
        console.log( path.join( path.dirname(check_path) , 'sftp-config.json')  );
        if ( fs.existsSync( path.join( path.dirname(check_path) , 'sftp-config.json') ) ) {
            return require(path.join( path.dirname(check_path) , 'sftp-config.json'));
        }
        if ( check_path === '/') {
            console.log('not find sftp-config.json');
            return ;
        }
        check_path = path.join(check_path, '../');
        index--;
    }
    console.log('not find sftp-config.json');
    return ;
}

Ftps.prototype.set_ftps = function(){

}

export default Ftps
