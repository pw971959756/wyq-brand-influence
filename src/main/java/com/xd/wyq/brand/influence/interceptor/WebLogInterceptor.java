package com.xd.wyq.brand.influence.interceptor;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;

/**
 * Created by pengwei
 * 2017/7/18.
 */
public class WebLogInterceptor implements HandlerInterceptor {

    public Log logger = LogFactory.getLog(WebLogInterceptor.class);

    private SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Resource
    private HttpServletRequest request;

    @Pointcut("execution(* com.xd.iis.wyq.wc.controller*..*(..))")
    public void log() {
        logger.info(request.getParameterMap());
    }


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        try {
            HandlerMethod handlerMethod = (HandlerMethod) handler;

            Method method = handlerMethod.getMethod();
            String className = handlerMethod.getMethod().getDeclaringClass().getName();
            String methodName = method.getName();
            String uri = request.getRequestURI();

            StringBuilder sb = new StringBuilder("\n\nSpringMVC action report -------- " + simpleDateFormat.format(new Date()) + " ------------------------------");
            sb.append("\n\nController  : " + className);
            sb.append("\nMethod      : " + methodName);
            if (uri != null) {
                sb.append("\nurl         : " + uri);
            }

            sb.append("\nParameter   : ");
            Enumeration<String> enu = request.getParameterNames();
            while (enu.hasMoreElements()) {
                String name = enu.nextElement();
                String[] values = request.getParameterValues(name);
                if (values.length == 1) {
                    sb.append(name).append("=").append(values[0]);
                } else {
                    sb.append(name).append("[]={");
                    for (int i = 0; i < values.length; i++) {
                        if (i > 0)
                            sb.append(",");
                        sb.append(values[i]);
                    }
                    sb.append("}");
                }
                sb.append("  ");
            }
            sb.append("\n-----------------------------------------------------------------------------------\n\n");
            logger.info(sb.toString());
        } catch (Exception e) {
//            logger.error(e);
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    }


}
