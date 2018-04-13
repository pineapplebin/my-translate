<!-- 
source: https://css-tricks.com/almanac/properties/p/perspective/
-->

# [Perspective](https://css-tricks.com/almanac/properties/p/perspective/)

CSS属性`perspective`通过改变Z面和用户的距离来给元素作出位于一个三维空间的效果。

展示的效果是由该属性的值所决定。给的值越小，则视角离Z面越近，而且视觉效果越明显。给的值越大，则视觉效果越不明显。

__重要：__注意perspective属性不会影响元素的渲染，只是会给其子元素启用三维空间。这是`transform: perspective()`和`perspective属性`之间的主要区别。The first gives element depth while the later creates a 3D-space shared by all its transformed children.

```css
/**
 * Syntax
 * perspective: none | <length>
 */
.parent {
    perspective: 1000px;
}
.child {
    transform: rotateY(50deg);
}
```

<hr/>

示例: [click](https://codepen.io/HugoGiraudel/pen/JImvb)

上面示例展示了函数与属性的不同：
- 左边部分，能看到是在父元素中应用了属性(`perspective: 50em`)，和子元素应用了(`transform: rotateY(50deg)`)
- 右边部分中，perspective则是通过直接在子元素的transform中应用(`transform: perspective(50em) rotateY(50deg)`)

这展示了通过在父元素中设置perspective，使得所有的子元素位于同一个三维空间达到拥有同一个消失点。

<hr/>

下面来尝试一些更炫酷的效果，一个拥有3D效果和透视的方块。

示例: [click](https://codepen.io/HugoGiraudel/pen/GLbca)

方块的实现是：依靠了两个嵌套的容器（其中一个给方块提供了透视，另一个则包含了所有的面）和六个元素作为方块的面。每个元素在三维空间中被设置了包含`translate`和`rotate`的`transform`（例如：`transform: rotateX(90deg) translateZ(1em)`）

<hr/>

让我们以一个基于现实场景的示例来结束吧：以透视和变换实现的一堵拥有图片和文字的墙

示例: [click](https://codepen.io/HugoGiraudel/pen/fvopl)

当光标回到墙体时，子元素会旋转回正常位置，并且取消效果。

__重要：__使用了一个值不为*0*或*none*的`perspective`会产生一个新的层叠上下文。

## 关联属性

- [perspective-origin](http://css-tricks.com/almanac/properties/p/perspective-origin/)
