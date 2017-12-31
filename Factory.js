/**
 * 设计模式概述之工厂模式
 */



/**
 * [创建角色的构造函数]
 */
//战士
class Warrior {
  constructor() {
    this.skill = '回血';
    this.blood = 150;   //初始化生命值
    this.hit = 8   //普通攻击伤害值
    console.log(this);
  }
}
//法师
class Mage {
  constructor() {
    this.skill = '减速';
    this.blood = 120;   //初始化生命值
    this.hit = 3   //普通攻击伤害值
    console.log(this);
  }
}
//射手
class Archer {
  constructor() {
    this.skill = '消耗';
    this.blood = 100;   //初始化生命值
    this.hit = 10   //普通攻击伤害值
    console.log(this);
  }
}

/**
 * 工厂函数1，创建角色，使用对象的构造函数
 * @type {Object}
 */
class RoleFactory {
  constructor(role) {
    switch (role) {
      case '战士':
        var Roler = new Warrior();
        break;
      case '法师':
        var Roler = new Mage();
        break;
      case '射手':
        var Roler = new Archer();
        break;
      default:
        Roler = new Warrior();
    }
  }
}

var Warrior1 = new RoleFactory('战士');
var Mage1 = new RoleFactory('法师');
var Archer1 = new RoleFactory('射手');

/**
 * 工厂函数2，创建角色，使用对象的方法
 */
const RoleFactory2 = {
  createRole (role){
    switch (role) {
      case '战士':
        var Roler = new Warrior();
        break;
      case '法师':
        var Roler = new Mage();
        break;
      case '射手':
        var Roler = new Archer();
        break;
      default:
        Roler = new Warrior();
    }
  }
}

// var Warrior2 = RoleFactory2.createRole('战士');
// var Mage2 = RoleFactory2.createRole('法师');
// var Archer2 = RoleFactory2.createRole('射手');

/**
 * 工厂函数3，使用函数动态实例化创建角色
 */
const RoleFactory3 = (role) => {
  return new role();
}

var Warrior3 = RoleFactory3(Warrior)
var Mage3 = RoleFactory3(Mage)
var Archer3 = RoleFactory3(Archer)
