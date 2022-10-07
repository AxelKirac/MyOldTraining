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
    public function validation() {
        $db = new Query('cogip');
        $validator = new Validator;
        $validation = $validator->make($_POST + $_FILES, [
            'name' => 'required|min:2|max:50',
            'tva' => 'required|numeric',
            'country' => 'required|min:2|max:50'
        ]);
        $validation->setMessages([
            'name:min' => 'name-min',
            'name:max' => 'name-max',
            'name:required' => 'name-required',
            'tva:required' => 'tva-required',
            'tva:numeric' => 'tva-numeric',
            'country:min' => 'country-min',
            'country:max' => 'country-max',
            'country:required' => 'country-required'
        ]);
        $validation->validate();
        $result = [];
        if ($validation->fails()) {
            $errors = $validation->errors();
            $result['userData'] = ['valid' => false, 'errors' => $errors->all()];
        } else {
            // Validate it e-e
        }
    }
}