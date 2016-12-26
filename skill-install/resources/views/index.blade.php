@extends('layouts.base')

@section('title')

@endsection

@section('css')
    <link rel="stylesheet" href="/css/index/pc.css">
    <!-- <link rel="stylesheet" href="/css/index/phone.css"> -->
    <!-- <link rel="stylesheet" href="/css/index/tablet.css"> -->
@endsection

@section('body_title')
トップページ
@endsection

@section('body')
<div id="wrapper">
    <div class="list_title">無料動画</div>
    <div id="free_video">
        @for($i = 0; $i < 6; $i++)
            <div class="lesson">
                <img class="lesson_img" src="/img/kick.jpg">
                <div class="cover">
                    <div class="lesson_info">
                        <div class="new_lesson">NEW</div>
                        <div class="favorite"><i class="fa fa-heart-o" aria-hidden="true"></i> 4980</div>
                        <div class="info_bottom">
                            <div class="lesson_title">フリーキックの蹴り方</div>
                            <div class="category_wrapper">
                                <div class="category">サッカー</div>
                                <div class="category">ミッドフィルダー</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endfor
    </div>
    <!-- コミュニティー一覧 -->
    <div class="list_title">新着コミュニティー</div>
    <div id="new_comunity">
        @for($i = 0; $i < 6; $i++)
            <div class="comunity">
                <div class="comunity_title">楽しいサッカーvillage</div>
                <div class="category_wrapper">
                    <div class="category">サッカー</div>
                    <div class="category">ミッドフィルダー</div>
                </div>
                <div class="comunity_lesson_wrapper">
                    <div class="comunity_lesson">
                        <img src="/img/cross.jpg">
                        <div class="comunity_lesson_title">クロスのポイント</div>
                    </div>
                    <div class="comunity_lesson">
                        <img src="/img/pass.jpg">
                        <div class="comunity_lesson_title">バルサのパス徹底解説</div>
                    </div>
                    <div class="comunity_lesson">
                        <img src="/img/kick.jpg">
                        <div class="comunity_lesson_title">フリーキックの蹴り方</div>
                    </div>
                </div>
            </div>
        @endfor
    </div>
</div>
@endsection
@section('js')
<script type="text/javascript" src="/js/index.js"></script>
@endsection