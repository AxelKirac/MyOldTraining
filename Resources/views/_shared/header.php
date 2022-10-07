<header class="basic_header">
    
<div class="top_header_basic">
    <h1>COGIP</h1>
    <div class="menu_basic">
        <div class="option_basic">
            <a href="./">Home</a>
            <a href="./invoices">Invoices</a>
            <a href="./companies">Companies</a>
            <a href="./contacts">Contacts</a>
        </div>
        <?php
        if($isConnected) { ?>
            <div class="login_basic">
                <a href="./logout">Logout</a>
            </div>
        <?php } else { ?>
            <div class="login_basic">
                <a href="./signup">Sign up</a>
                <a href="./login">Login</a>
            </div>
        <?php } ?>
    </div>
    
</div>
<div class="white_design">

       <img src="assets/img/white_design.svg" alt="decoration">     

    </div>
    
</header>