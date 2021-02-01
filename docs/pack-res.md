# Resource Pack
**Important: The default resource pack is included in the [Minecraft-in-python/Minecraft](https://github.com/Minecraft-in-python/Minecraft) repository!**
and is installed with the game.

After reading the above you may wonder, what is a resource pack?
It is a package with elements necessary for the game to run, without it,
the game would run and then fail. At the moment Minecraft-in-python is only
provided with a resource bundle.

The resource packs provide inside:
* Textures
* Language packages
* Information about it
* A nice icon (your logo).

In the future you will be able to use several resource packs, so if one does not
provide languages and the other doesn't have textures.
You can use both to be complete.

Note: The default Resource Pack will always be complete.

## Resource Pack (default) Installation Guide
Use git:
```bash
# Github
git clone htts://github.com/Minecraft-in-python/resource-pack
# Gitee
git clone https://gitee.com/Minecraft-in-python/resource-pack
```

Download and unzip:
```bash
wget https://github.com/Minecraft-in-python/resource-pack/archive/master.zip -O Minecraft.zip
# or
wget https://gitee.com/Minecraft-in-python/resource-pack/repository/archive/master.zip -O Minecraft.zip
unzip Minecraft.zip -d Minecraft
```

Then, change directory to `resource-pack`. Run file `install.py`, It will install the `default` resource package.
