# Vue
### {{ message }}
Mustache(大胡子)标签将会被替代为对应数据对象上 message 属性的值。无论何时，绑定的数据对象上 message 属性发生了改变，插值处的内容都会更新

## 指令
指令是行间内特殊的属性，以v-开头，指令的职责就是当其表达式的值改变时相应地将某些行为应用到DOM 上

### v-for
在模板中循环数组和对象
v-for = 'value,key in 数组|对象'

### v-bind
在行间动态的绑定数据
v-bing:自定义行间属性  简写:

### v-if
在行间做判断

### v-on
vue中绑定事件
    v-on:事件名="事件处理函数名字"

### v-model
在vue中提供了一个指令帮助表单空间
(表达控件有)input:text radio checkbox... select textarea

绑定value,也可以监控value的变化

你可以用v-model指令在表单控件元素上创建双向数据绑定. 它会根据控件类型自动选择正确的方法来更新元素. 尽管有些神器, 但v-model本质上不过是语法糖, 它负责监听用户的输入事件以更新数据, 并特别处理一些极端的例子.

MVVM
M => Model => js对象
V => View => html模板
VM => Vue
