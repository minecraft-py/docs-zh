# 下载&安装

通常情况下，游戏启动器会自动完成这个步骤，您只需指定一些参数。

这一节讲述的是如何手动下载并安装游戏至启动器。

你可以在[这里](https://github.com/minecraft-py/minecraft)获取游戏的全部源代码，使用`git clone`或者直接下载[压缩文件](https://github.com/Minecraft-py/minecraft/archive/refs/heads/master.zip)。

在开始下一步之前，您应先确保计算机上有 Python3.8 或更高版本并且安装有 pip 包管理程序。

游戏使用了很多依赖项，并且游戏的不同版本可能需要不同版本的依赖项，必须让不同版本的游戏运行在不同的虚拟环境内。使用 Python 自带的`venv`就可以做到这一点。
> 这里不过多赘述虚拟环境的用法，查看[标准库中 venv 的介绍](https://docs.python.org/zh-cn/3.8/library/venv.html)以了解如何创建及激活虚拟环境。

确保在游戏源代码目录创建并激活了虚拟环境后，可输入以下命令来安装所有依赖项：
```bash
pip install -r requirements.txt
```

若上述命令没有出错，您便可以输入下面的命令来直接启动游戏：
```bash
python3 -m minecraft
```

<!-- 可见，您并不需要安装即可游玩这个游戏。 -->
