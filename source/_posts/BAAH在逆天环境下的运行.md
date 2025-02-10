---
title: BAAH在逆天环境下的运行
date: 2025-02-10 11:10:22
tags: 
 - BAAH
 - Termux
categories: 旧手机利用
---

# 前言

这可以看成用手机搭建家庭服务器的DLC

因为作为高中牲的作者要去上学了，而没有时间去肝BA，就想自动清日常，所以有了这篇文章。

感谢 **BAAH - 问题解答群** 中的大佬帮助，有了这篇文章

# 环境概览

Termux neofetch如下

``` bash
~ $  neofetch

         -o          o-            u0_a224@localhost 
          +hydNNNNdyh+             ----------------- 
        +mMMMMMMMMMMMMm+           OS: Android 10 aarch64 
      `dMMm:NMMMMMMN:mMMd`         Host: HUAWEI ELE-AL00 
      hMMMMMMMMMMMMMMMMMMh         Kernel: 4.14.116 
  ..  yyyyyyyyyyyyyyyyyyyy  ..     Uptime: 6 days, 22 hours, 43 mins 
.mMMm`MMMMMMMMMMMMMMMMMMMM`mMMm.   Packages: 364 (dpkg), 1 (pkg) 
:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:   Shell: zsh 5.9 
:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:   Terminal: /dev/pts/8 
:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:   CPU: vendor Kirin980 (8) @ 1.805GHz 
:MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM:   Memory: 4868MiB / 7606MiB 
-MMMM-MMMMMMMMMMMMMMMMMMMM-MMMM-
 +yy+ MMMMMMMMMMMMMMMMMMMM +yy+                            
      mMMMMMMMMMMMMMMMMMMm                                 
      `/++MMMMh++hMMMM++/`
          MMMMo  oMMMM
          MMMMo  oMMMM
          oNMm-  -mMNs
```

由于直接在termux裸环境下部署会出现轮子构建问题，所以全程在proot容器中运行

# 开始部署

首先，你需要使用shizuku来提供一个模拟设备序列号

https://shizuku.rikka.app/zh-hans/guide/setup/

## 创建容器

由于proot-distro的容器源在Github，国内连接困难，所以使用tmoe进行安装

我目前认为你已经对termux环境有了基本的配置，如换源等

在终端下运行下列命令

``` bash
pkg install curl -y
curl -LO https://gitee.com/mo2/linux/raw/2/2.awk; awk -f 2.awk
```

如果使用zerotermux则可以直接在侧栏中找到

这里，有视频教程来安装容器

[BiliBili - 在下莫老师 - 坏了，这回手机真变电脑了！给手机安装Linux系统，变身生产力神器](https://www.bilibili.com/video/BV16u4y1M7yG)

{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=922458285&bvid=BV16u4y1M7yG&cid=1373006711&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; Left: 0; top: 0;" ></iframe></div>
{% endraw %}

不过，需要安装Ubuntu 24.04 LTS容器，此容器提供符合BAAH运行的Python3.12

容器建议不创建sudo用户，不配置zsh，删除zsh-i，运行tmoe tools，出现CUI后使用方向键和回车退出。

然后你将会见到 `root@localhost ~ #`

这时，连续输入三次 `exit` 并回车，当看见 `Press Enter to continue` 时回车两次重新进入容器以避免莫名其妙的bug

## 获取源码，创建虚拟环境

运行下列命令

``` bash
apt-get update
apt-get install python3-full git adb -y
git clone https://gitee.com/sammusen/BAAH.git
cd BAAH
python -m venv .venv # 创建虚拟环境，解决PEP 668
source .venv/bin/activate # 激活虚拟环境
```

之后，你可以看到你的shell变成了 `(.venv) root@localhost ~/BAAH #`

## 安装依赖

由于python3.12移除了部分包的老版本，需要修改依赖列表来强行兼容。

tips：ubuntu上游python的更新可能使配置的依赖随时失效，可以在群内@BlockHaity

在终端内运行 `nano requirements.txt`

然后找到 `onnxruntime` 将右边的数字改为 1.17.0

然后按下 ctrl + o 后按下 ctrl + x 保存并退出

接下来运行下列命令安装依赖

``` bash
pip install -i https://mirrors.ustc.edu.cn/pypi/simple pip -U
pip config set global.index-url https://mirrors.ustc.edu.cn/pypi/simple
pip install -r requirements.txt
```
这时，基本配置好了，可以使用 `python3 jsoneditor.py --host <局域网ip> --port 8000` 来运行webui

## 排障

在作者的手机上出现了这个问题

``` bash
Error in cpuinfo: failed to parse the list of possible processors in /sys/devices/system/cpu/possible
Error in cpuinfo: failed to parse the list of present processors in /sys/devices/system/cpu/present
Error in cpuinfo: failed to parse both lists of possible and present processors
terminate called after throwing an instance of 'onnxruntime::OnnxRuntimeException'
  what():  /onnxruntime_src/include/onnxruntime/core/common/logging/logging.h:309 static const onnxruntime::logging::Logger& onnxruntime::logging::LoggingManager::DefaultLogger() Attempt to use DefaultLogger but none has been registered.

已中止
```

deepseek给出的回答为cpuinfo库解析处理器信息失败，而事实上文件并不存在。

所以需要伪造文件

输入 `exit` 并回车，然后不断选择最下面的项目，退出tmoe。

然后运行下列命令

``` bash
cd .local/share/tmoe-linux/containers/proot/ubuntu-noble_arm64/sys
mkdir devices
cd devices
mkdir system
cd system
mkdir cpu
cd cpu
echo "0-7" > possible # 0-7应填写soc的实际情况，如为8核心soc,则填写0-7,超线程情况下应填写0-实际线程数减1
echo "0-7" > present
cd ~
```

然后运行下列命令进入环境

``` bash
debian
cd BAAH
source .venv/bin/activate
```

这时应该可以运行webui了。

# 开始自动化运行

首先，参考此视频来学习BAAH的配置

[BiliBili - 糖糖-belief - 【蔚蓝档案电脑版】自动化碧蓝档案每日任务工具BAAH教程](https://www.bilibili.com/video/BV1ZxfGYSEVr/)

{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=113877383648785&bvid=BV1ZxfGYSEVr&cid=28301724347&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; Left: 0; top: 0;" ></iframe></div>
{% endraw %}

在此环境下，配置基本相同，但是要修改一部分

``` bash
adb devices
```

此命令用来获取序列号，若弹出授权提示，始终允许即可。作者的为 `emulate-5554`

将配置中的连接序列号改为你的设备。

其他设置中adb路径改为 `/usr/bin/adb`

---

enjoy

# 补充说明

如果你的手机分辨率不是1280x720,需要使用 `adb shell wm size 1280x720` 来设置，`adb shell wm size reset` 来恢复，dpi将size替换为density即可