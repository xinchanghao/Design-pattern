/**
 * 设计模式概述之代理模式--缓存代理
 */

// 先实现具体的两个算法
const mult = function() {
	let a = 1;
	for (let i = 0; i < arguments.length; i++) {
		a *= arguments[i];
	}
	return a;
};

const plus = function() {
	let a = 0;
	for (let i = 0; i < arguments.length; i++) {
		a += arguments[i];
	}
	return a;
};

// 创建缓存代理
const createProxyFactory = function(fn) {
	let cache = {}; // 保存计算的结果
	// 使用闭包在内存中保留对cache的引用
	return function() {
		let args = Array.from(arguments).join(','); // 将所有参数转化为字符串作为缓存的 key
		if (args in cache) {
			return cache[args];
		} else {
			return cache[args] = fn.apply(this, arguments);
		}
	};
};

// 使用代理对象
const proxyMult = createProxyFactory(mult);
const proxyPlus = createProxyFactory(plus);
console.log(proxyMult(1,2,3,4)); // 24
console.log(proxyPlus(1,2,3,4)); // 10

//
// 说明：这里每次进行同类的计算时（乘法和加法两类），先判断缓存对象cache中是否存在该参数连接成的字符串作为key的属性。
// 如果有，则直接从cache中读取，否则就进行计算并保存其结果
