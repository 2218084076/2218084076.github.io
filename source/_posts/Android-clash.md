---
title: clash 安卓中使用教程
tags: [ 'VPN','安卓' ]
aging: true
aging_days: 100
author: Terry
copyright_info: true
avatar: https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/icon/logo.svg
sticky: 999
home_cover_height: 120
date: 2024-10-14 19:16:21
category: 工具
home_cover: /images/posts/clash-logo.png
---

Clash for Android

> 东半球第二好用的安卓翻墙工具。

## 简介

> Clash 是一个使用 Go 语言编写，基于规则的跨平台代理软件核心程序。
>
> Clash Meta for Android 是安卓系统上的一款 Clash 客户端。
> 支持的协议：Vmess, Shadowsocks, Snell , SOCKS5
>
>**特性**
>
>- 可随时切换代理模式及节点
>- 支持节点批量延迟测试
>- 通过托管链接一键配置
>- 规则命中分析
>- 日志输出

## 下载安装

- [国内下载地址](https://mirror.ghproxy.com/https://github.com/VZITY/42/releases/download/ver.1/cmfa-2.10.1-meta-alpha-universal-release.apk)
- [F-Droid下载地址](https://f-droid.org/packages/com.github.metacubex.clash.meta/)
  [<img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Get it on F-Droid" style="width:15%;">](https://f-droid.org/packages/com.github.metacubex.clash.meta/)
- [官方下载地址-GitHub releases](https://github.com/MetaCubeX/ClashMetaForAndroid/releases)
    - 建议下载 `xxx-universal-release.apk` 版本 `universal` 为通用版本，此版本是为多种设备架构（包括 ARM 和 x86）设计的通用
      APK，兼容各种 Android 设备。

> Clash Meta for Android 为免费 app ，也可在F-Droid市场下载

## 快速上手

> Clash Meta for Android 支持两种导入配置文档的方式：
>
> - URL （订阅）
> - 本地导入
>
> 本文只介绍通过 `URL（订阅）`

### 复制 Clash 订阅链接，复制好 Clash 订阅之后打开  Clash Meta for Android 应用程序。请点击配置。

| ![clash step1](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-1.png) |
|:--------------------------------------------------------------------------------------------------:|

### 请在配置窗口中点击 `➕` 加号新配置。

| ![clash step2](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-2.png) |
|:--------------------------------------------------------------------------------------------------:|

### 选择使用 URL 导入订阅

| ![clash step3](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-3.png) |
|:--------------------------------------------------------------------------------------------------:|

### 填写订阅链接并保存

| ![](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-4.png) |
|:---------------------------------------------------------------------------------------:|

### 回到首页，开启代理

| ![](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-5.png) |
|:---------------------------------------------------------------------------------------:|

### 查看节点列表

| ![](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-6.png) |
|:---------------------------------------------------------------------------------------:|

### 一键测试节点延迟

| ![](https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/clash-7.png) |
|:---------------------------------------------------------------------------------------:|

## 注

> Clash Meta for Android 测试延迟的方法为从目标 policy 返回 http response header 数据包的时间，并不是简单的 ping 。
> 测试延迟会导致机场网页上显示的在线设备数异常飙升，这是正常现象，等一等就好了。