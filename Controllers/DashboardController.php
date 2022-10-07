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
        $this->isConnected();
        $result = [
            "user" => $db->fetchAssoc("SELECT first_name as firstname, last_name as lastname FROM users where id=?", [ $_SESSION['id'] ]),
            "invoiceCount" => $db->fetchColumn("SELECT count(id) as invoiceCount FROM invoices"),
            "companyCount" => $db->fetchColumn("SELECT count(id) as companyCount FROM companies"),
            "contactCount" => $db->fetchColumn("SELECT count(id) as contactCount FROM contacts"),
            "contacts"=> $db->fetchAll("SELECT contacts.name as `name`, contacts.phone as phone, contacts.email as email, contacts.created_at as created_at, companies.name as company FROM contacts INNER JOIN companies ON contacts.company_id = companies.id ORDER BY contacts.created_at DESC LIMIT 5; "),
            "invoices"=> $db->fetchAll("SELECT invoices.ref as ref, invoices.due_date as due_date, companies.name as company FROM invoices JOIN companies ON invoices.id_company = companies.id ORDER BY invoices.created_at DESC LIMIT 5; "),
            "companies"=> $db->fetchAll("SELECT companies.name as `name`, companies.tva as tva, companies.country as country, companies.created_at as created_at, types.name as `type` FROM companies INNER JOIN types ON companies.type_id = types.id ORDER BY created_at DESC LIMIT 5; ")
        ];
        return $this->view('dashboard', $result);
    }
}