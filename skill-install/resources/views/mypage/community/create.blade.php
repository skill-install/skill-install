@extends('layouts.base')

@section('title')

@endsection

@section('css')
    <link rel="stylesheet" href="/css/mypage/community/create/pc.css">
    <!-- <link rel="stylesheet" href="/css/index/phone.css"> -->
    <!-- <link rel="stylesheet" href="/css/index/tablet.css"> -->
@endsection

@section('body_title')
トップページ
@endsection

@section('body')
<div id="create_wrapper">
    <div id="title">コミュニティー作成</div>
    <input id="name" type="text" placeholder="タイトル" autocomplete="off"></input>
    <div class="clear"></div>
    <div id="tag_wrapper">
        <div id="tag_preview"></div>
        <input id="tag" type="text" placeholder="タグ ※Enterキーで追加" autocomplete="off"></input>
    </div>
    <div id="img_wrapper">
        <div id="remove_img">
            <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <label for="img">背景画像を選択(任意)</label>
        <input id="img" type="file"></input>
    </div>
    <select id="category">
        <option id="default" value="" selected>カテゴリーを選択 &#xf107;</option>
        <option class="option" value="外国語">外国語</option>
        <option class="option" value="プログラミング">プログラミング</option>
        <option class="option" value="スポーツ">スポーツ</option>
        <option class="option" value="音楽">音楽</option>
        <option class="option" value="その他">その他</option>
    </select>
    <textarea id="introduction" placeholder="紹介文"></textarea>
    <div id="submit">送信</div>
</div>
@endsection
@section('js')
<script type="text/javascript" src="/js/mypage/community/create.js"></script>
@endsection