# YC-skeleton

> 骨架屏生成工具

> 参考自awesome-skeleton 
> 并在原有基础上修改
> 在原有基础上优化了一些文案类，增加过滤标签，让骨架屏看起来更柔和，更贴近理想中展现

## 安装

```
git clone https://github.com/LiZheGuang/YC-skeleton.git

cd YC-skeleton && npm install 

```

## 使用

此git项目不需要引入到业务中，作为独立项目，填写对应的抓取路径即可进行骨架屏生成。

```
> cd demo 
npm run dev  // 触发自动化构建，把SRC内的抓取逻辑build到dist文件内
node index.js //指向骨架屏抓取

```

生成的html与base64图片会在skeleton-output文件夹内，当然后期也可以在outpath输出到你所在的项目。

### 参数说明

后期补充

