---
title: Git Commit提交规范
tags: [git]
aging: true
aging_days: 100
author: Terry
copyright_info: true
avatar: https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/icon/logo.svg
home_cover_height: 120
date: 2024-10-12 01:52:17
category: git
home_cover:
---

- Git 是一款卓越的开源分布式版本控制系统，广泛应用于日常开发中，
  - 主要用于有效地管理代码的提交、还原和追踪。
  - 作为团队协作中不可或缺的代码管理工具，其功能和灵活性使其成为开发人员首选的工具之一。
- 在我们修改了代码并且提交之前，常会使用 git commit -m 'change’命令来描述我们代码改动的内容，
  - 但是很多都不规范，随处可见的 git commit -m ‘update’，
  - 以致于不能清晰地知道每次提交代码的变更内容，所以需要一种规范来管理代码提交的内容。

## 一、 Git Commit message 规范

一般来说，commit message 应该清晰明了，说明本次提交的目的，具体做了什么操作，但是在日常开发中，大家的 commit message 千奇百怪，
中英文混合使用、fix bug 等各种笼统的 message 司空见怪，这就导致后续代码维护成本特别大，
有时自己都不知道自己的 fix bug 修改的是什么问题。基于以上这些问题，
我们希望通过某种方式来监控用户的 git commit message，让规范更好的服务于质量，提高大家的研发效率。

commit message 格式

```yaml
<type>(<scope>): <subject>
```

### type(必须)

用于说明 git commit 的类别，只允许使用下面的标识。

- feat：新功能（feature）。
- fix/to：修复 bug，可以是 QA 发现的 BUG，也可以是研发自己发现的 BUG。

  - fix：产生 diff 并自动修复此问题。适合于一次提交直接修复问题
  - to：只产生 diff 不自动修复此问题。适合于多次提交。最终修复问题提交时使用 fix

- docs：文档（documentation）。
- style：格式（不影响代码运行的变动）。
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）。
- perf：优化相关，比如提升性能、体验。
- test：增加测试。
- chore：构建过程或辅助工具的变动。
- revert：回滚到上一个版本。
- merge：代码合并。
- sync：同步主线或分支的 Bug。

### scope(可选)

- scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
- 也可以标记为当前修改的文件（例如：docs(README.md): modify readme file）

例如：
在 Angular，可以是 location，browser，compile，compile，rootScope，
ngHref，ngClick，ngView 等。如果你的修改影响了不止一个 scope，你可以使用\*代替。

### subject(必须)

subject 是 commit 目的的简短描述，不超过 50 个字符。

- 结尾不加句号或其他标点符号。
- 根据以上规范 git commit message 将是如下的格式：

  ```yaml
  fix(DAO):用户查询缺少username属性
  feat(Controller):用户查询接口开发
  ```

以上就是我们梳理的 git commit 规范

---

### 总结

git commit 益处：

- 便于程序员对提交历史进行追溯，了解发生了什么情况。
- 一旦约束了 commit message，意味着我们将慎重的进行每一次提交，不能再一股脑的把各种各样的改动都放在一个 git
  commit 里面，这样一来整个代码改动的历史也将更加清晰。
- 格式化的 commit message 才可以用于自动化输出 Change log。

## 二、插件 Git Commit Template 的使用

1. idea 安装 git commit template 插件
2. 重启 idea
3. 勾选 `use non-modal commit interface`
4. 选择要提交的文件
5. 填写对应的内容并提交

> 创作时间： 2024-03-29
