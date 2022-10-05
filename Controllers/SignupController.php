<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;
use Rakit\Validation\Validator;

class SignupController extends Controller
{
    /*
    * return view
    */
    public function index()
    {
        $db = new Query('cogip');
        $result = [];
        return $this->view('signup', $result);
    }
    /*
    * return api
    */
    public function validation()
    {
        $db = new Query('cogip');
        $validator = new Validator;
        $validation = $validator->make($_POST + $_FILES, [
            'firstname' => 'required|min:2|max:50',
            'lastname' => 'required|min:2|max:50',
            'mail' => 'required|email|max:50',
            'password' => 'required|min:6|max:50',
            'passwordconfirm' => 'required|same:password'
        ]);
        $validation->setMessages([
            'firstname:min' => 'firstname-min',
            'firstname:max' => 'firstname-max',
            'firstname:required' => 'firstname-required',
            'lastname:min' => 'lastname-min',
            'lastname:max' => 'lastname-max',
            'lastname:required' => 'lastname-required',
            'mail:max' => 'mail-max',
            'mail:email' => 'mail-valid',
            'password:required' => 'password-required',
            'password:min' => 'password-min',
            'password:max' => 'password-max',
            'passwordconfirm:required' => 'passwordconfirm-required',
            'passwordconfirm:same' => 'passwordconfirm-same'
        ]);
        $validation->validate();
        $result = [];
        if ($validation->fails()) {
            $errors = $validation->errors();
            $result['userData'] = ['valid' => false, 'errors' => $errors->all()];
        } else {
            $insertDatas = $validation->getValidData();
            $mailExist = 'select count(users.email) as mail from users where email=?';
            $mailCount = $db->fetchColumn($mailExist, [
                $insertDatas['mail']
            ]);
            if($mailCount > 0) {
                $result['userData'] = ['valid' => false, 'errors' => ['mail-used']];
            } else {
                $reqUsers = 'INSERT INTO users (first_name, last_name, email, password, role_id) VALUES(?,?,?,?,?)' ;
                $db->execute($reqUsers, [
                    $insertDatas['firstname'],
                    $insertDatas['lastname'],
                    $insertDatas['mail'],
                    $insertDatas['password'],
                    2
                ]);
                $result['userData'] = ['valid' => true];
            }
        }
        return $this->api('signing-up', $result);
    }
}