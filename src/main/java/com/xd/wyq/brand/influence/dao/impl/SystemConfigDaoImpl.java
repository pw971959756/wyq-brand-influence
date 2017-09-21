package com.xd.wyq.brand.influence.dao.impl;

import com.xd.wyq.brand.influence.dao.SystemConfigDao;
import com.xd.wyq.brand.influence.pojos.SystemConfig;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate4.HibernateCallback;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SystemConfigDaoImpl extends BaseDaoImpl implements SystemConfigDao {

	@Autowired
	private HibernateTemplate wyqWCReadHibernateTemplate;

	@Override
	public List<SystemConfig> selectAll() {
		List<SystemConfig> systemConfigs = this.wyqWCReadHibernateTemplate.execute(new HibernateCallback<List<SystemConfig>>() {
			@SuppressWarnings("unchecked")
			@Override
			public List<SystemConfig> doInHibernate(Session session) throws HibernateException {
				String hql = "from SystemConfig where status = :status";
				Query query = session.createQuery(hql);
				query.setInteger("status", 1);

				return (List<SystemConfig>) query.list();
			}
		});
		return systemConfigs;
	}

	public HibernateTemplate getWyqEEReadHibernateTemplate() {
		return wyqWCReadHibernateTemplate;
	}

	public void setWyqEEReadHibernateTemplate(HibernateTemplate wyqEEReadHibernateTemplate) {
		this.wyqWCReadHibernateTemplate = wyqEEReadHibernateTemplate;
	}

}
