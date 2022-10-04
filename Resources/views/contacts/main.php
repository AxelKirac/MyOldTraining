<main>
    <div>
        <div class="title">
            <h1>All contacts</h1>
        </div>

        <div class="input_search">
            <input type="text">
        </div>

        <section class="table_title table_align_5">
            <div><p>Name</p></div>
            <div><p>Phone</p></div>
            <div><p>Mail</p></div>
            <div><p>Company</p></div>
            <div><p>Created at</p></div>
        </section>

        <div>
           <section class="table_content_5 table_align_5">
                <?php
                foreach($contacts as $contact) { ?>
                    <div><p><?php echo $contact['name']; ?></p></div>
                    <div><p><?php echo $contact['phone']; ?></p></div>
                    <div><p><?php echo $contact['email']; ?></p></div>
                    <div><p><?php echo $contact['company']; ?></p></div>
                    <div><p><?php echo $contact['created_at']; ?></p></div>
                <?php
                }
                ?>
           </section>
       </div>

        <div class="navigateur_pages">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
        </div>

    </div>
</main>