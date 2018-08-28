# ajax
学习前端处理数据的三个阶段:
* 一 数据直接写死在页面中;
* 二 自定义数据(数组储存数据), 通过动态生成的标签, 展示数据.
* 三 向后端请求数据

#### 请求响应的过程
* 一 输入网址 https://www.baidu.com/ (index.html)括号里的一般隐藏了.
* 二 网址通过DNS解析, 解析成ip地址 119.75.217.109
* 三 通过ip找到服务器.
* 四 服务器安装了服务器软件, 用来响应客户端请求的内容.

#### 向后端请求数据
请求html文件, 可以在地址栏中写入html的请求地址. 假设后端用的语音是PHP, 页面中要请求一个php文件拿数据, 在页面中发起请求, 使用ajax, 可以理解为是一个信使.

发送请求, 会设置请求头文件
* host
* user-agent
* Content-type

### ajax
**ajax**: 即"Asynchronous Javascript And XML"(异步Javascript和XML), 是指一种创建交互式网页应用的网页开发技术.拿到数据, 把数据渲染在页面中, 做到无刷新页面更新数据.

后端会告诉你发送请求的地址, 判断用户名是否存在, 用在登录注册页面.

请求参数:
* user 用户名 必须的
* password 密码 可选

响应数据 json
code 1|0 1代表用户名存在, 0代表可以注册
message 简短消息

前后端会约定一个key值来存不同的数据, key值尽量要有语义化, 这个key值同城称为 字段.

总结:
通过ajax去请求一个后端提供的地址, 后端需要带上参数, 你要给参数.
请求完成后, 会触发一个函数, 通过这个函数来获取响应的数据, 拿这个数据做判断或展示在页面中.

#### 使用ajax发送数据, 做一些什么事情?

**jq中**:
1. 使用$.ajax这个函数发送数据
2. 发送地址, 发送数据
3. 监控响应完成的函数

**原生中**:
1. 初始ajax对象; ajax对象中readyState记录0
2. 准备地址, 准备数据; ajax对象中readyState记录1
3. 请求地址,发送数据; ajax对象中readyState记录2
4. 接收数据, 如果数据太大, 会分布传输; ajax对象中readyState记录3
5. 接收数据完成. ajax对象中readyState记录4

#### HTTP状态码
[http状态码查询](http://baike.baidu.com/link?url=TgPSusNUQomDCXb-jP2fVA9QD45s6yEhALA9M6KS_gDbCNEtnGaVImg29L7nUEpscLBQJHH8i5Qykvjg44IA5BUTT5ZqAbjOJ7L9R-1x4wOobPbRHv00FuCYY5FM1T1w)

2 开头的状态码  表示成功
3 开头的状态码  表示缓存重定向
4 开头的状态码  表示资源不存在
5 开头的状态码  表示服务器出现问题

#### jQuery ajax函数原理
```js
//jQuery ajax函数的参数
ajax({
	url: 请求地址 必填,
	data: 数据 可选,
	method: 请求方式 可选 默认是get
})
```
