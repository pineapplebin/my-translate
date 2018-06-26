# 22 索引集合

## 22.1 数组对象

### 22.1.3 数组原型对象的属性

#### 22.1.3.9 Array.prototype.findIndex(*predicate* [, *thisArg*])

*NOTE 1*
> *predicate*应为一个接受三个参数并且返回一个强制转换成布尔类型`true`或`false`结果的函数。`findIndex`会从0索引开始，对数组内每个元素调用一次*predicate*，直到*predicate*调用结果为`true`。如果找到了这样一个元素，`findIndex`将立即返回该元素对应的索引值。否则，`findIndex`将返回-1。

> 如果提供了*thisArg*参数，则该参数将作为每一次*predicate*调用时的`this`值。如果没有提供，则相应的值为`undefined`。

> *predicate*执行时会传入三个参数：数组元素本身、数组元素对应的索引值，和被遍历的数组对象。

> `findIndex`不会直接改变正在调用的数组对象，但有可能会在*predicate*执行时候被改变。

> 被`findIndex`处理的元素区间范围会在第一次调用*callbackfn*之前就设置好。开始执行`findIndex`之后才被添加进数组的新元素不会被*callbackfn*调用到。如果已存在的元素被改变，他们被传到*predicate*的值将是`findIndex`访问他们时的值。

当`findIndex`被传入一个或两个参数执行时，将按下面步骤处理：

1. Let *O* be ? `ToObject`(**this** value).
2. Let *len* be ? `ToLength`(? `Get`(*O*, **"length"**)).
3. If `IsCallable`(*predicate*) is **false**, throw a **TypeError** exception.
4. If *thisArg* was supplied, let *T* be *thisArg*; else let *T* be **undefiend**.
5. Let *k* be 0.
6. Repeat, while *k* < *len*
    1. Let *Pk* be ! `ToString`(*k*).
    2. Let *kValue* be ? `Get`(*O*, *Pk*).
    3. Let *testResult* be `ToBoolean`(? `Call`(*predicate*, *T*, <<*kValue*, *k*, *O*>>)).
    4. If *testResult* is **true**, return *k*.
    5. Increase *k* by 1.
7. Return -1.

*NOTE 2*
> `findIndex`特意设计成是通用的方法，其没有要求`this`的值一定为**Array**对象。因此，此方法可以传递给其他类型的对象使用。
