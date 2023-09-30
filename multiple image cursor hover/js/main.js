var grafix = document.querySelectorAll(".shumti");

grafix.forEach(function(shumti1){
    shumti1.addEventListener("mouseenter" , function(){
        shumti1.childNodes[3].style.opacity = 1
    });
    shumti1.addEventListener("mouseleave" , function(){
        shumti1.childNodes[3].style.opacity = 0
    });
    shumti1.addEventListener("mousemove" , function(dets){
        shumti1.childNodes[3].style.left = dets.x+"px"
        shumti1.childNodes[3].style.top = dets.y+"px"
    });
});