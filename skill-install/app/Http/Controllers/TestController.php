<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function show(Request $request) {
        $request = json_encode($request);
        return $request;
    }
}
