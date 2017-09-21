/**
 * Created by pengwei
 *  2017/6/21.
 */
$(function($) {

});

function _ClickWordCloud() {

    var params = {
        reportTime: "20170413",
        tickets: "ChK-wJhvZG_kz748HGem6FFY_22VHQuJ"
    }


    sendPost(params,"http://beta.51wyq.cn/view/eventAnalysisAjax/wordCloud.actiona");
}

function sendPost(param,url,callback,elementId){
    $.ajax({
        url : url,
        type : "post",
        data : param,
        success : function(data){
            console.log(data);
            // callback(data,elementId);
        }
    })
};