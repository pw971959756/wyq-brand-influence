<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
<style>
    body{ margin:0px; padding:0px; font-size:12px; font-family:"微软雅黑",Arial, Helvetica, sans-serif; background-color:#eeeeee;}
    div{ margin:0px auto;}
    .main{
        background: center center no-repeat url(/images/main404bg.png);
        background-size: 45%;
        width:100%;
        height:500px;
        position:relative;
        color:#808080;
    }
    .main .m1{ position:absolute; font-size:24px; top:450px; text-align:center; width:100%;}
    .main .m2{ position:absolute; font-size:16px; top:500px; text-align:center; width:100%;}
    .main .m2 a{ color:#808080; text-decoration:none; margin-right:30px;}
    .main .m2 a:hover{ text-decoration:underline; color: #e66100;}
    .main .m2 .icon{
        background-repeat: no-repeat;
        background-position: left center;
        padding-left:35px;
    }
    .main .m2 .icon1{background-image: url(images/m2_icon1.png);}
    .main .m2 .icon2{background-image: url(images/m2_icon2.png);}
    /*------底部样式----------*/
    #footer{  border-bottom:none;text-align: center;overflow: hidden;padding-top: 40px;padding-right: 0;padding-bottom: 30px;padding-left: 0;width: 100%;}
    #footer,#footer a{
        color: #808080;
        text-decoration: none;
    }
    #footer a{ margin-left:20px; margin-right:20px;}
    #footer a:hover{color:#e66100;text-decoration: underline;}
    #footer p{line-height: 35px;}

    @media screen and (max-width: 560px) {
        .main{background-size: 90%;height:400px;}
        .main .m1{top:320px; }
        .main .m2{top:380px;}

    }

	<%
		String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/";
	%>
</style>
<script type="text/javascript">
function showErrorDIV() {
	if ($('#errorDIV').css('display') == 'none')
		$('#errorDIV').css('display', 'block');
	else
		$('#errorDIV').css('display', 'none');
}
</script>
<body>
	<div class="main">
		<div class="m1">你要的页面已经走丢了...</div>
		<div class="m2">
			<a href="<%=basePath%>caseAnalyze/list" class="icon icon1">返回首页</a><a href="javascript:history.back();" class="icon icon2">上一步</a>
			<p>Erorr Code : ${ErrorCode}</p>
		</div>
	</div>
</body>
</HTML>
