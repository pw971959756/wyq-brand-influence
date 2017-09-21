package com.xd.wyq.brand.influence.dao.impl;

import com.xd.wyq.brand.influence.dao.BaseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate4.HibernateTemplate;

public class BaseDaoImpl implements BaseDao {

    @Autowired
    @Qualifier("wyqWCHibernateTemplate")
    public HibernateTemplate wyqWCWWriteHibernateTemplate;
    @Autowired
    @Qualifier("wyqWCReadHibernateTemplate")
    public HibernateTemplate wyqWCReadHibernateTemplate;

    @Autowired
    @Qualifier("writeJdbcTemplate")
    public JdbcTemplate writeJdbcTemplate;
    @Autowired
    @Qualifier("readJdbcTemplate")
    public JdbcTemplate readJdbcTemplate;


    @Override
    public <T> T evict(HibernateTemplate hibernateTemplate, T entity) {
        if (entity != null && hibernateTemplate != null && hibernateTemplate.getSessionFactory() != null && hibernateTemplate.getSessionFactory().getCurrentSession() != null) {
            hibernateTemplate.getSessionFactory().getCurrentSession().evict(entity);
            return entity;
        }
        return null;
    }



}
