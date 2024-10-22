<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class Error404Controller extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        return $this->view('error404', []);
    } 
}
