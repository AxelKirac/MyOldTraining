<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class HomeController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        $db = new Query('cogip');
        $invoicesResult=$db->fetchAll("SELECT invoices.ref as ref, invoices.created_at as created_at, invoices.due_date as due_date, companies.name as company FROM invoices JOIN companies ON invoices.id_company = companies.id ORDER BY invoices.created_at DESC LIMIT 5; ");

        $contactsResult=$db->fetchAll("SELECT contacts.name as `name`, contacts.phone as phone, contacts.email as email, contacts.created_at as created_at, companies.name as company FROM contacts INNER JOIN companies ON contacts.company_id = companies.id ORDER BY contacts.created_at DESC LIMIT 5; ");

        $companiesResult=$db->fetchAll("SELECT companies.name as `name`, companies.tva as tva, companies.country as country, companies.created_at as created_at, types.name as `type` FROM companies INNER JOIN types ON companies.type_id = types.id ORDER BY created_at DESC LIMIT 5; ");
        
        $result = [
            "contacts"=>$contactsResult,
            "invoices"=>$invoicesResult,
            "companies"=>$companiesResult
        ];
        return $this->view('home', $result);
    }
}