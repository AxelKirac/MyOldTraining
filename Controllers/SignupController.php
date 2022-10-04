<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class SignupController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        $db = new Query('cogip');
        $result = [];
        return $this->view('signup', $result);
    }
    /*
    * return api
    */
    public function validation()
    {
        $db = new Query('cogip');
        $result = [];
        return $this->api('signing-up', $result);
    }
}