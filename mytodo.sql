/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : mytodo

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-08-29 11:09:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `task`
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `taskid` int(11) NOT NULL AUTO_INCREMENT COMMENT '任务 id',
  `userid` int(11) NOT NULL COMMENT '任务 userid',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '任务状态，0-失效，1-启用',
  `taskname` varchar(255) DEFAULT '' COMMENT '任务名称',
  `tasktype` tinyint(4) DEFAULT NULL COMMENT '任务种类，1-单次， 2-长期， 3-反长期',
  `taskgrade` tinyint(4) DEFAULT '1' COMMENT '任务等级',
  `taskcolor` varchar(255) DEFAULT NULL COMMENT '任务颜色',
  `taskfrom` datetime DEFAULT NULL COMMENT '任务开始时间',
  `taskto` datetime DEFAULT NULL COMMENT '任务结束时间',
  `taskmoment` varchar(255) DEFAULT NULL COMMENT '任务提醒时刻',
  `taskdateline` datetime DEFAULT NULL COMMENT '任务提醒日期',
  `taskperiod` tinyint(4) DEFAULT NULL COMMENT '任务周期， 1-日， 2-星期， 3-月， 4-年 ',
  `taskremindday` tinyint(4) DEFAULT NULL COMMENT '任务提醒 (日)，1',
  `taskremindweek` tinyint(4) DEFAULT NULL COMMENT '任务提醒 (星期)，1-7',
  `taskremindmonth` tinyint(4) DEFAULT NULL COMMENT '任务提醒 (月),1-31',
  `taskremindyear` int(11) DEFAULT NULL COMMENT '任务提醒 (年),1-365',
  PRIMARY KEY (`taskid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'userid',
  `username` varchar(40) NOT NULL COMMENT '用户名',
  `password` char(32) NOT NULL COMMENT '密码',
  `phone` varchar(40) NOT NULL DEFAULT '' COMMENT '手机号',
  `email` char(11) NOT NULL DEFAULT '' COMMENT 'email',
  `profession` varchar(50) NOT NULL DEFAULT '' COMMENT '职业',
  `age` varchar(100) NOT NULL DEFAULT '' COMMENT '年龄',
  `sex` varchar(20) NOT NULL DEFAULT '' COMMENT '性别',
  `grade` char(19) NOT NULL DEFAULT '' COMMENT '等级',
  `realname` varchar(20) NOT NULL DEFAULT '' COMMENT '真实姓名',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '用户状态，1-正常，0-禁用',
  `vip_level` tinyint(1) NOT NULL DEFAULT '0' COMMENT '会员等级,0-普通会员',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='用户账号信useruseruser息';

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '123', '123', '', '', '', '', '', '', '', '1', '0');
INSERT INTO `user` VALUES ('2', '123456', '123456', '', '', '', '', '', '', '', '1', '0');
INSERT INTO `user` VALUES ('3', '123456789', '123456789', '', '', '', '', '', '', '', '1', '0');
INSERT INTO `user` VALUES ('4', '159', '159', '', '', '', '', '', '', '', '1', '0');
