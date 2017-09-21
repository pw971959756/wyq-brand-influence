package com.xd.wyq.brand.influence.service;

import com.xd.wyq.brand.influence.pojos.SystemConfig;

import java.util.List;

public interface SystemConfigService {
	/**
	 * 获取所有系统配置
	 * 
	 * @return
	 */
	public List<SystemConfig> queryAll();

	/**
	 * 初始化系统配置
	 */
	public void initSystemConfig();

//	public void initWeiboAnalysisConfig();
//	public void initSingleWeiboAnalysisTaskConfig();
//	public void initIntraBusinessAPIConfig();
//	public void initFullAnalysisConfig();
//	public void initCommonConfig();
}
