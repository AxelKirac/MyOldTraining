<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\Query;
use Rakit\Validation\Validator;

class LoginController extends Controller
{
    /*
     * return view
     */
    public function index()
    {
        $db = new Query('cogip');
        $result = [];
        return $this->view('login', $result);
    }
    /*
     * return api
     */
    public function validation()
    {
        $db = new Query('cogip');
        $validator = new Validator;
        $validation = $validator->make($_POST + $_FILES, [
            'mail' => 'required|email|max:50',
            'password' => 'required|min:6|max:50'
        ]);
        $validation->setMessages([
            'mail:max' => 'mail-max',
            'mail:email' => 'mail-valid',
            'password:required' => 'password-required',
            'password:min' => 'password-min',
            'password:max' => 'password-max'
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
            if($mailCount > 0) { // mail exist
                $checkLogin = 'select id from users where email=? and password=?';
                $id = $db->fetchColumn($checkLogin, [
                    $insertDatas['mail'],
                    $insertDatas['password']
                ]);
                $userExist = isset($id);
                if($userExist) {
                    $result['userData'] = ['valid' => $userExist];
                    session_start();
                    $_SESSION['mail'] = $insertDatas['mail'];
                    $_SESSION['id'] = $id;
                } else {
                    $result['userData'] = ['valid' => $userExist, 'errors' => ['password-error']];
                }
            }
            else
            {
                $result['userData'] = ['valid' => false, 'errors' => ['mail-error']];
            }            
        }
        return $this->api('login-in', $result);
    }
}