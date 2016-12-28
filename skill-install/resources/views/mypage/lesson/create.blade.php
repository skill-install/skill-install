@extends('layouts.base')

@section('title')

@endsection

@section('css')
    <link rel="stylesheet" href="/css/mypage/lesson/create/pc.css">
    <!-- <link rel="stylesheet" href="/css/index/phone.css"> -->
    <!-- <link rel="stylesheet" href="/css/index/tablet.css"> -->
@endsection

@section('body_title')
トップページ
@endsection

@section('body')
<div id="create_wrapper">
    <div id="title">番組制作</div>
    <input id="name" type="text" placeholder="番組名" autocomplete="off"></input>
    <div id="movie_wrapper">
        <label for="movie">動画を選択</label>
        <input id="movie" type="file" accept="video/*"></input>
    </div>
</div>
@endsection
@section('js')
<script type="text/javascript" src="/js/mypage/lesson/create.js"></script>
@endsection