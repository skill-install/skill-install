<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function show(Request $request) {
        return response()->json($request);
    }
}
