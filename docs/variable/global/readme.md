## 全局变量

### 玩家信息
~~~
<Apo:qq,type=attr,msg=用户>
<Apo:qq,type=attr,msg=VIP>
<Apo:qq,type=attr,msg=昵称>
<Apo:qq,type=attr,msg=生命>
<Apo:qq,type=attr,msg=法力>
<Apo:qq,type=attr,msg=攻击>
<Apo:qq,type=attr,msg=职业>
<Apo:qq,type=attr,msg=防御>
<Apo:qq,type=attr,msg=经验>
<Apo:qq,type=attr,msg=闪避>
<Apo:qq,type=attr,msg=性别>
<Apo:qq,type=attr,msg=命中>
<Apo:qq,type=attr,msg=饥饿>
<Apo:qq,type=attr,msg=位置>
<Apo:qq,type=attr,msg=等级>
<Apo:qq,type=attr,msg=货币>
<Apo:qq,type=attr,msg=货币2>
<Apo:qq,type=attr,msg=货币3>
<Apo:qq,type=attr,msg=战斗力>
<Apo:qq,type=attr,msg=队伍ID>
<Apo:qq,type=attr,msg=VIP等级>
<Apo:qq,type=attr,msg=生命上限>
<Apo:qq,type=attr,msg=法力上限>
<Apo:qq,type=attr,msg=饥饿上限>
<Apo:qq,type=attr,msg=经验上限>
<Apo:qq,type=attr,msg=暴击伤害>
<Apo:qq,type=attr,msg=暴击概率>
<Apo:qq,type=attr,msg=等级称号>
<Apo:qq,type=attr,msg=到期时间>
<Apo:qq,type=attr,msg=当前位置>
<Apo:qq,type=attr,msg=家族名称>
<Apo:qq,type=attr,msg=队伍名称>
<Apo:qq,type=attr,msg=VIP成长值>
<Apo:qq,type=attr,msg=VIP升级成长值>


<Apo:qq,type=attr,msg=坐骑>
<Apo:qq,type=attr,msg=战斗怪物>
<Apo:qq,type=attr,msg=技能状态>
~~~

### 玩家头像
~~~
<Apo:qq,type=attr,msg=avatarUrl>    // 当前回复消息用户的头像
<Apo:avatar,type=user,msg={user}>   // 指定用户的头像,可以与<Apo:qq,type=attr,msg=用户>搭配使用
~~~

### 玩家物品
~~~
<Apo:qq,type=drop,msg={物品}>
Tips:<Apo:qq,type=drop,msg=草药>
~~~
### 玩家装备
~~~
<Apo:qq,type=equip,msg={部位名称}>
Tips:<Apo:qq,type=equip,msg=手部>
~~~
### 系统信息
~~~
<Apo:sys,type=info,msg=等级上限>
<Apo:sys,type=info,msg=发言间隔>
<Apo:sys,type=info,msg=当前时间>
<Apo:sys,type=info,msg=分割符号>
<Apo:sys,type=info,msg=货币名称>
<Apo:sys,type=info,msg=货币名称2>
<Apo:sys,type=info,msg=货币名称3>
<Apo:sys,type=info,msg=框架版本>
<Apo:sys,type=info,msg=插件版本>
<Apo:sys,type=info,msg=玩家数量>
<Apo:sys,type=info,msg=处理消息>
<Apo:sys,type=info,msg=接收消息>
<Apo:sys,type=info,msg=运行时长>
~~~
### 地图信息
~~~
<Apo:Map,type={地图名称},msg=前>
<Apo:Map,type={地图名称},msg=后>
<Apo:Map,type={地图名称},msg=左>
<Apo:Map,type={地图名称},msg=右>
<Apo:Map,type={地图名称},msg=上>
<Apo:Map,type={地图名称},msg=下>
<Apo:Map,type={地图名称},msg=NPC>
<Apo:Map,type={地图名称},msg=描述>
<Apo:Map,type={地图名称},msg=商店>
<Apo:Map,type={地图名称},msg=物品>
<Apo:Map,type={地图名称},msg=怪物>
<Apo:Map,type={地图名称},msg=玩家数量>
<Apo:Map,type={地图名称},msg=占领家族>
<Apo:Map,type={地图名称},msg=钱庄>
<Apo:Map,type={地图名称},msg=鱼塘>
<Apo:Map,type={地图名称},msg=物品详细>
<Apo:Map,type={地图名称},msg=怪物详细>
~~~
### 全图信息
~~~
<Apo:Map,type={Map},msg=钱庄>   // 全图钱庄
~~~

### 特殊变量
~~~
<Apo:at,type=obj>  // 艾特玩家(私聊无效)
~~~

### 职业信息
~~~
<Apo:occ,type={职业名称},msg=描述>
<Apo:occ,type={职业名称},msg=生命>
<Apo:occ,type={职业名称},msg=法力>
<Apo:occ,type={职业名称},msg=攻击>
<Apo:occ,type={职业名称},msg=防御>
~~~
### 等级信息
~~~
<Apo:lv,type={等级},msg=生命>
<Apo:lv,type={等级},msg=法力>
<Apo:lv,type={等级},msg=攻击>
<Apo:lv,type={等级},msg=防御>
~~~
### 自定义命令名称
~~~
<Apo:sys,type=command,msg={命令序号}>	// 显示 当前命令
<Apo:sys,type=Ocommand,msg={命令序号}>	// 显示 默认命令
~~~