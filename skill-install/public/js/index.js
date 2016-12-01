$(document).ready(function() {

    // *1 ローワーキャメルケースに直す (例: loginButtonPc)
    // *2 window.matchMediaの値に定数を使用する

    if (window.matchMedia('screen and (min-width: 992px)').matches) {

        hoverLesson();

    } else if(window.matchMedia('screen and (max-width: 991px) and (min-width: 0px)').matches) {



    }

    /********** ここから各イベントごとのメソッドを宣言 **********/

    function hoverLesson() {
        $(".lesson").hover(
            function() {
                $(this).children(".cover").stop().animate({
                    "opacity": "0"
                }, 500);
            },
            function() {
                $(this).children(".cover").stop().animate({
                    "opacity": "1"
                }, 500);
            }
        );
    }


});