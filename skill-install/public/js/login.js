$(document).ready(function() {

    // *1 ローワーキャメルケースに直す (例: loginButtonPc)
    // *2 window.matchMediaの値に定数を使用する

    if (window.matchMedia('screen and (min-width: 992px)').matches) {

        submit();

    } else if(window.matchMedia('screen and (max-width: 991px) and (min-width: 0px)').matches) {


    }


    function submit() {
            $("#submit").click(function() {

                var email = $("#email").val();
                var password = $("#password").val();

                // $.ajax({
                //     url: '/login',
                //     headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                //     type: 'POST',
                //     dataType: 'json',
                //     data: {email: email, password: password},
                //     processData: false,
                //     contentType: false
                // }).done(function(data) {
                //    console.log("success");
                // });
            });
        }


});