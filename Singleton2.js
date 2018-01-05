/**
 * ###################
 * #  通用单例模式     #
 * ###################
 */



 // 通用的单例验证方法
 const getSingle = function (fn){
 	let result;
 	return function (){
 		return result || (result = fn.apply(this, arguments));
 	};
 };
 // 创建登录模态框
 const createLoginLayer = function (){
 	const div = document.createElement('div');
 	div.innerHTML = '我是 通用单例 创建的登录模态框';
 	document.body.appendChild(div);
 	return div;
 };
 // 为登录模态框使用单例模式
 const createSingleLoginLoyer = getSingle(createLoginLayer);
 const loginLayer1 = createSingleLoginLoyer(); // 第一个登录模态框
 const loginLayer2 = createSingleLoginLoyer(); // 还是第一个登录模态框

 console.log(loginLayer1 === loginLayer2); // true

// 不管你执行多少次 createSingleLoginLoyer() 方法，都只会生产一个 div 节点

//
// 通用的单例创建的例子就是通过封装一个getSingle需要实现单例模式的对象。
// 而且只是会只创建一次。
// 因为使用了闭包的原因通过getSingle创建的result会在内存中一直存在不会销毁（除非页面关闭，或者手动释放）。


//创建对象和管理对象是分开的
