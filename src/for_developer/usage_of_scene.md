# 场景的应用
游戏有着一堆界面，什么开始界面、创建存档的界面、设置参数的界面等等，然后才是实际游玩的界面。

为了方便实现这些功能而不是使用一堆`if`，场景（Scene）就这样诞生了。

当然，该游戏也同样实现了场景这一功能，还是挺简单的说。

## 使用场景
欲使用场景，应先导入之：
```python
from minecraft.scene import Scene
from minecraft.utils.utils import *
```

场景继承自[pyglet.event.EventDispatcher](https://pyglet.readthedocs.io/en/latest/modules/event.html#pyglet.event.EventDispatcher)，这里不多赘述，可点击链接查看文档。

同时，场景有两个回调函数：

- `Scene.on_scene_enter(self)`---进入场景时调用
- `Scene.on_scene_leave(self)`---离开场景时调用

创建好新的场景类后，需要把它的实例添加到一个字典（私有的）中才能访问。

添加并切换至一个名为`MyScene`的代码如下所示：
```python
class MyScene(Scene):
    pass

get_game().add_scene("ext:my_scene", MyScene)
get_game().switch_scene("ext:my_scene")
```

同时，`add_scene`也可传入若干关键字参数和位置参数用于实例化类。

> 虽然程序对名称中是否添加主命名空间（这里是`ext`）没有硬性要求，但一直这样做是一个好习惯。

## 已有的场景
以下列出了游戏原版中所拥有的场景：

- `minecraft:start`---标题页面
- `minecraft:single_player`---单人游戏的选择存档的场景

它们的代码都包含在[minecraft/scene](https://github.com/Minecraft-in-python/Minecraft/tree/master/minecraft/scene)目录中，可随时查看。
