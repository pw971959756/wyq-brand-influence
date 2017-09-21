package com.xd.wyq.brand.influence.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by pengwei
 * 2017/9/20.
 */
@Controller
public class ViewController {



    @RequestMapping(value = {"/","index"})
    public String taskAdd(){
        return "task-add";
    }

}
