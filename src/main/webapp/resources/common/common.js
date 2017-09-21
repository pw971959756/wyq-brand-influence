/**
 * Created by pengwei
 *  2017/6/27.
 */
/**
 * 获取用户ID
 * @returns {number}
 */
function getUserId() {
    var userId = getCookie("UserId");
    return null == userId ? 10086 : userId;
}

/**
 * 非空判断
 *  空:true 非空:false
 */
function isEmpty(value) {
    if ("" === value || null === value || undefined === value) {
        return true;
    }
    return false;
}

/**
 * 中文符号 转 英文符号
 * 说明:中文空格 转 英文+
 * @param txt
 * @returns {*}
 * @constructor
 */
function ChineseToEnglish(txt) {
    var ChineseInterpunction = ["＋", " ", "“", "”", "‘", "’", "。", "，", "；", "：", "？", "！", "……", "—", "～", "（", "）", "《", "》"];
    var EnglishInterpunction = ["+", "+", "\"", "\"", "'", "'", ".", ",", ";", ":", "?", "!", "…", "-", "~", "(", ")", "<", ">"];
    for (var j = 0; j < ChineseInterpunction.length; j++) {
        var reg = new RegExp(ChineseInterpunction[j], "g");
        txt = txt.replace(reg, EnglishInterpunction[j]);
    }
    return txt;
}


/**
 * 非空提示
 * @param key
 */
function layerEmpty(key) {
    layer.tips('不能为空', key);
}

/**
 * AjaxSuccess 返回处理
 * @param result
 */
function layerAjaxSuccess(result) {
    if (200 == result.code) {
        layer.alert('操作成功', {icon: 6});
    } else {
        layer.alert('操作失败', {icon: 5});
    }
}


/**
 * 开始时间结束时间
 * @param start 开始
 * @param end   结束
 * @param format    时间格式
 */
function laydateStartEnd(start, end, format) {
    var start = {
        elem: start, //选择ID为START的input
        format: format, //自动生成的时间格式
//            min: laydate.now(), //自动生成的时间格式
        max: laydate.now(), //最大日期
        istime: true, //必须填入时间
        istoday: false,  //是否是当天
        start: laydate.now(0, format),  //设置开始时间为当前时间
        choose: function (datas) {
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
        }
    };
    var end = {
        elem: end,
        format: format,
        max: laydate.now(),
        istime: true,
        istoday: false,
        start: laydate.now(0, format),
        choose: function (datas) {
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };
    laydate(start);
    laydate(end);
}


//JS操作cookies方法!
//写cookies
function setCookie(name, value) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookies
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//删除cookies
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}


/**
 * 刷新DataTable
 * @param table        DataTable实例
 * @param tableKey    DataTable Html 的Id 或者 class
 * @param url        请求的Url
 * @param dataSrc    数据截取位置。
 * Demo : client.js  reloadDataTable();
 */
function reloadTable(table, tableKey, url, dataSrc) {
    var oldoptions = table.fnSettings();
    var newoptions = $.extend(oldoptions, {
        "ajax": {
            url: url,
            dataSrc: dataSrc
        },
        searching: false,
        "sServerMethod": "GET",
        "iDisplayLength": CONF.TABLES_SEZE

    });
    table.fnDestroy();
    $(tableKey).dataTable(newoptions);
}


/**
 * 自定义 MAP 性能不咋地。勿吐槽
 * put();                添加数据到MAP 中
 * get();                    使用Key 取值
 * keySet();                获取Key集合  Array 类型
 * size()                    获取MAP 的长度
 * remove()                    移除指定Key 对象
 */
/****************************************************** start MAP  **********************************************************/
function Map() {
    this.container = new Object();
}

Map.prototype.put = function (key, value) {
    this.container[key] = value;
};

Map.prototype.get = function (key) {
    return this.container[key];
};

Map.prototype.keySet = function () {
    var keyset = new Array();
    var count = 0;
    for (var key in this.container) {
// 跳过object的extend函数
        if (key == 'extend') {
            continue;
        }
        keyset[count] = key;
        count++;
    }
    return keyset;
};

Map.prototype.size = function () {
    var count = 0;
    for (var key in this.container) {
// 跳过object的extend函数
        if (key == 'extend') {
            continue;
        }
        count++;
    }
    return count;
};

Map.prototype.remove = function (key) {
    delete this.container[key];
};
/****************************************************** end MAP  **********************************************************/

/****************************************************** Start Date  **********************************************************/
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

Date.prototype.toLocaleString = function () {
    return this.Format('yyyy-MM-dd hh:mm:ss');
}

/**
 * 时间戳转 时间
 * @param tm
 * @returns {string}
 */
function getTimeToDate(tm) {
    if (isNotEmpty(tm)) {
        var tt = new Date(tm);
        return tt;
    }
}

/**
 * String转Date
 * @param str
 * @returns {Date}
 */
function getStringToDate(str) {
    if (isNotEmpty(str)) {
        return new Date(Date.parse(str.replace(/-/g, "/")));
    }
}

/****************************************************** End Date  **********************************************************/

