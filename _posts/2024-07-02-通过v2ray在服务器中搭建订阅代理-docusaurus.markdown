---
layout: post
title: v2ray 在服务器中搭建订阅代理
date: 2024-07-02 11:11 +0800
tags:
  - 科学上网代理工具使用
categories:
  - 科学上网代理工具使用
---

> 最近墙内下架了大量 docker 镜像加速站，不仅仅是 Docker，
> 连 NPM 镜像也可能面临下架的命运。包括 Github CDN 镜像、NPM、Python PIP、OpenWrt OPKG 等未受内容审查的镜像服务器
> 也可能面临下架的风险。
>
> 因此，人人都要学会用魔法了. 技术方面大腿拧不过胳膊

> [Docker Terms of Service](https://www.docker.com/legal/docker-terms-service/)
>
> You may not use the Service if you are or represent an entity that is listed on any U.S. Government Denied
> Party/Person List. You affirm that you are over the age of 13, as the Service is not intended for children under 13.
>
> 如果您是或代表被列在任何美国政府拒绝名单上的实体，则您不得使用本服务
> 方/人名单。您确认您已年满13岁，因为本服务不面向13岁以下的儿童...

# 快速上手

## 准备

如果你还没有安装 `v2rayA` 或 `v2ray-core`，请参阅 [Ubuntu 安装流程
](https://2218084076.github.io/posts/Ubuntu-install-v2ray-docusaurus/) 一节。

## 开始

如果你通过 **`2017`** 端口 如 **http://localhost:2017** 无法访问 UI 界面，请检查你的服务是否已经启动。

接下来进入 UI，本节将介绍 v2rayA 的基本操作流程。

## 创建账号

![img.png](../img/create%20an%20account.png)

在第一次进入页面时，你需要创建一个管理员账号，请妥善保管你的用户名密码，

如果遗忘，使用 **`sudo v2raya --reset-password`** 命令重置。

## 导入节点

![img.png](../img/Import%20node.png)

以创建或导入的方式导入节点，导入支持节点链接、订阅链接、扫描二维码和批量导入等方式。

## 连接节点和启动服务

### 选择节点

![img.png](../img/Select%20node.png)

导入成功后，节点将显示在 **`SERVER`** 或新的标签中。如图是导入了一个订阅后的界面。

![img.png](../img/Refresh%20node.png)

切换到该标签页，选择一个或多个节点连接。这里不建议选择过多的节点，6 个以内为佳。

[//]: # (v2ray 服务会根据延迟，自动进行负载均衡。)

### 开启服务

![img_1.png](../img/Start%20service.png)

在未启动服务时，连接的节点呈现柚红色。我们在左上角点击相应按钮启动服务。

![img.png](../img/Open%20successfully.png)

在启动服务后，所连接的节点呈现蓝色，左上角的图标也显示为蓝色的正在运行，代表服务启动成功。

## 配置代理

由于默认情况下 v2rayA 会通过核心开放 20170(socks5), 20171(http), 20172(带分流规则的http) 端口

如果是需要为局域网中的其他机器提供代理，请在设置中打开 “局域网共享” ，并检查防火墙开放情况。

这里记录三种方式使用代理。

### 透明代理

![img.png](../img/transparent%20proxy.png)

这种方法是 `v2rayA` 推荐的方法。它相比于其他方法具有诸多优势，`v2rayA` 可以一键开启透明代理，为几乎所有程序提供代理服务。

在设置中选择透明代理的分流方式，以及实现方式，然后保存即可。具体细节可参阅透明代理 一节。

注意，如需选择 GFWList，需要下载对应的规则库，请点击右上角的更新以完成下载。

### 系统代理

系统代理可为主动支持代理的程序提供代理服务。在不同的桌面环境中设置的位置不尽相同，请通过搜索引擎自行搜索。

### SwitchyOmega

`SwitchyOmega` 等浏览器插件可为浏览器提供代理服务。具体方法请通过搜索引擎自行搜索。

# 总结

本节提供了 v2rayA 最基本的使用方法，v2rayA 还有着更多丰富的功能，请参阅“手册”和“高级应用”章节以进行更多的了解。
