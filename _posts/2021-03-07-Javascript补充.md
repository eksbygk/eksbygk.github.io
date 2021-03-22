---
layout: post
date: 2021-3-07
---

# Javascript补充

JS 新纪录的笔记会补充在此篇文章



1. encodeURIComponent()

   可把字符串作为 URI 组件进行编码

2. toLowerCase()

   将字符串转换为小写。

3. filter()

   `filter()`方法会创建一个新数组，原数组的每个元素传入回调函数中，回调函数中有return返回值，若返回值为true，这个元素保存到新数组中；若返回值为false，则该元素不保存到新数组中；原数组不发生改变。

   ```javascript
    var arr = [1, 2, 4, 5, 6, 9, 10, 15];
    var r = arr.filter(function (x) {
        return x % 2 !== 0;
    });
    r; // [1, 5, 9, 15]
   ```

   https://www.cnblogs.com/aidixie/p/11283714.html

4. 箭头函数
      1. 箭头函数写代码拥有更加简洁的语法；
   2. 不会绑定`this`。

   ```javascript
   function funcName(params) {
      return params + 2;
    }
   funcName(2);
   // 4
   ```

      ```javascript
      var funcName = (params) => params + 2
      funcName(2);
      // 4
      ```
   
      
   
5. 4

6. 