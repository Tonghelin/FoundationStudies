//
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

console.log('**********************');
console.log('// 数组解构');
// 使用解构赋值的方式如下
// 数组解构  取值按顺序
let [a,b,c,d] = [1,2,3,4]; // 左右两边解构要保持一致
let [a1,[b1,c1],d1] = [11,[22,33],44]; // 或者这样

console.log('// 可以配置默认值');
// 可以配置默认值
let [a2=1,b2='aaa',c2] = [111, ,222]

console.log('a', a);
console.log('b', b);
console.log('c', c);
console.log('d', d);

console.log('a1', a1);
console.log('b1', b1);
console.log('c1', c1);
console.log('d1', d1);

console.log('a2', a2);
console.log('b2', b2);
console.log('c2', c2);


console.log('// 对象解构');
// 对象解构  按key取值

let {foo, bar} = {foo: 'Hello', bar: 'World'};
// let {bar, foo} = {foo: 'Hello', bar: 'World'};
console.log(foo + bar);

// 有一个坑，请看
let name; // 先声明了
// {name} = {name: 'Linth'}; // 错误示范
({name} = {name: 'Linth'}); // 正确姿势，需要使用 () 包裹
console.log(name);


// 字符串 解构
const [s1,s2,s3,s4] = 'ange';

//****************************************************************************************
// 扩展运算符和rest运算符
console.log('**********************');
console.log('// 扩展运算符和rest运算符');
(function how(...arg) {
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
  console.log(arg[3]);
  console.log(arg[4]);
})(1,2,3,4,5);

// 引用数据类型中的扩展运算符
let arr1 = ['aaa', 'bbb', 'ccc'];
// let arr2 = arr1;  // 这样会污染数据源
let arr2 = [...arr1]; // 使用 ... 扩展运算符

console.log('arr1',arr1);
console.log('old_arr2',arr2);
arr2.push('ddd');
console.log('new_arr2',arr2);
console.log('arr1',arr1);

// rest 运算符 也是 ...

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

//****************************************************************************************
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

//3****************************************************************************************

// ES6中新增的数组知识
// json格式的数组 key是数组0，1，2，3··· 结尾必须有length长度
let json = {
  0: 'angellin',
  1: 0,
  2: 18,
  length: 3  // 必须要有length 才能转换成功，否则转换后是一个空数组
}

let arr3 = Array.from(json); // 转换成数组
console.log('json格式的数组转换结果',arr3);

// Array.of 方法
//
// eval 可以将 '[3,4,5,6,7,8]'转换成我们需要的数组对象
let arrString = '[3,4,5,6,7,8]';
let arrOf = Array.of(arrString);
console.log('arrOf',arrOf); //["[3,4,5,6,7,8]"]

let arrEval = eval(arrString);
console.log('arrEval',arrEval); //[3, 4, 5, 6, 7, 8]

// Array.find 方法

let arrFind = [1,2,3,4,5,6,7,8,9];
let arrFind2 = ['name','old','sex'];

console.log(arrFind.find(function (value,index,arr) {
  return value > 6;
}));
console.log(arrFind2.find(function (value,index,arr) {
  return value == 'name'; // 存在则返回value 否则返回false
}));

// in 的用法
// 是用来判断对象或者数组中是否存在某个值的
// 先来对象判断
let obj1 = {
  a: '张三',
  b: 'lisi'
};
console.log('a' in obj1); // true
console.log('张三' in obj1); // false
// 数组判断


// 用 Proxy 进行预处理
// let pro = new Proxy({
//   // 对象体
//   add: function(num) {
//     console.log(num+num);
//     return num + num;
//   },
//   name: 'zhangsan'
// },{
//   // 预处理机制
//   //get 开始得到对象体之前预先处理执行
//   set: function(target, key, value, receiver) {
//     console.log('set',value);
//     return target[key] = value;
//   },
//   get: function(target, key, property) {
//     console.log('Proxy');
//     return target[key]; // 预处理完必须要return
//   },
// })
//
// pro.add(100);
// pro.name = '张三';
// console.log('pro.name',pro.name); // 如果set 中没有return target[key] = value; 控制台中将打印出 pro.name zhangsan

// 用 Proxy 进行预处理 apply 的使用

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

 // class类的使用

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

// class 类的继承

  class Plane extends Element{ // 继承的写法
    subtract() {
      console.log('this.a',this.a);
      return this.a;
    }
  }

  let plane = new Plane(6,9); //
  plane.subtract(99);
  plane.name(100);





