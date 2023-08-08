# 场景的应用
游戏有着一堆界面，例如开始界面、创建存档的界面、设置参数的界面等等，然后才是实际游玩的界面。

为了方便实现这些功能而不是使用一堆`if`，场景（Scene）就这样诞生了。

当然，该游戏也同样实现了场景这一功能，还是挺简单的说。

## 使用场景
欲使用场景，应先导入之：
```python
from minecraft.scenes import Scene
from minecraft.utils.utils import *
```

场景继承自[`EventDispatcher`](https://pyglet.readthedocs.io/en/latest/modules/event.html#pyglet.event.EventDispatcher)，这里不多赘述，可点击链接查看文档。

同时，场景有3个回调函数：

- `Scene.on_scene_enter()`---进入场景时调用
- `Scene.on_scene_leave()`---离开场景时调用
- `Scene.on_language_change()`---在改变语言时调用

创建好新的场景类后，需要把它的实例添加到一个字典（私有的）中才能访问。

添加并切换至一个名为`MyScene`的代码如下所示：
```python
class MyScene(Scene):
    pass

get_game_window_instance().add_scene("ext:my_scene", MyScene)
get_game_window_instance().switch_scene("ext:my_scene")
```
> 我们并不赞成使用`get_game_window_instance()`获取游戏窗口的实例，您应该使用其它方法来达到相同的目的。

同时，`add_scene`也可传入若干关键字参数和位置参数用于实例化类。
> 虽然程序对名称中是否添加主命名空间（这里是`ext`）没有硬性要求，但一直这样做是一个好习惯。

### 使用 GUIFrame
`Scene.frame`为一个`GUIFrame`[^1]对象，监听各种事件并反应到小部件上。

需要注意的是，游戏会在进入或离开场景时强制启用或禁用`Scene.frame`（通过`enable`属性）。

关于小部件的详细描述，请转到[使用小部件]()一节。

## 已有的场景
以下列出了原版游戏中所拥有的场景：

- `minecraft:start`---标题页面
- `minecraft:singleplayer`---单人游戏的选择存档的场景

它们的代码都包含在 [minecraft/scenes](https://github.com/minecraft-py/minecraft/tree/master/minecraft/scenes) 目录中，可随时查看。

- - -

[^1]: 完整的命名空间为`minecraft.gui.frame.GUIFrame`，该类重写于`pyglet.gui.frame.Frame`。
