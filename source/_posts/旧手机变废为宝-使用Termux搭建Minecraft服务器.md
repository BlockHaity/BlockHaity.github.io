---
title: 旧手机变废为宝 使用Termux搭建Minecraft服务器
tags: 
    - 旧手机变废为宝
categories: 
    - 教程
date: 2023-07-01 10:44:58
---

# 什么是Termux

## ChatGPT的解释

>Termux是一款Android操作系统上的开源应用。它允许用户在Android设备上模拟一个完整的Linux终端环境。借助Termux，用户可以运行各种Linux命令和软件，如Python、Ruby、Node.js等，甚至可以安装和使用一些功能强大的开发工具。Termux 提供了一个强大的命令行界面，使得在手机上进行开发、编程和维护任务变得更加便捷。无论是学习编程、进行网络安全测试还是进行系统管理，Termux都是一个非常有用的工具。

## 我的解释

Termux是一款在手机上模拟迷你Linux电脑的应用程序，它提供了基本的Linux终端功能。

在本文中，我们将使用ZeroTermux（可以视为Termux的高级版本）进行演示。

# 前期准备

## 设备

一部安卓手机~~（Apple滚蛋）~~

## 安装ZeroTermux

点击[此处](https://d.icdown.club/repository/main/ZeroTermux/ZeroTermux-0.118.36.2.apk)下载ZeroTermux安装包

下载完成后，按照手机的要求一步步安装即可。

### 设置允许ZeroTermux后台运行

（每个手机的设置方法都不同，如有需要，请自行百度，这里只展示华为手机的设置方法）（来自百度知道）

一、打开手机，找到华为手机管家，点击打开。

![](/images/旧手机变废为宝-使用Termux搭建Minecraft服务器/1.webp)

二、打开华为手机管家后，点击打开“应用启动管理”。

![](/images/旧手机变废为宝-使用Termux搭建Minecraft服务器/2.webp)

三、找到需要设置后台运行的应用，点击右边的开关。

![](/images/旧手机变废为宝-使用Termux搭建Minecraft服务器/3.webp)

四、弹出的手动管理中开启“允许后台活动”，点击“确定”。设置之后该应用就可以在后台运行，且不会被自动清理给清理掉该应用。

![](/images/旧手机变废为宝-使用Termux搭建Minecraft服务器/4.webp)

### 鸿蒙特别注意

如果出现不让安装的情况，把有关网络的东西全部关闭。在安装时点击灰色的地方然后要求一步步安装即可。

## 安装依赖

进入ZeroTermux

![ZeroTermux界面](/images/旧手机变废为宝-使用Termux搭建Minecraft服务器/ZeroTermux界面.png)

从左侧向右滑，打开辅助边栏，点击**切换源**，再点击**清华源**，点击**是**。

当出现`[Y/n]`等相关字符时，按下下方**回车图标**的按钮即可

输入以下命令

``` bash
pkg install nodejs-lts wget frpc openjdk-17 -y
```

等它运行完成后即可进行下一步

# 安装MCSManager面板

## MCSManager是什么

### ChatGPT的解释

>MCSManager是一款用于管理和监控Minecraft服务器的工具。它提供了一个直观的Web界面，可以方便地对服务器进行配置、启动、停止和监控。MCSManager支持多个Minecraft服务器实例的管理，可以进行实例的创建、删除、备份和恢复等操作。此外，MCSManager还提供了一些附加功能，如在线玩家管理、插件管理和日志查看等。它是一款功能丰富、易于使用的工具，可以帮助服务器管理员更好地管理和运维Minecraft服务器。

## 如何安装

### 国内用户

依次执行以下命令

``` bash
wget https://ghproxy.com/github.com/MCSManager/MCSManager/releases/latest/download/mcsmanager_linux_release.tar.gz
tar -zxf mcsmanager_linux_release.tar.gz
./install-dependency.sh
```

### 国外用户~~（有魔法的用户）~~

依次执行以下命令

``` bash
wget https://github.com/MCSManager/MCSManager/releases/latest/download/mcsmanager_linux_release.tar.gz
tar -zxf mcsmanager_linux_release.tar.gz
./install-dependency.sh
```

# 启动面板

输入命令`./start-daemon.sh`

从右侧向左划，点击**切换会话**，点击**新会话**

输入命令`./start-web.sh`

# 进入面板

打开你的浏览器，进入[localhost:23333](localhost:23333)

按照浏览器的界面进行设置。

# 创建服务器实例

然后看见此界面后，点击**首次使用**。

![](/images/旧手机变废为宝-使用Termux搭建Minecraft服务器/MCSM界面1.png)

点击**创建一个Minecraft服务器**

![](/images/旧手机变废为宝-使用Termux搭建Minecraft服务器/MCSM界面2.png)

点击**普通流程创建服务器**，随后点击**Java 版 Minecraft 游戏服务端**

![](/images/旧手机变废为宝-使用Termux搭建Minecraft服务器/MCSM界面3.png)

点击**上传单个服务端软件**，服务端从https://fabricmc.net/use/server/ 下载

![](/images/旧手机变废为宝-使用Termux搭建Minecraft服务器/MCSM界面4.png)

实例名填写 `Minecraft-Fabric-Server`

点击绿色按钮上传服务端文件。

然后点击**点击.......**，再点击**控制台**，点击**启动实例**（如果在5秒之内实例退出，多开几遍即可）

如果出现`[main／INFO]You need to agree to the EULA in order to run the server. Go to eula.txt for more info`的报错的话，恭喜你，成功了一半。

点击文件管理，编辑eula.txt，把`false`改为`true`然后按下**Ctrl+C**保存。点击`X`，点击**回到控制台**

点击**启动实例**即可启动服务器

# 安装Frp

这是用来联机用的内网传统用的，这里恰个没米的饭，建议使用LoCyanFrp

首先，注册LoCyanFrp账号~~（不会有人不会注册账号吧！）~~

然后，按照 https://www.bilibili.com/read/cv21408606 创建隧道（本地端口填25565）

接下来，回到面板，点击**应用实例**，再点击**创建实例**，点击**无需...**。

实例名填写`Minecraft-Fabric-Server-Frp`

启动命令填写`frpc -c ./frpc.ini`

点击**创建实例**再点击**前往...**再点击**文件管理**

点击**新建文件**文件名填写**frpc.ini**

然后点击https://preview.locyanfrp.cn/config 选择好创建了隧道的节点，点击**复制配置文件**

再回到MCSM面板，点击**编辑**，粘贴内容，然后保存。

点击**回到控制台**，点击启动实例。

点击https://preview.locyanfrp.cn/proxies ，复制好隧道下方的访问地址。

# 进服游玩

启动Java版Minecraft 1.20.1版本，点击多人游戏，点击直接连接，把访问地址粘贴进去，点击**进入....**，即可进服游玩。

# 相关问题

Q：我没有购买Minecraft国际正版。进入不了服务器。

A：回到MCSM面板，点击**应用实例**，点击**Minecraft-Fabric-Server**，点击**文件管理**，修改`server.properties`文件，将`online-mode`后面的`true`改为`false`，但是这样会使正版玩家无法显示皮肤。
