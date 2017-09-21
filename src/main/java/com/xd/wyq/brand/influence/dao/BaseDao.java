package com.xd.wyq.brand.influence.dao;

import org.springframework.orm.hibernate4.HibernateTemplate;

import java.util.Map;

public interface BaseDao {
	/**
	 * 将对象从persistent为transient
	 * 
	 * @param hibernateTemplate
	 * @param entity
	 * @return
	 */
	<T extends Object> T evict(HibernateTemplate hibernateTemplate, T entity);

	/**
	 * 分页查询
	 * @param hql Hibernate 的HQL 语句
	 * @param pageInfo 分页参数
	 * @param params 查询参数
	 * @return
	 */
//	public PageInfo findPage(String hql, PageInfo pageInfo , Map<String,Object> params);

}
