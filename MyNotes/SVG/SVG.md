# SVG

SVG 意为可缩放矢量图形（Scalable Vector Graphics）。
SVG 使用 XML 格式定义图像。

## SVG的CSS属性
SVG的CSS属性与控制HTML的CSS 有所不同。

fill: 填充色. 类似background-color和color(文字颜色)
stroke: 描边色. 类似border-color
stroke-width: 边框宽度. 类似border-width

### <text>标签

```xml
<svg width="300" height="180">
  <text x="50" y="25" class="word">Hello World</text>
</svg>
```
上面的class .word, font属性(font-style | font-weight | font-size/line-height | font-family)是可以完全用的, 但是添加 字体颜色不能用color,得用fill; 而且SVG的<text>标签可以做出描边字体,这是与HTML不同的地方。
