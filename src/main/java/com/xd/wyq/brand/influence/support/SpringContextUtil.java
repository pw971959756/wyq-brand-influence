package com.xd.wyq.brand.influence.support;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * 解决一般类中使用Service的问题
 * 
 * 在Spring MVC中，Controller中使用Service只需使用注解@Resource就行，但是一般类（即不使用@Controller注解的类）要用到Service时，可用如下Util类
 * 
 * 1. 创建Util工具类
 * 
 * 2. 在Spring配置文件中增加配置：
 * <bean id="springContextUtil" class="com.xd.iis.wyq.ee.support.SpringContextUtil" scope="singleton" />
 * 
 * 3. 使用：
 * DictService dictService = (DictService) SpringContextUtil.getBean("dictService");
 * List<dict> dict = (List<dict>) dictService.findByHQL(hql);
 * 
 * @author LiuYidong
 *
 */

public class SpringContextUtil implements ApplicationContextAware
{
	private static ApplicationContext applicationContext; // Spring应用上下文环境

	// 下面的这个方法上加了@Override注解，原因是继承ApplicationContextAware接口是必须实现的方法
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException
	{
		SpringContextUtil.applicationContext = applicationContext;
	}

	public static ApplicationContext getApplicationContext()
	{
		return applicationContext;
	}

	public static Object getBean(String name) throws BeansException
	{
		return applicationContext.getBean(name);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static Object getBean(String name, Class requiredType) throws BeansException
	{
		return applicationContext.getBean(name, requiredType);
	}

	public static boolean containsBean(String name)
	{
		return applicationContext.containsBean(name);
	}

	public static boolean isSingleton(String name) throws NoSuchBeanDefinitionException
	{
		return applicationContext.isSingleton(name);
	}

	@SuppressWarnings("rawtypes")
	public static Class getType(String name) throws NoSuchBeanDefinitionException
	{
		return applicationContext.getType(name);
	}

	public static String[] getAliases(String name) throws NoSuchBeanDefinitionException
	{
		return applicationContext.getAliases(name);
	}
}
