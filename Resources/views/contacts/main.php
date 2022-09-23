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
            <section class="table_content table_align_5">
            <div><p><?php echo $contacts['name']; ?></p></div>
            <div><p><?php echo $contacts['phone'];?></p></div>
            <div><p><?php echo $contacts['mail']; ?></p></div>
            <div><p><?php echo $contacts['company']; ?></p></div>
            <div><p><?php echo $contacts['created_at'];?></p></div>
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