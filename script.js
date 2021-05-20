let ima = document.getElementById('prlx');
let ima2 = document.getElementById('prlx2');
let ima1 = document.getElementById('pxl');
window.addEventListener('scroll', function(){
    let value = window.scrollY;

    ima.style.right =   value * 2 + 'px';
    ima2.style.bottom =  -50 + value * 0.5 +'px';
   // ima1.style.bottom = 90 + value * 2 + 'px';
})
