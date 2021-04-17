# Installation guide of game
Here's how to install the game.
Please note that in the future you will be able to install it very,
very easily from the launcher. But for now you should follow the steps indicated here.

## Download source code or git repository
The source code of mcpy are stored in Github and Gitee.

Use git:
```bash
# Github
git clone htts://github.com/Minecraft-in-python/Minecraft
# Gitee
git clone https://gitee.com/Minecraft-in-python/Minecraft
```

Download and unzip:
```bash
wget https://github.com/Minecraft-in-python/Minecraft/archive/master.zip -O Minecraft.zip
# or
wget https://gitee.com/Minecraft-in-python/Minecraft/repository/archive/master.zip -O Minecraft.zip
unzip Minecraft.zip -d Minecraft
```

## Before playing
First, you must consider where copy the files. There are 2 choices below:

- Default
	- MacOS, undee `~/Library/Application Support/mcpy`
	- Windows, under `%HOME%\mcpy`
	- UNIX, under `~/.mcpy`
- Create a `MCPYPATH` environment variable

### install.py
`install.py` is an auto-install script. It do these things:

1. Install requirements
2. Register(the first time)
3. Copy files

> Double-click this file or type `./install.py` on terminal.

#### Commandline arguments

- `--skip-install-requirements` - Don't install requirements
- `--hide-output` - Don't show anything when pip was ran
- `--skip-register` - Skip register a player

### Register
Register a player is very easy, it's an offline operation on terminal.

Every player has it's own id which generate by `uuid` module.

Player name is a string at least have 2 letters(the first one must be letters or underline).

### How to play
Double-click the `Minecraft.bat` file will start the launcher on Windows.

On terminal, type `python -m Minecraft`.

Or add this function to `~/.bashrc`:
```bash
function mcpy() {
	cd ~/Minecraft
	python -m Minecraft $*
	cd $OLDPWD/
}
# or
alias mcpy="cd ~/Minecraft && python -m Minecraft $* && cd $OLDPWD/"
```
