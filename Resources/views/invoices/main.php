<main>
    <div>
        <div class="title">
            <h1>All invoices</h1>
        </div>

        <div class="input_search">
            <input type="text">
        </div>

        <section class="table_title table_align_4">
            <div><p>Invoices number</p></div>
            <div><p>Due dates</p></div>
            <div><p>Company</p></div>
            <div><p>Created at</p></div>
        </section>

        <div>
            <section class="table_content table_align_4">
            <div><p><?php echo $invoice['ref']; ?></p></div>
            <div><p><?php echo $invoice['due_date'];?></p></div>
            <div><p><?php echo $invoice['company']; ?></p></div>
            <div><p><?php echo $invoice['created_at'];?></p></div>
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