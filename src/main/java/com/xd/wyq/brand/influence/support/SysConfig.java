//package com.xd.iis.wyq.wc.support;
//
//import org.apache.log4j.Logger;
//
//import java.util.HashMap;
//import java.util.Map;
//
//public class SysConfig {
//	private static final Logger logger = Logger.getLogger(SysConfig.class);
//
//	public static Map<String, String> cfgMap = new HashMap<String, String>(); // 系统配置
//
//	public static String ENVIRONMENT_FLAG;
//
//	public static String FILE_UPLOAD_PATH;
//	public static String FILE_VIEW_PATH;
//
//	public static String API_ALL_URL;
//	public static String API_BASE_URL;
//	public static String API_ALL_CHART_URL;
//	public static String API_DS_URL;
//	public static String API_ANALYSIS_API_URL; // 事件分析任务API地址
//	public static String API_ANALYSIS_TASK_URL; // 事件分析任务TASK地址
//	public static String API_WEIBO_ANALYSIS_API_URL; // 微博分析任务API地址
//	public static String API_WEIBO_ANALYSIS_TASK_URL; // 微博分析任务TASK地址
//	public static String API_AUTH_URL; // 授权接口地址
//
//
//
//	public static void load() {
//		try {
//			ENVIRONMENT_FLAG = cfgMap.get("ENVIRONMENT_FLAG");
//			FILE_UPLOAD_PATH = cfgMap.get("FILE_UPLOAD_PATH");
//			FILE_VIEW_PATH = cfgMap.get("FILE_VIEW_PATH");
//
//			API_ALL_URL = cfgMap.get("API_ALL_URL");
//			API_BASE_URL = cfgMap.get("API_BASE_URL");
//			API_ALL_CHART_URL = cfgMap.get("API_ALL_CHART_URL");
//			API_DS_URL = cfgMap.get("API_DS_URL");
//			API_ANALYSIS_API_URL = cfgMap.get("API_ANALYSIS_API_URL");
//			API_ANALYSIS_TASK_URL = cfgMap.get("API_ANALYSIS_TASK_URL");
//			API_WEIBO_ANALYSIS_API_URL = cfgMap.get("API_WEIBO_ANALYSIS_API_URL");
//			API_WEIBO_ANALYSIS_TASK_URL = cfgMap.get("API_WEIBO_ANALYSIS_TASK_URL");
//			API_AUTH_URL = cfgMap.get("API_AUTH_URL");
//
//			for (Map.Entry<String, String> entry : cfgMap.entrySet())
//				logger.info("SysConfig.load : " + entry.getKey() + " = [" + entry.getValue() + "]");
//		}catch (Exception e){
//			e.printStackTrace();
//		}
//
//
//	}
//
//
//
//}
