<main>
    <div>
        <div class="title">
            <h1>All companies</h1>
        </div>

        <div class="input_search">
            <input type="text">
        </div>

        <section class="table_title table_align_4">
            <div><p>Name</p></div>
            <div><p>TVA</p></div>
            <div><p>Country</p></div>
            <div><p>Type</p></div>
            <div><p>Created at</p></div>
        </section>

        <div>
            <section class="table_content table_align_4">
                <?php
                foreach($companies as $company) { ?>
                    <div><p><?php echo $company['name']; ?></p></div>
                    <div><p><?php echo $company['tva'];?></p></div>
                    <div><p><?php echo $company['country'];?></p></div>
                    <div><p><?php echo $company['created_at'];?></p></div>
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