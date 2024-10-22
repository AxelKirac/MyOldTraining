<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class CompaniesController extends Controller
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
        $AllCompanies = $db->fetchAll("SELECT companies.name as `name`, companies.tva as tva, companies.country as country, companies.created_at as created_at, types.name as `type` FROM companies INNER JOIN types ON companies.type_id = types.id ORDER BY created_at DESC LIMIT $nbrPerPage offset $pageoffset;");
        return $this->view('companies', ['companies' => $AllCompanies]);
    } 
}
