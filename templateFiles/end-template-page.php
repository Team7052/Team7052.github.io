<?php 
    if(session_id() == '' || !isset($_SESSION)) {
        // session isn't started
        session_name('navigationSession');
        session_start();
    }
?>
</div>
</div>
</body>
<script type="text/javascript" src="../scripts/switchSubsections.js"></script>
<?php include("footer.html"); ?>
