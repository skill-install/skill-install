@extends('layouts.base')

@section('css')
    <link rel="stylesheet" href="/css/login/pc.css">
    <!-- <link rel="stylesheet" href="/css/index/phone.css"> -->
    <!-- <link rel="stylesheet" href="/css/index/tablet.css"> -->
@endsection

@section('body')
<div id="login_wrapper">
    <span>
        <div id="middle">
            <div id="form">
                <div id="title">ログイン</div>
                <div id="email_input" class="input_wrapper">
                    <div class="error_txt"></div>
                    <input id="email" type="text" placeholder="メールアドレス" autocomplete="off"></input>
                </div>
                <div id="password_input" class="input_wrapper">
                    <div class="error_txt"></div>
                    <input id="password" type="text" placeholder="パスワード" autocomplete="off"></input>
                </div>
                <div id="submit">送信</div>
            </div>
            <div id="alert">
                <div id="alert_title">エラー</div>
                <div id="alert_description">
                    アカウントが存在しません。<br>
                    恐れ入りますが、もう一度やり直してください。
                </div>
            </div>
            <div id="complete">
                <div id="icon">
                    <img src="/img/icon.jpg">
                </div>
                <div id="name">
                    秦 頌光
                </div>
                <div id="user_email">
                    first1freedom@gmail.com
                </div>
                <!-- <div class="clear"></div>
                <div id="follwer">
                    <div id="follwer_title">フォロワー</div>
                    <div id="follwer_number">239</div>
                </div>
                <div id="lesson">
                    <div id="lesson_title">レッスン</div>
                    <div id="lesson_number">24</div>
                </div> -->
            </div>
        </div>
    </span>
</div>
@endsection
@section('js')
<script type="text/javascript" src="/js/login.js"></script>
@endsection