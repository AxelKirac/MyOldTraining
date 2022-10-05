<header class="home_header">

<div class="top_header">
<h1>COGIP</h1>
    <div class="menu">

        <div class="option">
            <a href="./">Home</a>
            <a href="./invoices">Invoices</a>
            <a href="./companies">Companies</a>
            <a href="./contacts">Contacts</a>
        </div>
        
        <?php
        if($isConnected) { ?>
            <div class="login">
                <a href="./logout">Logout</a>
            </div>
        <?php } else { ?>
            <div class="login">
                <a href="./signup">Sign up</a>
                <a href="./login">Login</a>
            </div>
        <?php } ?>
    </div>
        
    
</div>
    
    
</header>