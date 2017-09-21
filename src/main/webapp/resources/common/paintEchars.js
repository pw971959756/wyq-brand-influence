/**
 * Created by pengwei
 *  2017/6/30.
 */


function getToolbox(title) {
    return  {
        show : true,
        orient:'vertical',
        y:30,
        feature : {
            mark : {show: false},
            dataView : {
                show: false,
                readOnly: false,
                lang: ['数据视图', '关闭', '刷新']
            },
            restore : {show: true} ,
            saveAsImage : {
                show: true,
                name:title,
                type:'png',
                lang : ['点击保存']
            }
        }
    }
}

/*************************************************** 折线图 Start***********************************************************/
/**
 * ChartHeatNetwork
 * @returns
 *      {
            data: [{
                data: [],
                label: {
                    name: null,
                    value: null
                },
                lineStyle: {
                    normal: {
                        type: "solid",
                        width: "2"
                    }
                },
                name: name,
                symbolSize: 10,
                type: 'line'
            }],
            dateFormat: 'yyyy-MM-dd',
            datetime: [],
            legend: [
                name
            ],
            title: "热度走势"
        };
 */
function getPaintLineChartHeatNetworkData(name) {
    return {
        data: [{
            data: [],
            label: {
                name: null,
                value: null
            },
            lineStyle: {
                normal: {
                    type: "solid",
                    width: "2"
                }
            },
            name: name,
            symbolSize: 10,
            type: 'line'
        }],
        dateFormat: 'yyyy-MM-dd',
        datetime: [],
        legend: [
            name
        ],
        title: "热度走势"
    };
}
/**
 * 画折线图
 * @param data
 *      {
            data: [{
                data: [12.6],
                label: {
                    name: null,
                    value: null
                },
                lineStyle: {
                    normal: {
                        type: "solid",
                        width: "2"
                    }
                },
                name: name,
                symbolSize: 10,
                type: 'line'
            }],
            dateFormat: 'yyyy-MM-dd',
            datetime: [2017-06-30 10:03:53],
            legend: [
                name
            ],
            title: "热度走势"
        }
 * @param dom
 * @param type
 * @constructor
 */
function paintLineChartHeatNetwork(data, dom, type) {
    $("#container1").empty();
    var tooltip = "";
    var chart1 = echarts.init(document.getElementById(dom));
    if (type == 2) {
        var par1 = ['E', 'D', 'C', 'B', 'A'];
        var par2 = ['D', 'C', 'B', 'A'];
        var par3 = ['C', 'B', 'A'];
        var par4 = ['B', 'A'];
        var par5 = ['A'];
        var yAxisArray = [];
        $.each(data.data, function (i, n) {
            var mar = data.data[i].markPoint.data;
            for (var j = 0; j < mar.length; j++) {
                yAxisArray[j] = mar[j].yAxis;
            }
            yAxisArray.sort();
            data.data[i].markPoint.itemStyle = {
                normal: {
                    label: {
                        show: true,
                        formatter: function (param) {
                            for (var k = 0; k < yAxisArray.length; k++) {
                                if (yAxisArray[k] == param.data.yAxis) {
                                    if (yAxisArray.length > 4) {
                                        return par1[k];
                                    } else if (yAxisArray.length > 3) {
                                        return par2[k];
                                    } else if (yAxisArray.length > 2) {
                                        return par3[k];
                                    } else if (yAxisArray.length > 1) {
                                        return par4[k];
                                    } else {
                                        return par5[k];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        tooltip = {
            trigger: 'axis',
            formatter: function (params) {
                if (params.componentType == 'markPoint') {
                    return params.seriesName + '<br/>' + params.name;
                } else {
                    return params[0].seriesName + '<br/>热度指数：' + params[0].value + "<br/>日期：" + params[0].name;
                }
            }
        }
    } else {
        tooltip = {
            trigger: 'axis'
        }
    }

    var option = {
        tooltip: tooltip,
        toolbox: getToolbox(data.title),
        legend: {
            data: data.legend
        },
      //全部，博客，微信，报刊         网站，微博，视频，政务        论坛，境外，新闻，客户端        ,'#FF0000','#FFFF00','#8b864E'
//        color: getColors(),
//        color: ['#3FAD7E', '#758DC4', '#0e7dc0'],
        color: ["#990033", "#FF0033", "#0033FF", "#FFFF33",'#FFCC00',"#CCFFFF","#0033CC","#0099CC","#330000","#FF6600","#CC33FF","#00CC99"],
//        color: [getColors(), getColors(), getColors(),getColors(),getColors(),getColors(),getColors(),getColors(),getColors()],
        grid: {
            left: '2%',
            right: '5%',
            /* top:'6%',
             bottom: '15%',*/
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {//坐标轴轴线 默认 true,
                    show: false
                },
                axisTick: {//坐标轴刻度
                    show: false,
                    lineStyle: {
                        color: '#888',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {//坐标轴刻度标签
                    show: true,
                    //rotate: 30,  //旋转角度
                    textStyle: {
                        color: '#888'
                    }
                },
                boundaryGap: false,
                data: data.datetime
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {//坐标轴轴线 默认 true,
                    show: false
                },
                axisTick: {//坐标轴刻度
                    show: false
                },
                axisLabel: {//坐标轴刻度标签
                    show: true,
                    //rotate: 30,  //旋转角度
                    textStyle: {
                        color: '#888'
                    },
                    formatter: function (v) {
                        if (v >= 1000) {
                            return (v / 1000) + "k";
                        } else {
                            return v;
                        }
                    }
                },
            }
        ],
        "dataZoom": [{
            "show": true,
            "height": 25,
            "xAxisIndex": [
                0
            ],
            bottom: 5,
            "start": 0,
            "end": 100,
            handleIcon: 'path://M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z',
            handleSize: '100%',
            handleStyle: {
                color: "#d3dee5",
                borderColor: 'rgba(0,0,0,.3)'
            },
            showDetail: false,
            textStyle: {
                color: "#000"
            },
            borderColor: "#90979c"
        }, {
            "type": "inside",
            //"zoomLock": true,
            "show": true,
            "height": 15,
            "start": 1,
            "end": 35
        }],
        calculable: false,
        series: data.data
    };
    chart1.setOption(option);
    window.onresize = chart1.resize;
}
/*************************************************** 折线图 End***********************************************************/


/*************************************************** 仪表盘 Start***********************************************************/
/**
 * 画情感属性分析图
 * @param data as Object
 *      {
            name: _ParamsBase.key,
            value: stat.num,
            data: [{
                name: stat.name,
                value: stat.percent.toFixed(2)
            }]
        }
 * @param length
 * @param dom
 */
function paintGaugeChart(data, length, dom) {
    var radius = 180;
    if (length == 3 || length == 6) {
        radius = 160;
    }
    var minganValue = 0;
    var minganName;
    $.each(eval(data).data, function (i, n) {
        minganName = n.name;
        if (n.value == 0 || data.value == 0) {
            minganValue = 0;
        } else {
            minganValue = n.value;
        }
    });
    var chart2 = echarts.init(document.getElementById(dom), '');
    data = eval(data);
    chart2.showLoading({
        text: "正在努力加载数据中,请耐心等待。。。",
        textStyle: {
            fontSize: 20
        }
    });
    var option = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: getToolbox(data.title),
        series: [
            {
                name: data.name,
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                center: ['50%', '90%'],    // 默认全局居中
                radius: radius,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 90,
                        color: [[0.2, '#72c1be'], [0.8, '#277bc0'], [1, '#d44e24']]
                    }
                },
                itemStyle: {
                    normal: {color: '#FEFEFE'}
                },
                splitLine: {
                    show: false
                },
                axisTick: {            // 坐标轴小标记
                    show: false,
                    splitNumber: 10,   // 每份split细分多少段
                    length: 12        // 属性length控制线长
                },
                axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                    formatter: function (v) {
                        switch (v + '') {
                            case '10':
                                return '低';
                            case '50':
                                return '中';
                            case '90':
                                return '高';
                            default:
                                return '';
                        }
                    },
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: 'bolder'
                    }
                },
                pointer: {
                    width: 20,
                    length: '80%',
                    color: 'rgba(255, 255, 255, 0.8)'
                },
                title: {
                    show: true,
                    offsetCenter: [0, '-60%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#fff',
                        fontSize: 30
                    }
                },
                detail: {
                    show: true,
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                    borderColor: '#ccc',
                    width: 100,
                    height: 40,
                    offsetCenter: [0, -35],       // x, y，单位px
                    formatter: '{value}%',
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontSize: 35
                    }
                },
                data: [{value: minganValue, name: minganName}]
            }
        ]
    };
    chart2.hideLoading();
    chart2.setOption(option, true);
    $("#dcDataUseStatisticContainer").resize(function () {
        $(chart2).resize();
    });
}
/*************************************************** 仪表盘 End***********************************************************/


/*************************************************** 词云 Start***********************************************************/
var url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbEAAAEmCAYAAADss65KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NjhlYWU0MC0wYmI0LTRhYWItODBlYy1iNGIxM2RkOTc5NmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REFENEIzMEIxREE0MTFFN0FGM0FCRTE2NjhGMjAzQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REFENEIzMEExREE0MTFFN0FGM0FCRTE2NjhGMjAzQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QUVDM0JGQTFEMDYxMUU3ODhCMUExMEQwN0Y2OEQ1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QUVDM0JGQjFEMDYxMUU3ODhCMUExMEQwN0Y2OEQ1RCIvPiA8L3Jk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';
var maskImage = new Image();
maskImage.src = url;

/**
 * 画词云
 * @param data is array
 *      data.push({
            itemStyle: {
                normal:{
                    color:getColors()
                }
            },
            label: item.percent.toFixed(2)+'%',
            name: item.name,
            value: item.num
        })
 * @param length
 * @param dom
 * @param type
 */
function plainCloudChart(data, length, dom, type){
    var sizeMin=25;
    var gridSize=8;//间隔
    if(type == 2) {
        sizeMin=20;
        gridSize=5;
    }


    if(length>2){
        sizeMin=20;
        gridSize=5;
    }else if(length>1){
        sizeMin=25;
        gridSize=8;
    }
    var chart2 = echarts.init(document.getElementById(dom));
    var colors = ["#0086ce","#3fad7e","#5573b6"];
    var option = {
        toolbox: getToolbox(data.title),
        calculable : false,
        series: [{
            type: 'wordCloud',
            textStyle: {
                normal: {
                    fontFamily: 'STHeiti sans-serif',
                    color: function() {
                        var i = parseInt(Math.random() * 3);
                        return colors[i];
                    }
                },emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            width: '100%',
            height: '100%',
            top: 0,
            bottom:0,
            drawOutOfBounds:false,
            maskImage: data.maskImage == null ? maskImage : data.maskImage,
            center:['50%','50%'],
            rotationRange: [0, 0],
            rotationStep: 45,
            gridSize: gridSize,
            sizeRange: [sizeMin, 100],
            data:data.data
        }]
    };
    chart2.setOption(option);
    window.onresize = chart2.resize;

}

/**
 * 获取 云词Color
 * @retmourns {string}
 */
function getColors() {
    var colors = ["#990033", "#FF0033", "#0033FF", "#FFFF33",'#FFCC00',"#CCFFFF","#0033CC","#0099CC","#330000","#FF6600","#CC33FF","#00CC99"];
//    var colors = ["#72c1be", "#f29300", "#a05623", "#277bc0",'#526dab',"#914f23","#6e7584","#914f23","#b17b47","#CF421E","F4AA53","#F18D00"];
    return colors[Math.ceil(Math.random()*12)-1];
}
/**
 * 根据下标获取对应的颜色
 * @param i
 * @returns
 */
function getColorss(i) {
	var colors = ["#990033", "#FF0033", "#0033FF", "#FFFF33",'#FFCC00',"#CCFFFF","#0033CC","#0099CC","#330000","#FF6600","#CC33FF","#00CC99"];
	return colors[i];
}
/*************************************************** 词云 End***********************************************************/

/*************************************************** 环形图 Start***********************************************************/
/**
 *
 * @param name
 * @returns
 *      {
            nodes:[{
                itemStyle:{
                    normal:{
                        color:getColors()
                    }
                },
                label:name,
                name:name,
                symbolSize:30
            }],
            links:[],
            legend:[]
        };
 */
function getPaintChordChartData(name) {
    return {
        nodes:[{
            itemStyle:{
                normal:{
                    color:getColors()
                }
            },
            label:name,
            name:name,
            symbolSize:30
        }],
        links:[],
        legend:[]
    };
}

/**
 * 环形图
 * @param
 *    var data =  getPaintChordChartData(name)
 *       data.links.push({ source: one.name, target: item.name, weight: 1})
         data.nodes.push({
                    itemStyle:{
                        normal:{
                            color:getColors()
                        }
                    },
                    label:item.name,
                    name:item.name,
                    symbolSize:15
                });
 *
 * @param dom
 */
function paintChordChart(data, dom){
    var chart3 = echarts.init(document.getElementById(dom));
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
                if (params.indicator2) {    // is edge
                    return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
                } else {    // is node
                    return params.name
                }
            }
        },
        toolbox: getToolbox(data.title),
        color:['#3FAD7E','#758DC4','#0e7dc0'],
        legend: [{
            x: 'left',
            data: data.legend,
            icon:'rect'
        }],
        calculable : false,
        series : [
            {
                type:'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                categories: data.legend,
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.3
                    }
                },
                itemStyle : {
                    normal : {
                        label : {
                            rotate : true,
                            show: true,
                            position: 'bottom',
                            textStyle:{
                                fontSize:14,
                                color:"#454545"
                            }
                        }
                    }
                },
                minRadius: 7,
                maxRadius: 20,
                // 使用 nodes links 表达和弦图
                data: data.nodes,
                links: data.links
            }
        ]
    };
    chart3.setOption(option);
    window.onresize = chart3.resize;
}

/**
 * 环形图
 * @param data
 * @param dom
 */
function paintChordChartPie(data,dom) {
    var chart2 = echarts.init(document.getElementById(dom));
    var option = {
        animation : false,
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        toolbox: getToolbox(data.title),
        legend: {
            orient: 'vertical',
            x: 'left',
            data:data.legend.data,
        },
        series: [{
            name:data.series.name,
            type:'pie',
            radius : ['35%', '60%'],
            startAngle:0,
            itemStyle : {
                normal : {
                    label : {
                        show : true,
                        textStyle:{
                            fontSize:'12',
                            fontWeight:'normal'
                        },
                        formatter: "{b} : {d}%"
                    },
                    labelLine : {
                        show : true
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center'
                    }
                }
            },
            data:data.series.data
        }]
    };
    chart2.setOption(option);
    window.onresize = chart2.resize;
}

/*************************************************** 环形图 End***********************************************************/

/*************************************************** 柱状图 Start***********************************************************/

function paintChordChartBar(data,dom) {
    var chart2 = echarts.init(document.getElementById(dom));
    var option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

        },
        toolbox:getToolbox(data.title),
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : data.xAxis.data,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel:{
                    interval:0,  //类目全显
                },
            }
        ],
        yAxis : [

            {
                type : 'value'
            }
        ],
        series : [
            {
                name:data.series.name,
                type:'bar',
                barWidth: '80%',
                data:data.series.data
            }
        ]
    };

    chart2.setOption(option);
    window.onresize = chart2.resize;
}


function paintChordChartBarCrosswise(data,dom) {
    var chart2 = echarts.init(document.getElementById(dom));
    var option = {
        tooltip : {
            trigger: 'axis',
            formatter:"{b}  影响力:{c}"
        },
        toolbox: getToolbox(data.title),
        xAxis:[{
            type : 'value',
            splitLine:{
                show:false
            },
            axisLabel:{
                textStyle : {
                    decoration: 'none',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 12,
                    color:"#000"
                },
                formatter:function(v){
                    if(v>=1000){
                        return (v/1000)+"k";
                    }else{
                        return v;
                    }
                }
            }
        }],
        grid:{
            y:30,
            y2:30,
            x:30,
            x2:30,
            borderWidth:0
        },
        yAxis : [{
            show:false,
            type : 'category',
            data : data.legend,
            axisLabel : {
                formatter: function(value){
                    if(value.length>10){
                        value = value.substring(0,10);
                    }
                    return value;
                },
                textStyle : {
                    decoration: 'none',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 12,
                    color:"#000"
                }

            },
            splitArea:{
                show:true,
                areaStyle:{
                    color:['#08172c','#08172c']
                }
            }

        }],
        calculable : false,
        animation:false,
        series : [{
            name:'数量',
            type:'bar',
            itemStyle : {
                normal: {label : {
                    show: true, position: 'insideLeft',
                    formatter:function(param){
                        var value = param.name;
                        if(value.length>30){
                            value = value.substring(0,30);
                        }
                        return value;
                    },
                    textStyle:{fontSize:12,color:"#000"}
                }
                },
                emphasis:{label : {show: true,textStyle:{fontSize:12,color:"#000"}}}},
            data:data.data
        }]
    }

    chart2.setOption(option);
    window.onresize = chart2.resize;
}


/*************************************************** 柱状图 End***********************************************************/



/*************************************************** 关系图 Start***********************************************************/


var _x = 500;   //起始 X
var _y = 500;   //起始 X
var _X = 300;   //两点之间宽度
var _Y = 100;   //两点之间高度
/**
 * DEMO: analysisCase.js ->initModulePropagationPath1
 * @param stat
 * @param data
 * @param list
 * @param parent
 * @param x
 * @param y
 * @param lg
 * @param i
 */
function getChordChartGraphData(stat, data, list, parent, x, y, lg, i) {
    var X = x + _X;
    var Y = 0;
    var name = stat.type == 2 ? '(首发)' : '';
    if (null == parent) {
        data.data.push({
            name: stat.name + name,
            x: _x,
            y: _y
        });
        X = _x;
        Y = _y;
    } else {

        var parentName = parent.type == 2 ? '(首发)' : '';
        if(lg == 1){    // 平行处理
            Y = y;
        }

        if( lg % 2 == 0) {   // 偶数处理
            var centre = parseInt(lg / 2);
            if (centre == 1) {  //只有两个的时候
                if (i == 1) {
                    Y = y - _Y / 2; //上浮动 0.5
                } else {
                    Y = y + _Y / 2; //下浮动 0.5
                }
            }else {
                if(centre == i){
                    Y = y - _Y / 2; //中间点 跟当前点 相等 上浮0.5
                }else if(i < centre){
                    Y = y - _Y * i - _Y / 2; // 向上浮动
                }else if(i > centre){
                    Y = y + _Y * (i - centre) - _Y / 2; // 向下浮动
                }
            }
        }else{
            var centre = parseInt( lg / 2 +1);
            if(i == centre){
                Y = y;  //平行
            }else if(i < centre){
                Y = y - i * _Y ;    //上浮
            }else if(i > centre){
                Y = y + (i - centre) * _Y ; //下浮
            }
        }

        data.links.push({
            source: parent.name + parentName,
            target: stat.name + name
        });

        data.data.push({
            name: stat.name + name,
            x: X,
            y: Y
        });
    }
    if (null != list && list.length > 0) {
        for (var j = 0; j < list.length; j++) {
            var item =  list[j];
            getChordChartGraphData(item.stat, data,item.statListList, stat, X, Y, list.length, j + 1);
        }
    }
}



/**
 * 传播路径
 * @param data
 * @param dom
 */
function paintChordChartGraph(data, dom) {
    var chart2 = echarts.init(document.getElementById(dom));
    var option = {
        title: {
            text:data.title
        },
        toolbox: getToolbox(data.title),
        tooltip: {},
        animationDurationUpdate: 100,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                // layout: 'none',
                layout: 'force',
                symbol: 'path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z',
                symbolSize: [120,30],
                roam: true,
                label: {
                    normal: {
                        show: true
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                data: data.data,
                links: data.links,
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                }
            }
        ]
    };
    chart2.setOption(option);
    window.onresize = chart2.resize;
}


/**
 * 路径传播图 数据结构
 * @param statList
 * @param array
 */
function getPaintTreeChartData(statList,array) {
    if(null != statList){
        statList.forEach(function (item) {
            var obj = {
                "name": item.stat.name,
                "label": item.stat.name,
                "value": 10,
                "symbolSize": 15,
                "itemStyle": {
                    "normal": {
                        "color": getColors(),
                        "label": {
                            "show": true,
                            "position": "right"
                        }
                    },
                    "emphasis": {
                        "label": {
                            "show": false
                        },
                        "borderWidth": 0
                    }
                },
                children: []
            }
            var  list = item.statListList;
            if(null != list && list.length > 0){
                getPaintTreeChartData(list,obj.children)
            }
            array.push(obj);
        })
    }
}
/**
 * 路径传播图
 * @param data
 * @param dom
 */
function paintTreeChart(data,dom){
    var config = require([
            'echarts',
            'echarts/chart/tree',
        ],
        function (ec) {
            var chart5 = ec.init(document.getElementById(dom));
            var option = {
                animation : false,
                calculable : false,
                //renderAsImage:true,
                tooltip : {
                    trigger: 'item',
                    formatter: "{b}"
                },
                toolbox: {
                    show : true,
                    orient:'vertical',
                    y:30,
                    x:'right',

                    feature : {
                        mark : {show: false},
                        dataView : {
                            show: false,
                            readOnly: false,
                            lang: ['数据视图', '关闭', '刷新']
                        },
                        restore : {show: true} ,
                        saveAsImage : {
                            show: true
                        }
                    }
                },
                series : [
                    {
                        name: '树图',
                        type: 'tree',
                        orient: 'horizontal',  // vertical horizontal
                        rootLocation: {x: 10, y: '50%'}, // 根节点位置  {x: 100, y: 'center'}
                        nodePadding: 10,
                        layerPadding: 180,
                        hoverable: false,
                        roam: true,
                        /*symbolSize: 3,*/
                        itemStyle: {
                            normal: {
                                color: '#4883b4',
                                label: {
                                    show: true,
                                    position: 'right',
                                    formatter: "{b}",
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 12
                                    }
                                },
                                lineStyle: {
                                    color: '#ccc',
                                    type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

                                }
                            },
                            emphasis: {
                                color: '#4883b4',
                                label: {
                                    show: false
                                },
                                borderWidth: 0
                            }
                        },
                        data: data
                    }
                ]
            };
            chart5.setOption(option);
            var enConfig = require('echarts/config');

        });
}

/*************************************************** 关系图 End***********************************************************/



/*************************************************** 饼图 Start***********************************************************/
function paintChordChartPieCircle(data, dom) {
    var chart2 = echarts.init(document.getElementById(dom));
    var option = {
        animation : false,
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: getToolbox(data.title),
        calculable : false,
        legend:{
            orient : 'vertical',
            x : '60%',
            y : 'center',
            data:data.legend.reverse(),
            formatter:function(v){
                return v.length>30? v.substr(0,30):v;
            }
        },
        series : [
            {
                name:data.title,
                type:'pie',
                center:['25%','50%'],
                radius : ['20%','50%'],
                roseType : 'radius',
                startAngle:0,
                itemStyle : {
                    normal : {
                        label : {
                            show : true,
                            textStyle:{
                                fontSize:'12',
                                fontWeight:'normal'
                            },
                            formatter: "{d}%"
                        },
                        labelLine : {
                            show : true
                        }
                    },
                    emphasis : {
                        label : {
                            show : false,
                            position : 'center',
                            textStyle : {
                                fontSize : '30',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:data.data
            }
        ]
    };
    chart2.setOption(option);
    window.onresize = chart2.resize;
}
/*************************************************** 饼图 End***********************************************************/
	function commafy(num){
		  if((num.toString()).trim()==""){
		   return"";
		  }
		  if(isNaN(num)){
		   return"";
		  }
		  num = num.toString();
		  if(/^.*\..*$/.test(num)){
		   varpointIndex =num.lastIndexOf(".");
		   varintPart = num.substring(0,pointIndex);
		   varpointPart =num.substring(pointIndex+1,num.length);
		   intPart = intPart +"";
		    var re =/(-?\d+)(\d{3})/
		    while(re.test(intPart)){
		     intPart =intPart.replace(re,"$1,$2")
		    }
		   num = intPart+"."+pointPart;
		  }else{
		   num = num.toString();
		    var re =/(-?\d+)(\d{3})/
		    while(re.test(num)){
		     num =num.replace(re,"$1,$2")
		    }
		  }
		  return num;
	}