/**
 * 设计模式概述之代理模式--虚拟代理
 */

// 虚拟代理：某一个花销很大的操作，可以通过虚拟代理的方式延迟到这种需要它的时候才去创建
// 例：使用虚拟代理实现图片懒加载


// 本体对象
const imgFunc = (function() {
	const imgNode = document.createElement('img');
	document.body.appendChild(imgNode);
	return {
		setSrc(src){
			imgNode.src = src;
		}
	}
})();
// 代理对象
const proxyImage = (function() {
	const img = new Image();
	img.onload = function() {
		imgFunc.setSrc(this.src);
	};
	return {
		setSrc(src){
			imgFunc.setSrc('./loading.gif');
			img.src = src;
		}
	};
})();
// 使用代理对象
proxyImage.setSrc('./reality.png');

//
// 说明：图片懒加载的方式：先通过一张loading图占位，然后通过异步的方式加载图片，等图片加载好了再把完成的图片加载到img标签里面。
// 这里讲述一下代理对象做了那些事：
//     1.创建了一个 Image 对象，并为其绑定了 onload 事件。
//     2.将 imgNode 先设置为 './loading.gif' 加载的菊花图。
//     3.当 Image 对象加载完真实的图片，也就是上文的 './reality.png' ,将 imgNode 设置为 './reality.png'。
