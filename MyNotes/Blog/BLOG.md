# Blog开发总结

## 待解决问题
---

## 已解决问题

遇到问题、解决问题的思路、过程及最终解决办法，和由问题引发的思考；
<!-- 二，对改善项目的思考和运用的技术亮点。 -->

### 1) 网页高度自适应

元素高度自适应窗口高度

设置方法: html, body{height:100%};
自适应元素高度: height: 100%;

### 2) 修改input placeholder样式

在css里写入以下几条

```CSS
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #000;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #000;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #000;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #000;
}
```

### 3) 头像设置

在头像的设置上我考虑了二个问题

* 1,用户上传的头像图片大小与给定的框不一样?
    解决办法: 给img标签设置固定宽度(与预留头像框宽度一致),为使图片不变形,高度auto。
* 2,假设用户上传的头像图不是正方形,而我又想保持图片居中

```less
.photo{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    & img{
        width: 90px;
        height: auto;
        position: absolute;
        top:50%;
        transform: translateY(-50%);
    }
}
```

## IE兼容

### 1)只识别IE浏览器的html脚本写法

<!--[if IE]>
    <script src="js/IE/html5shiv.js"></script>
    ...
<![endif]-->

### 2)html5标签兼容

HTML5新出的标签 header section等在IE下会失效, 兼容方法是 在HTML文件里引入html5shiv.js文件。

```html
<script src="js/IE/html5shiv.js"></script>
```

### 2)png图片兼容

在HTML文件里引入DD_belatedPNG_0.0.8a.js文件, 并创建.fixpng的css class,在使用png图片的HTML标签里添加.fixpng

```js
<script src="js/IE/DD_belatedPNG_0.0.8a.js"></script>
<script>DD_belatedPNG.fix(".fixPng");</script>
```

### 3) 调试工具 firebug与firebug-lite

firebug是用在FireFox浏览器上的调试工具, firebug-lite是用在IE浏览器上的。
调试IE的方法是在HTML文件里引入firebug-lite.js文件, 在IE里按F12。

### 4) 渐变兼容

```md
https://www.cnblogs.com/kyshu/p/9066435.html
```

### 5) border-box不兼容

IE 67不兼容 box-sizing: border-box;

方法: 如果一定要兼容IE67, 只有不使用这个属性。

### 6) 圆角

IE 67不兼容CSS3 border-radius属性,想兼容的办法:
在需要兼容的CSS class属性里添加
behavior: url(ie-css3.htc);

该脚本可同时兼容box-shadow;
不过这个文件的使用要求:

一、只能同时4角圆角，不能单独设置；

二、div上可以正常使用，测试text文本框，会出现异常；

三、CSS文件要和页面在同一目录下，否则无效(这也是我没用的原因);

四、当前元素一定要有定位属性，像是position:relative或是position:absolute属性。

五、z-index值一定要比周围元素的要高;

示例:

```css
box {
    /*其他属性略*/
    border-radius: 15px;
    box-shadow: 10px 10px 20px #000;
    behavior: url(ie-css3.htc); /* 通知IE浏览器调用脚本作用于'box'类 */
}
```

建议：不要考虑兼容IE圆角了，现在大多网站根本不管IE的css3属性，牺牲小部分用户部分体验，满足大部分用户才是明智之举。还有css3.htc这个文件其实里面就是js写的，对浏览器性能影响太大了，所以不建议用。
