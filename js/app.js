$(document).ready(function(){
    // Start Header Section 
        //    Start Banner Section 
            // $(".carousel").carousel({
            //     interval:1000;
            // })
       //    End Banner Section 
    // End Header Section 

    // Start Info Section 
    $(window).scroll(function () {
        let getScrollpoint  = $(this).scrollTop();
        // console.log(getScrollpoint);
        if (getScrollpoint >= 220) {
            $(".infotexts").addClass("fromlefts");
            $(".infopics").addClass("fromrights");
        }else{
            $(".infotexts").removeClass("fromlefts");
            $(".infopics").removeClass("fromrights");
        }
    })
    // End Info Section 

    // Start ADV 
    $("#videos").click(function(){

        var getModal = $(this).data("bs-target");
        var getvideosrc = $(this).data("video")
        var getvideourlwithauto = getvideosrc + "?autoplay=1";
        // var getModal = $("#videomodal");

        $(getModal + " iframe").attr("src",getvideourlwithauto);
        
        // $(getModal + " button.btn-close").click(function () {
        //     $(getModal + " iframe").attr("src",getvideosrc);
        // });

        $(getModal).click("hidden.bs.modal",function () {
            $(getModal + " iframe").attr("src",getvideosrc);
        });

    });
    // End ADV 

    // Start Premises Section 
    $("#lightslider").lightSlider({
        // auto:true,
        item:4,
        loop:true,
        slideMove:1,
        speed:600,
    }).play(); 
    // End Premises Section 

    // Start Pricings
    $(window).scroll(function(){
        let getScroll = $(this).scrollTop(); 
        if(getScroll >=2450){
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebottoms");
            $(".cardthrees").addClass("moverights");
        }else{
            $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("movebottoms");
            $(".cardthrees").removeClass("moverights");
        }
    })
    // End Pricings

    // Start Join Us Section 
    $("#accordion").accordion();
    // End Join Us Section

    // Start Footer
    $("#getYear").text(new Date().getUTCFullYear());
    // End Footer 

    // Start progress 
    $(window).scroll(function(){
        var getprogress = $("#progresses");
        var getprogressvalues = $("#progressvalues");
        var getScrollTop = $(this).scrollTop();

        // scrollTop * 100 / (pjheight - currentscrollview)

        // By Jquery 
        // var getScrollHeight = $(document).height();
        // console.log(getScrollHeight);
        // var getClientHeight = $(window).height();
        // console.log(getClientHeight);
        // var calcHeight = getScrollHeight - getClientHeight;
        // var getFinalHeight = Math.round(getScrollTop * 100 / calcHeight);
        // console.log(getFinalHeight);

        // By javascript 
        var getScrollHeight = document.documentElement.scrollHeight; //(project start and end height)
        // console.log(getScrollHeight);
        var getClientHeight = document.documentElement.clientHeight;
        // console.log(getClientHeight);
        var calcHeight = getScrollHeight - getClientHeight;
        var getFinalHeight = Math.round(getScrollTop * 100 / calcHeight);
        // console.log(getFinalHeight);



        getprogressvalues.text(`${getFinalHeight}%`);
        getprogress.css({
            "background" : `conic-gradient(steelblue ${getFinalHeight}%,#eee ${getFinalHeight}%)`
        })
    })
    // End progress 
});
