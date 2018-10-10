# XML

## 什么是 XML?

- XML 指可扩展标记语言（EXtensible Markup Language)。
- XML 是一种很像 HTML 的标记语言,是 HTML 的补充。
- XML 的设计宗旨是传输数据，而不是显示数据。
- XML 和 HTML 为不同的目的而设计：
    XML 被设计用来传输和存储数据，其焦点是数据的内容。
    HTML 被设计用来显示数据，其焦点是数据的外观。
- HTML 旨在显示信息，而 XML 旨在传输信息。
- XML 标签没有被预定义。您需要自行定义标签。

## XML和HTML的差异

- XML 声明
    XML 声明文件的可选部分，如果存在需要放在文档的第一行，如下所示：

```xml
<?xml version="1.0" encoding="utf-8"?>
```

```md
以上实例包含 XML 版本（

UTF-8 也是 HTML5, CSS, JavaScript, PHP, 和 SQL 的默认编码。
```

- XML 标签没有被预定义。您需要自行定义标签。
- 所有 XML 元素都必须有一个关闭标签
    在 HTML 中，某些元素不必有一个关闭标签：
    ```html
    <p>This is a paragraph.
    <br>
    ```
    在 XML 中，省略关闭标签是非法的。所有元素都必须有关闭标签：
    ```xml
    <p>This is a paragraph.</p>
    <br />
    ```
    注释：从上面的实例中，您也许已经注意到 XML 声明没有关闭标签。这不是错误。声明不是 XML 文档本身的一部分，它没有关闭标签。

- XML 标签对大小写敏感
    XML 标签对大小写敏感。标签 <Letter> 与标签 <letter> 是不同的。
    必须使用相同的大小写来编写打开标签和关闭标签：

```xml
<Message>这是错误的</message>
<message>这是正确的</message>
```

- 实体引用
    在 XML 中，一些字符拥有特殊的意义。

    如果您把字符 "<" 放在 XML 元素中，会发生错误，这是因为解析器会把它当作新元素的开始。

    这样会产生 XML 错误：
    ```xml
    <message>if salary < 1000 then</message>
    ```
    为了避免这个错误，请用实体引用来代替 "<" 字符：
    ```xml
    <message>if salary &lt; 1000 then</message>
    ```
    在 XML 中，有 5 个预定义的实体引用：

    &lt;	<	less than
    &gt;	>	greater than
    &amp;	&	ampersand
    &apos;	'	apostrophe
    &quot;	"	quotation mark

    注释：在 XML 中，只有字符 "<" 和 "&" 确实是非法的。大于号是合法的，但是用实体引用来代替它是一个好习惯。

- 在 XML 中，空格会被保留
    HTML 会把多个连续的空格字符裁减（合并）为一个,在 XML 中,文档中的空格不会被删减。