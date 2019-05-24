window.onscroll = function() {myFunction()};
    
var cardSection = document.getElementById("cardDeck");
var cardBottom = document.getElementById("productFooter");
var stickyStart = cardSection.offsetTop;
var stickyStop = cardBottom.offsetTop;

var helpBar = document.getElementById("stickyHelpBar");

var mixer = mixitup('.card-deck', {
    selectors: {
        target: '.card'
    },
    classNames: {
        block: '',
        elementFilter: ''
    },
    animation: {
        duration: 600
    }
});

function myFunction() {
    if (window.pageYOffset > stickyStart && window.pageYOffset < stickyStop-120)  {
        helpBar.classList.add("sticky");
    } else {
        helpBar.classList.remove("sticky");
    }
}





