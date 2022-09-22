<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class AllInvoicesController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        $db = new Query();
        $AllInvoices = $db->fetchAll("SELECT ref, due_date, created_at FROM invoices");
        $AllinvoicesResult= [""];
        return $this->view('allinvoices', $dbResult);
    } 
}
