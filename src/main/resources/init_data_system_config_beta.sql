DELETE FROM `system_config`;
ALTER TABLE `system_config` AUTO_INCREMENT=1;
INSERT INTO `system_config` (`name`, `value`, `remark`) VALUES 
('ENVIRONMENT_FLAG', 'beta', '环境标识'),
('JEDIS_SERVER', 'm.rds.xd-tech.cn', 'jedis服务地址'),
('JEDIS_PORT', '6379', 'jedis端口'),
('FILE_UPLOAD_PATH', '/home/web/webfiles/files1.wyq.cn/', '文件上传路径'),
('FILE_VIEW_PATH', 'http://files-beta.51wyq.cn/', '文件预览路径'),
('API_BASE_URL', 'http://api-beta.intra.51wyq.cn', '接口基础API地址'),
('API_ALL_URL', 'http://api-beta.intra.51wyq.cn/all/api', '公共接口API地址'),
('API_ALL_CHART_URL', 'http://api-beta.intra.51wyq.cn/all/chart', '公共接口API地址'),
('API_DS_URL', 'http://api-beta.intra.51wyq.cn/ds/api', '数据接口API地址'),
('API_ANALYSIS_API_URL', 'http://api-beta.intra.51wyq.cn/sjfx/api', '事件分析接口API地址'),
('API_ANALYSIS_TASK_URL', 'http://task-beta.intra.51wyq.cn/sjfx/api', '事件分析任务TASK地址'),
('API_WEIBO_ANALYSIS_API_URL', 'http://api-beta.intra.51wyq.cn/wbfx/api', '事件分析接口API地址'),
('API_WEIBO_ANALYSIS_TASK_URL', 'http://task-beta.intra.51wyq.cn/wbfx/api', '微博事件分析接口TASK地址'),
('API_AUTH_URL', 'http://122.96.92.246:30001/api/open', '授权接口地址');