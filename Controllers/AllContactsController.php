<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class AllContactsController extends Controller
{
    /*
    * return view
    */
    public function index($pageNbr)
    {
        $nbrPerPage = 10;
        $db = new Query();
        $AllContacts = $db->fetchAll("SELECT name, phone, mail, created_at FROM contacts limit ? offset ?",
         [            
            $nbrPerPage,
            ($pageNbr - 1) * $nbrPerPage
        ]);
        return $this->view('allcontacts', $AllContacts);
    } 
}
