package com.xd.wyq.brand.influence.support;

import javax.servlet.ServletContextEvent;

import org.apache.log4j.Logger;
import org.springframework.web.context.ContextLoaderListener;

public class StartAppListener extends ContextLoaderListener {
	private static final Logger logger = Logger.getLogger(StartAppListener.class);

	@Override
	public void contextInitialized(ServletContextEvent event) {
		super.contextInitialized(event);
		logger.info("contextInitialized ------------------------ processing...");

		logger.info("contextInitialized ------------------------ processed!!!!");
	}

	@Override
	public void contextDestroyed(ServletContextEvent event) {
		super.contextDestroyed(event);
	}
}
