<main class="right">
    <img class="dashboard__illustration" src="assets/img/illu.png" alt="Illustration">
            <h1 class="dashboard__title">Dashboard</h1>
            <p class="dashboard__position">dashboard/new-contacts</p>
            <div class="element__user">
                <h2 class="element__user__welcome">Welcome back <?php echo $user['firstname']; ?>!</h2>
                <p class="element__user__describe">You can here add an invoice, a company <br/> and some contacts</p>
            </div>
            <div class="taskscreate">
                <p class="newinvoices">New Contacts</p>
                <div class="underline"></div>
                <form class="newtasksforms" action="" method="" id="registering">
                    <input type="text" class="newtasks" name="firstname" id="firstname" placeholder="Name">
                    <input type="tel" class="newtasks" name="lastname" id="lastname" placeholder="Phone">
                    <input type="mail" class="newtasks" name="mail" id="mail" placeholder="Email">
                    <input type="submit" class="save" value="Save">
                </form>
            </div>
</main>