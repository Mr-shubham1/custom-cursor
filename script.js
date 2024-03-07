function Customcursor(xscale,yscale){
    var crsr = document.querySelector("#cursor");
    window.addEventListener("mousemove",function(dets){
        crsr.style.transform = `translate(${dets.clientX - 11}px,${dets.clientY - 11}px) scale(${xscale},${yscale})`;
        
    });
}

function cursorchaptakaroscale(){
    var currinx = 0 ;
    var curriny = 0 ;

    var xdiff;
    var ydiff;
    
    window.addEventListener("mousemove",function(dets){

        clearTimeout(timeout)
        

       
        xdiff = dets.clientX - currinx;
        currinx = dets.clientX;
        var xscale = gsap.utils.clamp(.6,1.4,xdiff);

        ydiff = dets.clientY - curriny;
        curriny = dets.clientY;
        var yscale = gsap.utils.clamp(.6,1.4,ydiff);
        Customcursor(xscale,yscale);

        var timeout = setTimeout(function(){
            document.querySelector("#cursor").style.transform = `translate(${dets.clientX - 11}px,${dets.clientY - 11}px) scale(1,1)`;
        },100)

    })
}

Customcursor();
cursorchaptakaroscale();