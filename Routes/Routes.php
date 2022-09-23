<?php

namespace App\Routes;

use Bramus\Router\Router;
use App\Controllers\HomeController;
use App\Controllers\InvoicesController;
use App\Controllers\ContactsController;
use App\Controllers\CompaniesController;
use App\Controllers\LoginController;
use App\Controllers\SignupController;

$router = new Router();

$router->get('/', function() {
    (new HomeController)->index();
});
$router->get('/login', function() {
    (new LoginController)->index();
});
$router->get('/signup', function() {
    (new SignupController)->index();
});
$router->get('/invoices', function() {
    (new InvoicesController)->index(1);
});
$router->get('/invoices/(\d+)', function($pageNbr) {
    (new InvoicesController)->index($pageNbr);
});
$router->get('/contacts', function() {
    (new ContactsController)->index(1);
});
$router->get('/contacts/(\d+)', function($pageNbr) {
    (new ContactsController)->index($pageNbr);
});
$router->get('/companies', function() {
    (new CompaniesController)->index(1);
});
$router->get('/companies/(\d+)', function($pageNbr) {
    (new CompaniesController)->index($pageNbr);
});

$router->run();