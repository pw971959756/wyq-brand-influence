package com.xd.wyq.brand.influence.common;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 异常处理
 * Created by pengwei
 * 2017/6/22.
 */
public class CustomHandlerExceptionResolver implements HandlerExceptionResolver {

    private static final Log logger = LogFactory.getLog(CustomHandlerExceptionResolver.class);


    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        Long time = System.currentTimeMillis();
        logger.error("-------------------------------------------------> Error Code:" + time + "\n" );
        ex.printStackTrace();
        ModelAndView modelAndView = new ModelAndView("500");
        modelAndView.addObject("ErrorCode", time);
        return modelAndView;
    }
}
