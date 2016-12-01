@extends('layouts.base')

@section('title')

@endsection

@section('css')
    <link rel="stylesheet" href="/css/common/pc.css">
    <link rel="stylesheet" href="/css/index/pc.css">
    <link rel="stylesheet" href="/css/nav/pc.css">
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
                <img class="lesson_img" src="/img/test.jpg">
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
        @for($i = 0; $i < 3; $i++)
            <div class="comunity">
                <img class="comunity_img" src="/img/test.jpg">
                <div class="cover">
                    <div class="comunity_info">
                        <div class="follow"><i class="fa fa-users" aria-hidden="true"></i> 729</div>
                        <div class="info_bottom">
                            <div class="comunity_title">秦の楽しいサッカー</div>
                            <div class="category_wrapper">
                                <div class="category">サッカー</div>
                                <div class="category">ミッドフィルダー</div>
                                <div class="category">トップ下</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endfor
    </div>
</div>
@endsection