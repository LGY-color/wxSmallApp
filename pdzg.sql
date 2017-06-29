/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : pdzg

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-06-29 18:01:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `parent` int(11) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '电子', null);
INSERT INTO `category` VALUES ('2', '电视机', '1');
INSERT INTO `category` VALUES ('3', '电子管', '2');
INSERT INTO `category` VALUES ('4', '液晶显示器', '2');
INSERT INTO `category` VALUES ('5', '等离子', '2');
INSERT INTO `category` VALUES ('6', '便携电子设备', '1');
INSERT INTO `category` VALUES ('7', 'MP3播放器', '6');
INSERT INTO `category` VALUES ('8', 'FLASH', '7');
INSERT INTO `category` VALUES ('9', 'CD播放器', '6');
INSERT INTO `category` VALUES ('10', '收音机', '6');

-- ----------------------------
-- Table structure for `nested_category`
-- ----------------------------
DROP TABLE IF EXISTS `nested_category`;
CREATE TABLE `nested_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nested_category
-- ----------------------------
INSERT INTO `nested_category` VALUES ('1', 'ELECTRONICS', '1', '20');
INSERT INTO `nested_category` VALUES ('2', 'TELEVISIONS', '2', '9');
INSERT INTO `nested_category` VALUES ('3', 'TUBE', '3', '4');
INSERT INTO `nested_category` VALUES ('4', 'LCD', '5', '6');
INSERT INTO `nested_category` VALUES ('5', 'PLASMA', '7', '8');
INSERT INTO `nested_category` VALUES ('6', 'PORTABLE ELECTRONICS', '10', '19');
INSERT INTO `nested_category` VALUES ('7', 'MP3 PLAYERS', '11', '14');
INSERT INTO `nested_category` VALUES ('8', 'FLASH', '12', '13');
INSERT INTO `nested_category` VALUES ('9', 'CD PLAYERS', '15', '16');
INSERT INTO `nested_category` VALUES ('10', '2 WAY RADIOS', '17', '18');

-- ----------------------------
-- Table structure for `pdzg_big_item`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_big_item`;
CREATE TABLE `pdzg_big_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) DEFAULT NULL COMMENT '栏目名称',
  `item_type` tinyint(4) DEFAULT NULL COMMENT 'item的类型 1为大类 2为小类 3为自定义',
  `item_type_id` int(11) DEFAULT NULL COMMENT '所属父类id',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL COMMENT '1为使用 0为停止',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_big_item
-- ----------------------------
INSERT INTO `pdzg_big_item` VALUES ('1', '小吃盘店', '1', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('2', '招工求职', '1', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('3', '店面承包', '1', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('4', '二手市场', '1', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('5', '店铺转让', '2', '1', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('6', '求转店铺', '2', '1', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('7', '招工信息', '2', '2', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('8', '求职信息', '2', '2', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('9', '对外承包', '2', '3', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('10', '需求承包', '2', '3', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('11', '餐具设备', '2', '4', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_big_item` VALUES ('12', '其他物品', '2', '4', '2147483647', '1498699351000', '1');

-- ----------------------------
-- Table structure for `pdzg_cjsb`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_cjsb`;
CREATE TABLE `pdzg_cjsb` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL COMMENT '用户id',
  `province` smallint(6) DEFAULT NULL COMMENT '省份',
  `valid_period` smallint(6) DEFAULT NULL COMMENT '有效期',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `new_old` smallint(6) DEFAULT NULL COMMENT '新旧程度',
  `content` text COMMENT '详情',
  `img_id` bigint(20) DEFAULT NULL COMMENT '多对多引入3表 表一图片id 表二图片urlid 表三关联',
  `contact_name` varchar(20) DEFAULT NULL COMMENT '联系人',
  `contact_phone` varchar(20) DEFAULT NULL COMMENT '联系人电话',
  `contact_qq` varchar(20) DEFAULT NULL COMMENT '联系人QQ',
  `location` varchar(255) DEFAULT NULL COMMENT '地址信息',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '1为正常使用 0为已成交',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_cjsb
-- ----------------------------

-- ----------------------------
-- Table structure for `pdzg_dpzr`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_dpzr`;
CREATE TABLE `pdzg_dpzr` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL COMMENT '用户id',
  `province` smallint(6) DEFAULT NULL COMMENT '省份',
  `valid_period` smallint(6) DEFAULT NULL COMMENT '有效期',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `monthly_rent` smallint(6) DEFAULT NULL COMMENT '月租金',
  `day_turnover` smallint(6) DEFAULT NULL COMMENT '日营业额',
  `transfer_fee` smallint(6) DEFAULT NULL COMMENT '转让费',
  `content` text COMMENT '详情',
  `img_id` bigint(20) DEFAULT NULL COMMENT '多对多引入3表 表一图片id 表二图片urlid 表三关联',
  `contact_name` varchar(20) DEFAULT NULL COMMENT '联系人',
  `contact_phone` varchar(20) DEFAULT NULL COMMENT '联系人电话',
  `contact_qq` varchar(20) DEFAULT NULL COMMENT '联系人QQ',
  `location` varchar(255) DEFAULT NULL COMMENT '地址信息',
  `shop_area` varchar(255) DEFAULT NULL COMMENT '店铺面积',
  `water_electricity` smallint(6) DEFAULT NULL COMMENT '水电费',
  `to_serve` smallint(6) DEFAULT NULL COMMENT '送餐',
  `surroundings` smallint(6) DEFAULT NULL COMMENT '周边环境',
  `shop_facilities` smallint(6) DEFAULT NULL COMMENT '店铺设施',
  `hold_credentials` smallint(6) DEFAULT NULL COMMENT '所持证书',
  `shop_address` varchar(255) DEFAULT NULL COMMENT '店铺地址',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '1为正常使用 0为已成交',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_dpzr
-- ----------------------------

-- ----------------------------
-- Table structure for `pdzg_dwcb`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_dwcb`;
CREATE TABLE `pdzg_dwcb` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL COMMENT '用户id',
  `province` smallint(6) DEFAULT NULL COMMENT '省份',
  `valid_period` smallint(6) DEFAULT NULL COMMENT '有效期',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `monthly_rent` smallint(6) DEFAULT NULL COMMENT '月租金',
  `day_turnover` smallint(6) DEFAULT NULL COMMENT '日营业额',
  `content` text COMMENT '详情',
  `img_id` bigint(20) DEFAULT NULL COMMENT '多对多引入3表 表一图片id 表二图片urlid 表三关联',
  `contact_name` varchar(20) DEFAULT NULL COMMENT '联系人',
  `contact_phone` varchar(20) DEFAULT NULL COMMENT '联系人电话',
  `contact_qq` varchar(20) DEFAULT NULL COMMENT '联系人QQ',
  `location` varchar(255) DEFAULT NULL COMMENT '地址信息',
  `shop_area` varchar(255) DEFAULT NULL COMMENT '店铺面积',
  `water_electricity` smallint(6) DEFAULT NULL COMMENT '水电费',
  `to_serve` smallint(6) DEFAULT NULL COMMENT '送餐',
  `surroundings` smallint(6) DEFAULT NULL COMMENT '周边环境',
  `shop_facilities` smallint(6) DEFAULT NULL COMMENT '店铺设施',
  `hold_credentials` smallint(6) DEFAULT NULL COMMENT '所持证书',
  `shop_address` varchar(255) DEFAULT NULL COMMENT '店铺地址',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '1为正常使用 0为已成交',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_dwcb
-- ----------------------------

-- ----------------------------
-- Table structure for `pdzg_qtwp`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_qtwp`;
CREATE TABLE `pdzg_qtwp` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL COMMENT '用户id',
  `province` smallint(6) DEFAULT NULL COMMENT '省份',
  `valid_period` smallint(6) DEFAULT NULL COMMENT '有效期',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `new_old` smallint(6) DEFAULT NULL COMMENT '新旧程度',
  `content` text COMMENT '详情',
  `img_id` bigint(20) DEFAULT NULL COMMENT '多对多引入3表 表一图片id 表二图片urlid 表三关联',
  `contact_name` varchar(20) DEFAULT NULL COMMENT '联系人',
  `contact_phone` varchar(20) DEFAULT NULL COMMENT '联系人电话',
  `contact_qq` varchar(20) DEFAULT NULL COMMENT '联系人QQ',
  `location` varchar(255) DEFAULT NULL COMMENT '地址信息',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '1为正常使用 0为已成交',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_qtwp
-- ----------------------------

-- ----------------------------
-- Table structure for `pdzg_qzdp`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_qzdp`;
CREATE TABLE `pdzg_qzdp` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL COMMENT '用户id',
  `province` smallint(6) DEFAULT NULL COMMENT '省份',
  `valid_period` smallint(6) DEFAULT NULL COMMENT '有效期',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `monthly_rent` smallint(6) DEFAULT NULL COMMENT '月租金',
  `day_turnover` smallint(6) DEFAULT NULL COMMENT '日营业额',
  `transfer_fee` smallint(6) DEFAULT NULL COMMENT '转让费',
  `content` text COMMENT '详情',
  `img_id` bigint(20) DEFAULT NULL COMMENT '多对多引入3表 表一图片id 表二图片urlid 表三关联',
  `contact_name` varchar(20) DEFAULT NULL COMMENT '联系人',
  `contact_phone` varchar(20) DEFAULT NULL COMMENT '联系人电话',
  `contact_qq` varchar(20) DEFAULT NULL COMMENT '联系人QQ',
  `location` varchar(255) DEFAULT NULL COMMENT '地址信息',
  `shop_area` varchar(255) DEFAULT NULL COMMENT '店铺面积',
  `water_electricity` smallint(6) DEFAULT NULL COMMENT '水电费',
  `to_serve` smallint(6) DEFAULT NULL COMMENT '送餐',
  `surroundings` smallint(6) DEFAULT NULL COMMENT '周边环境',
  `shop_facilities` smallint(6) DEFAULT NULL COMMENT '店铺设施',
  `hold_credentials` smallint(6) DEFAULT NULL COMMENT '所持证书',
  `shop_address` varchar(255) DEFAULT NULL COMMENT '店铺地址',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '1为正常使用 0为已成交',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_qzdp
-- ----------------------------

-- ----------------------------
-- Table structure for `pdzg_qzxx`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_qzxx`;
CREATE TABLE `pdzg_qzxx` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL COMMENT '用户id',
  `province` smallint(6) DEFAULT NULL COMMENT '省份',
  `valid_period` smallint(6) DEFAULT NULL COMMENT '有效期',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `monthly_salary` smallint(6) DEFAULT NULL COMMENT '月薪',
  `sex` smallint(6) DEFAULT NULL COMMENT '性别',
  `work_experience` smallint(6) DEFAULT NULL COMMENT '工作经验',
  `work_skill` smallint(6) DEFAULT NULL COMMENT '工作技能',
  `work_hours` smallint(6) DEFAULT NULL COMMENT '工作时长',
  `age` smallint(6) DEFAULT NULL COMMENT '年龄',
  `health_status` smallint(6) DEFAULT NULL COMMENT '健康状况',
  `cash_pledge` smallint(6) DEFAULT NULL COMMENT '押金要求',
  `live_conditions` smallint(6) DEFAULT NULL COMMENT '居住条件',
  `takeaway_status` smallint(6) DEFAULT NULL COMMENT '外卖情况',
  `open_hours` smallint(6) DEFAULT NULL COMMENT '开门时间',
  `close_hours` smallint(6) DEFAULT NULL COMMENT '打烊时间',
  `content` text COMMENT '详情',
  `img_id` bigint(20) DEFAULT NULL COMMENT '多对多引入3表 表一图片id 表二图片urlid 表三关联',
  `contact_name` varchar(20) DEFAULT NULL COMMENT '联系人',
  `contact_phone` varchar(20) DEFAULT NULL COMMENT '联系人电话',
  `contact_qq` varchar(20) DEFAULT NULL COMMENT '联系人QQ',
  `contact_email` varchar(20) DEFAULT NULL COMMENT '联系人邮箱',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '1为正常使用 0为已成交',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_qzxx
-- ----------------------------

-- ----------------------------
-- Table structure for `pdzg_small_item`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_small_item`;
CREATE TABLE `pdzg_small_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) DEFAULT NULL COMMENT '栏目名称',
  `item_type` tinyint(4) DEFAULT NULL COMMENT 'item的类型 1为大类 2为小类 3为自定义',
  `item_type_id` int(11) DEFAULT NULL COMMENT '所属父类id',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL COMMENT '1为使用 0为停止',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_small_item
-- ----------------------------
INSERT INTO `pdzg_small_item` VALUES ('1', '省份', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('2', '有效期', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('3', '月租金', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('4', '日营业额', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('5', '水电费', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('6', '送餐', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('7', '转让费', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('8', '店铺设施', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('9', '所持证书', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('10', '月薪', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('11', '性别', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('12', '工作经验', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('13', '工作技能', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('14', '工作时长', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('15', '年龄', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('16', '健康状况', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('17', '押金要求', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('18', '居住条件', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('19', '外卖情况', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('20', '开门时间', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('21', '打烊时间', '3', '0', '2147483647', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('22', '新旧程度', '3', '0', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('23', '周边环境', '3', '0', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('83', '长期有效', '4', '2', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('84', '一周', '4', '2', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('85', '一个月', '4', '2', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('86', '两个月', '4', '2', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('87', '一年', '4', '2', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('88', '2500元以下', '4', '3', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('89', '2500-5000元', '4', '3', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('90', '5000-7000元', '4', '3', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('91', '7000元-10000元', '4', '3', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('92', '10000元以上', '4', '3', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('93', '500元以下', '4', '4', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('94', '500-800元', '4', '4', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('95', '800-1000元', '4', '4', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('96', '1000-1500元', '4', '4', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('97', '1500-2000元', '4', '4', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('98', '2000-2500元', '4', '4', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('99', '2500-3000元', '4', '4', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('100', '3000-5000元', '4', '4', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('101', '5000元以上', '4', '4', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('102', '500元以下', '4', '5', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('103', '500-800元', '4', '5', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('104', '800-1000元', '4', '5', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('105', '1000-1500元', '4', '5', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('106', '1500元以上', '4', '5', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('107', '没有外卖', '4', '6', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('108', '偶尔', '4', '6', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('109', '有送餐', '4', '6', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('110', '面议', '4', '7', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('111', '一万以下', '4', '7', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('112', '1万-3万', '4', '7', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('113', '3万-6万', '4', '7', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('114', '6万-10万', '4', '7', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('115', '10万-15万', '4', '7', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('116', '15万以上', '4', '7', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('117', '水电', '4', '8', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('118', '燃气', '4', '8', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('119', '有线电视', '4', '8', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('120', '空调', '4', '8', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('121', '电话', '4', '8', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('122', '宽带WiFi', '4', '8', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('123', '消毒柜', '4', '8', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('124', '其他', '4', '8', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('125', '齐全', '4', '8', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('126', '营业执照', '4', '9', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('127', '卫生许可证', '4', '9', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('128', '面议', '4', '10', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('129', '1000以下', '4', '10', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('130', '1000-2000', '4', '10', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('131', '2000-3000', '4', '10', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('132', '3000-4000', '4', '10', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('133', '4000-5000', '4', '10', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('134', '5000-6000', '4', '10', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('135', '6000-8000', '4', '10', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('136', '8000以上', '4', '10', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('137', '男', '4', '11', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('138', '女', '4', '11', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('139', '性别不限', '4', '11', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('140', '新手', '4', '12', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('141', '一年', '4', '12', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('142', '两年', '4', '12', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('143', '三年', '4', '12', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('144', '三年以上', '4', '12', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('145', '沙县小吃', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('146', '套餐饭', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('147', '黄焖鸡', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('148', '炸酱面', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('149', '炒菜', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('150', '无所不会', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('151', '肯学肯干', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('152', '持有厨师证', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('153', '8小时以内', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('154', '8-10小时', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('155', '10-12小时', '4', '13', '1498699351000', '1498699351000', '1');
INSERT INTO `pdzg_small_item` VALUES ('156', '12小时以上', '4', '13', '1498699351000', '1498699351000', '1');

-- ----------------------------
-- Table structure for `pdzg_sort`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_sort`;
CREATE TABLE `pdzg_sort` (
  `id` bigint(20) NOT NULL,
  `item_id` smallint(6) DEFAULT NULL COMMENT '所属大类别id',
  `valid_period` varchar(50) DEFAULT NULL COMMENT '有效期',
  `day_turnover` varchar(50) DEFAULT NULL COMMENT '日营业额',
  `transfer_fee` varchar(50) DEFAULT NULL COMMENT '转让费',
  `water_electricity` varchar(50) DEFAULT NULL COMMENT '水电费',
  `to_serve` varchar(50) DEFAULT NULL COMMENT '送餐',
  `shop_facilities` varchar(50) DEFAULT NULL COMMENT '店铺设施',
  `hold_credentials` varchar(50) DEFAULT NULL COMMENT '所持证书',
  `monthly_rent` varchar(50) DEFAULT NULL COMMENT '月租金',
  `new_old` varchar(50) DEFAULT NULL COMMENT '新旧程度',
  `surroundings` varchar(50) DEFAULT NULL COMMENT '周边环境',
  `monthly_salary` varchar(50) DEFAULT NULL COMMENT '月薪',
  `sex` varchar(50) DEFAULT NULL COMMENT '性别',
  `work_experience` varchar(50) DEFAULT NULL COMMENT '工作经验',
  `work_skill` varchar(50) DEFAULT NULL COMMENT '工作技能',
  `work_hours` varchar(50) DEFAULT NULL COMMENT '工作时长',
  `health_status` varchar(50) DEFAULT NULL COMMENT '健康状况',
  `cash_pledge` varchar(50) DEFAULT NULL COMMENT '押金要求',
  `live_conditions` varchar(50) DEFAULT NULL COMMENT '居住条件',
  `takeaway_status` varchar(50) DEFAULT NULL COMMENT '外卖情况',
  `open_hours` varchar(50) DEFAULT NULL COMMENT '开门时间',
  `close_hours` varchar(50) DEFAULT NULL COMMENT '打烊时间',
  `age` varchar(50) DEFAULT NULL COMMENT '年龄',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '1为正常使用 0为已成交',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_sort
-- ----------------------------

-- ----------------------------
-- Table structure for `pdzg_user`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_user`;
CREATE TABLE `pdzg_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `phone` bigint(20) DEFAULT NULL COMMENT '手机号码',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `gold_coin` int(11) DEFAULT NULL COMMENT '金币数',
  `id_card` varchar(30) DEFAULT NULL COMMENT '身份证号码',
  `last_ip` varchar(255) DEFAULT NULL COMMENT '最后访问IP',
  `qq` bigint(20) DEFAULT NULL COMMENT 'QQ号',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1为使用 0为停止',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_user
-- ----------------------------
INSERT INTO `pdzg_user` VALUES ('1', '18960501805', '18960501805', '18960501805', null, null, null, null, null, null, null, '1');

-- ----------------------------
-- Table structure for `pdzg_xqcb`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_xqcb`;
CREATE TABLE `pdzg_xqcb` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL COMMENT '用户id',
  `province` smallint(6) DEFAULT NULL COMMENT '省份',
  `valid_period` smallint(6) DEFAULT NULL COMMENT '有效期',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `monthly_rent` smallint(6) DEFAULT NULL COMMENT '月租金',
  `day_turnover` smallint(6) DEFAULT NULL COMMENT '日营业额',
  `content` text COMMENT '详情',
  `img_id` bigint(20) DEFAULT NULL COMMENT '多对多引入3表 表一图片id 表二图片urlid 表三关联',
  `contact_name` varchar(20) DEFAULT NULL COMMENT '联系人',
  `contact_phone` varchar(20) DEFAULT NULL COMMENT '联系人电话',
  `contact_qq` varchar(20) DEFAULT NULL COMMENT '联系人QQ',
  `location` varchar(255) DEFAULT NULL COMMENT '地址信息',
  `shop_area` varchar(255) DEFAULT NULL COMMENT '店铺面积',
  `water_electricity` smallint(6) DEFAULT NULL COMMENT '水电费',
  `to_serve` smallint(6) DEFAULT NULL COMMENT '送餐',
  `surroundings` smallint(6) DEFAULT NULL COMMENT '周边环境',
  `shop_facilities` smallint(6) DEFAULT NULL COMMENT '店铺设施',
  `hold_credentials` smallint(6) DEFAULT NULL COMMENT '所持证书',
  `shop_address` varchar(255) DEFAULT NULL COMMENT '店铺地址',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '1为正常使用 0为已成交',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_xqcb
-- ----------------------------

-- ----------------------------
-- Table structure for `pdzg_zgxx`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_zgxx`;
CREATE TABLE `pdzg_zgxx` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL COMMENT '用户id',
  `province` smallint(6) DEFAULT NULL COMMENT '省份',
  `valid_period` smallint(6) DEFAULT NULL COMMENT '有效期',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `monthly_salary` smallint(6) DEFAULT NULL COMMENT '月薪',
  `sex` smallint(6) DEFAULT NULL COMMENT '性别',
  `work_experience` smallint(6) DEFAULT NULL COMMENT '工作经验',
  `work_skill` smallint(6) DEFAULT NULL COMMENT '工作技能',
  `work_hours` smallint(6) DEFAULT NULL COMMENT '工作时长',
  `age` smallint(6) DEFAULT NULL COMMENT '年龄',
  `health_status` smallint(6) DEFAULT NULL COMMENT '健康状况',
  `cash_pledge` smallint(6) DEFAULT NULL COMMENT '押金要求',
  `live_conditions` smallint(6) DEFAULT NULL COMMENT '居住条件',
  `takeaway_status` smallint(6) DEFAULT NULL COMMENT '外卖情况',
  `open_hours` smallint(6) DEFAULT NULL COMMENT '开门时间',
  `close_hours` smallint(6) DEFAULT NULL COMMENT '打烊时间',
  `content` text COMMENT '详情',
  `img_id` bigint(20) DEFAULT NULL COMMENT '多对多引入3表 表一图片id 表二图片urlid 表三关联',
  `contact_name` varchar(20) DEFAULT NULL COMMENT '联系人',
  `contact_phone` varchar(20) DEFAULT NULL COMMENT '联系人电话',
  `contact_qq` varchar(20) DEFAULT NULL COMMENT '联系人QQ',
  `contact_email` varchar(20) DEFAULT NULL COMMENT '联系人邮箱',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL COMMENT '更新时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '1为正常使用 0为已成交',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_zgxx
-- ----------------------------
