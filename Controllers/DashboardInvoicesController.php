<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class DashboardInvoicesController extends Controller {
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
        return $this->logView('dashboardnewinvoices', $result);
    }
    public function validation() {
        $db = new Query('cogip');
        $validator = new Validator;
        $validation = $validator->make($_POST + $_FILES, [
            'reference' => 'required|min:2|max:50',
            'price' => 'required|numeric',
            'company' => 'required|min:2|max:50'
        ]);
        $validation->setMessages([
            'reference:min' => 'reference-min',
            'reference:max' => 'reference-max',
            'reference:required' => 'reference-required',
            'price:required' => 'price-required',
            'price:numeric' => 'price-numeric',
            'company:min' => 'company-min',
            'company:max' => 'company-max',
            'company:required' => 'company-required'
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