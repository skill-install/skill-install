$(document).ready(function() {

    // *1 ローワーキャメルケースに直す (例: loginButtonPc)
    // *2 window.matchMediaの値に定数を使用する

    if (window.matchMedia('screen and (min-width: 992px)').matches) {

        submit();

    } else if(window.matchMedia('screen and (max-width: 991px) and (min-width: 0px)').matches) {


    }


    function submit() {
        $("#submit").click(function() {

            var nickname = $("#nickname").val();
            var email = $("#email").val();
            var password = $("#password").val();
            alert(nickname);
            alert(email);
            alert(password);

            $.ajax({
                url: '/register',
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                type: 'POST',
                dataType: 'json',
                data: {nickname: nickname, email: email, password: password},
                processData: false,
                contentType: false,
                success: function(data) {
                    alert("success");
                },
                error: function(data, textStatus, errorThrown) {
                    console.log(data);
                    console.log(textStatus);
                    console.log(errorThrown);
                    alert("失敗");
                }
            }).done(function(data) {
                alert('complete');
               console.log("success");
            });
        });
    }


});