## alpha <Badge text="Ver:3.2.0"/>
### [新增数据表]<br>
+ <数据>record_user_skill<br>
   >[user]用户<br>
   >[skill]技能<br>
   >[wait]冷却
### [修改数据表]<br>
+ <数据>玩家技能 :point_right: data_user_skill<br>
   >[QQ]	修改名称[user]	修改类型[VARCHAR(36)]<br>
	>[技能]	修改名称[skill]<br>
	>[时间]	删除字段<br>
	>[学习]	修改名称[learn]<br>
	>[次数]	修改名称[count]
+ <数据>NPC对话记录
	>[obj]	修改名称[user]	修改类型[VARCHAR(36)]
+ <数据>传送数据
	>[QQ]	修改名称[user]	修改类型[VARCHAR(36)]
+ <数据>玩家NPC数据
	>[QQ]	修改名称[user]	修改类型[VARCHAR(36)]
+ <数据>钱庄数据
	>[QQ]	修改名称[user]	修改类型[VARCHAR(36)]	
+ <数据>单人副本打怪 :point_right: [副本打怪]
	>[subtype]	新增字段<br>
	>[obj]		修改类型[VARCHAR(36)]
+ <数据>单人副本数据 :point_right: [副本数据]
	>[subtype]	新增字段<br>
	>[obj]		修改类型[VARCHAR(36)]
+ <数据>单人副本记录 :point_right: [副本记录]
	>[obj]		修改类型[VARCHAR(36)]
+ <系统>单人副本地图 :point_right: [副本地图]
+ <系统>单人副本配置 :point_right: [副本配置]
	>[limit_user]	新增字段
### [新增事件消息]<br>
+ 新增 `玩家击杀怪物`[type=11] <br>
+ 新增 `玩家副本状态`[type=12] <br>
+ 新增 `玩家学习技能`[type=13] <br>
+ 新增 `玩家使用物品`[type=14] <br>
+ 新增 `玩家任务操作`[type=15] <br>
+ 新增 `玩家商店操作`[type=16] <br>

## 2021-04-24 <Badge text="Ver:3.0.1"/>
### [新增事件消息]<br>
+ 新增 `玩家死亡惩罚`[type=10] <br>

## 2021-04-06 <Badge text="Ver:3.0.1"/>
### [新增]<br>
+ 拓展 子程序`Event_get_message_manage`, 可处理接收到的消息 <br>
   
## 2021-04-05 <Badge text="Ver:3.0.1"/>
### [修复]<br>
+ 修改.玩家_位置 变更位置后未清除商店/NPC的操作信息 <br>
   >[更新插件即可修复]
   
## 2021-03-02 <Badge text="Ver:3.0.0"/>
### [修复]<br>
+ TQ.写配置项 无法删除<br>
   >[更新插件即可修复]

## 2021-02-05 <Badge text="Ver:3.0.0"/>

### [删除函数]<br>
+ 对接_消息处理<br>
   >[请使用网页服务中的后端进行操作]

### [新增数据表]<br>
+ <数据>钱庄记录<br>
   >[id]<br>
   >[name]钱庄名称<br>
   >[capital]当前金额<br>
   >[profit_now]当前利率<br>
   >[time_get]刷新时间
+ <数据>怪物刷新记录<br>
   >[id]<br>
   >[怪物]怪物名称<br>
   >[位置]刷新位置<br>
   >[当前数量]当前数量<br>
   >[刷新时间]刷新时间

### [修改数据表]<br>
+ <全局>record_ini<br>
   >[type]删除此字段

+ <系统>钱庄配置<br>
   >[capital]删除字段<br>
   >[profit_now]删除字段<br>
   >[time_get]删除字段 // 这些字段将存放在数据库<数据>{钱庄记录}内

+ <系统>怪物刷新配置<br>
   >[当前数量]删除字段<br>
   >[刷新时间]删除字段 // 这些字段将存在数据库<数据>{怪物刷新记录}内

+ <系统>商店配置2<br>
	>[价格物品]增加字段 // 用以以物换物

### [删除数据表]<br>
+ 地图BOSS数据<br>
   >[暂时无用]<br>

+ 地图BOSS配置<br>
   >[暂时无用]<br>

+ 职业好感配置<br>
   >[暂时无用]