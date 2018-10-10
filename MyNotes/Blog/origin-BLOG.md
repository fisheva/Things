# Blog开发总结

## 待解决问题

### 1) 一个个布局问题

main-sorts和scroll-bg 都在main里, scroll-bg右浮动, 为什么却不能显示出来?


### 4) email选中显示问题

@import "1.png"

我想达到的效果是, 当email文字有被选择部分时, 即使鼠标离开了email标签的位置, 高亮email里的文字(与hover时相同)。

### 5) transiton 刷新会执行一遍的问题

为了使页面的按钮hover显示过程平缓一些,我给每个按钮的CSS都添加了transition:0.25s属性,让我没想到的是 刷新页面时, 每个被设置了transition属性的元素都会在刷新这个过程中 走一遍transition的渐变动画。所以我想到了不在CSS文件里写好transition属性，而是在JS里写个函数，在页面加载完之后，给每个需要渐变效果的元素在行间添加transition属性。

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
