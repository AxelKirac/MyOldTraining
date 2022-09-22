<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class AllInvoicesController extends Controller
{
    /*
    * return view
    */
    public function index($pageNbr)
    {
        $nbrPerPage = 10;
        $db = new Query();
        $AllInvoices = $db->fetchAll("SELECT ref, due_date, created_at FROM invoices limit ? offset ?", [
            $nbrPerPage,
            ($pageNbr - 1) * 2
        ]);
        return $this->view('allinvoices', $AllInvoices);
    } 
}
