$(document).ready(function() {

    // *1 ローワーキャメルケースに直す (例: loginButtonPc)
    // *2 window.matchMediaの値に定数を使用する

    if (window.matchMedia('screen and (min-width: 992px)').matches) {

        clickNav();
        hoverNav();

    } else if(window.matchMedia('screen and (max-width: 991px) and (min-width: 0px)').matches) {



    }

    /********** ここから各イベントごとのメソッドを宣言 **********/
    function clickNav() {
        $("#nav_bar").click(function() {
            var has = $("#nav_bar").hasClass("fa-bars");
            $('#nav_bar').toggleClass("fa-bars");
            $('#nav_bar').toggleClass("fa-times");
            if (has) {
                $("nav").css({
                    'transition-duration': '1s',
                    'transform':'translate(0%, 0%)'
                });
                $("nav").bind("oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend",function() {
                    $(".nav_translate").css({
                        'transition-delay': '0.3s',
                        'transition-duration': '0.7s',
                        'transform':'translate(0%, 0%)',
                        '-webkit-transform': 'translate(0%, 0%)'
                    });
                });
            } else {
                $("nav").css({
                    'transition-duration': '1s',
                    'transform':'translate(0%, -100%)'
                });
                $("nav").bind("oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend",function() {
                    $(".nav_translate").css({
                        'transition-delay': '0s',
                        'transition-duration': '0s',
                        'transform': 'translate(0%, -100%)',
                        '-webkit-transform': 'translate(0%, -100%)'
                    });
                });
            }
        });
    }

    function hoverNav() {
         $(".nav_translate").hover(
            function() {
                $(this).parent(".nav_list").children(".front").css({
                    'transition-duration': '1s',
                    'height': '0px'
                });
            },
            function () {
                $(this).parent(".nav_list").children(".front").css({
                    'transition-duration': '1s',
                    'height': '30px'
                });
            }
        );
    }

});