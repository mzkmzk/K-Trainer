# K-Trainer

Help you faster to complete daily operation command and upload


# Install

```javascript
npm install -g k-trainer
```

# Use

```
k-trainer -d ./ // cp demo.json to ./
k-trainer -j demo.json or k-trainer -j demo.json -g mzk
```

# Command

```shell
k-trainer --help
Usage /usr/local/bin/k-trainer -j {json_file} -g {[group_name...]}

Options:
  --json, -j   config.json path                                         [string]
  --group, -g  execute group, type is array|string         [array] [default: []]
  --demo, -d   get a demo, config.json, set a path                      [string]
  --help       Show help                                               [boolean]
```

# API
options.data

| key     |                                                                                                                               |
|---------|-------------------------------------------------------------------------------------------------------------------------------|
| real    | boolean, default is true,The object is valid?                                                                                 |
| path    | Listening to the specified file path (recommend absolute path)                                                                |
| type    | ftp  or shell                                                                                                                  |
| execute | start or auto                                                                                                                 |
| time    | 1. And only when the execute for auto works   2. auto for training in rotation (minimum of 5000)   3. unit is the second time |
You can now import Markdown table cod

# Demo

```shell
{
    "shell_concurrency": 1, //shell parallel num
    "data": [
        {
            "real": false,
            "path": "/Users/maizhikun",
            "type": "ftp",
            "execute": "change"
        },
        {
            "group": "mzk",
            "type": "shell",
            "shell": {
                "command": "echo",
                "args": ["one"],
                "options": {
                    "cwd": "/Users/maizhikun/"
                }
            },
            "execute": "start"
        },
        {
            "group": "mzk",
            "type": "shell",
            "shell": {
                "command": "echo two && echo three",
                "options": {
                    "cwd": "/Users/maizhikun/"
                }
            },
            "execute": "auto",
            "time": 3000
        }
    ]
}

```

or

[look demo](/./Demo/demo.json) 

# FTP Setting

ftp will find sftp-config.json in "path" until "/" 

tips:  [sftp-config.json demo](http://wbond.net/sublime_packages/sftp/settings) 

# FTP Requirements


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

