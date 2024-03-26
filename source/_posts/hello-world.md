---
title: Hexo Docs
date: 2024-03-26 15:03:41
tags: 
  - hexo 使用文档
---

## Commands

### new

```
hexo new [layout] <title>                                                            
```

新建一篇文章。如果没有设置 layout 的话，默认使用 _config.yml 中的 default_layout 参数代替。
如果标题包含空格的话，请使用引号括起来。

### generate

```bash
hexo generate                                                                         
```

该命令可以简写为

```bash
hexo g                                                                                 
``` 

### server

```bash
hexo server                                                                                
```

启动服务器。默认情况下，访问网址为： http://localhost:4000/。

| 选项              | 描述                      |
|-----------------|-------------------------|
| `-p` `--port`   | 重设端口                    |
| `-s` `--static` | 只使用静态文件                 |
| `-l` `--log`    | 启动日记记录，使用覆盖记录格式         |
| `--debug`       | 启动 Hexo 服务，并且在启动时开启调试模式 |

### clean

```bash
hexo clean                                                                 
```

清除缓存文件 (db.json) 和已生成的静态文件 (public)。

在某些情况（尤其是更换主题后），如果发现您对站点的更改无论如何也不生效，您可能需要运行该命令。

### 调试模式

```bash
hexo --debug                                                                
```

`hexo --debug` 会在执行任何 Hexo 命令时提供额外的调试信息，而不仅限于启动服务器。这意味着无论是生成静态文件、清除缓存、还是其他任何操作，使用
--debug 标志都会让 Hexo 输出更详细的日志信息。