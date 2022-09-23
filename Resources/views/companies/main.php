<main>
    <div>
        <div class="title">
            <h1>All invoices</h1>
        </div>

        <div class="input_search">
            <input type="text">
        </div>

        <section class="table_title table_align">
            <div><p>Invoices number</p></div>
            <div><p>Dates due</p></div>
            <div><p>Company</p></div>
            <div><p>Created at</p></div>
        </section>

        <div>
            <section class="table_content table_align">
            <div><p><?php echo $companies['name']; ?></p></div>
            <div><p><?php echo $companies['tva'];?></p></div>
            <div><p><?php echo $companies['country'];?></p></div>
            <div><p><?php echo $companies['created_at'];?></p></div>
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