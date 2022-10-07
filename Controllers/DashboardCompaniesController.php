<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class DashboardCompaniesController extends Controller {
    /*
     * return view
     */
    public function index()
    {
        $db = new Query('cogip');
        $this->isConnected();
        $result = [
            "user" => $db->fetchAssoc("SELECT first_name as firstname, last_name as lastname FROM users where id=?", [ $_SESSION['id'] ]),
        ];
        return $this->logView('dashboardnewcompanies', $result);
    }
}