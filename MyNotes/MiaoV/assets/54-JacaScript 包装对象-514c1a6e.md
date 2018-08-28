# JavaScript 面向对象

**面向对象** (Object Oriented, OO) 是软件开发方法.
**面向对象程序设计** (Object Oriented Programming, OOP)

传统面向语言中有 "类", "对象"概念.
JS(es5.1)中没有"类"的概念, es6中有了"类"的概念.

> 例:做一个学员信息录入系统,每个学员都有( 姓名 性别 年龄 )

![](assets/53-JavaScript 面对对象-47bacabb.png)![](assets/53-JavaScript 面对对象-fd11cf01.md)
```js
var user1 = {
	name:"赵李",
	gender:"男",
	age:27
};

var user2 = {
	name:"续张靖",
	gender:"女",
	age:23
};

 var user3 = {
 name:"周志康",
 gender:"男",
 age:25
 };

 var user4 = {
 name:"赵月如",
 gender:"女",
 age:26
 };
```
> 如果有1000个学员, 我们要创建1000个对象
> 所以创建一个函数, 来创建对象
```js
//工厂函数
function createUserInfo(name,gender,age){
	var obj = {};
	obj.name = 	name;
	obj.gender = gender;
	obj.age = age;

	return obj;
}

//创建对象
var user1 = createUserInfo("赵李", "男", 27);
```
#### new 创建自定义的数据类型
new 一元运算符 运算函数
    使用new调用函数:
1. 在函数中隐式的创建对象
2. 把函数中的this指向创建的对象
3. 通过this给对象添加属性或方法
4. 把对象自动return出去

```js
function createUserInfo(name,gender,age){
	//相当于：var obj = {}; this = obj;
	this.name = name;
	this.gender = gender;
	this.age = age;

	//return obj  把对象自动return出去了.
}

//创建对象
var user2 = new CreateUserInfo("续张靖", "女", 23);
```

**new 调用函数后始终返回的是一个对象类型的值**
当new调用的函数里显示的使用了return
- 如果return后面的值是非对象类型,则通过new调用函数,得到的是一个实例对象.
- 如果return后面的值是对象类型, 则通过new调用函数, 得到的也是这个显式return的对象, 而不是实例对象.

使用new调用的函数, 称之为**构造函数**
通常我们把创建并初始化对象(实例)的函数称为:**构造函数**.

构造函数的命名约定 大驼峰 首字母大写

通过构造函数创建的对象也称为构造函数的**实例**
通过构造函数创建对象的过程也称为**实例化**
```js
function CreateUserInfo(name,gender,age){
	this.name = name;
	this.gender = gender;
	this.age = age;

	return [a,b,c];
}

//创建对象
var user2 = new CreateUserInfo("续张靖", "女", 23);
console.log(user2); // [a,b,c]
```
> 下面给每个学员添加几个相同的属性
```js
function CreateUserInfo(name,gender,age){
	this.name = name;
	this.gender = gender;
	this.age = age;
	//写在这里作为隐式创建的对象的属性，那么每一个对象都拥有自己的city属性和coding方法
    this.city = "北京";
    this.coding = function (){
        console.log("我要学编程");
    };
}
```
> 这种方式的最大问题是,每创建一个实例,都有其自己的city属性,和coding方法,虽然它们的值相等, 但在创建对象时候, 都要去创建共享的属性和函数.所以十分浪费内存.

```js
var place = "北京";
function fn(){
    console.log("我要学编程");
}
function CreateUserInfo(name,gender,age){
	this.name = name;
	this.gender = gender;
	this.age = age;
	//写在这里作为隐式创建的对象的属性，那么每一个对象都拥有自己的city属性和coding方法
    this.city = place;
    this.coding = fn;
}
```
> 这个方式把值相同的属性摘出来作为全局变量和全局函数.这样节省了内存空间,但导致非实例对象也可以访问这个变量和函数.

#### prototype
每创建一个函数,函数下都有一个属性,叫prototype(原型),prototype对应的值是一个对象.
```js
console.dir(CreateUserInfo);
```

prototype的作用:挂在某个构造函数prototype下的属性和方法,通过该构造函数创建出来的对象都可以共用这些属性和方法.
```js
function CreateUserInfo(name,gender,age){
	this.name = name;
	this.gender = gender;
	this.age = age;
}

//把实例共享的属性和方法, 挂在原型上
CreateUserInfo.prototype.city = "北京";
CreateUserInfo.prototype.coding = function(){
    console.log("我要学编程");
};
```
#### __ proto __
每个对象都有一个属性 __ proto __, 指向创建这个对象的构造函数的prototype.

当我们调用一个对象的属性或方法时:
1. 首先会在该对象自身上查找;
2. 如果自身没有找到, 找该对象__ proto __对应的构造函数的prototype上
3. 如果构造函数的prototype上没有找到, 再找这个prototype的__ proto __指向的构造函数的prototype.
