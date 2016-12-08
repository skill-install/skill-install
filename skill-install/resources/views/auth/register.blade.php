@extends('layouts.base')

@section('css')
    <link rel="stylesheet" href="/css/register/pc.css">
    <!-- <link rel="stylesheet" href="/css/index/phone.css"> -->
    <!-- <link rel="stylesheet" href="/css/index/tablet.css"> -->
@endsection

@section('body')
<div id="register_wrapper">
    <span>
        <div id="title">登録する方</div>
        <input id="nickname" type="text" placeholder="ニックネーム" autocomplete="off"></input>
        <input id="email" type="text" placeholder="test@gmail.com" autocomplete="off"></input>
        <input id="password" type="text" placeholder="password" autocomplete="off"></input>
        <div id="submit">送信</div>
    </span>
</div>
@endsection
@section('js')
<script type="text/javascript" src="/js/register.js"></script>
@endsection
