//package com.xd.iis.wyq.wc.constant;
//
//import java.util.HashMap;
//import java.util.Map;
//
//public class ResultCodeConstants {
//	// 处理结果
//	public static final String T_REQUEST_HANDLE_SUCCESS = "0000";
//	public static final String T_REQUEST_HANDLE_FAILURE = "9999";
//
//	// 系统参数校验
//	public static final String F_LACK_NECESSARY_SYSTEM_PARAM = "101";
//	public static final String F_LACK_NECESSARY_USERENCODE = "102";
//
//	// 缺少参数
//	public static final String F_LACK_NECESSARY_TYPE_PARAM = "10001";
//	public static final String F_LACK_NECESSARY_ACCESSTOKEN_PARAM = "10002";
//	public static final String F_LACK_NECESSARY_CREATE_ORDER_PARAM = "10003";
//	public static final String F_LACK_NECESSARY_CREATE_ORDER_TYPE_PARAM = "10004";
//	public static final String F_LACK_NECESSARY_CREATE_ORDER_KEYWORD_IDS_PARAM = "10005";
//	public static final String F_LACK_NECESSARY_CREATE_ORDER_RENEW_PACKAGE_ID_PARAM = "10006";
//	public static final String F_LACK_NECESSARY_CREATE_ORDER_PACKAGES_PARAM = "10007";
//	public static final String F_LACK_NECESSARY_CREATE_ORDER_PACKAGES_COUNT_PARAM = "10008";
//	public static final String F_LACK_NECESSARY_CREATE_ORDER_FENXI_WEIBO_ID_PARAM = "10009";
//	public static final String F_LACK_NECESSARY_CREATE_ORDER_MANUAL_BRIEF_ID_PARAM = "10010";
//	public static final String F_LACK_NECESSARY_PACKAGE_ID_PARAM = "10011";
//	public static final String F_LACK_NECESSARY_PAY_INNER_TRADE_NO = "10012";
//	public static final String F_LACK_NECESSARY_PAY_TRADE_NO = "10013";
//	public static final String F_LACK_NECESSARY_ORDER_NO = "10014";
//	public static final String F_LACK_NECESSARY_ORDER_RECORD_ID = "10015";
//	public static final String F_LACK_NECESSARY_CREATE_ORDER_KEYWORDS_PARAM = "10016";
//	public static final String F_LACK_NECESSARY_CREATE_ORDER_HEAT_REPORT_IDS_PARAM = "10017";
//	public static final String F_LACK_NECESSARY_CREATE_USER_EXCLUSIVE_CHANNEL = "10018";
//	public static final String F_LACK_NECESSARY_EXCLUSIVE_EXCHANGE_AMOUNT = "10019";
//	public static final String F_LACK_NECESSARY_KEYWORD_ID_PARAM = "10020";
//	public static final String F_LACK_NECESSARY_KEYWORD_PARAM = "10021";
//	public static final String F_LACK_NECESSARY_MONITOR_TYPE_PARAM = "10022";
//	public static final String F_LACK_NECESSARY_USERNAME_PARAM = "10023";
//	public static final String F_LACK_NECESSARY_PASSWORD_PARAM = "10024";
//	public static final String F_LACK_NECESSARY_APP_USER_STATUS_PARAM = "10025";
//	public static final String F_LACK_NECESSARY_USER_CHANNEL_PARAM = "10026";
//	public static final String F_LACK_NECESSARY_SID = "10027";
//	public static final String F_LACK_NECESSARY_USER_PARAM = "10028";
//	public static final String F_LACK_NECESSARY_UID_PARAM = "10029";
//	public static final String F_LACK_NECESSARY_PLATFORM_TYPE_PARAM = "10030";
//	public static final String F_LACK_NECESSARY_USERRIGHTSRECORD_ITEM_PARAM = "10031";
//	public static final String F_LACK_NECESSARY_USERRIGHTSRECORD_TYPE_PARAM = "10032";
//	public static final String F_LACK_NECESSARY_USERRIGHTSRECORD_COUNT_PARAM = "10033";
//	public static final String F_LACK_NECESSARY_SUBUSER_ID_PARAM = "10034";
//	public static final String F_LACK_NECESSARY_VALIDENDDATE_PARAM = "10035";
//	public static final String F_LACK_NECESSARY_STATUS_PARAM = "10036";
//	public static final String F_LACK_NECESSARY_MOBILE_PARAM = "10037";
//	public static final String F_LACK_NECESSARY_SMS_TYPE = "10038";
//	public static final String F_LACK_NECESSARY_SMS_CONTENT = "10039";
//	public static final String F_LACK_NECESSARY_SMS_VCODE = "10040";
//
//	// 获取信息失败
//	public static final String F_NOT_FOUND_USER = "20001";
//	public static final String F_NOT_FOUND_PRODUCT_PACKAGE = "20002";
//	public static final String F_NOT_FOUND_RENEW_PRODUCT_PACKAGE = "20003";
//	public static final String F_NOT_FOUND_PAY_RECORD = "20004";
//	public static final String F_NOT_FOUND_ORDER_RECORD = "20005";
//	public static final String F_NOT_FOUND_KEYWORD = "20006";
//	public static final String F_NOT_FOUND_H5ACTIVITY = "20007";
//	public static final String F_NOT_FOUND_SUBUSERINFO = "20008";
//
//	// 处理出错
//	public static final String F_ERROR_VERIFY_REQUEST = "30001";
//	public static final String F_ERROR_USER_ENCODE = "30002";
//	public static final String F_ERROR_PARSE_CONFIRM_ORDER = "30003";
//	public static final String F_ERROR_PAY_STATUS = "30004";
//	public static final String F_ERROR_PAY_USER_NOT_MATCH = "30005";
//	public static final String F_ERROR_USER_ALREADY_EXISTS = "30006";
//	public static final String F_ERROR_USERNAME_OR_PASSWORD_00 = "3000700";
//	public static final String F_ERROR_USERNAME_OR_PASSWORD_01 = "3000701";
//	public static final String F_ERROR_USERNAME_OR_PASSWORD_02 = "3000702";
//	public static final String F_ERROR_USERNAME_OR_PASSWORD_03 = "3000703";
//	public static final String F_ERROR_H5_ACTIVIED = "30008";
//	public static final String F_ERROR_PARSE_USER = "30009";
//	public static final String F_ERROR_MIN_USERRIGHTSRECORD = "30010";
//	public static final String F_ERROR_USERNAME_NOT_EXISTS = "30011";
//	public static final String F_ERROR_USERID_AND_SUBUSERID = "30012";
//	public static final String F_ERROR_NOT_PRO_USER = "30013";
//	public static final String F_ERROR_LIMIT_EXCEEDED_SUBUSER = "30014";
//	public static final String F_ERROR_SUBUSER_VALIDENDTIME_LIMIT_PROVALIDENDDATE = "30015";
//	public static final String F_ERROR_USER_VALIDENDTIME_LIMIT = "30016";
//	public static final String F_ERROR_USER_PAUSE = "30018";
//	public static final String F_ERROR_H5ACTIVE_TIME_RANGE = "30019";
//    public static final String F_ERROR_KEYWORD_MODIFY_NUM = "30020";
//    public static final String F_ERROR_NO_NEED_REAL_NAME = "30021";
//    public static final String F_ERROR_VOCDE_NO_OVERDUE = "30022";
//    public static final String F_ERROR_VOCDE_OVERDUE = "30023";
//    public static final String F_ERROR_VOCDE_OVER_LIMIT = "30024";
//
//	public static final Map<String, String> messageMap = new HashMap<String, String>();
//
//	static {
//		messageMap.put(ResultCodeConstants.T_REQUEST_HANDLE_SUCCESS, "请求已正常响应");
//		messageMap.put(ResultCodeConstants.T_REQUEST_HANDLE_FAILURE, "请求处理失败");
//
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_SYSTEM_PARAM, "请提交必须的系统参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_USERENCODE, "请提交用户加密唯一标识");
//
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_TYPE_PARAM, "请提交正确的type参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_ACCESSTOKEN_PARAM, "请提交accessToken参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_ORDER_PARAM, "请提交创建订单参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_ORDER_TYPE_PARAM, "请提交订单类型参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_ORDER_KEYWORD_IDS_PARAM, "请提交续费监测方案IDS参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_ORDER_RENEW_PACKAGE_ID_PARAM, "请提交续费产品包ID参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_ORDER_PACKAGES_PARAM, "请提交购买产品包列表参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_ORDER_PACKAGES_COUNT_PARAM, "请提交购买产品数量参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_ORDER_FENXI_WEIBO_ID_PARAM, "请提交分析微博ID参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_ORDER_MANUAL_BRIEF_ID_PARAM, "请提交人工简报ID参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_PACKAGE_ID_PARAM, "请提交产品ID参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_PAY_INNER_TRADE_NO, "请提交内部支付交易单号参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_PAY_TRADE_NO, "请提交第三方交易单号参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_ORDER_NO, "请提交订单编号参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_ORDER_RECORD_ID, "请提交订单ID参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_ORDER_KEYWORDS_PARAM, "请提交关键词参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_ORDER_HEAT_REPORT_IDS_PARAM, "请提交热度日报IDS参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_CREATE_USER_EXCLUSIVE_CHANNEL, "请提交渠道号参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_EXCLUSIVE_EXCHANGE_AMOUNT, "请提交正确的兑换金额参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_KEYWORD_ID_PARAM, "请提交监测方案ID参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_KEYWORD_PARAM, "请提交监测方案关键词参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_MONITOR_TYPE_PARAM, "请提交监测类型参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_USERNAME_PARAM, "请提交用户名参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_PASSWORD_PARAM, "请提交密码参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_APP_USER_STATUS_PARAM, "请提交用户所属平台参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_USER_CHANNEL_PARAM, "请提交用户渠道参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_SID, "请提交SID参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_USER_PARAM, "请提交注册用户参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_UID_PARAM, "请提交第三方唯一标识(uid)参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_PLATFORM_TYPE_PARAM, "请提交平台类型参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_USERRIGHTSRECORD_ITEM_PARAM, "请提交变动项参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_USERRIGHTSRECORD_TYPE_PARAM, "请提交变动类型参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_USERRIGHTSRECORD_COUNT_PARAM, "请提交变动数量参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_SUBUSER_ID_PARAM, "请提交子账号ID参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_VALIDENDDATE_PARAM, "请提交有效截止日期参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_STATUS_PARAM, "请提交状态参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_MOBILE_PARAM, "请提交手机号码参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_SMS_TYPE, "请提交短信类型参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_SMS_CONTENT, "请提交短信内容参数");
//		messageMap.put(ResultCodeConstants.F_LACK_NECESSARY_SMS_VCODE, "请提交验证码参数");
//
//		messageMap.put(ResultCodeConstants.F_NOT_FOUND_USER, "获取用户信息失败");
//		messageMap.put(ResultCodeConstants.F_NOT_FOUND_PRODUCT_PACKAGE, "获取产品套餐失败");
//		messageMap.put(ResultCodeConstants.F_NOT_FOUND_RENEW_PRODUCT_PACKAGE, "获取续费产品套餐失败");
//		messageMap.put(ResultCodeConstants.F_NOT_FOUND_PAY_RECORD, "获取支付记录失败");
//		messageMap.put(ResultCodeConstants.F_NOT_FOUND_ORDER_RECORD, "获取订单记录失败");
//		messageMap.put(ResultCodeConstants.F_NOT_FOUND_KEYWORD, "获取监测方案记录失败");
//		messageMap.put(ResultCodeConstants.F_NOT_FOUND_H5ACTIVITY, "获取H5活动记录失败");
//		messageMap.put(ResultCodeConstants.F_NOT_FOUND_SUBUSERINFO, "获取子账号信息失败");
//
//		messageMap.put(ResultCodeConstants.F_ERROR_VERIFY_REQUEST, "请求参数校验失败");
//		messageMap.put(ResultCodeConstants.F_ERROR_USER_ENCODE, "用户加密唯一标识校验失败");
//		messageMap.put(ResultCodeConstants.F_ERROR_PARSE_CONFIRM_ORDER, "解析创建订单参数失败");
//		messageMap.put(ResultCodeConstants.F_ERROR_PAY_STATUS, "订单支付状态不正确");
//		messageMap.put(ResultCodeConstants.F_ERROR_PAY_USER_NOT_MATCH, "支付记录和用户不匹配");
//		messageMap.put(ResultCodeConstants.F_ERROR_USER_ALREADY_EXISTS, "该用户已存在");
//		messageMap.put(ResultCodeConstants.F_ERROR_USERNAME_OR_PASSWORD_00, "用户名或密码错误！");
//		messageMap.put(ResultCodeConstants.F_ERROR_USERNAME_OR_PASSWORD_01, "用户名或密码错误！还可以再试 ${count} 次！");
//		messageMap.put(ResultCodeConstants.F_ERROR_USERNAME_OR_PASSWORD_02, "用户名或密码错误！密码输入次数已超过限制，请明天再试！");
//		messageMap.put(ResultCodeConstants.F_ERROR_USERNAME_OR_PASSWORD_03, "密码输入次数已超过限制，请明天再试！");
//		messageMap.put(ResultCodeConstants.F_ERROR_H5_ACTIVIED, "已参加过该活动");
//		messageMap.put(ResultCodeConstants.F_ERROR_PARSE_USER, "解析用户参数失败");
//		messageMap.put(ResultCodeConstants.F_ERROR_MIN_USERRIGHTSRECORD, "扣减用户权益失败");
//		messageMap.put(ResultCodeConstants.F_ERROR_USERNAME_NOT_EXISTS, "该帐号不存在");
//		messageMap.put(ResultCodeConstants.F_ERROR_USERID_AND_SUBUSERID, "子账号归属不匹配");
//		messageMap.put(ResultCodeConstants.F_ERROR_NOT_PRO_USER, "非套餐用户");
//		messageMap.put(ResultCodeConstants.F_ERROR_LIMIT_EXCEEDED_SUBUSER, "超过子账号开通限额");
//		messageMap.put(ResultCodeConstants.F_ERROR_SUBUSER_VALIDENDTIME_LIMIT_PROVALIDENDDATE, "子账号有效期超过专业版有效期");
//		messageMap.put(ResultCodeConstants.F_ERROR_USER_VALIDENDTIME_LIMIT, "该帐号已过期");
//		messageMap.put(ResultCodeConstants.F_ERROR_USER_PAUSE, "该帐号已被暂停使用");
//		messageMap.put(ResultCodeConstants.F_ERROR_H5ACTIVE_TIME_RANGE, "不在活动时间范围内");
//        messageMap.put(ResultCodeConstants.F_ERROR_KEYWORD_MODIFY_NUM, "方案修改次数已用完");
//        messageMap.put(ResultCodeConstants.F_ERROR_NO_NEED_REAL_NAME, "用户不需要实名认证");
//        messageMap.put(ResultCodeConstants.F_ERROR_VOCDE_NO_OVERDUE, "短信验证码尚未过期");
//        messageMap.put(ResultCodeConstants.F_ERROR_VOCDE_OVERDUE, "短信验证码已过期");
//        messageMap.put(ResultCodeConstants.F_ERROR_VOCDE_OVER_LIMIT, "短信发送数量已达上限");
//	}
//
//	public static String getMsg(String code) {
//		return messageMap.get(code);
//	}
//}
