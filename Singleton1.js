/**
 *  ##################
 *  单例模式
 *  #################
 */

/** 引入代理实现 **/

var CreateDiv = function (html) {
  this.html = html;
  this.init();
}

CreateDiv.prototype.init = function() {
  var div = document.createElement('div');
  div.innerHTML = this.html;
  document.body.appendChild(div);
}

/**
 * 单例模式实现
 * @return {[type]} [description]
 */
var ProxySingletonCreateDiv = (function(){
  var instance; //实例变量标记
  return function(html) {
    if (!instance) {
      instance = new CreateDiv(html);
    }
    return instance;
  }
})();

/**
 * 箭头函数 模拟单例模式 无法达到效果
 * 箭头函数内this指向 window
 * 函数自执行内this指向 window
 */
 var instance;
var ProxySingletonCreate = (html) => {
  return (function() {
    if (!instance) {
      instance = new CreateDiv(html);
    }
    return instance;
  })();
}


var a = new ProxySingletonCreateDiv('single1');
var b = new ProxySingletonCreateDiv('single2');
var c = new CreateDiv('single3');
var d = new CreateDiv('single4');
var e = ProxySingletonCreate('single5');
var f = ProxySingletonCreate('single6');

console.log('a===b?', a, b, a === b);
console.log('c===d?', c, d, c === d);
console.log('e===f?', e, f, e === f);
console.log(typeof ProxySingletonCreateDiv);
console.log(typeof ProxySingletonCreate);

// 负责管理单例的逻辑移到了代理类ProxySingletonCreateDiv中。
// 这样一来，CreateDiv就变成了一个普通的类，
// 跟ProxySingletonCreateDiv组合起来可以达到单例模式的效果。
