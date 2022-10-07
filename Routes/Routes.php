<?php

namespace App\Routes;

use Bramus\Router\Router;
use App\Controllers\HomeController;
use App\Controllers\InvoicesController;
use App\Controllers\ContactsController;
use App\Controllers\CompaniesController;
use App\Controllers\LoginController;
use App\Controllers\SignupController;
use App\Controllers\DashboardController;
use App\Controllers\LogoutController;
use App\Controllers\Error404Controller;
use App\Controllers\DashboardInvoicesController;

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
// Logout
$router->get('/logout', function() {
    (new LogoutController)->index();
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
$router->set404(function() {
    header('HTTP/1.1 404 Not Found');
    (new Error404Controller)->index();
});
// Logged pages
$router->get('/dashboard', function() {
    (new DashboardController)->index();
});
$router->get('/newinvoices', function() {
    (new DashboardInvoicesController)->index();
});
$router->get('/newcompanies', function() {
    (new DashboardCompaniesController)->index();
});
$router->get('/newcontacts', function() {
    (new DashboardContactsController)->index();
});

$router->run();