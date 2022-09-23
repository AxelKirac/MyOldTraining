<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class LoginController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        $db = new Query('cogip');
        $result = [];
        return $this->view('login', $result);
    }
}