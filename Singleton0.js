 /**
  * ###################
  * #     惰性单例     #
  * ###################
  */


  // 惰性单例指的是在需要的时候才创建对象的实例,以创建登录模态框为例

 const creareLoginLayer2 = (function () {
   let div2;
   return function () {
     if (!div2) {
       div2 = document.createElement('div');
       div2.innerHTML = '我是 惰性单例 创建的登录模态框';
       document.body.appendChild(div2);
     }
     return div2;
   }
 })();


 // 在点击按钮时才创建节点（惰性）
 document.getElementById('login-btn').onclick = function () {
   var loginLayer = creareLoginLayer2();
   loginLayer.style.display = 'block';
 };
