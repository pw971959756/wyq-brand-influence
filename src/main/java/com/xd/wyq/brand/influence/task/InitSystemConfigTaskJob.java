package com.xd.wyq.brand.influence.task;

import com.xd.wyq.brand.influence.service.SystemConfigService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class InitSystemConfigTaskJob {
	private static final Logger logger = Logger.getLogger(InitSystemConfigTaskJob.class);

	@Autowired
	private SystemConfigService systemConfigService;

	/**
	 * 初始化系统配置<br />
	 * 每10分钟加载一次系统参数
	 */
	@Scheduled(cron = "0 0/10 * * * ?")
	public void InitSystemConfig() {
		logger.info("InitSystemConfig ------------------------ processing...");
		systemConfigService.initSystemConfig(); // 系统配置
		logger.info("InitSystemConfig ------------------------ processed!!!!");
	}

	public SystemConfigService getSystemConfigService() {
		return systemConfigService;
	}

	public void setSystemConfigService(SystemConfigService systemConfigService) {
		this.systemConfigService = systemConfigService;
	}
}