---
title: Windows 使用类似 Linux 下的 which 命令
tags:
  - Windows
  - 使用技巧
  - Windows
aging: true
aging_days: 100
author: Terry
copyright_info: true
avatar: https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/icon/logo.svg
home_cover_height: 120
date: 2024-10-17 17:08:06
category: Windows
home_cover: /images/posts/mlh.jpg
---

Windows 下类似 Linux 下的 which 命令

## PowerShell 下

以下命令是查找 `streamlit` 执行命令所在位置

```bash
>  Get-Command streamlit

CommandType   Name                 Version    Source
-----------   ----                 -------    ------
Application   streamlit.exe        0.0.0.0    C:\Users\***\Scripts\streamlit.exe

```

