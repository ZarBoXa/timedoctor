

App.controller('adminCtrl',['$scope',function($scope){

    $scope.roles=['#f7d257','#63bf99','#5dd1e8','#e35f66'];

    $scope.data={activities : [
        {
            name: 'scott love',
            avatar: 'images/default-profile.jpg',
            progress: 88,
            position: 'product developer',
            role: 0
        },
        {
            name: 'samuel barret',
            avatar: 'images/default-profile.jpg',
            progress: 98,
            position: 'product developer',
            role: 0
        },
        {
            name: 'michael mcDaniel',
            avatar: 'images/default-profile.jpg',
            progress: 81,
            position: 'support',
            role: 1
        },
        {
            name: 'alejandro wilkerson',
            avatar: 'images/default-profile.jpg',
            progress: 78,
            position: 'servers',
            role: 2
        },
        {
            name: 'ivan fowler',
            avatar: 'images/default-profile.jpg',
            progress: 71,
            position: 'product manager',
            role: 3
        },
    ]};
    $scope.mobileTypeUser=[
        {
            name: 'craig stokes',
            avatar: 'images/default-profile.jpg',
            hours: 10,
            mins: 2,
            position: 'product developer',
            role: 0
        },
        {
            name: 'dennis dunn',
            avatar: 'images/default-profile.jpg',
            hours: 12,
            mins: 10,
            position: 'product developer',
            role: 0
        },
        {
            name: 'gavin rose',
            avatar: 'images/default-profile.jpg',
            hours: 14,
            mins: 8,
            position: 'servers',
            role: 2
        },
        {
            name: 'bruce ramos',
            avatar: 'images/default-profile.jpg',
            hours: 16,
            mins: 30,
            position: 'product manager',
            role: 3
        },
        {
            name: 'raymond larson',
            avatar: 'images/default-profile.jpg',
            hours: 19,
            mins: 30,
            position: 'servers',
            role: 2
        },
    ];

    $scope.topApps=[
        {
            name: 'sketch',
            hours: 99,
            mins: 45,
            icon: 'icons icons-sketch'
        },
        {
            name: 'slack',
            hours: 42,
            mins: 5,
            icon: 'icons icons-slack'
        },
        {
            name: 'asana',
            hours: 20,
            mins: 51,
            icon: 'icons icons-asana'
        },
        {
            name: 'time doctor',
            hours: 15,
            mins: 34,
            icon: 'icons icons-doctor'
        },
        {
            name: 'telegram',
            hours: 7,
            mins: 10,
            icon: 'icons icons-telegram'
        },

    ];


    $scope.calculatProgress=function(x){
        var seconds=((x.hours*60)+x.mins)*60;
        var percent=(seconds/(100*60*60))*100;
        return percent > 100 ? 100 : percent;
    }

    $scope.checkStatus=function(x){
        x=$scope.calculatProgress(x);
        return x<13?'danger':(x<18?'warning':'success');
    }

    $scope.trackedHours=[
        {
            name: 'Nettie hamilton',
            hours: 12,
            mins: 45
        },
        {
            name: 'lura sharp',
            hours: 10,
            mins: 15
        },
        {
            name: 'allie saunders',
            hours: 9,
            mins: 45
        },
        {
            name: 'jordan love',
            hours: 8,
            mins: 45
        },
        {
            name: 'rebecca walsh',
            hours: 8,
            mins: 02
        }
    ];
    $scope.data.topHighestPercentage=[
        {
            name: 'craig stokes',
            hours: 10,
            mins: 2,
            avatar: 'images/default-profile.jpg',
            position: 'product developer',
            role: 0
        },
        {
            name: 'dennis sunn',
            hours: 12,
            mins: 10,
            avatar: 'images/default-profile.jpg',
            position: 'product developer',
            role: 0
        },
        {
            name: 'gavin rose',
            hours: 14,
            mins: 8,
            avatar: 'images/default-profile.jpg',
            position: 'product developer',
            role: 0
        },
        {
            name: 'bruce ramos',
            hours: 16,
            mins: 30,
            avatar: 'images/default-profile.jpg',
            position: 'product manager',
            role: 3
        },
        {
            name: 'raymon larson',
            hours: 19,
            mins: 30,
            avatar: 'images/default-profile.jpg',
            position: 'servers',
            role: 2
        }
    ];

}]).directive('chunkTitle', function(){
    return {
        restrict:'E',
        scope: {
            title: '@'
        },
        template:'<div class="row p-10"><div class="col-xs-12"><span class="pull-left text-cap color-medium">[[title]]</span><span class="pull-right color-light"><span class="dropdown pull-right chunks"><span class="glyphicon glyphicon-option-vertical dropdown-toggle" data-toggle="dropdown"></span><ul class="dropdown-menu"><li><a href="#">Edit Widget</a></li><li><a href="#">Delete Widget</a></li></ul></span><span class="dropdown pull-right chunks"><span class="pointer m-r-10 dropdown-toggle" data-toggle="dropdown">Monthly <span class="fa fa-angle-down"></span></span><ul class="dropdown-menu"><li><a href="#">Monthly</a></li><li><a href="#">Weekly</a></li><li><a href="#">Yearly</a></li></ul></span></span></div></div><hr/>'
    };
}).directive('chunkFooter', function(){
    return {
        restrict:'E',
        scope: {
            target : '@'
        },
        template:'<hr/><div class="footer" ng-cloak><img ng-src="[[x.avatar]]" class="img-circle" alt="default-profile" width="22px" ng-cloak  ng-repeat="x in $parent.data[target].slice(0,3) track by $index" ng-style="{left:-$index*5}"><span class="pointer dropdown dropdown-more color-light" ng-show="$parent.data[target].length > 3" ng-cloak><span class="dropdown-toggle underline" data-toggle="dropdown" ng-cloak>+[[($parent.data[target].length -3) ]] more</span><ul class="dropdown-menu poss"><li><a href="#" ng-repeat="x in $parent.data[target] track by $index" class="text-cap">[[x.name]]<span class="pull-right text-upp positions" ng-style="{backgroundColor:$parent.$parent.roles[x.role]}">#[[x.position]]</span></a></li></ul></span></div>'
    };
}).directive('chunkFooterHours', function(){
    return {
        restrict:'E',
        scope: {
            target : '@'
        },
        template:'<hr><div class="footer color-light footer-hours"  ng-cloak><span></span><span>actual hours</span><span></span><span>hours worked more</span></div>'
    };
});


$(function () {
    $('[data-toggle="popover"]').popover();

$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

    Highcharts.chart('trackedHours', {
        chart: {
            zoomType: 'x',
            renderTo: 'trackedHours',
            height:180,
        },
        colors:['#5d6ac7'],
        title: {
            text: null,
        },
        credits: {
            enabled: false
        },

        xAxis: {
            type: 'datetime',
        },
        yAxis: {
            gridLineWidth:0,
            height:150,
            title: {
                text: null,
                enabled: false
            },
            labels: {
                enabled: false
            },
        },
        legend: {
            enabled: false
        },
            tooltip: {
        borderWidth: 0,
        backgroundColor: '#5d6ac7',
        shadow: false,
        style: {
            color:'#fff',
            fontSize: '14px'
        },
        pointFormat: '<span>{point.y}%</span>',
        positioner:function(boxWidth, boxHeight, point) {         
         return {x:point.plotX + 20, y:point.plotY - 20
      };      
        }
    },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, "#8a98f2"],
                        [1, "#fff"]
                    ]
                },
                marker: {
                    radius: 4
                },
                lineWidth: 2.5,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: null,
            data: data.splice(0,20)
        }]
    });
});


if (!Highcharts.theme) {
    Highcharts.setOptions({
        chart: {
            height:175,
            backgroundColor: 'transparent'
        },
        remainColor : '#d8dde6',
        colors: ['#face0a','#eb505d','#4ad2ed','#616ec2','#51c295'],
        title: {
            style: {
            }
        },
        tooltip: {
            style: {
            }
        }
    });
}


Highcharts.chart('PolarGuage', {

    chart: {
        type: 'solidgauge',
        marginTop: 0,
        renderTo: "PolarGuage"
    },

    title: {
        text: '',
        style: {
            fontSize: '24px'
        }
    },
    credits: {
        enabled: false
    },
    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{
            outerRadius: '112%',
            innerRadius: '100%',
            backgroundColor: Highcharts.getOptions().remainColor,
            borderWidth: 0
        }, {
            outerRadius: '93%',
            innerRadius: '81%',
            backgroundColor: Highcharts.getOptions().remainColor,
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '74%',
            innerRadius: '62%',
            backgroundColor: Highcharts.getOptions().remainColor,
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '55%',
            innerRadius: '43%',
            backgroundColor: Highcharts.getOptions().remainColor,
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '36%',
            innerRadius: '24%',
            backgroundColor: Highcharts.getOptions().remainColor,
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Benjamin Tyler',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '100%',
            y: 85
        }]
    }, {
        name: 'Darrell Hart',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '93%',
            innerRadius: '81%',
            y: 80
        }]
    }, {
        name: 'Lester Dougles',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '74%',
            innerRadius: '62%',
            y: 70
        }]
    }, {
        name: 'Georgia Harper',
        data: [{
            color: Highcharts.getOptions().colors[3],
            radius: '55%',
            innerRadius: '43%',
            y: 50
        }]
    }, {
        name: 'Olga Simpson',
        data: [{
            color: Highcharts.getOptions().colors[4],
            radius: '36%',
            innerRadius: '24%',
            y: 30
        }]
    }
    ]
});

var gaugeOptions = {
    chart: {
        type: 'solidgauge',
        height:60,
        marginTop: -20,
        backgroundColor: 'transparent'
    },
    title: null,
    pane: {
        center: ['50%', '85%'],
        size: '100%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: 'transparent',
            innerRadius: '85%',
            outerRadius: '100%',
            shape: 'arc',
            borderWidth:0
        }
    },
    tooltip: {
        enabled: false
    },
    yAxis: {
        stops: [
            [0.1, '#62bd6e'],
            [0.5, '#288248'],
        ],
        dataLabels: {
            enabled: false,
        },
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16,
            enabled: false,
        }
    },
    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: true,
                y: 5,
                borderWidth: 0,
                useHTML: true
            },
            linecap: 'round',
            rounded: false
        }
    }
};

var solidgauge = {
    yAxis: {
        min: 0,
        max: 200,
        title: {
            text: null
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        data: [150],
        innerRadius:'100%',
        radius: '80%',             
        dataLabels: {
            format: '<div style="text-align:center"><img src="images/pointer.png" width="20px" style="position:relative;top:-5px;"></div>'
        }
    },{
        data: [50],
        innerRadius:'100%',
        radius: '80%',
        dataLabels: {
            format: '<div style="text-align:center"><img src="images/pointer.png" width="25px" style="position:relative;top:-10px;"></div>'
        }

    },]
};

for (var i = 1; i <7; i++) {
    Highcharts.chart('container-speed-'+i,Highcharts.merge(gaugeOptions,solidgauge));
}

})

