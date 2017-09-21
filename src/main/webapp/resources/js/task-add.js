/**
 * Created by pengwei
 *  2017/9/19.
 */
(function (document, window, $) {
    'use strict';
    var Site = window.Site;
    $(document).ready(function () {
        Site.run();
    });
})(document, window, jQuery);


var formControl = $('#formControl').html();
$(function () {
    $(".add_btn").on("click", function () {
        $("#formBox .form-group").eq(1).append(formControl);
    });
    $(".form-group").on("click", ".close", function () {
        $(this).parent(".form-group").remove();
    });
});


//请选择需要导出的信息
$("#exportDialog").on("click", function () {
    swal({
        title: "最多添加10个品牌！",
        type: "warning",
        hideCancelButton: !0,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确定",
        closeOnConfirm: !1
    })
});

function btn_submit() {
    var keys = $('#formBox input[name="keywords"]');
    if(null != keys && keys.length > 0){
        var keywords = [];
        for(var i = 0 ; i < keys.length ; i++){
            if(null != $(keys[i]).val() && $(keys[i]).val().length > 0){
                keywords.push($(keys[i]).val());
            }
        }
        if(keywords.length > 0 ){
            var endTime = new Date();
            var startTime = new Date( new Date().getTime() - ($('#date-time').val() * 24 * 60 * 60 * 1000));
            AJAX_POST_ONE("/taskSearch/insert",{keys:keywords.toString(),startTime:startTime,endTime:endTime},function (result) {
                if(200 == result.code){
                    swal("系统提示", "操作成功", "success")
                }else{
                    sweetAlert("系统提示", result.message, "error");
                }
            })
        }
    }
}