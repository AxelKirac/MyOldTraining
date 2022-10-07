<main>
    <div class="section_align">
        <div class="title_invoices">
            <h1 class="invoices">All companies</h1>
        </div>

        <div class="input_search_invoices">
            <input type="text" class="invoices_input_search" placeholder="Search company">
        </div>

        <section class="table_title table_align_5">
            <div><p>Name</p></div>
            <div><p>TVA</p></div>
            <div><p>Country</p></div>
            <div><p>Type</p></div>
            <div><p>Created at</p></div>
        </section>

        <div>
           <section class="table_content_5 table_align_5">
                <?php
                foreach($companies as $companie) { ?>
                    <div><p><?php echo $companie['name']; ?></p></div>
                    <div><p><?php echo $companie['tva']; ?></p></div>
                    <div><p><?php echo $companie['country']; ?></p></div>
                    <div><p><?php echo $companie['type']; ?></p></div>
                    <div><p><?php echo $companie['created_at']; ?></p></div>
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