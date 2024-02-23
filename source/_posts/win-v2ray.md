---
title: Windows 中 v2rayN 快速使用指南
description: 带你快速上手 v2rayN 在 Windows 中的使用
date: 2024-02-22 18:09:25
keywords: "工具教程"
cover: [/img/fauqyn4qw9xw34gixs94_Scenes_of_browsing_the_web_home_office_bac_20bced93-93ab-4a9a-bf7d-3bbad3487827.png]
banner:
  type: img
  bgurl: /img/fauqyn4qw9xw34gixs94_Scenes_of_browsing_the_web_home_office_bac_20bced93-93ab-4a9a-bf7d-3bbad3487827.png
  bannerText: v2rayN 是 Windows 系统下的代理软件客户端，功能强大且支持多种代理协议。通过本文2024最新使用教程快速入门篇所掌握的技巧，能快速方便配置代理协议进行代理访问。
toc: false 
single_column: true
author: Terry
category: v2ray使用手册
sticky: 2
katex: true
---
- [v2rayN主界面](#v2rayn%E4%B8%BB%E7%95%8C%E9%9D%A2)
- [官网下载](#%E5%AE%98%E7%BD%91%E4%B8%8B%E8%BD%BD)
- [安装教程](#%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B)
  - [软件目录](#%E8%BD%AF%E4%BB%B6%E7%9B%AE%E5%BD%95)
  - [图标说明](#%E5%9B%BE%E6%A0%87%E8%AF%B4%E6%98%8E)
- [添加订阅](#%E6%B7%BB%E5%8A%A0%E8%AE%A2%E9%98%85)
- [选择节点](#%E9%80%89%E6%8B%A9%E8%8A%82%E7%82%B9)
- [设置开机自启](#%E8%AE%BE%E7%BD%AE%E5%BC%80%E6%9C%BA%E8%87%AA%E5%90%AF)
<!--more-->

## v2rayN主界面

![v2ray](/img/image.png)

## 官网下载

v2rayN官网下载地址：<https://github.com/2dust/v2rayN/releases> 新手使用建议下载稳定版本，即版本号后标记为 `Latest` 的版本。

> ![releases](/img/Snipaste_2024-02-23_10-47-28.png)
> 其中代理工具还会依赖一些网络插件驱动等，所以建议下载 `zz_v2rayN-With-Core-SelfContained.7z`
> 它包含了运行 `V2RayN` 所需要的所有代码和资源，并且可以在没有安装任何额外依赖的系统上运行。

## 安装教程

### 软件目录

- 下载完成后，找到合适的目录，推荐安装在非系统盘，解压压缩包，解压后的目录如下图所示

![软件目录](/img/v2ray-software-catalog.png)

- 找到软件主程序 `v2rayN.exe` 双击鼠标左键即可开始使用，程序启动后会最小化到任务右小角的托盘，鼠标双击蓝色的 `V` 字小图标，即可打开软件的主界面。

### 图标说明

- 不同状态下软件的图标颜色是不一样的，参考下表图标颜色说明。

|图标|软件状态|说明|
|:------------------------------|-------|----|
|![close](/img/v2ray-close.png)|清除系统代理|每次启动/重启服务的时候，强制把windows系统(ie)的代理清除掉。|
|![sys proxy](/img/v2ray-sys-proxy.png)|自动配置系统代理|每次启动/重启服务的时候，强制设定windows系统(ie)的代理。|
|![no change](/img/v2ray-nochange.png)|不改变系统代理|每次启动/重启服务的时候，什么都不做。作用就是保留其他软件设定的代理。|

## 添加订阅

- 点击软件主界面的订阅分组，点击 `订阅分组设置` ，如下图所示：

![create subscription](/img/subscription-settings.png)

- 在弹出的窗口中点击添加，如下图所示：

![add subscription](/img/Add-subscription.png)

- 随后在弹窗的窗口中，输入别名，在可选地址(Url)部分粘贴订阅地址，点击添加，然后点击确定，如下图所示：

![set subscription](/img/Set-subscription.png)

- 添加完成后，点击软件主界面的 `订阅分组`，然后点击 `更新全部订阅(不通过代理)` 即可成功使用订阅地址添加节点信息，如下图所示：

![update subscription](/img/update.png)

## 选择节点

- 在节点列表界面执行 `ctrl + E` 可以一键测试所有阶段的延迟，筛选 `延迟` 按需选择一个延迟较低的节点即可。

- 在软件主界面选择任意节点，单击鼠标 `右键`，在弹出的窗口中选到 `设为活动服务器` 即可选择节点，如下图所示，然后开启系统代理即可，
也可以选择任意节点，双击鼠标左键选择节点。

- 其中可以点击 `设置`->`参数设置`->`v2rayN设置` 开启 `主界面双击设为活动服务器` 即可实现双击鼠标左键选择节点。

![Select node](/img/Select-node.png)

## 设置开机自启

`设置`->`参数设置`->`v2rayN设置` 选择 `开机启动` 后保存配置即可。 （注意：该功能可能需要管理员权限）
