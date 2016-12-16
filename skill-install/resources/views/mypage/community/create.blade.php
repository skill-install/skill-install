@extends('layouts.base')

@section('title')

@endsection

@section('css')
    <link rel="stylesheet" href="/css/mypage/comunity/create/pc.css">
    <!-- <link rel="stylesheet" href="/css/index/phone.css"> -->
    <!-- <link rel="stylesheet" href="/css/index/tablet.css"> -->
@endsection

@section('body_title')
トップページ
@endsection

@section('body')
<div id="create_wrapper">
    <input id="title" type="text" placeholder="タイトル" autocomplete="off"></input>
    <select></select>
    <textarea></textarea>
</div>
@endsection
@section('js')
<script type="text/javascript" src="/js/index.js"></script>
@endsection