## 介绍

此脚本主要用于 vue 组件 library 的打包，支持 `dev` 和 `build` 模式，`dev` 主要方便 lerna 等多库管理的时候调试。 

实现基于 arco-design-scripts 进行的配置精简，没有太多定制功能，只保留最基础的打包。

## 接入步骤

1. 安装 vue@3.2 以上版本
2. 配置 package.json 的运行脚本

```json
{
  "scripts": {
    "dev:component": "sky-bin-vue-component dev:component",
    "build:component": "sky-bin-vue-component build:component"
  }
}
```

## 必要依赖

`vue@3.2+` 主要是 @vitejs/plugin-vue 插件需要，并且打包的都是 vue 组件，所以依赖基础库问题不大。

## 支持范围

- vue template
- vue jsx

## 注意

此脚本暂不支持不打包 css 等样式文件，目前打包组件的根路径还未开放定制，必须是 `<root>/components/index.ts` 作为组件导出入口。

## 后期

- 自定义的组件打包入口，支持 `.env` 文件配置
- 支持样式文件的打包
