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
    * @var $page, $data
    * return api
    */
    public function api($page, $data = [])
    {
        extract($data);
        require_once(__ROOT__.'/Resources/api/'.$page.'.php');
    }
}