<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;

class DashboardContactsController extends Controller {
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
        return $this->logView('dashboardnewcontacts', $result);
    }
    public function validation() {
        $db = new Query('cogip');
        $validator = new Validator;
        $validation = $validator->make($_POST + $_FILES, [
            'name' => 'required|min:2|max:50',
            'phone' => 'required|regex:/^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g',
            'mail' => 'required|email'
        ]);
        $validation->setMessages([
            'name:min' => 'name-min',
            'name:max' => 'name-max',
            'name:required' => 'name-required',
            'phone:required' => 'phone-required',
            'phone:regex' => 'phone-invalid',
            'mail:email' => 'mail-invalid',
            'mail:required' => 'mail-required'
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