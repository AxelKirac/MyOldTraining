<?php

namespace App\Routes;

use Bramus\Router\Router;
use App\Controllers\HomeController;
use App\Controllers\LastAllController;

$router = new Router();

$router->get('/', function() {
    (new HomeController)->index();
});

$router->run();