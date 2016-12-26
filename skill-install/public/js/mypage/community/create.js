$(document).ready(function() {

    // *1 ローワーキャメルケースに直す (例: loginButtonPc)
    // *2 window.matchMediaの値に定数を使用する

    // フォームデータクラスをインスタンス化
    var formData = new FormData();

    // ファイルリーダークラスをインスタンス化
    var fileReader = new FileReader();


    if (window.matchMedia('screen and (min-width: 992px)').matches) {

        addTag();
        hoverTag();
        closeTag();
        uploadImg();
        hoverImg();
        removeImg();
        selectColor();
        clickSubmit();

    } else if(window.matchMedia('screen and (max-width: 991px) and (min-width: 0px)').matches) {



    }

    /********** ここから各イベントごとのメソッドを宣言 **********/

    function addTag() {
        $("#tag").keypress(function(event) {
            if(event.keyCode === 13 && !event.shiftKey) {
            // シフトキーなしでエンターキーを押した場合
                var tag = $(this).val();
                if ('' !== tag) {
                     $("#tag_preview").append(
                        '<div class="tag_wrapper"><div class="tag_preview">' + tag + '</div><div class="tag_close">' + tag + '</div></div>'
                    );
                    $("#tag").val("");
                }
            }
        });
    }

    function hoverTag() {
        $("#tag_preview").on({
            'mouseenter': function () {
                $(this).animate({
                    opacity: '0'
                }, 100);
            },
             'mouseleave': function () {
                $(this).animate({
                    opacity: '1'
                }, 100);
            }
        }, ".tag_preview");
    }

    function closeTag() {
        $("#tag_preview").on({
            'click': function() {
                $(this).parent(".tag_wrapper").remove();
            }
        },  ".tag_preview");
    }

    function uploadImg() {
        $('#img').on('change', function() {
            console.log("test");
            // .previewの中に入っているimgタグをremoveする
            $("#img_wrapper").children('img').remove();
            console.log($(this).val());
            if ('' !== $(this).val()) {
            // ファイルが選択されている場合

                // formDataにデータを追加
                formData.append('img', $(this).prop('files')[0]);
                fileReader.onload = function() {
                // ファイル読み込み完了時
                // 新しい画像をappendする
                $("#img_wrapper").append('<img id="img_preview" src="' + fileReader.result + '">');
                $("#remove_img").css({'display': 'block'});

                }
                // 画像読み込み実行
                fileReader.readAsDataURL($(this).prop('files')[0]);

            }

        });
    }

    function hoverImg() {
        $("#create_wrapper").on({
            'mouseenter': function () {
                $("#remove_img").stop().animate({opacity: '1'}, 700);
            },
             'mouseleave': function () {
                $("#remove_img").stop().animate({opacity: '0'}, 700);
            }
        }, "#img_wrapper");
    }

    function removeImg() {
        $("#remove_img").click(function() {
            $("#img_preview, #remove_img").animate({
                opacity: '0'
            }, 1000, function() {
                $("#img_preview").remove();
                $("#remove_img").css({'display': 'none'});
                formData.delete('img');
                $("#img").val('');
            });
        });
    }

    function selectColor() {
        $("#category").change(function() {
            var category = $("#category option:selected").val();
            if ("" === category) {
                $("#category").css("color", "#58656F");
            } else {
                $("#category").css("color", "#fff");
            }
        });
    }

    function clickSubmit() {
        $("#submit").click(function() {

            var error = {
                name: '',
                tag: '',
                category: '',
                introduction: ''
            };

            var tagArr = {};

            // コミュニティーの名前チェック
            check('name', $('#name'));

            // タグチェック
            var tag = $(".tag_wrapper").length;
            if (tag) {
            // タグが存在する場合
                for (var i = 1; i <= tag; i++) {
                    tagArr[i] = $(".tag_wrapper:nth-child(" + i + ")").children(".tag_preview").text();
                }
                formData.append('tag', tagArr);
            }

            // カテゴリーチェック
            check('category', $('#category'));

            // 紹介文チェック
            check('introduction', $('#introduction'));

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
                for (var item of formData) {
                    console.log(item);
                }
                // $.ajax({
                //     url: '/create',
                //     headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                //     type: 'POST',
                //     data: data,
                //     dataType: 'json',
                //     success: function(data) {
                //         console.log("success");
                //         console.log(data);
                //     },
                //     error: function(data, textStatus, errorThrown) {
                //         console.log(data);
                //         console.log(textStatus);
                //         console.log(errorThrown);
                //     }
                // }).done(function(data) {
                //     console.log("complete");
                // });
            } else {
            // 入力にエラーがある場合

                jQuery.each(errorShake, function(k,v) {
                    setTimeout(function() {
                        $("#" + v).css("animation-name", "none");
                    }, 500);
                    $("#" + v).css("animation", ".5s shake");
                });
                for (var del in error) {
                    formData.delete(del);
                }

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
                formData.append(key, selector.val());
                if (!formData.get(key) || '' === formData.get(key)) {
                // 値がないとき
                    // エラー1: 空
                    error[key] = 1;
                } else {
                // 値があるとき
                    if (reg && '' !== reg) {
                        // 正規表現にマッチしているかどうか
                        var match = formData.get(key).match(reg);
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