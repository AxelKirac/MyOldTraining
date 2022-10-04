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
// Home
$router->get('/', function() {
    (new HomeController)->index();
});
// Sign up
$router->get('/signup', function() {
    (new SignupController)->index();
});
$router->post('/register', function() {
    (new SignupController)->validation();
});
// Login
$router->get('/login', function() {
    (new LoginController)->index();
});
$router->post('/connect', function() {
    (new LoginController)->validation();
});
// Pages
$router->get('/invoices(/\d+)?', function($pageNbr) {
    (new InvoicesController)->index($pageNbr);
});
$router->get('/contacts(/\d+)?', function($pageNbr) {
    (new ContactsController)->index($pageNbr);
});
$router->get('/companies(/\d+)?', function($pageNbr) {
    (new CompaniesController)->index($pageNbr);
});

$router->run();