var Execute = function(){
        
    },
    _execute = new Execute()

Execute.prototype.set_execute = function(option, callback, content, args){
    switch(option.execute) {
        case 'start': 
            callback.call(content,args)
            break;
        case 'auto': 
            if ( option.time < 5000 ) option.time = 5000
            callback.call(content,args)
            setInterval(function(){
                console.log('setInterval')
                callback.call(content,args)
            },option.time);

            break;
    }

}
module.exports = _execute;

