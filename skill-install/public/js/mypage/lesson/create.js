$(document).ready(function() {

    // *1 ローワーキャメルケースに直す (例: loginButtonPc)
    // *2 window.matchMediaの値に定数を使用する

    // フォームデータクラスをインスタンス化
    var formData = new FormData();

    // ファイルリーダークラスをインスタンス化
    var fileReader = new FileReader();


    if (window.matchMedia('screen and (min-width: 992px)').matches) {

        uploadMovie();
        test();

    } else if(window.matchMedia('screen and (max-width: 991px) and (min-width: 0px)').matches) {



    }

    /********** ここから各イベントごとのメソッドを宣言 **********/

    function uploadMovie() {
        $('#movie').on('change', function() {
            console.log("test");
            // .previewの中に入っているmovieタグをremoveする
            $("#movie_wrapper").children('movie').remove();
            console.log($(this).val());
            if ('' !== $(this).val()) {
            // ファイルが選択されている場合

                // formDataにデータを追加
                formData.append('movie', $(this).prop('files')[0]);
                fileReader.onload = function() {
                // ファイル読み込み完了時
                // 新しい画像をappendする
                $("#movie_wrapper").append('<video id="movie_preview" preload="auto" src="' + fileReader.result + '" controls>');
                console.log($("video").currentTime);
                // $("#remove_movie").css({'display': 'block'});

                }
                // 画像読み込み実行
                fileReader.readAsDataURL($(this).prop('files')[0]);

            }

        });
    }

    function test() {
        $("video").on('timeupdate', function() {
            console.log("tes");
            if ($(this).currentTime >= 10 ) {
                alert("test");
                // 10秒以上経過した際の処理
                // 動画の長さは$(this)[0].duration
            }
        });
    }

});