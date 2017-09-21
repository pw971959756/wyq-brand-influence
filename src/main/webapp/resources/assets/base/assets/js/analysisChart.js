 

//阅读量
var readingChart = echarts.init(document.getElementById('readingChart'));
// 指定图表的配置项和数据
    var option = {
tooltip : {
    trigger: 'axis',
axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
},
grid: {
    left: '5%',
    right: '2%',
    bottom: '0%',
    top:'10%',
    containLabel: true
    },
   
    xAxis : [
        {
           type : 'value',
           axisLine:{show: false},
           axisTick:{show: false},
           splitLine:{show: false},
           axisLabel:{show: false}
    }
],
yAxis : [
    {
    type : 'category',
    inverse: true,
    axisLine:{show: false},
    axisTick:{show: false},
    axisLabel:{show: true,textStyle:{fontSize: 14}},
    boundaryGap : true,
    data : ['吉利','奥迪','大众','凯迪拉克','福特']
}
 
     
],
series : [
    {
    name:'hill',
    type:'bar',
    barWidth: '30%',
    itemStyle:{
	normal:{
           color:function(d){//颜色判断  这里用到两种  你可以设置多种
               if(d.dataIndex%2===0){
                   return '#60b1ce';
               }else{
                   return '#60c4c3';
               }
           }
       }
    },
     label: {
        normal: {
            show: true,
            textStyle: {
               color: '#444',
               fontSize: 14
            },
            position: 'right'
        }
     },
    data:[6230, 5812, 3301, 3334, 4890],
    z: 10
}
    ] 
};

    // 使用刚指定的配置项和数据显示图表。
readingChart.setOption(option);
        
  //阅读量走势图
var readingTrendChart = echarts.init(document.getElementById('readingTrendChart'));

// 指定图表的配置项和数据
    var option = {
tooltip : {
    trigger: 'axis'
},
legend: {
	show: true,
	top: '20',
left: '5%',
itemGap: 30,
itemWidth: 8,
itemHeight: 8,
data:[{name:'吉利',icon: 'circle',},
{name:'奥迪',icon: 'circle',},
{name:'大众',icon: 'circle',},
{name:'凯迪拉克',icon: 'circle',},
{name:'福特',icon: 'circle',}
],
orient: 'horizontal'
},
grid: {
    left: '5%',
right: '5%',
top:'22%',
bottom: '15%',
    containLabel: true
},
xAxis : [
    {
        type : 'category',
    axisLine:{//坐标轴轴线 默认 true,
    	show: false
    },
    axisTick:{//坐标轴刻度
    	show: false,
    	lineStyle:{
    		color:'#888',
    		width: 1,
    		type: 'solid'
    	}
    },
    axisLabel:{//坐标轴刻度标签
    	show: true,
    	//rotate: 30,  //旋转角度
    	textStyle:{
    		color:'#888'
    	}
    },
    boundaryGap : false,
    data: (function (){
        var now = new Date();
        var res = [];
        var len = 8;
        while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                now = new Date(now - 2000);
            }
            return res;
        })()
    }
],
yAxis : [
    {
        type : 'value',
    axisLine:{//坐标轴轴线 默认 true,
    	show: false
    },
    axisTick:{//坐标轴刻度
    	show: false
    },
    axisLabel:{//坐标轴刻度标签
    	show: true,
    	//rotate: 30,  //旋转角度
    	textStyle:{
    		color:'#888'
        	}
        },
    }
],
 
series : [
    {
        name:'吉利',
    type:'line',
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle:{
    	normal:{
    		color: '#6184cf'
    	}
    },
    areaStyle:{
    	normal:{
    		color:'rgba(0,0,0,0.5)',
    		opacity: 0
    	}
    },
    smooth: true,
    data:[50, 10, 221, 104, 450, 380, 610,50]
},
{
    name:'奥迪',
    type:'line',
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle:{
    	normal:{
    		color: '#43ada9'
    	}
    },
    areaStyle:{
    	normal:{
    		color:'rgba(0,0,0,0.5)',
    		opacity: 0
    	}
    },
    smooth: true,
    data:[800, 482, 621, 404, 720, 510, 790,300]
},
{
    name:'大众',
    type:'line',
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle:{
    	normal:{
    		color: '#f1bd24'
    	}
    },
    areaStyle:{
    	normal:{
    		color:'rgba(0,0,0,0.5)',
    		opacity: 0
    	}
    },
    smooth: true,
    data:[200, 400, 291, 84, 690, 30, 390,200]
},
{
    name:'凯迪拉克',
    type:'line',
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle:{
    	normal:{
    		color: '#088cec'
    	}
    },
   
    areaStyle:{
    	normal:{
    		color:'rgba(0,0,0,0.5)',
    		opacity: 0
    	}
    },
    smooth: true,
    data:[350, 570, 491, 384, 290, 530, 490,500]
},
{
    name:'福特',
    type:'line',
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle:{
    	normal:{
    		color: '#e69064'
    	}
    },
    areaStyle:{
    	normal:{
    		color:'rgba(0,0,0,0.5)',
            		opacity: 0
            	}
            },
            smooth: true,
            data:[50, 170, 291, 784, 390, 230, 90,100]
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
readingTrendChart.setOption(option); 


//话题量
var topicChart = echarts.init(document.getElementById('topicChart'));
// 指定图表的配置项和数据
    var option = {
tooltip : {
    trigger: 'axis',
axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
},
grid: {
    left: '5%',
    right: '2%',
    bottom: '0%',
    top:'10%',
    containLabel: true
    },
   
    xAxis : [
        {
           type : 'value',
           axisLine:{show: false},
           axisTick:{show: false},
           splitLine:{show: false},
           axisLabel:{show: false}
    }
],
yAxis : [
    {
    type : 'category',
    inverse: true,
    axisLine:{show: false},
    axisTick:{show: false},
    axisLabel:{show: true,textStyle:{fontSize: 14}},
    boundaryGap : true,
    data : ['吉利','奥迪','大众','凯迪拉克','福特']
}
 
     
],
series : [
    {
    name:'hill',
    type:'bar',
    barWidth: '30%',
    itemStyle:{
	normal:{
           color:function(d){//颜色判断  这里用到两种  你可以设置多种
               if(d.dataIndex%2===0){
                   return '#60b1ce';
               }else{
                   return '#60c4c3';
               }
           }
       }
    },
     label: {
        normal: {
            show: true,
            textStyle: {
               color: '#444',
               fontSize: 14
            },
            position: 'right'
        }
     },
    data:[6230, 5812, 3301, 3334, 4890],
    z: 10
}
    ] 
};

    // 使用刚指定的配置项和数据显示图表。
topicChart.setOption(option);

 //阅读量走势图
var topicTrendChart = echarts.init(document.getElementById('topicTrendChart'));

// 指定图表的配置项和数据
    var option = {
tooltip : {
    trigger: 'axis'
},
legend: {
	show: true,
	top: '20',
left: '5%',
itemGap: 30,
itemWidth: 8,
itemHeight: 8,
data:[{name:'吉利',icon: 'circle',},
{name:'奥迪',icon: 'circle',},
{name:'大众',icon: 'circle',},
{name:'凯迪拉克',icon: 'circle',},
{name:'福特',icon: 'circle',}
],
orient: 'horizontal'
},
grid: {
    left: '5%',
right: '5%',
top:'22%',
bottom: '15%',
    containLabel: true
},
xAxis : [
    {
        type : 'category',
    axisLine:{//坐标轴轴线 默认 true,
    	show: false
    },
    axisTick:{//坐标轴刻度
    	show: false,
    	lineStyle:{
    		color:'#888',
    		width: 1,
    		type: 'solid'
    	}
    },
    axisLabel:{//坐标轴刻度标签
    	show: true,
    	//rotate: 30,  //旋转角度
    	textStyle:{
    		color:'#888'
    	}
    },
    boundaryGap : false,
    data: (function (){
        var now = new Date();
        var res = [];
        var len = 8;
        while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                now = new Date(now - 2000);
            }
            return res;
        })()
    }
],
yAxis : [
    {
        type : 'value',
    axisLine:{//坐标轴轴线 默认 true,
    	show: false
    },
    axisTick:{//坐标轴刻度
    	show: false
    },
    axisLabel:{//坐标轴刻度标签
    	show: true,
    	//rotate: 30,  //旋转角度
    	textStyle:{
    		color:'#888'
        	}
        },
    }
],
 
series : [
    {
        name:'吉利',
    type:'line',
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle:{
    	normal:{
    		color: '#6184cf'
    	}
    },
    areaStyle:{
    	normal:{
    		color:'rgba(0,0,0,0.5)',
    		opacity: 0
    	}
    },
    smooth: true,
    data:[50, 10, 221, 104, 450, 380, 610,50]
},
{
    name:'奥迪',
    type:'line',
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle:{
    	normal:{
    		color: '#43ada9'
    	}
    },
    areaStyle:{
    	normal:{
    		color:'rgba(0,0,0,0.5)',
    		opacity: 0
    	}
    },
    smooth: true,
    data:[800, 482, 621, 404, 720, 510, 790,300]
},
{
    name:'大众',
    type:'line',
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle:{
    	normal:{
    		color: '#f1bd24'
    	}
    },
    areaStyle:{
    	normal:{
    		color:'rgba(0,0,0,0.5)',
    		opacity: 0
    	}
    },
    smooth: true,
    data:[200, 400, 291, 84, 690, 30, 390,200]
},
{
    name:'凯迪拉克',
    type:'line',
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle:{
    	normal:{
    		color: '#088cec'
    	}
    },
   
    areaStyle:{
    	normal:{
    		color:'rgba(0,0,0,0.5)',
    		opacity: 0
    	}
    },
    smooth: true,
    data:[350, 570, 491, 384, 290, 530, 490,500]
},
{
    name:'福特',
    type:'line',
    symbol: 'emptyCircle',
    symbolSize: 10,
    itemStyle:{
    	normal:{
    		color: '#e69064'
    	}
    },
    areaStyle:{
    	normal:{
    		color:'rgba(0,0,0,0.5)',
            		opacity: 0
            	}
            },
            smooth: true,
            data:[50, 170, 291, 784, 390, 230, 90,100]
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
topicTrendChart.setOption(option);

 //参与度(转评赞)1
        var zhuanpingzanChart1 = echarts.init(document.getElementById('zhuanpingzanChart1'));

 // 指定图表的配置项和数据
     
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
         
         
    },
        grid: {
        top: '15%',
        left: '0%',
        right: '0%',
        bottom: '25%',
        containLabel: true
    },
    xAxis: [{
        data: [
        {value:'吉利',textStyle: {padding: [5,10,5,10],borderRadius: 20,borderColor:'#6184cf',borderWidth: 1}}
       
        ],
        position: 'top',
        offset: 40,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
        	interval: '0',
            textStyle: {
                color: '#444',
                fontSize: 14
            }
        }
    },{
            type: 'category',
            position: 'top',
            axisLine:{//坐标轴轴线 默认 true,
            	show: false
            },
            axisTick:{//坐标轴刻度
            	show: false
            },
            boundaryGap: true,
            data: [2890]
            
       }],
    yAxis: {
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false}
    },
    series: [{
        name: '转',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#46afa9',
                opacity: 1
            } 
        },
        data: [2890],
        z: 1
    },{
        name: '评',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#d9b25a',
                opacity: 1
            }
        },
        data: [990],
        z: 1
    },{
        name: '赞',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#5eb1d0',
                opacity: 1
            }
        },
        data: [1390],
        z: 1
    }, {
        name: '总量',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'start',
        symbolSize: 50,
        symbolOffset: [0, '120%'],
        data: [{
            value: 2890,
            symbol: 'image://base/assets/images/carlogo/logo-jiliqiche.png'
        }]
    }]
};
       // 使用刚指定的配置项和数据显示图表。
        zhuanpingzanChart1.setOption(option);
        
  //参与度(转评赞)2
        var zhuanpingzanChart2 = echarts.init(document.getElementById('zhuanpingzanChart2'));

 // 指定图表的配置项和数据
     
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
         
         
    },
        grid: {
        top: '15%',
        left: '0%',
        right: '0%',
        bottom: '25%',
        containLabel: true
    },
    xAxis: [{
        data: [
        {value:'奥迪',textStyle: {padding: [5,10,5,10],borderRadius: 20,borderColor:'#43ada9',borderWidth: 1}}
        
        ],
        position: 'top',
        offset: 40,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
        	interval: '0',
            textStyle: {
                color: '#444',
                fontSize: 14
            }
        }
    },{
            type: 'category',
            position: 'top',
            axisLine:{//坐标轴轴线 默认 true,
            	show: false
            },
            axisTick:{//坐标轴刻度
            	show: false
            },
            boundaryGap: true,
            data: [1630]
            
       }],
    yAxis: {
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false}
    },
    series: [{
        name: '转',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#46afa9',
                opacity: 1
            } 
        },
        data: [1630],
        z: 1
    },{
        name: '评',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#d9b25a',
                opacity: 1
            }
        },
        data: [2630],
        z: 1
    },{
        name: '赞',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#5eb1d0',
                opacity: 1
            }
        },
        data: [1730],
        z: 1
    }, {
        name: '总量',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'start',
        symbolSize: 50,
        symbolOffset: [0, '120%'],
        data: [{
            value: 2630,
            symbol: 'image://base/assets/images/carlogo/logo-aodi.png'
        }]
    }]
};
       // 使用刚指定的配置项和数据显示图表。
        zhuanpingzanChart2.setOption(option);       
 
   //参与度(转评赞)3
        var zhuanpingzanChart3 = echarts.init(document.getElementById('zhuanpingzanChart3'));

 // 指定图表的配置项和数据
     
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
         
         
    },
        grid: {
        top: '15%',
        left: '0%',
        right: '0%',
        bottom: '25%',
        containLabel: true
    },
    xAxis: [{
        data: [
       
        {value:'大众',textStyle: {padding: [5,10,5,10],borderRadius: 20,borderColor:'#f1bd24',borderWidth: 1}}
        ],
        position: 'top',
        offset: 40,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
        	interval: '0',
            textStyle: {
                color: '#444',
                fontSize: 14
            }
        }
    },{
            type: 'category',
            position: 'top',
            axisLine:{//坐标轴轴线 默认 true,
            	show: false
            },
            axisTick:{//坐标轴刻度
            	show: false
            },
            boundaryGap: true,
            data: [2125]
            
       }],
    yAxis: {
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false}
    },
    series: [{
        name: '转',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#46afa9',
                opacity: 1
            } 
        },
        data: [2125],
        z: 1
    },{
        name: '评',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#d9b25a',
                opacity: 1
            }
        },
        data: [725],
        z: 1
    },{
        name: '赞',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#5eb1d0',
                opacity: 1
            }
        },
        data: [1225],
        z: 1
    }, {
        name: '总量',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'start',
        symbolSize: 50,
        symbolOffset: [0, '120%'],
        data: [{
            value: 2125,
            symbol: 'image://base/assets/images/carlogo/logo-dazong.png',
        }]
    }]
};
       // 使用刚指定的配置项和数据显示图表。
        zhuanpingzanChart3.setOption(option);  
        
    //参与度(转评赞)4
        var zhuanpingzanChart4 = echarts.init(document.getElementById('zhuanpingzanChart4'));

 // 指定图表的配置项和数据
     
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
         
         
    },
        grid: {
        top: '15%',
        left: '0%',
        right: '0%',
        bottom: '25%',
        containLabel: true
    },
    xAxis: [{
        data: [
        
        {value:'凯迪拉克',textStyle: {padding: [5,10,5,10],borderRadius: 20,borderColor:'#e79368',borderWidth: 1}}
        
        ],
        position: 'top',
        offset: 40,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
        	interval: '0',
            textStyle: {
                color: '#444',
                fontSize: 14
            }
        }
    },{
            type: 'category',
            position: 'top',
            axisLine:{//坐标轴轴线 默认 true,
            	show: false
            },
            axisTick:{//坐标轴刻度
            	show: false
            },
            boundaryGap: true,
            data: [1418]
            
       }],
    yAxis: {
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false}
    },
    series: [{
        name: '转',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#46afa9',
                opacity: 1
            } 
        },
        data: [1418],
        z: 1
    },{
        name: '评',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#d9b25a',
                opacity: 1
            }
        },
        data: [2218],
        z: 1
    },{
        name: '赞',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#5eb1d0',
                opacity: 1
            }
        },
        data: [1218],
        z: 1
    }, {
        name: '总量',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'start',
        symbolSize: 50,
        symbolOffset: [0, '120%'],
        data: [{
            value: 1818,
            symbol: 'image://base/assets/images/carlogo/logo-kaidilake.png',
        }]
    }]
};
       // 使用刚指定的配置项和数据显示图表。
        zhuanpingzanChart4.setOption(option);
 
 
    //参与度(转评赞)5
        var zhuanpingzanChart5 = echarts.init(document.getElementById('zhuanpingzanChart5'));

 // 指定图表的配置项和数据
     
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
         
         
    },
        grid: {
        top: '15%',
        left: '0%',
        right: '0%',
        bottom: '25%',
        containLabel: true
    },
    xAxis: [{
        data: [
        {value:'福特',textStyle: {padding: [5,10,5,10],borderRadius: 20,borderColor:'#8465d1',borderWidth: 1}}
        ],
        position: 'top',
        offset: 40,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
        	interval: '0',
            textStyle: {
                color: '#444',
                fontSize: 14
            }
        }
    },{
            type: 'category',
            position: 'top',
            axisLine:{//坐标轴轴线 默认 true,
            	show: false
            },
            axisTick:{//坐标轴刻度
            	show: false
            },
            boundaryGap: true,
            data: [1512]
            
       }],
    yAxis: {
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false}
    },
    series: [{
        name: '转',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#46afa9',
                opacity: 1
            } 
        },
        data: [1512],
        z: 1
    },{
        name: '评',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#d9b25a',
                opacity: 1
            }
        },
        data: [2312],
        z: 1
    },{
        name: '赞',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
            normal: {
            	color: '#5eb1d0',
                opacity: 1
            }
        },
        data: [1312],
        z: 1
    }, {
        name: '总量',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'start',
        symbolSize: 50,
        symbolOffset: [0, '120%'],
        data: [{
            value: 1512,
            symbol: 'image://base/assets/images/carlogo/logo-fute.png',
        }]
    }]
};
       // 使用刚指定的配置项和数据显示图表。
        zhuanpingzanChart5.setOption(option);
        
        
 //正负向1
        var zhengfuChart1 = echarts.init(document.getElementById('zhengfuChart1'));

        // 指定图表的配置项和数据
        var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
         {
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['60%', '75%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 335,
            name: '正',
            itemStyle: {
                normal: {
                    color: '#46afa9'
                }
            },
            label: {
                normal: {
                	formatter: '吉利',          
                    textStyle: {
                        color: '#444',
                        fontSize: 14

                    }
                }
            }
        }, {
            value: 180,
            name: '负',
             
            itemStyle: {
                normal: {
                    color: '#ef3b61'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#444',
                        fontSize: 20
                    },
                     formatter: '\n{d} %'
                }
            }
        }]
    }
    ]    
};

        // 使用刚指定的配置项和数据显示图表。
        zhengfuChart1.setOption(option);  

 //正负向2
        var zhengfuChart2 = echarts.init(document.getElementById('zhengfuChart2'));

        // 指定图表的配置项和数据
        var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
         {
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['60%', '75%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 335,
            name: '正',
            itemStyle: {
                normal: {
                    color: '#46afa9'
                }
            },
            label: {
                normal: {
                	formatter: '奥迪',          
                    textStyle: {
                        color: '#444',
                        fontSize: 14

                    }
                }
            }
        }, {
            value: 180,
            name: '负',
             
            itemStyle: {
                normal: {
                    color: '#ef3b61'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#444',
                        fontSize: 20
                    },
                     formatter: '\n{d} %'
                }
            }
        }]
    }
    ]    
};

        // 使用刚指定的配置项和数据显示图表。
        zhengfuChart2.setOption(option);  
 
  //正负向3
        var zhengfuChart3 = echarts.init(document.getElementById('zhengfuChart3'));

        // 指定图表的配置项和数据
        var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
         {
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['60%', '75%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 335,
            name: '正',
            itemStyle: {
                normal: {
                    color: '#46afa9'
                }
            },
            label: {
                normal: {
                	formatter: '大众',          
                    textStyle: {
                        color: '#444',
                        fontSize: 14

                    }
                }
            }
        }, {
            value: 180,
            name: '负',
             
            itemStyle: {
                normal: {
                    color: '#ef3b61'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#444',
                        fontSize: 20
                    },
                     formatter: '\n{d} %'
                }
            }
        }]
    }
    ]    
};

        // 使用刚指定的配置项和数据显示图表。
        zhengfuChart3.setOption(option);  
 
  //正负向4
        var zhengfuChart4 = echarts.init(document.getElementById('zhengfuChart4'));

        // 指定图表的配置项和数据
        var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
         {
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['60%', '75%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 335,
            name: '正',
            itemStyle: {
                normal: {
                    color: '#46afa9'
                }
            },
            label: {
                normal: {
                	formatter: '凯迪拉克',          
                    textStyle: {
                        color: '#444',
                        fontSize: 14

                    }
                }
            }
        }, {
            value: 180,
            name: '负',
             
            itemStyle: {
                normal: {
                    color: '#ef3b61'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#444',
                        fontSize: 20
                    },
                     formatter: '\n{d} %'
                }
            }
        }]
    }
    ]    
};

        // 使用刚指定的配置项和数据显示图表。
        zhengfuChart4.setOption(option);  

 //正负向5
        var zhengfuChart5 = echarts.init(document.getElementById('zhengfuChart5'));

        // 指定图表的配置项和数据
        var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
         {
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['60%', '75%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 335,
            name: '正',
            itemStyle: {
                normal: {
                    color: '#46afa9'
                }
            },
            label: {
                normal: {
                	formatter: '福特',          
                    textStyle: {
                        color: '#444',
                        fontSize: 14

                    }
                }
            }
        }, {
            value: 180,
            name: '负',
             
            itemStyle: {
                normal: {
                    color: '#ef3b61'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#444',
                        fontSize: 20
                    },
                     formatter: '\n{d} %'
                }
            }
        }]
    }
    ]    
};

        // 使用刚指定的配置项和数据显示图表。
        zhengfuChart5.setOption(option);  
        
//KOL传播节点
var KOLChart = echarts.init(document.getElementById('KOLChart'));
// 指定图表的配置项和数据
    var option = {
tooltip : {
    trigger: 'axis',
axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
},
grid: {
    left: '5%',
    right: '2%',
    bottom: '0%',
    top:'10%',
    containLabel: true
    },
   
    xAxis : [
        {
           type : 'value',
           axisLine:{show: false},
           axisTick:{show: false},
           splitLine:{show: false},
           axisLabel:{show: false}
    }
],
yAxis : [
    {
    type : 'category',
    inverse: true,
    axisLine:{show: false},
    axisTick:{show: false},
    axisLabel:{show: true,textStyle:{fontSize: 14}},
    boundaryGap : true,
    data : ['吉利','奥迪','大众','凯迪拉克','福特']
}
 
     
],
series : [
    {
    name:'hill',
    type:'bar',
    barWidth: '30%',
    itemStyle:{
	normal:{
           color:function(d){//颜色判断  这里用到两种  你可以设置多种
               if(d.dataIndex%2===0){
                   return '#60b1ce';
               }else{
                   return '#60c4c3';
               }
           }
       }
    },
     label: {
        normal: {
            show: true,
            textStyle: {
               color: '#444',
               fontSize: 14
            },
            position: 'right'
        }
     },
    data:[6230, 5812, 3301, 3334, 4890],
    z: 10
}
    ] 
};

    // 使用刚指定的配置项和数据显示图表。
KOLChart.setOption(option);


//重新定义所有图表自适应容器大小
setTimeout(function() {
	window.onresize = function() {
		readingChart.resize();
		readingTrendChart.resize();
		topicChart.resize();
		topicTrendChart.resize();
		zhuanpingzanChart1.resize();
		zhuanpingzanChart2.resize();
		zhuanpingzanChart3.resize();
		zhuanpingzanChart4.resize();
		zhuanpingzanChart5.resize();
		zhengfuChart1.resize();
		zhengfuChart2.resize();
		zhengfuChart3.resize();
		zhengfuChart4.resize();
		zhengfuChart5.resize();
		KOLChart.resize();
	}

});