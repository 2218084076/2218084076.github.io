---
title: stable diffusion 相关依赖
tags: [ "stable diffusion" ]
aging: true
aging_days: 100
author: Terry
copyright_info: true
avatar: https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/icon/logo.svg
home_cover_height: 120
date: 2024-10-12 14:55:23
category: "stable diffusion"
home_cover:
---

> stable diffusion

## 拓展插件

### stable-diffusion-webui-chinese.git

[https://github.com/VinsonLaro/stable-diffusion-webui-chinese.git](https://github.com/VinsonLaro/stable-diffusion-webui-chinese.git)

### sd-webui-controlnet

[https://github.com/Mikubill/sd-webui-controlnet.git](https://github.com/Mikubill/sd-webui-controlnet.git)

### stable-diffusion-webui-rembg

[https://github.com/AUTOMATIC1111/stable-diffusion-webui-rembg.git](https://github.com/AUTOMATIC1111/stable-diffusion-webui-rembg.git)

### sd-webui-infinite-image-browsing

[https://github.com/zanllp/sd-webui-infinite-image-browsing.git](https://github.com/zanllp/sd-webui-infinite-image-browsing.git)

## 环境依赖

### libgoogle-perftools-dev 和 google-perftools

- **用途**：**google-perftools** 包，特别是其中的 **gperftools**，是一套由 Google 开发的性能分析和内存管理工具。其中包括的工具如
  TCMalloc（线程缓存的内存分配器）和性能分析器，都是为了提高大型应用程序的性能而设计的。
- **libgoogle-perftools-dev**：这是 **google-perftools** 的开发包，包含库和头文件，使开发者能够在自己的应用程序中利用 *
  *gperftools** 提供的性能优化和内存管理功能。
- **常用场景**：在需要对 C++ 应用程序进行内存优化或性能分析时使用，特别是在处理大型或资源密集型应用时，如数据库、大数据处理应用等。

```bash
apt update
apt install libgoogle-perftools-dev google-perftools -y
```

> 2024-05-14 13:39