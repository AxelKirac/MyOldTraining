<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class AllCompaniesController extends Controller
{
    /*
    * return view
    */
    public function index($pageNbr)
    {
        $nbrPerPage = 10;
        $db = new Query('cogip');
        $AllCompanies = $db->fetchAll("SELECT name, tva, country, created_at FROM companies limit ? offset ?", [
            $nbrPerPage,
            ($pageNbr - 1) * $nbrPerPage
        ]);
        return $this->view('allcompanies', $AllCompanies);
    } 
}
