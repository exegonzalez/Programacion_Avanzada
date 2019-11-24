/// navScroll init
peNavScroll.init({
    nav: '.rk-navigation',
    class: 'active',
    duration: 500,
    hashChange: true,
    offset: 50,
    allLinks: true,
    easingFunction: easing.easeInOutCubic
});

//- Select Code
var pres = document.querySelectorAll('pre');
[].slice.call(pres).forEach(function(elem, index) {
    pres[index].addEventListener('click', function() {
        SelectText(this)
    })
})