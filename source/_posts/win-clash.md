---
title: Windows 中 Clash Verge 使用教程
tags: [ '代理工具','Windows' ]
aging: true
aging_days: 100
author: Terry
copyright_info: true
avatar: https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/icon/logo.svg
home_cover_height: 120
date: 2024-10-15 16:31:55
category: 代理工具
home_cover: /images/posts/clash-logo.png
---

## 简介

Clash Verge Rev 是基于 Tauri 的 Clash Meta GUI

**其特性：**

- 内置Clash.Meta(mihomo)内核，并支持切换 Alpha 版本内核。
- 简洁美观的用户界面，支持自定义主题颜色、代理组/托盘图标以及 CSS Injection。
- 配置文件管理和增强（Merge 和 Script），配置文件语法提示。
- 系统代理和守卫、TUN 模式。

## 安装

> - 如果你不清楚你的电脑系统架构，请下载 x64 架构文件（目前多数 Windows 电脑使用该架构）。
> - Windows 7 用户请先查看相关FAQ。
> - 带有 fix_webview2 字样的安装包为内置 Webview2 环境版本（该文件体积比普通安装包大，仅用于当系统缺少且无法安装WebView2环境时使用）。
    **新手可自己安装此版本**

[官方下载地址 GitHub Releases](https://github.com/clash-verge-rev/clash-verge-rev/releases)

| 系统架构  | 下载地址                                                                                                                                                                                                                                                                                                                                    |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| x64   | [Clash.Verge_1.7.7_x64_fixed_webview2-setup.exe](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_x64_fixed_webview2-setup.exe)<br/> [Clash.Verge_1.7.7_x64-setup.exe](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_x64-setup.exe)        |
| x86   | [Clash.Verge_1.7.7_x86_fixed_webview2-setup.exe](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_x86_fixed_webview2-setup.exe)<br/>[Clash.Verge_1.7.7_x86-setup.exe](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_x86-setup.exe)         |
| arm64 | [Clash.Verge_1.7.7_arm64_fixed_webview2-setup.exe](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_arm64_fixed_webview2-setup.exe)<br/>[Clash.Verge_1.7.7_arm64-setup.exe](https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_arm64-setup.exe) |

根据自己系统选择并下载安装

[//]: # (国内可能访问不到 GitHub 的官方地址，为此我准备了国内下载源)

[//]: # ()

[//]: # (| 系统架构  | 下载地址                                                                                                                                                                             |)

[//]: # (|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|)

[//]: # (| x64   | [Clash.Verge_1.7.7_x64_fixed_webview2-setup.exe]&#40;https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_x64_fixed_webview2-setup.exe&#41;     |)

[//]: # (| x86   | [Clash.Verge_1.7.7_x86_fixed_webview2-setup.exe]&#40;https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_x86_fixed_webview2-setup.exe&#41;     |)

[//]: # (| arm64 | [Clash.Verge_1.7.7_arm64_fixed_webview2-setup.exe]&#40;https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_arm64_fixed_webview2-setup.exe&#41; |)

## 快速上手

### 导入订阅

打开 Clash 客户端以后，点击`订阅`标签页

将 Clash 对应的订阅链接粘贴到如图位置

点击`导入`即可自动下载订阅配置

![clash1](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-win-1.png)

![](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-win-2.png)

在订阅中点击鼠标`右键`更新订阅
分为两种模式，直接更新（即，`更新`选项 ）和 使用代理更新,（即，`更新(代理)`选项）

![](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-updata.png)

### 查看、测试节点

选中订阅后，点击`代理`页面查看节点信息、测试代理延迟等操作

根据自己需要选中指定阶段或是自动选择

![](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-win-3.png)

### 开启代理

按照上述配置好后，点击`设置` -> `开启系统代理`

![](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-win-4.png)

或者在右下角任务栏图标中，右键菜单进行设置

![](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-win-settings.png)

**注意**

- 代理模式一定保证选择`规则模式`
- 关闭代理时取消勾选`开启系统代理`，或直接右键`退出`
