# 构建项目目录结构

# 初始化项目

> npm init -y

# ES6 开发环境搭建 

    使用Babel把ES6编译成ES5

### 安装转换插件

  npm install -g babel-cli
  // 项目下还需要
  * npm install --save-dev babel-preset-es2015 babel-cli  
  然后创建 .babelrc 文件
  * 配置转换规则
  ``` 
      {
        "presets": [
          "es2015"
        ],
        "plugins": []
      }  
  ```
    
# ES6 新特性

### 新的声明方式

* var variable
    
* let  
* const

### 结构赋值

> ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。解构赋值在实际开发中可以大量减少我们的代码量，并且让我们的程序结构更清晰。
    
  * 数组
  ``` 
      // 使用解构赋值的方式如下
      let [a,b,c,d] = [1,2,3,4]; // 左右两边解构要保持一致
      let [a,[b,c],d] = [1,[2,3],4]; // 左右两边解构要保持一致
      // 解构的默认值
      let [a=1,b='aaa',c] = [1, ,2]
  ```
  
  * 对象
  ``` 
      // 对象解构  按key取值
      
      let {foo, bar} = {foo: 'Hello', bar: 'World'};
      // let {bar, foo} = {foo: 'Hello', bar: 'World'};
      console.log(foo + bar);
      
      // 有一个坑，请看
      let name; // 先声明了
      // {name} = {name: 'Linth'}; // 错误示范
      ({name} = {name: 'Linth'}); // 正确姿势，需要使用 () 包裹
      console.log(name);
  ```
  
  * 字符串
  ``` 
  
  ```
  
  ### 对象扩展运算符
  
  > 扩展运算符和rest运算符，它们都是…（三个点）。它们可以很好的为我们解决参数和对象数组未知情况下的编程，让我们的代码更健壮和简洁。
  
  ``` 
      // 引用数据类型中的扩展运算符
      let arr1 = ['aaa', 'bbb', 'ccc'];
      // let arr2 = arr1;  // 这样会污染数据源
      let arr2 = [...arr1]; // 使用 ... 扩展运算符
  ```
  
  * rest 运算符
  * for key in obj
  * for val of obj
  
  ``` 
      function useRest(first,...arg) {
        console.log('使用rest运算符,表示除了已经明确的参数其余剩下的参数',arg.length);
        for (let key in arg){
          console.log('for   in  ',key);
        };
      
        console.log('**********************');
        for (let val of arg){
          console.log('let   of  ',val);
        };
      };
      useRest(0,1,2,3,4,5);
  ```
  
  ### 字符串模版
  
  ``` 
      // 字符串模版
      console.log('字符串模版');
      let name2 = "Angellin";
      let someString = `字符串模版可以使用<b>标签</b>、使用$ {}引用数据${name2}、可以使用计算`;
      console.log('someString',someString);
      document.write(someString);
      
      console.log('字符串查找');
      console.log(someString.includes(name2)); // 是否存在
      console.log(someString.indexOf(name2)); // 有--返回位置
      console.log(someString.startsWith(name2));
      console.log(someString.endsWith(name2));
      
      console.log('复制字符串');
      console.log('ABC'.repeat(3));
  ```
  
  ### ES6数字操作
  
  * 二进制和八进制  
  （二进制和八进制数字的声明并不是ES6的特性）
  * 二进制声明：  
  二进制的英文单词是Binary,二进制的开始是0（零），然后第二个位置是b（注意这里大小写都可以实现），然后跟上二进制的值就可以了。  
  
    let binary = 0B010101;  
    console.log(binary); // 21  
  
  * 八进制声明：  
    八进制的英文单词是Octal，也是以0（零）开始的，然后第二个位置是O（欧），然后跟上八进制的值就可以了。
    
    let b=0o666;  
    console.log(b); // 438
   
    
  #### 数字判断和转换
    
  * 数字验证Number.isFinite( xx )
  
  可以使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。
  
  ``` 
    let a= 11/4;
    console.log(Number.isFinite(a));//true
    console.log(Number.isFinite('abcd'));//false
    console.log(Number.isFinite(NaN));//false
    console.log(Number.isFinite(undefined));//false
    
  ```
  
  * NaN验证
  
    NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true。
  
    `console.log(Number.isNaN(NaN));`
  
  * 判断是否为整数Number.isInteger(xx)
  
  ```
      let a=123.1;
      console.log(Number.isInteger(a)); //false
  ```
  
  * 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
  ```
      let a='9.18';
      console.log(Number.parseInt(a)); 
      console.log(Number.parseFloat(a));
  ```
  
  * 整数取值范围操作
    
    整数的操作是有一个取值范围的，它的取值范围就是2的53次方。我们先用程序来看一下这个数字是什么.
```
    let a = Math.pow(2,53)-1; // 整数不能大于2的53次方
    console.log(a); //9007199254740991
```
  在我们计算时会经常超出这个值，所以我们要进行判断，ES6提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。
  
  * 最大安全整数
  ```
    consolec .log(Number.MAX_SAFE_INTEGER);
  ```
  
  * 最小安全整数
  ```
      console.log(Number.MIN_SAFE_INTEGER);
  ```
  
  * 安全整数判断isSafeInteger()
  ```
      let a= Math.pow(2,53)-1;
      console.log(Number.isSafeInteger(a));//false
  ```
  
### ES6中新增的数组知识
  
  * json格式的数组
  ``` 
      // json格式的数组 key是数组0，1，2，3··· 结尾必须有length长度
      let json = {
        0: 'angellin',
        1: 0,
        2: 18,
        length: 3  // 必须要有length 才能转换成功，否则转换后是一个空数组
      }
      
      let arr3 = Array.from(json); // 转换成数组
      console.log('json格式的数组转换结果',arr3);
  ```
  标准的JSON数组格式，跟普通的JSON对比是在最后多了一个length属性。只要是这种特殊的json格式都可以轻松使用ES6的语法转变成数组。在ES6中绝大部分的Array操作都存在于Array对象里。我们就用Array.from(xxx)来进行转换。
  
  * Array.of
    比较eval
  * Array.find
  * fill( )实例方法：
    
    fill()也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
    
    let arr=[0,1,2,3,4,5,6,7,8,9];
    arr.fill('aaa',2,5);
    console.log(arr);
    上边的代码是把数组从第二位到第五位用aaa进行填充。
    
  * 数组的遍历for…of
    ``` 
        for (let item of arr){
            console.log(item);
        }
    ```
    
    * arr.keys()
    ``` 
        // 输出数组索引
        for (let index of arr.keys()){
            console.log(index);
        }
    ```
    
    * arr.entries()
    ``` 
        // 同时输出数组的内容和索引
        for (let [index,val] of arr.entries()){
            console.log(index+':'+val);
        }
    ```
  * entries()实例方法：⚠️
    
    entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。来看下面的代码：
    ``` 
        let arr=['name','sex','old']
        let list=arr.entries();
        console.log(list.next().value);
        console.log(list.next().value);
        console.log(list.next().value);
    ```
  
### ES6中的箭头函数
  
  * 默认值
  
    在ES6中给我们增加了默认值的操作，我们修改上边的代码，可以看到现在只需要传递一个参数也是可以正常运行的。
  ```
      function add(a,b=1){
          return a+b;
      }
      console.log(add(1));
  ```
  
  * 主动抛出错误
    
    throw new Error( xxxx );
    
    在使用Vue的框架中，可以经常看到框架主动抛出一些错误，比如v-for必须有:key值。那尤大神是如何做到的那？其实很简单，ES6中我们直接用throw new Error( xxxx ),就可以抛出错误。
    
  * 函数中的严谨模式
  
  我们在ES中就经常使用严谨模式来进行编程，但是必须写在代码最上边，相当于全局使用。在ES6中我们可以写在函数体中，相当于针对函数来使用。
  > 如果使用了默认值，再使用严谨模式的话，就会有冲突，程序就会运行错误。
  ``` 
    function add(a,b=1){ // ES6中 'use strict'严谨模式可以在函数体内使用，但如果这时再使用默认值将会报错，⚠这是一个坑
        'use strict'
        if(a == 0){
            // 主动抛出错误
            throw new Error('This is error');
        }
         return a+b;
    }
    console.log(add(1));
  
  ```
  
  * 获得需要传递的参数个数fn.length
    
    如果你在使用别人的框架时，不知道别人的函数需要传递几个参数怎么办？ES6为我们提供了得到参数的方法(xxx.length).它得到的是必须传入的参数个数。
    `console.log(add.length);`
    
  * 箭头函数
    ``` 
        // 使用箭头函数时：函数体只有一条语句不用使用{}
        var add = (a, b) => a+b;
        // 使用箭头函数时：函数体有多条语句时要使用{}
        var add = (a, b) => {return a+b};
    ```
    ----
    > 箭头函数中不可加new，也就是说箭头函数不能当构造函数进行使用。
    ----
    
### ES6中的函数和数组补漏
  
  * 对象的函数解构
    > 我们在前后端分离时，后端经常返回来JSON格式的数据，前端的美好愿望是直接把这个JSON格式数据当作参数，传递到函数内部进行处理。ES6就为我们提供了这样的解构赋值。
  ``` 
    let json = {
        a:'对象',
        b:'解构'
    }
    function fun({a,b='jspang'}){
        console.log(a,b);
    }
    fun(json);
    
  ```
  
  * 数组的函数解构
    > 函数能解构JSON，那解构数组就更不在话下了，看下边的代码。先声明一个数组，然后写一个方法，最后用…进行解构赋值。
    
  ``` 
    let arr = ['数组的','函数','解构'];
    function fun(a,b,c){
        console.log(a,b,c);
    }
    fun(...arr); // 数组的函数解构
  ```
    
  * in 的用法  
    > 用来判断对象或者数组中是否存在某个值的。
    
    * 对象判断
    ``` 
        
    ```
    
    * 数组判断  
      先来看一下ES5判断的弊端，以前会使用length属性进行判断，为0表示没有数组元素。但是这并不准确，或者说真实开发中有弊端。
    ``` 
    let arr=[,,,,,];
    console.log(arr.length); //5
    console.log(arr.length); //5
    ```  
    上边的代码输出了5，但是数组中其实全是空值，这就是一个坑啊。那用ES6的in就可以解决这个问题。
    ``` 
        let arr=[,,,,,];
        console.log(0 in arr); //false
        let arr1=['web','H5'];
        console.log(0 in arr1);  // true
    ```
    
  * 数组的遍历方法
  
    * forEach
    ``` 
       let arr=['js','Html','css'];
       arr.forEach((val,index)=>console.log(index,val)); 
    ```
    
    * filter
        `arr.filter(x=>console.log(x));`
        
    * some  
        `arr.some(x=>console.log(x));`
    * map  
        `console.log(arr.map(x=>'web'));`
        
  * 数组转换成字符串
    * toString 
        `arr.toString(); // 直接用逗号隔开` 
    * join('-'); 
        `arr.join('-'); //使用指定拼接符-`
    
### ES6 中对象

  * 对象赋值  
    ES6允许把声明的变量直接赋值给对象，看下面的例子。
    ``` 
        let name="张三";
        let skill= 'web';
        //var obj= { // 不再需要这么麻烦
        //        name: name,
        //        skill: skill
        //    };
        var obj= {name,skill}; //变量直接赋值给对象 
        console.log(obj);  //Object {name: "张三", skill: "web"}
    ```
  * 对象Key值构建  
    程序开发时有时需要在后台取出key值，而不是我们前台定义好的，这时候我们如何构建我们的key值那。比如我们在后台取了一个key值，然后可以用[ ] 的形式，进行对象的构建。
    ``` 
        let key='skill';
        var obj={
            [key]:'web'
        }
        console.log(obj.skill);
    ```
  * 自定义对象方法 (非ES6新知识)
    
  * Object.is() 对象比较  
    对象的比较方法,以前进行对象值的比较，经常使用===来判断  
    ``` 
      var obj1 = {name:'张三'};
      var obj2 = {name:'张三'};
      console.log(obj1.name === obj2.name);//true
    ```
    那ES6为我们提供了is方法进行对比。
      `console.log(Object.is(obj1.name,obj2.name)); //true`
    
    * === 和 is方法的区别是什么
        > === 同值相等  
        > is 严格相等  
    ``` 
      console.log(NaN === NaN ); //false
      console.log(+0 === -0);  //true
      console.log(Object.is(NaN,NaN)); // true
      console.log(Object.is(+0,-0)); // false
    
    ```
  * Object.assign() 合并对象  
    操作数组时我们经常使用数组合并，那对象也有合并方法，那就是assgin( )。
    ``` 
        var a={a:'JS'};
        var b={b:'Html'};
        var c={c:'web'};
        let d=Object.assign(a,b,c)
        console.log(d);
    ```
  * Symbol 在对象中的作用
    > 全局标记 有保护作用
    
    * 声明Symbol
    ``` 
      var a = Symbol('web前端开发');
      console.log(a); // Symbol d的打印
      console.log(a.toString()); // 字符串
    ```
  
    * Symbol在对象中的应用
    ```
      var aaa = Symbol();
      var obj={
        [aaa]:'WEB'
      }
      console.log(obj[aaa]);
    ```
    
### Set 和 WeakSet 数据解构  
    
  > Set数据结构，注意这里不是数据类型，而是数据结构。它是ES6中新的东西，并且很有用处。Set的数据结构是以数组的形式构建的。
    new Set([]);
    new WeakSet(); // WeakSet 必须使用add方法添加值
  * Set的声明
    ```
     let setArr = new Set(['Web','Html','JS','Web']);
     console.log(setArr);//Set {"Web", "Html", "JS"}        
    ```
    Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。
    
    * Set 的增删查
      * 追加 add
        在使用Array的时候，可以用push进行追加值，那Set稍有不同，它用更语义化的add进行追加。
        `setArr.add('es6');`
        
      * 删除 delete
        ``` 
          setArr.delete('Web');
        ```
        
      * 查找 has  
        用has进行值的查找，返回的是true或者false。
        `setArr.has('JS');`
        
      * 删除 clear
        `setArr.clear(); // 删除全部`
        `setArr.delete('Web'); // 删除指定值` 
        
    * set的循环 for…of…循环
    * forEach循环
    * size属性

  * WeakSet的声明  
    WeakSet里边的值也是不允许重复的,但是要内存空间也相同，才能去重；如果内存空间不同，将会有相同的key：value
    ``` 
      let weakObj = new WeakSet();
      let obj1 = {a: 'aaa', b: 'bbb'};
      weakObj.add(obj1);
    ```
    
### map 数据结构

  map是一种灵活，简单的适合一对一查找的数据结构。
    
  `var map = new Map();`
    
  * set 增
    map.set(key,'value');
    
  * get 取
    map.get(key);
  
  * delete | claer 删
    map.delete(key); // 删除特定值
    map.clear(); // 删除全部
  
  * size 属性
    map.size; // 返回map的长度
  
  * has 查
    map.has(key); // return true or false
  
  
### 用Proxy进行预处理
  > 什么是钩子函数。当我们在操作一个对象或者方法时会有几种动作，比如：在运行函数前初始化一些数据，在改变对象值后做一些善后处理。这些都算钩子函数，Proxy的存在就可以让我们给函数加上这样的钩子函数，你也可以理解为在执行方法前预处理一些代码。你可以简单的理解为他是函数或者对象的生命周期。
    
   ``` 
       // 用 Proxy 进行预处理
       let pro = new Proxy({
         // 对象体
         add: function(num) {
           console.log(num+num);
           return num + num;
         }
       },{
         // 预处理机制
         //get 开始得到对象体之前预先处理执行
         get: function(target, key, property) {
           console.log('Proxy');
           return target[key];
         }
       })
       
        pro.add(1000); 
   
   ```
  * get
    get属性是想要得到某对象属性值时预处理的方法，接受三个参数
  * set 
    set属性是想要改变Proxy属性值时，进行的预先处理。它接收四个参数。
    ``` 
        target:目标值。
        key：目标的Key值。
        value：要改变的值。
        receiver：改变前的原始值。
    ```
  
  * apply的使用
    ⚠️ return Reflect.apply(...arguments); // 暂时先记住就行，之后深入
    
    ``` 
        let target = function () {
          return 'bangbangbang!!!';
        };
        
        let handler = {
          apply(target,ctx,args){
            console.log('do apply');
            return Reflect.apply(...arguments); // 同样的必须要有ruturn
          }
        }
        
        let pro = new Proxy(target, handler);
         console.log(pro());
    
    ```
    
### promise对象的使用
  
  > ES6中的promise的出现给我们很好的解决了回调地狱的问题，在使用ES5的时候，在多层嵌套回调时，写完的代码层次过多，很难进行维护和二次开发，ES6认识到了这点问题，现在promise的使用，完美解决了这个问题。那我们如何理解promise这个单词在ES5中的作用呢，可以想象他是一种承诺，当它成功时执行一些代码，当它失败时执行一些代码。它更符合人类的行为思考习惯，而不在是晦涩难懂的冰冷语言。

  * promise的基本用法
    
    promise执行多步操作非常好用，那我们就来模仿一个多步操作的过程，那就以吃饭为例吧。要想在家吃顿饭，是要经过三个步骤的。
    
    1 洗菜做饭。  
    2 坐下来吃饭。  
    3 收拾桌子洗碗。  
    这个过程是有一定的顺序的，你必须保证上一步完成，才能顺利进行下一步。我们可以在脑海里先想想这样一个简单的过程在ES5写起来就要有多层的嵌套。那我们现在用promise来实现。
  
  ``` 
    let state=1;
    function step1(resolve,reject){
        console.log('1.开始-洗菜做饭');
        if(state==1){
            resolve('洗菜做饭--完成');
        }else{
            reject('洗菜做饭--出错');
        }
    }
    function step2(resolve,reject){
        console.log('2.开始-坐下来吃饭');
        if(state==1){
            resolve('坐下来吃饭--完成');
        }else{
            reject('坐下来吃饭--出错');
        }
    }
    function step3(resolve,reject){
        console.log('3.开始-收拾桌子洗完');
         if(state==1){
            resolve('收拾桌子洗完--完成');
        }else{
            reject('收拾桌子洗完--出错');
        }
    }
    
    new Promise(step1).then(function(val){
        console.log(val);
        return new Promise(step2);
    }).then(function(val){
         console.log(val);
        return new Promise(step3);
    }).then(function(val){
        console.log(val);
        return val;
    });
  ```  
    
### class 类的使用
  
  * 类的声明
    
    先声明一个最简单的coder类，类里只有一个name方法，方法中打印出传递的参数。
  ```  
    class Element{
        name(val){
            console.log(val);
        }
    }    
  ```
  
  * 类的使用(实例化类)
    
  ```
    let ele = new Element;
    ele.name('实例化类');
  ```
  
  * 类的传参
  
  在类的参数传递中使用constructor( )进行参数接收。传递参数后可以直接使用this.xxx进行调用。  
  ``` 
    class Element{
        constructor(parm1,parm2){ // 使用constructor 接收类的参数
            this.a = parm1;
            this.b = parm2;
        }
        name(val){
            console.log(val+this.a);
            return val+this.a
        }
    }

    let ele=new Element(12,3); // 实例化的时候传入类的实参
    ele.name(3); // 调用类的方法

  ```
  
  * class类的继承
        
  ``` 
    class Plane extends Element{ // 继承的写法
        subtract() {
          console.log('this.a',this.a);
          return this.a;
        }
    }
      
    let plane = new Plane(6,9); // 
    plane.subtract(99);
    plane.name(100);
  ```
  
### 模块化操作

  * export :负责进行模块化，也是模块的输出。
  
    * as 的用法  
    > 有些时候我们并不想暴露模块里边的变量名称，而给模块起一个更语义话的名称，这时候我们就可以使用as来操作。
    
    * export default的使用
      
      一个js文件只能有一个export default  
      可以 有多个export  
      * export 
        import 时使用 {}
      * export default 
        import 时 直接引入
        import name from 'fileSrc'
      
  
  * import : 负责把模块引，也是模块的引入操作。
  
  
    
    
  