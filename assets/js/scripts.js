$(document).ready(function() {
    var organicTrafficData = [
                        {x: new Date(2018, 10, 10), y: 322 },
                        {x: new Date(2018, 09, 15), y: 299 },
                        {x: new Date(2018, 08, 15), y: 352 },
                        {x: new Date(2018, 07, 15), y: 343 },
                        {x: new Date(2018, 06, 15), y: 355 },
                        {x: new Date(2018, 05, 15), y: 343 },
                        {x: new Date(2018, 04, 15), y: 327 },
                        {x: new Date(2018, 03, 15), y: 338 },
                        {x: new Date(2018, 02, 15), y: 160 },
                        {x: new Date(2018, 01, 15), y: 110 },
                        {x: new Date(2017, 12, 15), y: 90 },
                        {x: new Date(2017, 11, 15), y: 68 },
                        {x: new Date(2017, 10, 15), y: 98 },
                        {x: new Date(2017, 09, 15), y: 202 },
                        {x: new Date(2017, 08, 15), y: 222 },
                        {x: new Date(2017, 07, 15), y: 198 },
                        {x: new Date(2017, 06, 15), y: 579 },
                        {x: new Date(2017, 05, 15), y: 190 },
                        {x: new Date(2017, 04, 15), y: 145 },
                        {x: new Date(2017, 03, 15), y: 125 },
                        {x: new Date(2017, 02, 15), y: 96 },
                        {x: new Date(2017, 01, 15), y: 80 },
                        {x: new Date(2016, 12, 15), y: 103 },
                        {x: new Date(2016, 11, 15), y: 66 },
                        {x: new Date(2016, 10, 15), y: 73 },
                        {x: new Date(2016, 09, 15), y: 66 },
                        {x: new Date(2016, 08, 15), y: 396 },
                        {x: new Date(2016, 07, 15), y: 257 },
                        {x: new Date(2016, 06, 15), y: 38 },
                        {x: new Date(2016, 05, 15), y: 57 },
                        {x: new Date(2016, 04, 15), y: 47 },
                        {x: new Date(2016, 03, 15), y: 45 },
                        {x: new Date(2016, 02, 15), y: 61 },
                        {x: new Date(2016, 01, 15), y: 63 },
                        {x: new Date(2015, 12, 15), y: 113 },
                        {x: new Date(2015, 11, 15), y: 138 },
                        {x: new Date(2015, 10, 15), y: 503 },
                      ]
    var organicKeywordData = [
                        {x: new Date(2018, 10, 10), y: 322 },
                        {x: new Date(2018, 09, 15), y: 299 },
                        {x: new Date(2018, 08, 15), y: 352 },
                        {x: new Date(2018, 07, 15), y: 343 },
                        {x: new Date(2018, 06, 15), y: 355 },
                        {x: new Date(2018, 05, 15), y: 343 },
                        {x: new Date(2018, 04, 15), y: 327 },
                        {x: new Date(2018, 03, 15), y: 338 },
                        {x: new Date(2018, 02, 15), y: 160 },
                        {x: new Date(2018, 01, 15), y: 110 },
                        {x: new Date(2017, 12, 15), y: 90 },
                        {x: new Date(2017, 11, 15), y: 68 },
                        {x: new Date(2017, 10, 15), y: 98 },
                        {x: new Date(2017, 09, 15), y: 202 },
                        {x: new Date(2017, 08, 15), y: 222 },
                        {x: new Date(2017, 07, 15), y: 198 },
                        {x: new Date(2017, 06, 15), y: 579 },
                        {x: new Date(2017, 05, 15), y: 190 },
                        {x: new Date(2017, 04, 15), y: 145 },
                        {x: new Date(2017, 03, 15), y: 125 },
                        {x: new Date(2017, 02, 15), y: 96 },
                        {x: new Date(2017, 01, 15), y: 80 },
                        {x: new Date(2016, 12, 15), y: 103 },
                        {x: new Date(2016, 11, 15), y: 66 },
                        {x: new Date(2016, 10, 15), y: 73 },
                        {x: new Date(2016, 09, 15), y: 66 },
                        {x: new Date(2016, 08, 15), y: 396 },
                        {x: new Date(2016, 07, 15), y: 257 },
                        {x: new Date(2016, 06, 15), y: 38 },
                        {x: new Date(2016, 05, 15), y: 57 },
                        {x: new Date(2016, 04, 15), y: 47 },
                        {x: new Date(2016, 03, 15), y: 45 },
                        {x: new Date(2016, 02, 15), y: 61 },
                        {x: new Date(2016, 01, 15), y: 63 },
                        {x: new Date(2015, 12, 15), y: 113 },
                        {x: new Date(2015, 11, 15), y: 138 },
                        {x: new Date(2015, 10, 15), y: 503 },
                      ]

        var linkBuildingData = [
                        {x: new Date(2018, 10, 10), y: 150 },
                        {x: new Date(2018, 09, 15), y: 100 },
                        {x: new Date(2018, 08, 15), y: 5 },
                        {x: new Date(2018, 07, 15), y: 0 },
                       
                      ]

    Chart.defaults.global.legend.labels.usePointStyle = true;


    
    new Chart($("#organicTrafficHistory"), {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Organic Traffic',
            data: organicTrafficData,
            fill: true,
            backgroundColor: ['rgba(93,230,117,.1)'],
            borderColor: ['rgba(93,230,117,1)'],
            pointBackgroundColor: 'rgba(93,230,117,1)',
            pointBorderColor: 'white',
            pointBorderWidth: 2,
            borderWidth: 2
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {
            bottom: 50,
          }
        },
        tooltips: {
          intersect: false,
          titleFontFamily: "'Roboto'",
          bodyFontFamily: "'Roboto'",
          cornerRadius: 2,
          xPadding: 16,
          yPadding: 16,
          backgroundColor: 'rgba(70,70,70,1)',
          displayColors: false,
        },
        annotation: {
            drawTime: 'afterDatasetsDraw',
            annotations: [{
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-0',
                borderColor: '#E1443D',
                value: new Date(2017, 11, 15),
                borderWidth: 1,
                borderDash: [4, 2],
                label: {
                            backgroundColor: "#E1443D",
                            fontSize: 10,
                            cornerRadius: 2,
                            position: "top",
                            content: "S",
                            enabled: true
                        },
            },
            {
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-0',
                borderColor: '#E1443D',
                value: new Date(2017, 12, 15),
                borderWidth: 1,
                borderDash: [4, 2],
                label: {
                            backgroundColor: "#E1443D",
                            fontSize: 10,
                            cornerRadius: 2,
                            position: "top",
                            content: "1",
                            enabled: true
                        },
            }

            ],
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                fontFamily: "'Roboto'",
                fontStyle: 'bold',
                fontColor: 'rgba(155,155,155,1)',
                fontSize: 10,
              }
            }
          ],
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'month'
              },
              gridLines: {
                display: false
              },
              ticks: {
                fontFamily: "'Roboto'",
                fontStyle: 'bold',
                fontColor: 'rgba(155,155,155,1)',
                fontSize: 10,
              },
            }
          ]
        }
      },
    });

    new Chart($("#organicKeywordHistory"), {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Organic Keyword',
            data: organicKeywordData,
            fill: true,
            backgroundColor: ['rgba(41,142,233,.05)'],
            borderColor: ['rgba(41,142,233,1)'],
            pointBackgroundColor: 'rgba(41,142,233,1)',
            pointBorderColor: 'white',
            pointBorderWidth: 2,
            borderWidth: 2
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {
            bottom: 50,
          }
        },
        tooltips: {
          intersect: false,
          titleFontFamily: "'Roboto'",
          bodyFontFamily: "'Roboto'",
          cornerRadius: 2,
          xPadding: 16,
          yPadding: 16,
          backgroundColor: 'rgba(70,70,70,1)',
          displayColors: false,
        },
        annotation: {
            drawTime: 'afterDatasetsDraw',
            annotations: [{
                type: 'line',
                mode: 'vertical',
                scaleID: 'x-axis-0',
                borderColor: '#E1443D',
                value: new Date(2017, 11, 15),
                borderWidth: 1,
                borderDash: [4, 2],
                label: {
                            backgroundColor: "#E1443D",
                            fontSize: 10,
                            cornerRadius: 2,
                            position: "top",
                            content: "S",
                            enabled: true
                        },
            }]
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                fontFamily: "'Roboto'",
                fontStyle: 'bold',
                fontColor: 'rgba(155,155,155,1)',
                fontSize: 10,
              }
            }
          ],
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'month'
              },
              gridLines: {
                display: false
              },
              ticks: {
                fontFamily: "'Roboto'",
                fontStyle: 'bold',
                fontColor: 'rgba(155,155,155,1)',
                fontSize: 10,
              },
            }
          ]
        }
      },
    });

    new Chart($("#linkBuildingProgress"), {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Link Building',
            data: linkBuildingData,
            fill: true,
            backgroundColor: ['rgba(41,142,233,.05)'],
            borderColor: ['rgba(41,142,233,1)'],
            pointBackgroundColor: 'rgba(41,142,233,1)',
            pointBorderColor: 'white',
            pointBorderWidth: 2,
            borderWidth: 2
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {
            bottom: 0,
          }
        },
        tooltips: {
          enabled: false,
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
                gridLines: {
                    drawBorder: false,
                    display: false,
                },
              ticks: {
                display: false,
              }
            }
          ],
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'month'
              },
              gridLines: {
                drawBorder: true,
                display: false,
              },
              ticks: {
                display: false,
              },
            }
          ]
        }
      },
    });
    
  
});

