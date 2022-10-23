# 下载&安装
首先，阁下可以在[这里](https://github.com/Minecraft-in-python/Minecraft)获取游戏的全部源代码，使用`git clone`或者直接[下载zip文件](https://github.com/Minecraft-in-python/Minecraft/archive/refs/heads/master.zip)都是可以的。

在开始下一步之前，您应先确保计算机上有python3.8或更高版本并且安装有pip包管理程序。

在源代码目录下，有名为`install.py`的程序，运行之即可完成依赖项的安装及生成游戏运行所必要的数据（如玩家的数据）。

步骤如下：

1. 安装依赖项
2. 在本地注册玩家
3. 生成启动脚本
   > 在Windows上为`run.bat`，其余为`run.sh`，且具有执行权限。

同时，亦有命令行参数可以跳过这些步骤：

- `--skip-install-requirements`---跳过安装依赖项
- `--skip-register`---跳过玩家注册
- `--skip-gen-script`---跳过生成启动脚本

这些对于启动器来说应该很有用吧。

## 一些数据迁移的细节
我们会时不时地改变一些数据的存储结构，下面简述了安装程序处理过时数据的细节，以供参考。

对于游戏设置（`settings.json`）而言，我们有一个当前版本的默认设置，在本地游戏设置不存在该设置项（json中的键）**或者**该设置项与默认设置的数据类型不统一时会被替换。

而玩家数据（`player.json`）的处理则较为复杂，是因为每个玩家使用固定的uuid表示他的身份，改变这个uuid则其游玩数据会全部无效。

程序会先检查数据是否符合游戏要求，如若符合则不做变动。

否则在**纯文本**的玩家数据中匹配**带引号**的uuid，而非使用自动生成的。
