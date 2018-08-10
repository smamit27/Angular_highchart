import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
    cate = ['01','03','05','07','09','11','13','15','17','19','21','23','25','27','29','31','33','35'];
  constructor() {
    this.chart1 = {
        chart: { 
          width: 900,
        height: 300,
        type: 'area' ,
        polar: true,
       },
        title : { text : '' },
        credits: {
            enabled: false,series1: false
        },
        xAxis: {
            categories: this.cate,
            min: 0.5,
            max: this.cate.length-1.5,
            startOnTick: false,
            endOnTick: false,
            minPadding: 0,
            maxPadding: 0,
            align: "left"  
        },
        yAxis: {
            labels: {
                formatter: function () {
                  return this.value / 100 + 'k';
                }
              },
            title: false

        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                },
                fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                      [0, '#e9f2fc'],
                      [1, '#f4f4f4']
                  ]
              },
            }
        },  
        series: [{
            yAxis: 0,
            data: [
                13300,15468,
                13000, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
                26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
                21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
                10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
                5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
              ],
            showInLegend: false,
        }]
    };
  }
  chart1: Object
  }
