$(document).ready(function() {

    // *1 ローワーキャメルケースに直す (例: loginButtonPc)
    // *2 window.matchMediaの値に定数を使用する

    if (window.matchMedia('screen and (min-width: 992px)').matches) {

        submit();

    } else if(window.matchMedia('screen and (max-width: 991px) and (min-width: 0px)').matches) {


    }


    function submit() {
        $("#submit").click(function() {
            var data = {
                email: '',
                password: ''
            };

            var error = {
                email: '',
                password: ''
            };

            var name = {
                email: 'メールアドレス',
                password: 'パスワード'
            };

            // メールアドレスのチェック
            check('email', $('#email'), /^(?:[^\@]+?@[A-Za-z0-9_\.\-]+\.+[A-Za-z\.\-\_]+)*$/);

            // パスワードのチェック
            check('password', $('#password'), /^[a-zA-Z0-9]{6,}$/);

            //
            var errorShake = [];
            // エラーがある項目の数
            var i = 0;
            for(var key in error) {
                // 連想配列errorを全てチェック
                if ('' !== error[key]) {
                // エラーがあったとき
                    // エラー数を1カウント
                    ++i;
                    errorShake.push(key);
                }
            }


            if (0 === i) {
            // エラーがない
                console.log(data);
                $.ajax({
                    url: '/login',
                    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                    type: 'POST',
                    data: data,
                    dataType: 'json',
                    success: function(data) {
                        console.log("success");
                        console.log(data);

                        // ログイン完了
                        $("#form").css({
                            'transition-duration': '1.5s',
                            'transform':'translateZ(40px)',
                            '-webkit-transform': 'translateZ(40px)',
                            'opacity': '0'
                        });
                        $("#form").bind('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd',function() {
                            $("#form").css("display", "none");
                            $("#complete").css({
                                'transition-delay': '0.5s',
                                'transition-duration': '2s',
                                'height': '252px',
                                'padding': '40px 20px'
                            });
                            $("#complete").bind('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd',function() {
                                $("#icon,#name,#user_email").css({
                                    'transition-delay': '0.5s',
                                    'transition-duration': '3s',
                                    'opacity': '1'
                                });
                            });
                        });

                    },
                    error: function(data, textStatus, errorThrown) {
                        console.log(data);
                        console.log(textStatus);
                        console.log(errorThrown);

                        if (JSON.parse(data.responseText).email && JSON.parse(data.responseText).email[0] && '' !== JSON.parse(data.responseText).email[0]) {

                            // すでにアカウントが存在した場合
                            setTimeout(function() {
                                $("#form").animate({
                                    display: 'block'
                                }, 1000);
                                $("#alert_title, #alert_description").css({
                                    'transition-delay': '0s',
                                    'transition-duration': '0s',
                                    'opacity': '1'
                                });
                                $("#alert").css({
                                    'display': 'none',
                                    'transition-delay': '0s',
                                    'transition-duration': '0s',
                                    'transform':'translateZ(60px)',
                                    '-webkit-transform': 'translateZ(60px)',
                                    'padding': '20px 20px 0',
                                    'height': '128.2px',
                                    'opacity': '0'
                                });
                            }, 8000);
                            $("#form").fadeOut("1000", function() {
                                $("#alert").fadeIn("10", function() {
                                    $("#alert").css({
                                        'transition-delay': '0.5s',
                                        'transition-duration': '2s',
                                        'transform':'translateZ(0px)',
                                        '-webkit-transform': 'translateZ(0px)',
                                        'opacity': '1'
                                    });
                                    $("#alert").bind('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd',function(){
                                        $("#alert_title, #alert_description").css({
                                            'transition-delay': '1.5s',
                                            'transition-duration': '1s',
                                            'opacity': '0'
                                        });
                                        $("#alert_title, #alert_description").bind('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd',function(){
                                            $("#alert").css({
                                                'transition-delay': '0.5s',
                                                'transition-duration': '1s',
                                                'padding': '0px',
                                                'height': '0px'
                                            });
                                        });
                                    });
                                });
                            });
                        }
                    }
                }).done(function(data) {
                    console.log("complete");
                });
            } else {
            // 入力にエラーがある場合

                jQuery.each(errorShake, function(k,v) {
                    setTimeout(function() {
                        $("#" + v).css("animation-name", "none");
                        // if (1 == error[v]) {
                        //     $("#" + v + "_input").children(".error_txt").text(v + "が未入力です");
                        // } else if (2 == error[v]) {
                        //     $("#" + v + "_input").children(".error_txt").text(v + "の形式が違います");
                        // }
                        // $("#" + v + "_input").children(".error_txt").animate({
                        //     opacity: '1'
                        // }, 1000);
                    }, 500);
                    $("#" + v).css("animation", ".5s shake");
                });

            }

            /*
             * チェックメソッド
             * 値をポスト送信用の変数に格納して、エラーを返す(data[key]に値をセット、error[key]が１のときは値がない、2のときは正規表現にマッチしない)
             * @param     string    key         連想配列data, errorに当てはまるキー名
             * @param     string    selector    値が格納されているセレクタ
             * @param     regexp    reg         照合したい正規表現を指定(なければ値の存在有無だけをチェック)
             * @return    void
             */
            function check(key, selector, reg) {
                // 値を取得
                data[key] = selector.val();
                if ('' === data[key] || null === data[key]) {
                // 値がないとき
                    // エラー1: 空
                    error[key] = 1;
                } else {
                // 値があるとき
                    if ('' !== reg && null !== reg) {
                        // 正規表現にマッチしているかどうか
                        var match = data[key].match(reg);
                        if (!match) {
                        // 正規表現にマッチしていないとき
                            // エラー2: 表記ミス
                            error[key] = 2;
                        }
                    }
                }
            }

        });
    }

});