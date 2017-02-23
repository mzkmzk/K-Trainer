import Ftps from '../../Src/Ftps'

test('find sftp-config.json',() => {
    let demo_ftp = require('./sftp-config.json')
    expect( Ftps.prototype.get_sftp_config('/Users/maizhikun/Learning/apache_sites/K-Trainer/Tests/Src/eqwewqewqewq/eqeqw') )
            .toEqual({
                dir: '/Users/maizhikun/Learning/apache_sites/K-Trainer/Tests/Src',
                content: demo_ftp
            });
})