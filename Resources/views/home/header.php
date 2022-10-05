<header class="home_header">

<div class="top_header">
<h1>COGIP</h1>
    <div class="menu">

        <div class="option">
            <a href="http://localhost:8080">Home</a>
            <a href="http://localhost:8080/invoices">Invoices</a>
            <a href="http://localhost:8080/companies">Companies</a>
            <a href="http://localhost:8080/contacts">Contacts</a>
        </div>
        
        <?php
        if($isConnected) { ?>
            <div class="login">
                <a href="http://localhost:8080/logout">Logout</a>
            </div>
        <?php } else { ?>
            <div class="login">
                <a href="http://localhost:8080/signup">Sign up</a>
                <a href="http://localhost:8080/login">Login</a>
            </div>
        <?php } ?>
    </div>
        
    
</div>
    
    
</header>