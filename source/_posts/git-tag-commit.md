---
title: 给指定 commit 打 tag 并提交 tag
tags: [ 'git' ]
aging: true
aging_days: 100
author: Terry
copyright_info: true
avatar: https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/icon/logo.svg
sticky: 901
home_cover_height: 120
date: 2025-02-18 11:53:16
category: git
home_cover: https://terry-photography-1308467839.cos.ap-nanjing.myqcloud.com/posts/git%20tag%20commit.png
---

合并代码的时候总是忘了打 tag , 合并完了才发现需要补 tag。
需要给指点 commit 补上 tag 并提交

1. 给指定 commit 打 tag

```shell
git tag tagName commitId
```

2. 提交 tag

```shell
git push origin tagName
```

3. 给当前分支加 tag

tag 会加在当前分支的最后一次提交上（截止打 tag 的最后一次提交哈）。

```shell
git tag tagName
```

4. 给 tag 加注释

```shell
git tag -a tagName -m "注释"
git tag -a tagName commitId -m "注释"
没有注释，别加-a，会报错，即打 tag 失败
git tag tagName -m "注释"
git tag tagName commitId -m "注释"
git tag tagName -m "注释" commitId
```

5. 删除本地 tag

tag 还没提交，只需删除本地 tag

```shell
git tag -d tagName
git tag --delete tagName
```

6. 删除远程仓库的 tag

```shell
# tag 已经提交到远端
git push origin -d tagName
git push -d origin tagName
git push origin --delete tagName
git push --delete origin tagName
git push origin :refs/tags/tagName
```

7 tag 列表

```shell
# 本地所有 tag
git tag 
git tag -l 
git tag --list
 
# 匹配v1.1.x的 tag 
git tag -l "v1.1.*"
```