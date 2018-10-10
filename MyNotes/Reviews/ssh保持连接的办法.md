ssh连接每隔一段时间没有输入就断开, 解决的办法如下

一,服务端配置
进入云主机, 输入
```
sudo vi /etc/ssh/sshd_config
```

下拉找到
```
#ClientAliveInterval 0
#ClientAliveCountMax 3
```

按i进入vi编辑模式, 修改这二行为

```
ClientAliveInterval 60  #服务端向客户端主动请求响应的间隔, 单位秒
ClientAliveCountMax 10  #服务端向客户端发出请求后没有得到响应的次数, 达到设置次数就自动断开
```

按esc, 输入:wq 保存并退出, 然后重启ssh连接, 输入命令

```
service sshd restart
```
回车

二,客户端配置

找到本机文件 /etc/ssh/ssh_config,编辑,在末尾添加
```
TCPKeepAlive=yes
ServerAliveInterval 60      #客户端主动向服务端请求响应的间隔
ServerAliveCountMax 10      #服务端向客户端发出请求后没有得到响应的次数, 达到设置次数就自动断开
```

主动断开连接
方法1:
输入
```
logout
```
回车

方法2:
Ctrl+D (Windows) 或 Control+D (Mac)
本文参考: [SSH连接总是定期断掉的解决办法](https://blog.csdn.net/quqi99/article/details/51434248);
[ubuntu Mac 上ssh保持会话连接](https://blog.csdn.net/sweettool/article/details/71588902)。
