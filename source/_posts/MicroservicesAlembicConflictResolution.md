---
title: 解决微服务间使用 alembic 出现版本冲突导致数据冲突问题
tags: [ 'python','后端开发' ]
aging: true
aging_days: 100
author: Terry
copyright_info: true
avatar: https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/icon/logo.svg
sticky: 999
home_cover_height: 120
date: 2024-12-06 19:41:16
category: 后端开发
home_cover: /images/posts/MicroservicesAlembicConflictResolution.jpg
---

# 不同服务间数据库迁移

在不同服务中，需要依赖不同的 `models` 来迁移数据库，

此时出现会出现较为常见的异常

```log
FAILED: Can't locate revision identified by 'cabd23751e2b'
```

导致这个警告的原因是，数据库中存的版本号不在迁移脚本文件中

## 解决办法

### 1. 生成一个新的迁移脚本

   ```bash
   alembic revision -m "Base migration"
   ```

这会生成一个迁移文件，比如：

   ```bash
   alembic/versions/<new_revision_id>_base_migration.py
   ```

### 2. 手动设置 revision 和 down_revision 打开该迁移文件，

将 revision 修改为 cabd23751e2b，并设置 down_revision 为 None，因为它是初始版本

   ```python
   """Base migration

   Revision ID: 3aa008faa21c
   Revises:
   Create Date: 2024-12-04 14:20:52.118815

   """
   from typing import Sequence, Union
   # ...
   revision: str = 'cabd23751e2b'
   down_revision: Union[str, None] = None
   ```

### 3. 同步数据库版本, 使用 stamp 命令将数据库版本与迁移脚本同步

   ```bash
   alembic stamp cabd23751e2b
   ```

### 4. 生成后续迁移脚本 运行 alembic revision --autogenerate 生成其他需要的迁移脚本。

   ```bash
   alembic revision --autogenerate -m "init_db"
   ```

### 5. 再执行 `alembic upgrade head` 将刚生成的迁移文件映射到数据库

|                                                      ...                                                      |
|:-------------------------------------------------------------------------------------------------------------:|
| 本文为博主原创文章，遵循 [CC 4.0 BY-SA](https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans) 版权协议，转载请附上原文出处链接和本声明 |
