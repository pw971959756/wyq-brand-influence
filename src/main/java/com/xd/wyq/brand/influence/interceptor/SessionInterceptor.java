//package com.xd.iis.wyq.wc.interceptor;
//
//
//import org.apache.log4j.Logger;
//import org.springframework.web.servlet.HandlerInterceptor;
//import org.springframework.web.servlet.ModelAndView;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.util.Date;
//
///**
// * session拦截器
// *
// * @author liym
// */
//public class SessionInterceptor implements HandlerInterceptor {
//
//
//	private static final Logger logger = Logger.getLogger(RequestAcceptInterceptor.class);
//
//	@Override
//	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//
//		return true;
//	}
//
//	@Override
//	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
//		logger.info(new Date().toLocaleString());
//	}
//
//	@Override
//	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
//		logger.info(new Date().toLocaleString());
//	}
//
//}
