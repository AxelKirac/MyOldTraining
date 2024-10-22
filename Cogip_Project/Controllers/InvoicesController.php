<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class InvoicesController extends Controller
{
    /*
    * return view
    */
    public function index($pageNbr)
    {
        if(!isset($pageNbr))
        {
            $pageNbr = 1;
        }
        $nbrPerPage = 10;
        $pageoffset = ($pageNbr - 1) * $nbrPerPage;
        $db = new Query('cogip');
        $AllInvoices = $db->fetchAll("SELECT invoices.ref as ref, invoices.created_at as created_at, invoices.due_date as due_date, companies.name as company FROM invoices JOIN companies ON invoices.id_company = companies.id ORDER BY invoices.created_at DESC LIMIT 5; ");
        return $this->view('invoices', ['invoices' => $AllInvoices]);
    } 
}
