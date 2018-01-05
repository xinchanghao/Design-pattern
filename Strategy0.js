/**
 * 设计模式概述之策略模式 -- 计算年终奖
 */

/**
 * 说明：
 * 策略模式指的是 定义一系列的算法，把它们一个个封装起来，将不变的部分和变化的部分隔开，实际就是将算法的使用和实现分离出来；
 **/


//一组策略类封装具体的算法
const Bouns = {
  A (salary){
    return salary * 4;
  },
  B (salary){
    return salary * 3;
  },
  C (salary){
    return salary * 2;
  },
}

Object.freeze(Bouns)


/**
 * 计算年终奖
 */
const calculateBouns = function(type, salary){
  return Bouns[type](salary)
}


//测试计算年终奖
const demo1 = calculateBouns('A', 10000);
const demo2 = calculateBouns('B', 20000);

console.log(demo1, demo2);


/*
 * 一个基于策略模式的程序至少由2部分组成，第一个部分是一组策略类，策略类封装了具体的算法，
 * 并负责具体的计算过程。第二个部分是环境类Context，该Context接收客户端的请求，
 * 随后把请求委托给某一个策略类。
 * 复合开放-封闭原则，可变的部分为策略类（一组算法），不变的部分为执行具体算法的方式。
 */
