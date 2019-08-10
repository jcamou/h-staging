function rangeGetValue(myValue) {
  document.getElementById("currentValueRange").innerHTML = myValue;
  document.getElementById("currentValuePricingTable").innerHTML = myValue;
  calculateEstimatedTotal();
}

function rangeGetValueContentLevel(myValue) {
  document.getElementById("contentLevelValueRange").innerHTML = myValue;
  document.getElementById("contentLevelPricingTable").innerHTML = myValue;
  calculateEstimatedTotal();
}

function rangeGetValueQuantity(myValue) {
  document.getElementById("quantityValueRange").innerHTML = myValue;
  document.getElementById("quantityValuePricingTable").innerHTML = myValue;
  calculateEstimatedTotal();
}

function rangeGetTrafficValue(myValue) {
  var trafficValues = [1000, 5000, 10000, 20000, 50000];
  var trafficValueFormatted = trafficValues[myValue].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  document.getElementById("trafficCurrentValueRange").innerHTML = trafficValueFormatted;
  document.getElementById("currentValueTrafficPricingTable").innerHTML = trafficValueFormatted;
  calculateTrafficEstimatedTotal();
}

function rangeGetTrafficValueQuantity(myValue) {
  document.getElementById("trafficQuantityValueRange").innerHTML = myValue;
  document.getElementById("quantityValueTrafficPricingTable").innerHTML = myValue;
  calculateTrafficEstimatedTotal();
}

var packageID = 7;

var pk = {
  da10: 7,
  da20: 17,
  da30: 27,
  da40: 323,
  da50: 482,
  tr1000: 519,
  tr5000: 520,
  tr10000: 521,
  tr20000: 522,
  tr50000: 523
};

$('body').on('click', 'div.price-panel > div.btn.btn--red.btn--full-width', function () {
  var quantity = document.getElementById('daQuantitySlider').value;
  var contentLevel = document.getElementById('daContentLevelSlider').value;
  document.location.href = 'https://www.thehoth.com/dashboard/cart/gp/' + packageID + (quantity > 1 || contentLevel > 500 ? '?' : '') + (quantity > 1 ? 'quantity=' + quantity : '') + (contentLevel > 500 ? '&contentLevel=' + contentLevel : '');
});



function calculateEstimatedTotal() {
  var daStrength = document.getElementById('daStrengthSlider').value;
  var contentLevel = document.getElementById('daContentLevelSlider').value;
  var quantity = document.getElementById('daQuantitySlider').value;
  var discount = 0.0;
  var baseUnitPrice = 0;
  var contentLevelUpsell = 0;
  var promo = 0;

  packageID = pk['da' + daStrength];

  // Calculate base totalPrice and content level
  if (daStrength == 10) {
    baseUnitPrice = 100;

    if (contentLevel == 1000) {
      contentLevelUpsell = 15;
    }
    else if (contentLevel == 1500) {
      contentLevelUpsell = 25;
    }
  }
  else if (daStrength == 20) {
    baseUnitPrice = 150;

    if (contentLevel == 1000) {
      contentLevelUpsell = 15;
    }
    else if (contentLevel == 1500) {
      contentLevelUpsell = 25;
    }
  }
  else if (daStrength == 30) {
    baseUnitPrice = 200;

    if (contentLevel == 1000) {
      contentLevelUpsell = 25;
    }
    else if (contentLevel == 1500) {
      contentLevelUpsell = 50;
    }
  }
  else if (daStrength == 40) {
    baseUnitPrice = 400;

    if (contentLevel == 1000) {
      contentLevelUpsell = 25;
    }
    else if (contentLevel == 1500) {
      contentLevelUpsell = 50;
    }
  }
  else if (daStrength == 50) {
    baseUnitPrice = 500;

    if (contentLevel == 1000) {
      contentLevelUpsell = 25;
    }
    else if (contentLevel == 1500) {
      contentLevelUpsell = 50;
    }
  }


  // Calculate Discount
  if (promo == 1) {
    discount = .25;
    $("#totalDiscountContainer").show();
    $("#totalOriginalPriceContainer").addClass("text__decoration--line-through");
  }
  else if (quantity < 5) {
    discount = 0.0;
    $("#totalDiscountContainer").hide();
    $("#totalOriginalPriceContainer").removeClass("text__decoration--line-through");
  }
  else if (quantity >= 5 && quantity < 10) {
    discount = .10;
    $("#totalDiscountContainer").show();
    $("#totalOriginalPriceContainer").addClass("text__decoration--line-through");
  }
  else if (quantity >= 10) {
    discount = .125;
    $("#totalDiscountContainer").show();
    $("#totalOriginalPriceContainer").addClass("text__decoration--line-through");
  }

  var total = ((baseUnitPrice + contentLevelUpsell) * quantity);
  var totalDiscount = total * discount;
  var totalWithDiscount = total - totalDiscount;

  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalWithDiscount = totalWithDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  document.getElementById('totalOriginalPrice').innerHTML = total;
  document.getElementById('totalPrice').innerHTML = totalWithDiscount;
  document.getElementById('totalDiscountAmount').innerHTML = discount * 100;
}

function calculateTrafficEstimatedTotal() {

  var trafficValues = [1000, 5000, 10000, 20000, 50000]; // Traffic Values Array
  var traffic = trafficValues[document.getElementById('trafficSlider').value];
  var quantity = document.getElementById('trafficQuantitySlider').value;
  var baseUnitPrice = 0;
  var promo = 1;

  packageID = pk['tr' + traffic];

  // Calculate base totalPrice
  if (traffic == 1000) { baseUnitPrice = 200; }
  else if (traffic == 5000) { baseUnitPrice = 300; }
  else if (traffic == 10000) { baseUnitPrice = 400; }
  else if (traffic == 20000) { baseUnitPrice = 450; }
  else if (traffic == 50000) { baseUnitPrice = 500; }

  // Calculate Discount
  if (promo == 1) {
    discount = .25;
    $("#totalDiscountContainer").show();
    $("#totalOriginalPriceContainer").addClass("text__decoration--line-through");
  }
  else if (quantity < 5) {
    discount = 0.0;
    $("#totalDiscountContainer").hide();
    $("#totalOriginalPriceContainer").removeClass("text__decoration--line-through");
  }
  else if (quantity >= 5 && quantity < 10) {
    discount = .10;
    $("#totalDiscountContainer").show();
    $("#totalOriginalPriceContainer").addClass("text__decoration--line-through");
  }
  else if (quantity >= 10) {
    discount = .125;
    $("#totalDiscountContainer").show();
    $("#totalOriginalPriceContainer").addClass("text__decoration--line-through");
  }

  var total = (baseUnitPrice * quantity);
  var totalDiscount = total * discount;
  var totalWithDiscount = total - totalDiscount;

  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalWithDiscount = totalWithDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  document.getElementById('totalOriginalPrice').innerHTML = total;
  document.getElementById('totalPrice').innerHTML = totalWithDiscount;
  document.getElementById('totalDiscountAmount').innerHTML = discount * 100;
}

$("#daPanel").click(function () {
  $("#detailsDA").show("slow");
  $("#detailsTraffic").hide(1000);
  $("#daItemContainer").show("slow");
  $("#trafficItemContainer").hide(1000);
  $("#daPanel").addClass("selection-panel--active");
  $("#trafficPanel").removeClass("selection-panel--active");
  calculateEstimatedTotal();
});

$("#trafficPanel").click(function () {
  $("#detailsDA").hide();
  $("#detailsTraffic").show("slow");
  $("#trafficItemContainer").show("slow");
  $("#daItemContainer").hide(1000);
  $("#trafficPanel").addClass("selection-panel--active");
  $("#daPanel").removeClass("selection-panel--active");
  $("#totalDiscountContainer").hide();
  $("#totalOriginalPriceContainer").removeClass("text__decoration--line-through");
  calculateTrafficEstimatedTotal();
});



// Switch Criteria

$(document).ready(function () {
  calculateEstimatedTotal();

  var organicTrafficData = [
    { x: new Date(2018, 10, 10), y: 322 },
    { x: new Date(2018, 09, 15), y: 299 },
    { x: new Date(2018, 08, 15), y: 352 },
    { x: new Date(2018, 07, 15), y: 343 },
    { x: new Date(2018, 06, 15), y: 355 },
    { x: new Date(2018, 05, 15), y: 343 },
    { x: new Date(2018, 04, 15), y: 327 },
    { x: new Date(2018, 03, 15), y: 338 },
    { x: new Date(2018, 02, 15), y: 160 },
    { x: new Date(2018, 01, 15), y: 110 },
    { x: new Date(2017, 12, 15), y: 90 },
    { x: new Date(2017, 11, 15), y: 68 },
    { x: new Date(2017, 10, 15), y: 98 },
    { x: new Date(2017, 09, 15), y: 202 },
    { x: new Date(2017, 08, 15), y: 222 },
    { x: new Date(2017, 07, 15), y: 198 },
    { x: new Date(2017, 06, 15), y: 579 },
    { x: new Date(2017, 05, 15), y: 190 },
    { x: new Date(2017, 04, 15), y: 145 },
    { x: new Date(2017, 03, 15), y: 125 },
    { x: new Date(2017, 02, 15), y: 96 },
    { x: new Date(2017, 01, 15), y: 80 },
    { x: new Date(2016, 12, 15), y: 103 },
    { x: new Date(2016, 11, 15), y: 66 },
    { x: new Date(2016, 10, 15), y: 73 },
    { x: new Date(2016, 09, 15), y: 66 },
    { x: new Date(2016, 08, 15), y: 396 },
    { x: new Date(2016, 07, 15), y: 257 },
    { x: new Date(2016, 06, 15), y: 38 },
    { x: new Date(2016, 05, 15), y: 57 },
    { x: new Date(2016, 04, 15), y: 47 },
    { x: new Date(2016, 03, 15), y: 45 },
    { x: new Date(2016, 02, 15), y: 61 },
    { x: new Date(2016, 01, 15), y: 63 },
    { x: new Date(2015, 12, 15), y: 113 },
    { x: new Date(2015, 11, 15), y: 138 },
    { x: new Date(2015, 10, 15), y: 503 },
  ]
  var organicKeywordData = [
    { x: new Date(2018, 10, 10), y: 322 },
    { x: new Date(2018, 09, 15), y: 299 },
    { x: new Date(2018, 08, 15), y: 352 },
    { x: new Date(2018, 07, 15), y: 343 },
    { x: new Date(2018, 06, 15), y: 355 },
    { x: new Date(2018, 05, 15), y: 343 },
    { x: new Date(2018, 04, 15), y: 327 },
    { x: new Date(2018, 03, 15), y: 338 },
    { x: new Date(2018, 02, 15), y: 160 },
    { x: new Date(2018, 01, 15), y: 110 },
    { x: new Date(2017, 12, 15), y: 90 },
    { x: new Date(2017, 11, 15), y: 68 },
    { x: new Date(2017, 10, 15), y: 98 },
    { x: new Date(2017, 09, 15), y: 202 },
    { x: new Date(2017, 08, 15), y: 222 },
    { x: new Date(2017, 07, 15), y: 198 },
    { x: new Date(2017, 06, 15), y: 579 },
    { x: new Date(2017, 05, 15), y: 190 },
    { x: new Date(2017, 04, 15), y: 145 },
    { x: new Date(2017, 03, 15), y: 125 },
    { x: new Date(2017, 02, 15), y: 96 },
    { x: new Date(2017, 01, 15), y: 80 },
    { x: new Date(2016, 12, 15), y: 103 },
    { x: new Date(2016, 11, 15), y: 66 },
    { x: new Date(2016, 10, 15), y: 73 },
    { x: new Date(2016, 09, 15), y: 66 },
    { x: new Date(2016, 08, 15), y: 396 },
    { x: new Date(2016, 07, 15), y: 257 },
    { x: new Date(2016, 06, 15), y: 38 },
    { x: new Date(2016, 05, 15), y: 57 },
    { x: new Date(2016, 04, 15), y: 47 },
    { x: new Date(2016, 03, 15), y: 45 },
    { x: new Date(2016, 02, 15), y: 61 },
    { x: new Date(2016, 01, 15), y: 63 },
    { x: new Date(2015, 12, 15), y: 113 },
    { x: new Date(2015, 11, 15), y: 138 },
    { x: new Date(2015, 10, 15), y: 503 },
  ]

  var linkBuildingData = [
    { x: new Date(2018, 10, 10), y: 150 },
    { x: new Date(2018, 09, 15), y: 100 },
    { x: new Date(2018, 08, 15), y: 5 },
    { x: new Date(2018, 07, 15), y: 0 },

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

// slick slider initialisation
$(document).ready(function () {
  $('.slick').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


// megamenu slider initialisation
$(document).ready(function () {
  $('.megaslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});