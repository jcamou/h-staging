function rangeGetBloggerPostAmountValue(myValue){
  var postAmountValues = [1, 2, 4, 8];
  var postAmountValuesFormatted = postAmountValues[myValue].toString();
  document.getElementById("bloggerPostAmountValueRange").innerHTML = postAmountValuesFormatted;
  calculateBloggerEstimatedTotal();
}

function rangeGetBloggerWordCountValue(myValue){
  var wordCountValues = [500, 1000, 1500, 2000];
  var wordCountValuesFormatted = wordCountValues[myValue].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  document.getElementById("bloggerWordCountValueRange").innerHTML = wordCountValuesFormatted;
  calculateBloggerEstimatedTotal();
}

$('body').on('click', 'div.price-panel > div.btn.btn--red.btn--full-width', function () {
    var quantity = document.getElementById('daQuantitySlider').value;
    var contentLevel = document.getElementById('daContentLevelSlider').value;
    document.location.href = 'https://www.thehoth.com/dashboard/cart/gp/' + packageID + (quantity > 1 ||  contentLevel > 500 ? '?' : '') + (quantity > 1 ? 'quantity='+quantity : '') + (contentLevel > 500 ? '&contentLevel='+contentLevel : '');
});

function calculateBloggerEstimatedTotal () {
    var postAmount = document.getElementById('bloggerPostAmountSlider').value;
    var wordCount = document.getElementById('bloggerWordCountSlider').value;
    var total = 0;

    // Package Arrays
    var onePostBlogger  = [40, 70, 95, 130];
    var twoPostsBlogger = [70, 130, 180, 250];
    var fourPostsBlogger = [120, 240, 340, 480];
    var eightPostsBlogger = [240, 480, 680, 960];

    var onePostBloggerPro  = [80, 140, 190, 260];
    var twoPostsBloggerPro = [150, 270, 370, 510];
    var fourPostsBloggerPro = [280, 520, 720, 100];
    var eightPostsBloggerPro = [560, 1040, 1440, 2000];

    if (postAmount == 0) {
      totalBlogger = onePostBlogger[wordCount];
      totalBloggerPro = onePostBloggerPro[wordCount];
    }
    else if (postAmount == 1) {
      totalBlogger = twoPostsBlogger[wordCount];
      totalBloggerPro = twoPostsBloggerPro[wordCount];
    }
    else if (postAmount == 2) {
      totalBlogger = fourPostsBlogger[wordCount];
      totalBloggerPro = fourPostsBloggerPro[wordCount];
    }
    else if (postAmount == 3) {
      totalBlogger = eightPostsBlogger[wordCount];
      totalBloggerPro = eightPostsBloggerPro[wordCount];
    }

    //Discounts
    var promo = 1;
    var promoDiscountAmount = .25;

    // Calculate Discount
    var totalBloggerProDiscount = totalBloggerPro * promoDiscountAmount;
    var totalBloggerProWithDiscount = totalBloggerPro - totalBloggerProDiscount;

    if (promo == 1) {
      $("#bloggerProPromo").show();
      document.getElementById('bloggerProOriginalPrice').innerHTML = totalBloggerPro;
    }

    totalBlogger = totalBlogger.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    totalBloggerPro = totalBloggerPro.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    totalBloggerProWithDiscount = totalBloggerProWithDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.getElementById('bloggerTotalPrice').innerHTML = totalBlogger;
    document.getElementById('bloggerProTotalPrice').innerHTML = totalBloggerProWithDiscount;
}