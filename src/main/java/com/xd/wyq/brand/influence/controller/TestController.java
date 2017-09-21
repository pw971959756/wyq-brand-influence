package com.xd.wyq.brand.influence.controller;

import com.alibaba.fastjson.JSON;
import com.xd.wyq.brand.influence.dao.SystemConfigDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by pengwei
 * 2017/9/20
 */
@RequestMapping("/test")
@Controller
public class TestController {

    @Autowired
    private SystemConfigDao systemConfigDao;


    @ResponseBody
    @RequestMapping("/t1")
    public String test1(){
        return JSON.toJSONString(systemConfigDao.selectAll());
    }


}
