<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommunityController extends Controller
{
    public function index() {
        return view('mypage.community.index');
    }

    public function create() {
        return view('mypage.community.create');
    }

    public function store(Request $request) {

    }
}
