# jQuery

**API** :（Application Programming Interface,应用程序编程接口）是一些定义好的函数。

我们只需要学会如何使用这些函数。无需访问源码，或理解内部工作机制的细节。

##### jQuery分:
**production版** :  生产环境  让用户能访问到的环境   生产环境的代码需要压缩 文件名会带上min.

**development版** : 开发环境  开发人员用的环境.

通常用的是3.2.0 版本 不兼容ie8以下的; 如果要兼容低版本浏览器 建议选择 1.8.X 版本。

使用时需使用script的src引入库。

GitHub jQuery仓库 https://github.com/jquery/jquery

## jQuery的整体架构
1. 在匿名函数中暴露一个函数, 挂在window上, 把window作为参数传入, 提高一些性能.
2. jQuery( ) \$( )返回的是init构造函数生成的实例, 所有的方法都挂在init( )构造函数上(也挂在jQuery( )上). 所以通过jQuery( )和$( )包裹的元素才能使用jQuery的方法.
3. 每个方法结尾都return this可以方便链式操作;

注意:在一些IE6,7中 undefined可以被改写.
```js
(function(window){
	var jQuery = function(selector){
		return new jQuery.prototype.init(selector);
	};
	//原型
	jQuery.prototype = {
		constructor: jQuery,
		css:function () {

		}
	};

	var init = jQuery.prototype.init = function (selector) {

	};
	//把jQuery的原型对象赋给init的原型
	init.prototype = jQuery.prototype;

	window.jQuery = window.$ = jQuery;

	jQuery.fn = jQuery.prototype = {
		constructor:jQuery,
		
		css:function () {
			return this;
		},
		attr:function () {
			return this;
		},
		data:function () {
			return this;
		}
	}
})(window);
```
