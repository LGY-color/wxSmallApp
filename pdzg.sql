/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : pdzg

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-06-27 17:56:18
*/

SET FOREIGN_KEY_CHECKS=0;

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
-- Table structure for `pdzg_item`
-- ----------------------------
DROP TABLE IF EXISTS `pdzg_item`;
CREATE TABLE `pdzg_item` (
  `id` int(11) NOT NULL,
  `item_name` varchar(255) DEFAULT NULL COMMENT '栏目名称',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `update_time` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pdzg_item
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
