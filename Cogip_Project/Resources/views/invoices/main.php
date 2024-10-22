<main>
    <div class="section_align">
        <div class="title_invoices">
            <h1 class="invoices">All invoices</h1>
        </div>

        <div class="input_search_invoices">
            <input type="text" class="invoices_input_search" placeholder="Search invoices">
        </div>

        <section class="table_title table_align_4">
            <div><p>Invoices number</p></div>
            <div><p>Due dates</p></div>
            <div><p>Company</p></div>
            <div><p>Created at</p></div>
        </section>

        <div>
            <section class="table_content_4 table_align_4">
                <?php
                foreach($invoices as $invoice) { ?>
                    <div><p><?php echo $invoice['ref']; ?></p></div>
                    <div><p><?php echo $invoice['due_date']; ?></p></div>
                    <div><p><?php echo $invoice['company']; ?></p></div>
                    <div><p><?php echo $invoice['created_at']; ?></p></div>
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