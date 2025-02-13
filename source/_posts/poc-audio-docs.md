---
title: 音频文档 转录能力调研
tags:
  - 技术调研
aging: true
aging_days: 100
author: Terry
copyright_info: true
avatar: https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/icon/logo.svg
sticky: 999
home_cover_height: 120
date: 2024-12-24 16:00:03
category: 技术调研
home_cover:
---

# 供应商

本次介绍百度、火山、讯飞的 STT 能力的对比

- 有些接口不支持太高并发任务请求
- 其中普通版和极速版之间的大致区别均体现在返回时效的区别, `极速版` 价格稍高
- 60s 以内短音频接口
    - 需对应接口调整 `audio chunk` 码率等
    - **音频需按照****`pcm`****、****`采样率16k或8K`****、****`位长16bit`****、****`单声道`**

价目表

**相关报价文档地址：**

| 讯飞 | |
|----|-|
| 百度 | |
| 火山 | |

# 接口能力

| 供应商 | 音频类型与要求                                                      | 描述 |
|-----|--------------------------------------------------------------|----|
| 百度  | - pcm 格式<br/>- 采样率，16000、8000，固定值<br/>- audio data base64 编码 |    |
| 火山  | wav                                                          |    |
| 讯飞  | - pcm 格式<br/>- 采样率，16000、8000，固定值<br/>- audio data base64 编码 |    |
