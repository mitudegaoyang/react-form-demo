## react-form-demo

作者：高天阳

```
更改历史

* 2019-8-29	高天阳	编写README文档
```

### 概述

本项目为react的form表单demo，用到了react、react-dom、react-redux、rematch、lodash等技术框架

### 使用

#### 安装

```
# 克隆项目
$ git clone git@github.com:mitudegaoyang/react-form-demo.git

# 安装依赖
$ npm install

```

####  常用指令

```
# 本地预览
$ npm start

# 测试项目
$ npm test

# 打包项目
$ npm run build

# 测试项目
$ npm run eject
```

### 开发

#### 目录结构

```
react-form-demo
├── public                  # 项目入口
├── dist                    # 打包文件
├── node_modules            # 插件资源
├── src                     # 开发目录
│   ├── components          # 组件目录
│   │   ├── Input           # 输入框组件
│   │   ├── Message         # 消息弹框组件
│   │   └── Select          # 下拉框组件
│   ├── model               # 模块目录
│   │   └── form            # 表单模块
│   └── index.js            # 项目的核心文件
├── .xxxx                   # 各类配置文件(包括语法配置，git配置等)
├── index.html              # 首页入口文件(可添加一些meta信息或统计代码)
├── package.json            # 项目配置文件
├── package-lock.json       # 项目配置版本号文件
└── README.md               # 项目说明文档(markdown格式)
```

#### 主要实现功能

* 下拉框联动选择
* 仿v-if、v-show实现联动显隐
* ...

### 参考资料

* [React Select默认值选中问题](https://www.jianshu.com/p/71872a13e7d9)
