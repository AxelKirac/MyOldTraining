<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/style.css">
    <title>Document</title>
</head>
<body>
    <section class="left">
        <img src="../asset/img/pic.png" alt="profilePic">
        <p class="firstname">Henry</p>
        <p class="lastname">George</p>
        <div class="underline"></div>
        <div class="element__dashboard">
            <img src="../asset/img/dashboard.png" alt="dashboard">
            <p class="element__dashboard__title">Dashboard</p>
        </div>
        <div class="element__invoices">
            <img src="../asset/img/invoice.png" alt="invoices">
            <p class="element__invoices__title">Invoices</p>
        </div>
        <div class="element__compagnies">
            <img src="../asset/img/companies.png" alt="companies">
            <p class="element__companies__title">Companies</p>
        </div>
        <div class="element__contact">
            <img src="../asset/img/contact.png" alt="contact">
            <p class="element__contact__title">Contacts</p>
        </div>
    </section>
    <main class="right">
        <h1>Dashboard</h1>
        <p class="position">dashboard/</p>
        <div class="element__user">
            <h2 class="element__user__welcome">Welcome back Henry!</h2>
            <p class="element__user__describe">You can here add an invoice, a company <br/> and some contacts</p>
        </div>
       
        <div class="containerall">
        <article class="element__statistics">
            <p class="element__statistics__title">Statistics</p>
            <div class="underline"></div>
            <div class="element__statistics__container"></div>
        </article>
        
        <article class="element__lastinvoices">
            <p class="element__lastinvoices__title">Last invoices</p>
            <div class="underline"></div>
            <div class="element__lastinvoices__container">
                <p class="element__lastinvoices__container__invoicenumber">Invoice Number</p>
                <p class="element__lastinvoices__container__dates">Dates</p>
                <p class="element__lastinvoices__container__company">Company</p>
            </div>
        </article>
        <article class="element__lastcontacts">
            <p class="element__lastcontacts__title">Last Contacts</p>
            <div class="underline"></div>
            <div class="element__lastcontacts__container">
                <p class="element__lastcontacts__container__name">Name</p>
                <p class="element__lastcontacts__container__phone">Phone</p>
                <p class="element__lastcontacts__container__email">Email</p>
            </div>
        </article>
        
        <article class="element__lastcompanies">
            <p class="element__lastcompanies__title">Last Companies</p>
            <div class="underline"></div>
            <div class="element__lastcompanies__container">
                <p class="element__lastcompanies__container__name">Name</p>
                <p class="element__lastcompanies__container__tva">TVA</p>
                <p class="element__lastcompanies__container__country">Country</p>
            </div>
        </article>
       </div>

    </main>
    
</body>
</html>