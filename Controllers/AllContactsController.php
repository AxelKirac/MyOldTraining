<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class AllContactsController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        $db = new Query();
        $dbResult = $db->fetchAll("");
        return $this->view('allcontacts', $dbResult);
    } 
}
