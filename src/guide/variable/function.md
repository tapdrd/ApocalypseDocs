---
title: 功能变量
icon: f
category:
  - 变量
tag:
  - 变量
  - 功能变量
  - 核心功能
---

## 图片变量
[数据目录](/get-started/#数据目录)
~~~
[Apo:pic=xxxx]
// 需要将图片放在插件数据目录 'image' 文件夹内`

[Apo:draw]
// 开启部分绘制功能后, 需要用此变量才能绘制图片

[color=十六进制颜色]内容[/color]
// 内容指定颜色, 例子：[color=#7C4DFF]这是一段不一样颜色的文字[/color]
~~~

## 替换变量
~~~
[Apo:dontReplace]
// 填在任意位置, 之后(插件/拓展)输出替换,不会替换此文本里的内容
~~~

## 文本变量

天启内部会将`[enter]`,`[`,`]`进行转码<br>
如果你要输出以上代码需要使用以下变量
~~~
[&90;1]
// [enter]

[&90;2]
// [
[&90;3]
// ]
~~~

## 换行变量

~~~
[Apo:br] 
// 换行
~~~

## 运算变量

~~~
<APo:1>内容</APo:1>
// 如果内容为空, 不显示

<APo:2>内容</APo:2>
// 将里面的内容进行运算, 小数显示

<APo:3>内容</APo:3>
// 将里面的内容进行运算, 整数显示

<APo:100>内容</APo:100>
// 将里面的内容进行格式化, 显示[未开启格式化则无效]
// 格式化开启位置：控制台-> 基础-> 往后翻两页 -> 左上角 数据简化显示
~~~


## 临时变量
::: info
临时变量一般会在自定义回复 __内置__ 
:::
~~~
<Apo:temp,type=variable,msg=内容>
// 一般仅在当前自定义回复里可用此变量, 复制到其他地方失效

<Apo:temp,type=pvariable,msg=内容>
// 自定义属性临时变量, 可用于 装备/怪物 自定义回访内
~~~
