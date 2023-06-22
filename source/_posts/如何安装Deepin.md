---
title: 如何安装Deepin
date: 2023-05-27 19:52:29
tags: 瞎说
---

![](https://s1.ax1x.com/2023/04/16/p991nZ8.png)

## 什么是Deepin

（不想看的点击[这里](#准备工作)）

深度操作系统是基于Linux内核，以桌面应用为主的开源GNU/Linux操作系统，支持笔记本、台式机和一体机。深度操作系统（deepin）包含深度桌面环境（DDE）和近30款深度原创应用，及数款来自开源社区的应用软件，支撑广大用户日常的学习和工作。另外，通过深度商店还能够获得近千款应用软件的支持，满足您对操作系统的扩展需求。深度操作系统由专业的操作系统研发团队和深度技术社区共同打造，其名称来自深度技术社区名称“deepin”一词，意思是对人生和未来深刻的追求和探索。 

深度操作系统（deepin）是中国第一个具备国际影响力的Linux发行版本，截止至2019年7月25日，深度操作系统支持33种语言，用户遍布除了南极洲的其它六大洲。深度桌面环境（DDE）和大量的应用软件被移植到了包括Fedora、Ubuntu、Arch等十余个国际Linux发行版和社区。 

他在Linux内核树的关系如下

![ppHVZJx.md.png](https://s1.ax1x.com/2023/04/08/ppHVZJx.md.png)

***

## 准备工作

### 查看启动方式

按下 `Win+R` ，输入 `msinfo32` ,查看 `BIOS模式` 这一栏。

![ppHBMwQ.png](https://s1.ax1x.com/2023/04/09/ppHBMwQ.png)

如果你 `BIOS模式` 这一栏显示的不是 `UEFI` 的话，那么恭喜你，你可以直接点击[这里](#准备设备和软件)来查看下一步，如果是 `UEFI` 的话，请继续看下去。

#### 关闭安全启动

打开你的浏览器，搜索你电脑品牌或主板品牌的BIOS启动快捷键。

重启电脑，在电脑屏幕黑掉后狂按BIOS启动快捷键。进入BIOS。

使用键盘的上下左右按键来定位到 `Secure Boot` 将右边的 `Enabled` 改为 `Disabled` 

按下 `Esc` ，选择 `Save and Exit` 回车。退出。

### 准备设备和软件

![p9SdTN6.png](https://s1.ax1x.com/2023/04/14/p9SdTN6.png)

Deepin V20镜像下载地址https://www.deepin.org/zh/download/

Ventoy下载地址https://blockhaity.lanzoux.com/i6okc0xgahzc

DiskGenius下载地址https://blockhaity.lanzoux.com/i6okc0xgahzc

***

## 制作启动U盘

**注意！该操作会清空你的U盘数据，请备份后操作！！！**

**注意！该操作会清空你的U盘数据，请备份后操作！！！**

**注意！该操作会清空你的U盘数据，请备份后操作！！！**

下载并解压Ventoy,将你的U盘插入你的电脑，进入ventoy-1.0.91文件夹，打开Ventoy2Disk。就可以看到如下界面。

![ppHBeQf.png](https://s1.ax1x.com/2023/04/09/ppHBeQf.png)

在设备一栏选择你的U盘，点击安装，连续点击两次确认。然后将下载好的Deepin V20镜像拷贝到U盘即可。

## 进行磁盘分区

**注意！该操作若是不规范或误操作，轻则系统暴毙，数据丢失。重则硬盘分区表损坏！请谨慎操作！！！**

**注意！该操作若是不规范或误操作，轻则系统暴毙，数据丢失。重则硬盘分区表损坏！请谨慎操作！！！**

**注意！该操作若是不规范或误操作，轻则系统暴毙，数据丢失。重则硬盘分区表损坏！请谨慎操作！！！**

下载并解压DiskGenius，进入DiskGenius文件夹，打开DiskGenius。就可以看到如下界面。

![p9p7z7R.png](https://s1.ax1x.com/2023/04/15/p9p7z7R.png)

选择你的C盘或D盘，点击调整分区容量。如下图这样配置。后部容量在40~20GB即可，点击确定

![p9pHNEn.png](https://s1.ax1x.com/2023/04/15/p9pHNEn.png)

点击确认，再点击灰色区域，点击建立新分区，如下图这样配置。点击确定

![p9pquSf.png](https://s1.ax1x.com/2023/04/15/p9pquSf.png)

配置完成后，点击保存修改。

## 从U盘启动并安装

如何启动请参考https://wiki.edgeless.top/v2/guide/boot.html

tips：如果正在 [查看启动方式](#查看启动方式) 中查看到是非UEFI的话，就一定再启动时不要选择带UEFI字段的启动项。

在参照上面的链接的教程进入Ventoy界面后，双击回车。

启动后，会进入如下图的界面，勾选 **我已仔细阅读.....** 左边的复选框，再点击下一步。

![p991nZ8.png](https://s1.ax1x.com/2023/04/16/p991nZ8.png)

出现如下图所示的界面，点击手动安装。

![p991udS.png](https://s1.ax1x.com/2023/04/16/p991udS.png)

如下图所示，点击右侧为ext4的分区。

![p991KIg.png](https://s1.ax1x.com/2023/04/16/p991KIg.png)

点击右侧的铅笔✏️图标，按下图所示配置。

![p991QiQ.png](https://s1.ax1x.com/2023/04/16/p991QiQ.png)

点击确定，点击下一步，再点击确定。再点击下一步，再点击继续安装。然后泡杯茶，等待即可

~~Swap分区在消费级领域基本没用了还TM提醒~~

然后显示如下图的界面，点击立即重启，然后拔掉U盘。等待进入系统后，安装自己的喜好配置即可。

特别提醒，用户名不可以为中文和特殊符号，密码同理。密码要牢记！！！再后面的相关优化等步骤要用到。

## 相关优化（有难度，可以不执行）

点击左下角的程序列表，找到终端，打开，并执行以下命令

``` Bash
sudo apt update
sudo apt install deepin-wine
sudo apt install spark-store
```

## 相关问题

Q:软件从哪里下。

A:可以从Deepin自带的软件商城下载，跑过相关优化的可以从星火应用商店下载（推荐），如果要从软件官网下载的话，要认准Linux版，X64，deb格式

Q:我想要切换回Windows，要怎么操作

A:再开机时疯狂按上下键，选择 `Windows Boot Manager` 按下回车键即可进入Windows。