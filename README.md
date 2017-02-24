# K-Trainer

Help you faster to complete daily operation command and upload


# install

```javascript
npm install -g k-trainer
```

# use

```
cd K-Trainer

k-trainer Demo/demo.json 
```

# API
---

| key     |                                                                                                                               |
|---------|-------------------------------------------------------------------------------------------------------------------------------|
| real    | boolean, default is true,The object is valid?                                                                                 |
| path    | Listening to the specified file path (recommend absolute path)                                                                |
| type    | ftp  or shell                                                                                                                  |
| execute | start or auto                                                                                                                 |
| time    | 1. And only when the execute for auto works   2. auto for training in rotation (minimum of 5000)   3. unit is the second time |
You can now import Markdown table cod

# DEMO
---

```shell
[
    {
        "real": true,
        "type": "shell",
        "shell": [{
            "command": "git",
            "args": ["pull"],
            "options": {
                "cwd": "/Users/maizhikun/Project//**/-**-com"
            }
        }],
        "execute": "auto",
        "time": "5001"
    },{
        "real": true,
        "path": "/Users/maizhikun/Project/**/k_pc/public",
        "type": "ftp",
        "execute": "change"
    }

]
```

or

[look demo](/./Demo/demo.json) 

# FTP SETTING

ftp will find sftp-config.json in "path" until "/" 

tips:  [sftp-config.json demo](http://wbond.net/sublime_packages/sftp/settings) 

# FTP Requirements
---

if you need FTP uoload ,You need to have the executable `lftp` installed on your computer.

[LFTP Homepage](http://lftp.yar.ru/)

**Windows** ([Chocolatey](https://chocolatey.org/))
```cmd
C:\> choco install lftp
```
**OSX** ([Homebrew](http://brew.sh/))
```bash
sudo brew install lftp
```
**Linux**
```bash
sudo apt-get install lftp
# or
sudo yum install lftp
```

