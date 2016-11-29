@extends('layouts.base')

@section('title')

@endsection

@section('css')
    <link rel="stylesheet" href="/css/index_pc.css">
    <!-- <link rel="stylesheet" href="/css/index_phone.css"> -->
    <!-- <link rel="stylesheet" href="/css/index_tablet.css"> -->
@endsection

@section('body_title')
トップページ
@endsection

@section('body')
<div id="wrapper">
    <div id="free_video">
        <div class="video_wrapper">
            <div class="thumbnail">
                <img class="video_img" src="">
                <div>
                    <img class="creator_img" src="">
                    <div class="video_title"></div>
                    <div class="creator_name"></div>
                </div>
            </div>
            <div class="sub_info">
                <div class="video_view"></div>
                <div class="membership"></div>
                <div class="category"></div>
            </div>
        </div>
    </div>
    <div id="new_video">
        
    </div>
    <div id="repeat_video">
        
    </div>
</div>
@endsection