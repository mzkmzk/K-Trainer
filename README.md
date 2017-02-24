# K-Trainer

Help you faster to complete daily operation command and upload

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
| type    | ftp  | shell                                                                                                                  |
| execute | start  | auto                                                                                                                 |
| time    | 1. And only when the execute for auto works   2. auto for training in rotation (minimum of 5000)   3. unit is the second time |
You can now import Markdown table cod

# DEMO
---

[look demo](/./Demo/demo.json) 
