<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<html class="no-js css-menubar" lang="zh-cn">
<head>
    <meta charset="utf-8">
    <%
        String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath() + "/";
    %>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="品牌影响力评估平台">
    <meta name="author" content="">

    <title>品牌影响力评估平台</title>

    <link rel="apple-touch-icon" href="/resources/assets/base/assets/images/apple-touch-icon.png">
    <link rel="shortcut icon" href="/resources/assets/base/assets/images/favicon.ico">

    <!-- Stylesheets 主要样式-->
    <link rel="stylesheet" href="/resources/assets/global/css/bootstrap.min.css?v2.2.0">
    <link rel="stylesheet" href="/resources/assets/global/css/bootstrap-extend.min.css?v2.2.0">
    <link rel="stylesheet" href="/resources/assets/base/assets/css/site.min.css?v2.2.0">

    <!-- Plugins 效果样式-->
    <link rel="stylesheet" href="/resources/assets/global/vendor/animsition/animsition.min.css?v2.2.0">
    <link rel="stylesheet" href="/resources/assets/global/vendor/asscrollable/asScrollable.min.css?v2.2.0">
    <link rel="stylesheet" href="/resources/assets/global/vendor/waves/waves.min.css?v2.2.0">
    <!-- Plugins For This Page -->
    <link rel="stylesheet" href="/resources/assets/global/vendor/bootstrap-select/bootstrap-select.min.css?v2.2.0">
    <!-- Page -->
    <link rel="stylesheet" href="/resources/assets/base/assets/css/login.css?v2.2.0">
    <!-- Fonts 字体图标样式-->
    <link rel="stylesheet" href="/resources/assets/global/fonts/iconfont/iconfont.css?v2.2.0">

    <!--[if lt IE 9]>
    <script src="/resources/assets/global/vendor/html5shiv/html5shiv.min.js"></script>
    <![endif]-->

    <!--[if lt IE 10]>
    <script src="/resources/assets/global/vendor/media-match/media.match.min.js"></script>
    <script src="/resources/assets/global/vendor/respond/respond.min.js"></script>
    <![endif]-->

    <!-- Scripts -->
    <script src="/resources/assets/global/vendor/modernizr/modernizr.min.js"></script>
    <script src="/resources/assets/global/vendor/breakpoints/breakpoints.min.js"></script>
    <script>
        Breakpoints();
    </script>
</head>
<body class="page-login layout-full page-dark">

<!-- Page -->
<div class="page animsition vertical-align text-center" data-animsition-in="fade-in"
     data-animsition-out="fade-out">>
    <div class="page-content vertical-align-middle">
        <div class="panel">
            <div class="panel-body">
                <div class="brand">

                    <h2 class="brand-text font-size-34 white margin-top-40">品牌影响力评估平台</h2>
                </div>
                <div novalidate="novalidate" class="margin-top-30" id="formBox">
                    <div class="form-group floating margin-0">
                        <input type="text" class="form-control round" name="keywords" placeholder="请输入品牌关键词"/>
                    </div>
                    <div class="form-group floating margin-0">
                        <div class="text-center vs">VS</div>
                        <input type="text" class="form-control round" name="keywords" placeholder="请输入品牌关键词"/>
                    </div>

                    <div class="text-center margin-top-20 margin-bottom-40">
                        <a href="javascript:void(0)" class="btn btn-lg btn-icon btn-info btn-round waves-effect waves-light waves-round add_btn">
                            <i class="icon">&#xe751;</i>
                        </a>
                    </div>
                    <div class="row clearfix">
                        <div class="col-xs-6">
                            <div class="bootstrap-select-block bootstrap-select-none btn-shadow btn-round rel">
                                <div class="abs white" style="top: 6px; right:30px; z-index: 2;">时间选择</div>
                                <select data-plugin="selectpicker" class="white" id="date-time">
                                    <option value="3">3天</option>
                                    <option value="7">7天</option>
                                    <option value="30">一个月</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <button class="btn btn-round btn-info btn-block btn-shadow" onclick="btn_submit()">分析</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    </div>
</div>
<!-- End Page -->
<!--新增输入框 start-->
<div id="formControl" style="display: none;">
    <div class="form-group floating margin-0">
        <a class="close" href="javascript:void(0)"><i class="icon">&#xe600;</i></a>
        <div class="text-center vs">VS</div>
        <input type="text" class="form-control round" name="keywords" placeholder="请输入品牌关键词"/>
    </div>
</div>
<!--新增输入框 end-->

<!-- Core  -->
<script src="/resources/assets/global/vendor/jquery/jquery.min.js"></script>
<script src="/resources/assets/global/vendor/bootstrap/bootstrap.min.js"></script>
<script src="/resources/assets/global/vendor/animsition/animsition.min.js"></script>
<script src="/resources/assets/global/vendor/asscroll/jquery-asScroll.min.js"></script>
<script src="/resources/assets/global/vendor/mousewheel/jquery.mousewheel.min.js"></script>
<script src="/resources/assets/global/vendor/asscrollable/jquery.asScrollable.all.min.js"></script>
<script src="/resources/assets/global/vendor/ashoverscroll/jquery-asHoverScroll.min.js"></script>
<script src="/resources/assets/global/vendor/waves/waves.min.js"></script>


<!-- Plugins For This Page 页面效果js-->
<script src="/resources/assets/global/vendor/bootstrap-select/bootstrap-select.min.js"></script>
<script src="/resources/assets/global/vendor/jquery-placeholder/jquery.placeholder.min.js"></script>

<!-- Scripts -->
<script src="/resources/assets/global/js/core.min.js"></script>
<script src="/resources/assets/base/assets/js/site.min.js"></script>

<script src="/resources/assets/base/assets/js/common.min.js"></script>
<script src="/resources/assets/global/js/components/bootstrap-select.min.js"></script>
<link rel="stylesheet" href="/resources/assets/global/vendor/bootstrap-sweetalert/sweet-alert.min.css?v2.2.0">
<script src="/resources/assets/global/vendor/bootstrap-sweetalert/sweet-alert.min.js"></script>
<script src="/resources/assets/global/vendor/bootstrap-sweetalert/sweet-alert.min.js"></script>
<script src="/resources/common/ajax-api.min.js"></script>
<script src="/resources/js/task-add.js"></script>
</body>
</html>