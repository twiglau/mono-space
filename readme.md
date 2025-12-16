## pnpm-workspace.yml 创建

## 安装依赖

```sh
pnpm i lodash -w # 全局安装
```

- 往 module-a|module-b 安装 lodash， 版本和 全局不一致，会怎么处理？

```sh
pnpm add lodash@3 --filter="module-a"
pnpm add lodash@2 --filter module-b
```

- 查看 store path

```sh
pnpm store path # /Users/feiya/Library/pnpm/store/v10
pnpm config set store-dir ~/.pnpm-store # 设置缓存路径
```

## 如何在 module-b 里面，使用 module-a

- 命令的方法

```sh
# 你用的版本字符串写成了 module-a@workspace，
# pnpm 会把 workspace 当作一个要从 registry 拉取的版本号去查找，找不到就报错。
# 正确做法是使用 workspace 范围（带冒号和范围）
pnpm add "module-a@workspace:*" --filter module-b
```

- module-b 的 package.json 里面配置

```json
"dependencies": {
"lodash": "^2.4.2",
"module-a": "workspace:*"
}
```

## 执行命令 - 多个 index.js 执行 ： 测试脚本

1. 执行测试脚本， 测试多 module 调用

```sh
pnpm -r exec node index.js
```

2. 执行某个 module

```sh
pnpm --filter=module-a run start
```
