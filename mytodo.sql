/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : mytodo

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-10-15 09:53:21
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
  `taskdescription` varchar(255) DEFAULT NULL COMMENT '任务描述',
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
-- Table structure for `themedetails`
-- ----------------------------
DROP TABLE IF EXISTS `themedetails`;
CREATE TABLE `themedetails` (
  `themeid` tinyint(4) NOT NULL AUTO_INCREMENT COMMENT '主题id',
  `themeuser` tinyint(4) NOT NULL COMMENT '主题用户 0-系统颜色',
  `themehead` varchar(255) DEFAULT NULL COMMENT '主题头部颜色',
  `thememain` varchar(255) NOT NULL COMMENT '主题主体 (记录颜色或者主题图片地址)',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '主题状态 (0-禁用, 1-启用, 2-正在使用)',
  `themetype` tinyint(4) NOT NULL DEFAULT '1' COMMENT '主题种类 (1-颜色主题, 2-图片主题)',
  `themename` varchar(255) DEFAULT NULL COMMENT '主题名称',
  PRIMARY KEY (`themeid`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of themedetails
-- ----------------------------
INSERT INTO `themedetails` VALUES ('1', '0', 'background: #617FDF;', 'background: white;', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('4', '0', 'background: #FD7897;', 'background: linear-gradient(-45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('5', '0', 'background: #9983c5;', 'background: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('6', '0', 'background: #70a0ea;', 'background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('15', '0', 'background: #617fdf;', 'background: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('8', '0', 'background: #617fdf;', 'background: linear-gradient(to right, #fa709a 0%, #fee140 100%);', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('9', '0', 'background: #616161;', 'background: linear-gradient(to right, #f83600 0%, #f9d423 100%);', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('10', '0', 'background: #956de8;', 'background: linear-gradient(to top, #30cfd0 0%, #330867 100%);', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('11', '0', 'background: #449fe8;', 'background: linear-gradient(to top, #09203f 0%, #537895 100%);', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('14', '0', 'background: #617FDF;', 'background: linear-gradient(to right, #434343 0%, black 100%);', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('13', '0', 'background: #617FDF;', 'background: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);', '1', '1', '默认');
INSERT INTO `themedetails` VALUES ('2', '0', 'background: #FD7897;', 'background: white;', '1', '1', '默认');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'userid',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '用户状态，1-正常，0-禁用',
  `username` varchar(40) CHARACTER SET utf8 NOT NULL COMMENT '用户名',
  `password` char(32) CHARACTER SET utf8 NOT NULL COMMENT '密码',
  `vip_level` tinyint(1) DEFAULT '0' COMMENT '会员等级,0-普通会员',
  `phone` varchar(40) CHARACTER SET utf8 DEFAULT '' COMMENT '手机号',
  `email` char(11) CHARACTER SET utf8 DEFAULT '' COMMENT 'email',
  `profession` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT '' COMMENT '职业',
  `age` varchar(100) CHARACTER SET utf8 DEFAULT '' COMMENT '年龄',
  `sex` varchar(20) CHARACTER SET utf8 DEFAULT '' COMMENT '性别',
  `realname` varchar(20) CHARACTER SET utf8 DEFAULT '' COMMENT '真实姓名',
  `theme` varchar(255) CHARACTER SET utf8 DEFAULT '1,background: #617FDF;,background: #678bff;' COMMENT '主题信息',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='用户账号信useruseruser息';

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '1', '123', '123', '0', '', '', '', '', '', '', '1,background: #617FDF;,background: white;');
INSERT INTO `user` VALUES ('2', '1', '123456', '123456', '0', '', '', '', '', '', '', '1,background: #617FDF;,background: #678bff;');
INSERT INTO `user` VALUES ('3', '1', '123456789', '123456789', '0', '', '', '', '', '', '', '1,background: #617FDF;,background: #678bff;');
INSERT INTO `user` VALUES ('4', '1', '159', '159', '0', '', '', '', '', '', '', '1,background: #617FDF;,background: #678bff;');
