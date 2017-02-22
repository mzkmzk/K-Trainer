import Ftps from '../../Src/Ftps'

test('find sftp-config.json',() => {
    let ftps = new Ftps()
    expect( ftps.get_sftp_config('~/Desktop/abc/awed') ).toEqual('~/Desktop/');
})