# K-Trainer

#Requirements
---

You need to have the executable `lftp` installed on your computer.

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

# API
---

| key     |                                                                                                                                                                                       |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| path    | Listening to the specified file path (recommend absolute path)                                                                                                                        |
| type    | ftp | git | shell | npm                                                                                                                                                               |
| execute | start | change | auto                                                                                                                                                                 |
| time    | 1. The attribute of the execute invalid when to start 2. carrying out for the smallest change interval 3. auto for training in rotation (minimum of 3600)  4. unit is the second time |