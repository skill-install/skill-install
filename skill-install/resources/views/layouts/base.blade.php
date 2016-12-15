<!doctype html>

<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="/css/common/pc.css">
    <link rel="stylesheet" href="/css/nav/pc.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/form.css">
    @yield('css')
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <script type="text/javascript" src="/js/jquery-2.1.3.min.js"></script>
    <script type="text/javascript" src="/js/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="/js/jquery.transit.min.js"></script>
    <script type="text/javascript" src="/js/jquery.color.js"></script>
    @yield('head')
</head>
<body>
    @if (session('flash_message'))
        <div class="flash_message" onclick="this.classList.add('hidden')">{{ session('flash_message') }}</div>
    @endif
    @include('parts.nav')
    <div id="content">
        <h1>@yield('body_title')</h1>
        @yield('body')
    </div>
    <script type="text/javascript" src="/js/nav.js"></script>
    @yield('js')
</body>
</html>