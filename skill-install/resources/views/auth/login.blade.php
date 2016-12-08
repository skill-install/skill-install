@extends('layouts.base')

@section('css')
    <link rel="stylesheet" href="/css/login/pc.css">
    <!-- <link rel="stylesheet" href="/css/index/phone.css"> -->
    <!-- <link rel="stylesheet" href="/css/index/tablet.css"> -->
@endsection

@section('body')
<div id="login_wrapper">
    <span>
        <div id="title">ログイン</div>
        <input id="email" type="text" placeholder="test@gmail.com" autocomplete="off"></input>
        <input id="password" type="text" placeholder="password" autocomplete="off"></input>
        <div id="submit">送信</div>
    </span>
</div>
@endsection
@section('js')
<script type="text/javascript" src="/js/login.js"></script>
@endsection