
<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class LastAllController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        $db = new Query('cogip');
        $invoicesResult=$db->fetchAll("SELECT ref, created_at FROM invoices ORDER BY created_at DESC LIMIT 5");
        $result = ["invoices"=>$invoicesResult];
        $contactsResult=$db->fetchAll("SELECT name, phone, email, created_at FROM contacts ORDER BY created_at DESC LIMIT 5");
        $result = ["contacts"=>$contactsResult];
        $companiesResult=$db->fetchAll("SELECT name, tva, country, created_at FROM companies ORDER BY created_at DESC LIMIT 5");
        $result = ["companies"=>$companiesResult];
        return $this->view('welcome', $result);
    } 
}
