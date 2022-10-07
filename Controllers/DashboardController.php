<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class DashboardController extends Controller {
    /*
     * return view
     */
    public function index()
    {
        $db = new Query('cogip');
        $iCount = $db->fetchColumn("SELECT count(id) as invoiceCount FROM invoices");
        $comCount = $db->fetchColumn("SELECT count(id) as companyCount FROM companies");
        $conCount = $db->fetchColumn("SELECT count(id) as contactCount FROM contacts");

        $result = [
            "invoiceCount" => $iCount,
            "companyCount" => $comCount,
            "contactCount" => $conCount
        ];


        return $this->logView('dashboard', $result);
    }
}