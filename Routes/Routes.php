<?php

namespace App\Routes;

use Bramus\Router\Router;
use App\Controllers\HomeController;
use App\Controllers\LastAllController;
use App\Controllers\AllInvoicesController;
use App\Controllers\AllContactsController;
use App\Controllers\AllCompaniesController;

$router = new Router();

$router->get('/', function() {
    (new HomeController)->index();
});

$router->run();