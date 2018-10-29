'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

console.log('**********************');
console.log('// 数组解构');
// 使用解构赋值的方式如下
// 数组解构  取值按顺序
var a = 1,
    b = 2,
    c = 3,
    d = 4; // 左右两边解构要保持一致

var a1 = 11,
    b1 = 22,
    c1 = 33,
    d1 = 44; // 或者这样

console.log('// 可以配置默认值');
// 可以配置默认值

var _ = 111,
    a2 = _ === undefined ? 1 : _,
    _ref,
    b2 = _ref === undefined ? 'aaa' : _ref,
    c2 = 222;

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

var _foo$bar = { foo: 'Hello', bar: 'World' },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;
// let {bar, foo} = {foo: 'Hello', bar: 'World'};

console.log(foo + bar);

// 有一个坑，请看
var name = void 0; // 先声明了
// {name} = {name: 'Linth'}; // 错误示范
// 正确姿势，需要使用 () 包裹
var _name = { name: 'Linth' };
name = _name.name;
console.log(name);

// 字符串 解构

var _ange = 'ange',
    _ange2 = _slicedToArray(_ange, 4),
    s1 = _ange2[0],
    s2 = _ange2[1],
    s3 = _ange2[2],
    s4 = _ange2[3];

//****************************************************************************************
// 扩展运算符和rest运算符


console.log('**********************');
console.log('// 扩展运算符和rest运算符');
(function how() {
  console.log(arguments.length <= 0 ? undefined : arguments[0]);
  console.log(arguments.length <= 1 ? undefined : arguments[1]);
  console.log(arguments.length <= 2 ? undefined : arguments[2]);
  console.log(arguments.length <= 3 ? undefined : arguments[3]);
  console.log(arguments.length <= 4 ? undefined : arguments[4]);
})(1, 2, 3, 4, 5);

// 引用数据类型中的扩展运算符
var arr1 = ['aaa', 'bbb', 'ccc'];
// let arr2 = arr1;  // 这样会污染数据源
var arr2 = [].concat(arr1); // 使用 ... 扩展运算符

console.log('arr1', arr1);
console.log('old_arr2', arr2);
arr2.push('ddd');
console.log('new_arr2', arr2);
console.log('arr1', arr1);

// rest 运算符 也是 ...

function useRest(first) {
  for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arg[_key - 1] = arguments[_key];
  }

  console.log('使用rest运算符,表示除了已经明确的参数其余剩下的参数', arg.length);
  for (var key in arg) {
    console.log('for   in  ', key);
  };

  console.log('**********************');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      console.log('let   of  ', val);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ;
};
useRest(0, 1, 2, 3, 4, 5);

//****************************************************************************************
// 字符串模版
console.log('字符串模版');
var name2 = "Angellin";
var someString = '\u5B57\u7B26\u4E32\u6A21\u7248\u53EF\u4EE5\u4F7F\u7528<b>\u6807\u7B7E</b>\u3001\u4F7F\u7528$ {}\u5F15\u7528\u6570\u636E' + name2 + '\u3001\u53EF\u4EE5\u4F7F\u7528\u8BA1\u7B97';
console.log('someString', someString);
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
var json = {
  0: 'angellin',
  1: 0,
  2: 18,
  length: 3 // 必须要有length 才能转换成功，否则转换后是一个空数组
};

var arr3 = Array.from(json); // 转换成数组
console.log('json格式的数组转换结果', arr3);

// Array.of 方法
//
// eval 可以将 '[3,4,5,6,7,8]'转换成我们需要的数组对象
var arrString = '[3,4,5,6,7,8]';
var arrOf = Array.of(arrString);
console.log('arrOf', arrOf); //["[3,4,5,6,7,8]"]

var arrEval = eval(arrString);
console.log('arrEval', arrEval); //[3, 4, 5, 6, 7, 8]

// Array.find 方法

var arrFind = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrFind2 = ['name', 'old', 'sex'];

console.log(arrFind.find(function (value, index, arr) {
  return value > 6;
}));
console.log(arrFind2.find(function (value, index, arr) {
  return value == 'name'; // 存在则返回value 否则返回false
}));

// in 的用法
// 是用来判断对象或者数组中是否存在某个值的
// 先来对象判断
var obj1 = {
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

var target = function target() {
  return 'bangbangbang!!!';
};

var handler = {
  apply: function apply(target, ctx, args) {
    console.log('do apply');
    return Reflect.apply.apply(Reflect, arguments); // 同样的必须要有ruturn
  }
};

var pro = new Proxy(target, handler);
console.log(pro());

// class类的使用

var Element = function () {
  function Element(parm1, parm2) {
    _classCallCheck(this, Element);

    // 使用constructor 接收类的参数
    this.a = parm1;
    this.b = parm2;
  }

  _createClass(Element, [{
    key: 'name',
    value: function name(val) {
      console.log(val + this.a);
      return val + this.a;
    }
  }]);

  return Element;
}();

var ele = new Element(12, 3); // 实例化的时候传入类的实参
ele.name(3); // 调用类的方法

// class 类的继承

var Plane = function (_Element) {
  _inherits(Plane, _Element);

  function Plane() {
    _classCallCheck(this, Plane);

    return _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).apply(this, arguments));
  }

  _createClass(Plane, [{
    key: 'subtract',
    value: function subtract() {
      console.log('this.a', this.a);
      return this.a;
    }
  }]);

  return Plane;
}(Element);

var plane = new Plane(6, 9);
plane.subtract(99);
plane.name(100);
