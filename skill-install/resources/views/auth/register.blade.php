@extends('layouts.base')

@section('css')
    <link rel="stylesheet" href="/css/register/pc.css">
    <!-- <link rel="stylesheet" href="/css/index/phone.css"> -->
    <!-- <link rel="stylesheet" href="/css/index/tablet.css"> -->
@endsection

@section('body')
<div id="register_wrapper">
    <span>
        <div id="middle">
            <div id="form">
                <div id="title">登録する方</div>
                <input id="nickname" type="text" placeholder="ニックネーム" autocomplete="off"></input>
                <input id="email" type="text" placeholder="test@gmail.com" autocomplete="off"></input>
                <input id="password" type="password" placeholder="パスワード(半角英数字6文字以上)" autocomplete="off"></input>
                <input id="password_confirmation" type="password" placeholder="パスワード(確認用)" autocomplete="off"></input>
                <div id="submit">送信</div>
            </div>
            <div id="alert">
                <div id="alert_title">エラー</div>
                <div id="alert_description">
                    すでにアカウントが存在します。恐れ入りますが、もう一度やり直してください。
                </div>
            </div>
            <div id="complete">
                <div id="complete_title">登録完了</div>
                <div id="register_email">first1freedom@gmail.com</div>
                <div id="complete_description">
                    ご登録頂きありがとうございます。上記に確認メールをお送りしましたのでご確認ください。
                </div>
            </div>
        </div>
    </span>
</div>
@endsection
@section('js')
<script type="text/javascript" src="/js/register.js"></script>
@endsection
