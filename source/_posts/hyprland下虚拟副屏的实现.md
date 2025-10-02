---
title: hyprland下VNC副屏的实现
date: 2025-10-02 11:33:11
tags: [ Linux, Hyprland, Wayland, 虚拟副屏 ]
categories: 折腾
---

## 起因

USB HUB提供的供电实属不够，根本无法驱动我的副屏，但是华为的手机带有有线投屏，且可以启动一个独立的“电脑模式桌面”，也许可以做远程副屏使用。

## 踩过的坑

在网上搜寻的绝大部分[教程](https://blog.dimeta.top/archives/waylandxia-de-sunshine-xu-ni-ping-mu-pei-zhi)都是在Kernel 模拟 EDID + DRM 接口实现的，这显然有误操作风险，万一一个`rm -rf`不就炸了吗？

~~btrfs神力让我无忧回滚~~

然后，我看到了这篇[教程](https://nth233.top/notes/wayvnc)

这个是为服务器准备的，创建一个虚拟wayland显示，but，这也做不了副屏啊。

最后参考[这篇](https://css.clsty.link/p/61781423b/hyprland-use-tablet-or-laptop-as-extra-monitor/)

原来hyprland可以直接创建HEADLESS显示啊

## 实现

用命令`hyprctl output create headless`来直接创建显示

然后，用`hyprctl monitors`就可以看到相关详情了

<details>
<summary>输出</summary>

```
Monitor eDP-1 (ID 0):
	1920x1080@60.00000 at 0x0
	description: BOE 0x092E
	make: BOE
	model: 0x092E
	physical size (mm): 310x170
	serial: 
	active workspace: 1 (1)
	special workspace: 0 ()
	reserved: 0 30 0 0
	scale: 1.00
	transform: 0
	focused: yes
	dpmsStatus: 1
	vrr: false
	solitary: 0
	solitaryBlockedBy: windowed mode,missing candidate
	activelyTearing: false
	tearingBlockedBy: next frame is not torn,user settings,missing candidate
	directScanoutTo: 0
	directScanoutBlockedBy: user settings,screen record/screenshot,missing candidate
	disabled: false
	currentFormat: XRGB8888
	mirrorOf: none
	availableModes: 1920x1080@60.00Hz 1920x1080@48.00Hz 

Monitor HEADLESS-2 (ID 1):
	1920x1080@60.00000 at 1920x0
	description: 
	make: 
	model: 
	physical size (mm): 0x0
	serial: 
	active workspace: 2 (2)
	special workspace: 0 ()
	reserved: 0 30 0 0
	scale: 1.00
	transform: 0
	focused: no
	dpmsStatus: 1
	vrr: false
	solitary: 0
	solitaryBlockedBy: windowed mode,missing candidate
	activelyTearing: false
	tearingBlockedBy: next frame is not torn,user settings,not supported by monitor,missing candidate
	directScanoutTo: 0
	directScanoutBlockedBy: user settings,screen record/screenshot,software renders/cursors,missing candidate
	disabled: false
	currentFormat: XRGB8888
	mirrorOf: none
	availableModes: 1920x1080@0.06Hz 
```

</details>

这里可以看到，虚拟显示编号为`HEADLESS-2`

然后，用下面的命令来[设置显示](https://wiki.hyprland.org/Configuring/Monitors/)

```
hyprctl keyword monitor <显示编号>,<分辨率>@<刷新率>,<位置>
```

例如

```
hyprctl keyword monitor HEADLESS-2,1920x1080@60,1920x0
```

为啥不用配置文件呢？因为我们无法保证创建的显示编号永远为一个定植，所以，采用命令的方式创建。

接下来就可以用wayvnc来打开显示了

```
wayvnc -o=<显示编号> 0.0.0.0 5900 -g -r
```

用VNC客户端连接即可

## 使用体验

理论上，FPS可以无限高，但是AVNC连上之后动画就卡卡的，不过还算流畅和跟手，播放视频可很流畅。