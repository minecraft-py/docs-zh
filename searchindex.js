Object.assign(window.search, {"doc_urls":["index.html#游戏的中文文档","before_play/download_and_install.html#下载安装","before_play/download_and_install.html#一些数据迁移的细节","for_developer/usage_of_scene.html#场景的应用","for_developer/usage_of_scene.html#使用场景","for_developer/usage_of_scene.html#已有的场景"],"index":{"documentStore":{"docInfo":{"0":{"body":5,"breadcrumbs":0,"title":0},"1":{"body":12,"breadcrumbs":0,"title":0},"2":{"body":1,"breadcrumbs":0,"title":0},"3":{"body":0,"breadcrumbs":0,"title":0},"4":{"body":15,"breadcrumbs":0,"title":0},"5":{"body":3,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"欢迎阅读Minecraft-in-python的官方中文文档。 这个文档主要讲述的是游戏的基本内容，而非特性，那是 Minecraft wiki 干的事。当然，也会涉及一些实现细节。 中文文档被分成了如下4个部分： 开始之前 ---您在游玩之前要做什么 游玩之时 ---准备游玩时，可以读一下这部分 致开发者 ---讲述游戏特定的实现细节 做出贡献 ---对于想要为游戏或文档做出贡献的人，应该阅读这一部分 我们欢迎您为该文档做出贡献，或者把它翻译到另一门语言。 那么，开始阅读吧！","breadcrumbs":"总起 » 游戏的中文文档","id":"0","title":"游戏的中文文档"},"1":{"body":"首先，阁下可以在 这里 获取游戏的全部源代码，使用git clone或者直接 下载zip文件 都是可以的。 在开始下一步之前，您应先确保计算机上有python3.8或更高版本并且安装有pip包管理程序。 在源代码目录下，有名为install.py的程序，运行之即可完成依赖项的安装及生成游戏运行所必要的数据（如玩家的数据）。 步骤如下： 安装依赖项 在本地注册玩家 生成启动脚本 在Windows上为run.bat，其余为run.sh，且具有执行权限。 同时，亦有命令行参数可以跳过这些步骤： --skip-install-requirements---跳过安装依赖项 --skip-register---跳过玩家注册 --skip-gen-script---跳过生成启动脚本 这些对于启动器来说应该很有用吧。","breadcrumbs":"下载&安装 » 下载&安装","id":"1","title":"下载&安装"},"2":{"body":"我们会时不时地改变一些数据的存储结构，下面简述了安装程序处理过时数据的细节，以供参考。 对于游戏设置（settings.json）而言，我们有一个当前版本的默认设置，在本地游戏设置不存在该设置项（json中的键） 或者 该设置项与默认设置的数据类型不统一时会被替换。 而玩家数据（player.json）的处理则较为复杂，是因为每个玩家使用固定的uuid表示他的身份，改变这个uuid则其游玩数据会全部无效。 程序会先检查数据是否符合游戏要求，如若符合则不做变动。 否则在 纯文本 的玩家数据中匹配 带引号 的uuid，而非使用自动生成的。","breadcrumbs":"下载&安装 » 一些数据迁移的细节","id":"2","title":"一些数据迁移的细节"},"3":{"body":"游戏有着一堆界面，什么开始界面、创建存档的界面、设置参数的界面等等，然后才是实际游玩的界面。 为了方便实现这些功能而不是使用一堆if，场景（Scene）就这样诞生了。 当然，该游戏也同样实现了场景这一功能，还是挺简单的说。","breadcrumbs":"场景的应用 » 场景的应用","id":"3","title":"场景的应用"},"4":{"body":"欲使用场景，应先导入之： from minecraft.scene import Scene\nfrom minecraft.utils.utils import * 场景继承自 pyglet.event.EventDispatcher ，这里不多赘述，可点击链接查看文档。 同时，场景有两个回调函数： Scene.on_scene_enter(self)---进入场景时调用 Scene.on_scene_leave(self)---离开场景时调用 创建好新的场景类后，需要把它的实例添加到一个字典（私有的）中才能访问。 添加并切换至一个名为MyScene的代码如下所示： class MyScene(Scene): pass get_game().add_scene(\"ext:my_scene\", MyScene)\nget_game().switch_scene(\"ext:my_scene\") 同时，add_scene也可传入若干关键字参数和位置参数用于实例化类。 虽然程序对名称中是否添加主命名空间（这里是ext）没有硬性要求，但一直这样做是一个好习惯。","breadcrumbs":"场景的应用 » 使用场景","id":"4","title":"使用场景"},"5":{"body":"以下列出了游戏原版中所拥有的场景： minecraft:start---标题页面 minecraft:single_player---单人游戏的选择存档的场景 它们的代码都包含在 minecraft/scene 目录中，可随时查看。","breadcrumbs":"场景的应用 » 已有的场景","id":"5","title":"已有的场景"}},"length":6,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"4":{"df":1,"docs":{"0":{"tf":1.0}}},"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}},"t":{"_":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"(":{")":{".":{"a":{"d":{"d":{"_":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"(":{"\"":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{":":{"df":0,"docs":{},"m":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"_":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"(":{"\"":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{":":{"df":0,"docs":{},"m":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"/":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"e":{"(":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}},"u":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"df":0,"docs":{},"上":{"df":0,"docs":{},"为":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{".":{"b":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"，":{"df":0,"docs":{},"其":{"df":0,"docs":{},"余":{"df":0,"docs":{},"为":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"breadcrumbs":{"root":{"4":{"df":1,"docs":{"0":{"tf":1.0}}},"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}},"t":{"_":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"(":{")":{".":{"a":{"d":{"d":{"_":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"(":{"\"":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{":":{"df":0,"docs":{},"m":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"_":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"(":{"\"":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{":":{"df":0,"docs":{},"m":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"/":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"e":{"(":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}},"u":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"df":0,"docs":{},"上":{"df":0,"docs":{},"为":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{".":{"b":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"，":{"df":0,"docs":{},"其":{"df":0,"docs":{},"余":{"df":0,"docs":{},"为":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}}},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"title":{"root":{"df":0,"docs":{}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});