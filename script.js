let ima = document.getElementById('prlx');
let ima2 = document.getElementById('prlx2');
let ima1 = document.getElementById('pxl');
window.addEventListener('scroll', function(){
    let value = window.scrollY;

    ima.style.right =   value * 2 + 'px';
    ima2.style.bottom =  80 + value * 1 +'px';
   // ima1.style.bottom = 90 + value * 2 + 'px';
})
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.up').addClass("scrol");
    
        }else{
            $('.up').removeClass("scrol");
        }
    });
