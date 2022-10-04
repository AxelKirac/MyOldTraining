<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class ContactsController extends Controller
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
        $AllContacts = $db->fetchAll("SELECT contacts.name as `name`, contacts.phone as phone, contacts.email as email, contacts.created_at as created_at, companies.name as company FROM contacts INNER JOIN companies ON contacts.company_id = companies.id ORDER BY contacts.created_at DESC LIMIT 5; ");
        return $this->view('contacts', ['contacts' => $AllContacts]);
    } 
}
