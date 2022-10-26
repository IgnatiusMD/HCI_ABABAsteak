$(function(){

    window.addEventListener('resize', function () { 
        "use strict";
        window.location.reload(); 
    });

    $(".selector1").css("padding", "7px")

    var interval
    var totalSlide = $(".slide").length
    var currSlide = 1
    var width = $(".slide").width()
    
    function resetSize(){
        $(".selector1").css("padding", "5px")
        $(".selector2").css("padding", "5px")
        $(".selector3").css("padding", "5px")
        $(".selector4").css("padding", "5px")
    }

    function slide(){
        interval = setInterval(function(){
            resetSize()
            if(currSlide==totalSlide){
                $(".slide-wrap").stop().animate({"margin-left":"0px"}, 1000)
                currSlide = 1;
                console.log("reset")
                $(".selector1").stop().animate({padding:"7px"},1000)
            }
            else{
                $(".slide-wrap").stop().animate({"margin-left":"-="+width+"px"}, 1000)
                currSlide++;
                console.log(currSlide)
                if(currSlide==1){
                    $(".selector1").stop().animate({padding:"7px"},1000)
                }
                else if(currSlide==2){
                    $(".selector2").stop().animate({padding:"7px"},1000)
                }
                else if(currSlide==3){
                    $(".selector3").stop().animate({padding:"7px"},1000)
                }
                else if(currSlide==4){
                    $(".selector4").stop().animate({padding:"7px"},1000)
                }
            }
        }, 8000)
    }

    $(".prev").click(function(){
        resetSize()
        if(currSlide == 1) 
            currSlide = totalSlide
        else 
            currSlide--

        if(currSlide==1){
            $(".selector1").stop().animate({padding:"7px"},1000)
        }
        else if(currSlide==2){
            $(".selector2").stop().animate({padding:"7px"},1000)
        }
        else if(currSlide==3){
            $(".selector3").stop().animate({padding:"7px"},1000)
        }
        else if(currSlide==4){
            $(".selector4").stop().animate({padding:"7px"},1000)
        }

        $(".slide-wrap").stop().animate({"margin-left":"-"+(currSlide-1)*width+"px"},1000)
        clearInterval(interval)
        slide()
    })

    $(".next").click(function(){
        resetSize()
        if(currSlide == totalSlide) 
            currSlide = 1
        else 
            currSlide++

        if(currSlide==1){
            $(".slide-wrap").stop().animate({"margin-left":"0px"},1000)
            $(".selector1").stop().animate({padding:"7px"},1000)
        }
        else if(currSlide==2){
            $(".selector2").stop().animate({padding:"7px"},1000)
        }
        else if(currSlide==3){
            $(".selector3").stop().animate({padding:"7px"},1000)
        }

        $(".slide-wrap").stop().animate({"margin-left":"-"+(currSlide-1)*width+"px"},1000)
        clearInterval(interval)
        slide()
    })

    $(".selector1").click(function(){
        resetSize()
        $(".slide-wrap").stop().animate({"margin-left":"0px"},1000)
        $(".selector1").stop().animate({padding:"7px"},1000)
        currSlide = 1
        clearInterval(interval)
        slide()
    })

    $(".selector2").click(function(){
        resetSize()
        $(".slide-wrap").stop().animate({"margin-left":"-"+width+"px"},1000)
        $(".selector2").stop().animate({padding:"7px"},1000)
        currSlide = 2
        clearInterval(interval)
        slide()
    })

    $(".selector3").click(function(){
        resetSize()
        $(".slide-wrap").stop().animate({"margin-left":"-"+width*2+"px"},1000)
        $(".selector3").stop().animate({padding:"7px"},1000)
        currSlide = 3
        clearInterval(interval)
        slide()
    })
    slide()

    
})


