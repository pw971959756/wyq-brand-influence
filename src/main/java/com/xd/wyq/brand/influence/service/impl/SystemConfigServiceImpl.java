package com.xd.wyq.brand.influence.service.impl;

import com.xd.wyq.brand.influence.dao.SystemConfigDao;
import com.xd.wyq.brand.influence.pojos.SystemConfig;
import com.xd.wyq.brand.influence.service.SystemConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SystemConfigServiceImpl implements SystemConfigService {

	@Autowired
	private SystemConfigDao systemConfigDao;

	@Override
	public List<SystemConfig> queryAll() {
		return systemConfigDao.selectAll();
	}
	
	@Override
	public void initSystemConfig() {

	}

	public SystemConfigDao getSystemConfigDao() {
		return systemConfigDao;
	}

	public void setSystemConfigDao(SystemConfigDao systemConfigDao) {
		this.systemConfigDao = systemConfigDao;
	}




}
