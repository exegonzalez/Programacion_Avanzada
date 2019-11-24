//- Select Code
var pres = document.querySelectorAll('pre');
[].slice.call(pres).forEach(function(elem, index) {
    pres[index].addEventListener('click', function() {
        SelectText(this)
    })
})