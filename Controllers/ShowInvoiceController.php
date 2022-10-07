<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class ShowInvoiceController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        return $this->view('show_invoice', []);
    } 
}
