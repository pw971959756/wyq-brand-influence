//package com.xd.iis.wyq.wc.constant;
//
//
//import java.util.Hashtable;
//import java.util.concurrent.ExecutorService;
//import java.util.concurrent.Executors;
//
//public class Constants {
//    public static ExecutorService executorService = Executors.newCachedThreadPool();
//
//    public static final String SECRET_KEY = "wisdom.court@2017"; // salt
//    public static final String PRODUCT_TYPE_ZHFY = "1001"; // 智慧法院
//    public static final String PARTNER_KEY_ALL = "DFAluJTKTH8="; // 所有分配的合作伙伴key的密文,多个之间用逗号分区
//
//    public static final int JEDIS_SSO_EXPIRY = 36000; // 登录有效期
//    public static final String JEDIS_KEYS_PREFIX = "wisdomCourt_"; // jedis前缀
//    public static final String JEDIS_KEYS_LOGIN = "_login_"; // 登录
//    public static final String JEDIS_LOGIN_COOKIE_NAME = "sid"; // 登录
//
//    public static final String SESSION_USER = "wisdomCourt_login_user"; //登录用户
//
//    //用于调接口时，拼接userTag
//    public static final String USERTAG_TOP_VALUE = "ent-";
//
//
//    //新增的所有Task
//    public static final Hashtable<String, Integer> MAP_USER_TASK_IDS = new Hashtable<String, Integer>();
//
//
//    public static final int STATUS_INVALID = 0; // 无效
//    public static final int STATUS_VALID = 1; // 有效
//
//    public static final String API_SUCCESS_CODE = "200"; // 接口返回成功状态码
//
//    public static final int PAGE_SIZE = 20; // 分页数量
//
//    // 案件分类
//    public static final int CASE_CATEGORY_TYPE_NEW = 1; // 系统新建
//    public static final int CASE_CATEGORY_TYPE_API = 2; // API同步
//
//    // 是否新案件
//    public static final int CASE_IS_NOT_NEW = 0; // 否
//    public static final int CASE_IS_NEW = 1; // 是
//
//    // 授权接口地址
//    public static final String AUTH_API_USER_URL = "/user"; // 获取用户信息
//    public static final String AUTH_API_CASE_URL = "/case"; // 获取用户信息
//
//
//
//}