Terminal进入zsh的配置文件
vi ~/.zshrc

进入后写入 (alias缩写)

alias pc="xxxxxxxx"

然后输入 :wq 保存并退出 .zshrc文件, 再输入

source ~/.zshrc 回车

然后每次输入 pc 就等同于输入了"xxxxxxx"一串命令。

如果用的是bash, 就是 .bashrc文件