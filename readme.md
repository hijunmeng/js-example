## 前端js相关用法记录及验证

mkdir js-example
cd js-example
npm init -y //-y表示所有选项都是yes,否则就需要用户一个一个确认
这时可以看到多了一个文件package.json
npm install moment --save //参数--save 可以让依赖信息保存到package.json中的dependencies字段，如果为--save-dev,则会增加devDependencies字段
这时可以看到package.json多了"dependencies"字段，同时还多出了node_modules文件夹，里面下载了moment这个第三d方库
dependencies表示项目正常运行需要的库，而devDependencies则表示项目开发时的库，比如gulp,压缩等，这些只在开发阶段有用，在项目部署后是不需要的

后面如果要引用其他第三方库，可以直接修改package.json里的依赖，之后npm install 即可，npm install 会根据package.json里的配置进行下载安装


新增一个index.js文件，里面先写入一个console.log("hello")

命令行执行 node index.js ，则会看到打印hello










https://www.cnblogs.com/limitcode/p/7906447.html
