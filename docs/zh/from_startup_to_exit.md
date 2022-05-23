# 从启动到退出
我们的游戏实现非常复杂，这里我们详细叙述了游戏从命令行启动到启动游戏然后打开存档最后退出的过程。
> 这里只叙述回车后点几个按钮的事情，对于其它的游戏实现将在别的文章中叙述。

## 游戏启动（游戏窗口显示之前）
首先，你在命令行里输入命令（使用启动器打开也是使用相同的命令）：
```shell
python -m minecraft
```

python运行`minecraft/__main__.py`文件，首先导入一堆库：
```python title="minecraft/__main__.py" linenums="10"
# 忽略其它库
from minecraft.scene import GameWindow
from minecraft.scene.start import StartScene
from minecraft.utils.opengl import setup_opengl
from minecraft.utils.test import test
from minecraft.utils.utils import *
```

它们是启动时必不可少的：提供了游戏的常用功能（如记录日志）以及GUI管理。

然后检查是否重复启动，这是通过在游戏存储目录下创建`mcpy.lock`实现的。
