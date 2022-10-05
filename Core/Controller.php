<?php 

namespace App\Core;

class Controller 
{
    /*
    * @var $view, $data
    * return view
    */
    public function view($view, $data = [])
    {
        extract($data); 
        require_once(__ROOT__.'/Resources/views/'.$view.'.php');
    }
    /*
    * @var $view, $data
    * return view
    */
    public function logView($view, $data = [])
    {
        session_start();
        if (!isset($_SESSION['mail']) || !isset($_SESSION['id'])) {
            session_destroy();
            header('Location: ../login');
            die();
        }
        else
        {
            extract($data);
            require_once(__ROOT__.'/Resources/views/'.$view.'.php');
        }
    }
    /*
    * @var $page, $data
    * return api
    */
    public function api($page, $data = [])
    {
        extract($data);
        require_once(__ROOT__.'/Resources/api/'.$page.'.php');
    }
}