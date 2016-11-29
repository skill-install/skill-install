<!doctype html>

<html lang="ja">
<head>
    <meta charset="utf-8">
   <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="/css/style.css">
   <link rel="stylesheet" href="/css/form.css">
   <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
   <script type="text/javascript" src="/js/jquery-2.2.3.min.js"></script>
   @yield('head')
</head>
<body>
   @if (session('flash_message'))
       <div class="flash_message" onclick="this.classList.add('hidden')">{{ session('flash_message') }}</div>
   @endif
   <header>
       <!-- @include('parts.nav') -->
   </header>
   <div id="content">
        <h1>@yield('body_title')</h1>
        @yield('body')
   </div>
   @yield('js')
</body>
</html>