//package com.xd.iis.wyq.wc.interceptor;
//
//import org.apache.log4j.Logger;
//import org.springframework.web.servlet.HandlerInterceptor;
//import org.springframework.web.servlet.ModelAndView;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.util.Date;
//
//public class RequestAcceptInterceptor implements HandlerInterceptor {
//	private static final Logger logger = Logger.getLogger(RequestAcceptInterceptor.class);
//
//	@Override
//	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//		logger.info(new Date().toLocaleString());
//
//
//		return true;
//	}
//
//
//
//	@Override
//	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3) throws Exception {
//		logger.info(new Date().toLocaleString());
//	}
//
//	@Override
//	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3) throws Exception {
//		logger.info(new Date().toLocaleString());
//	}
//
//}
