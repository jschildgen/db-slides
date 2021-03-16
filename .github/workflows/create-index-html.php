#!/usr/bin/env php
<?php
    ob_start();
    include("index.php");
    $var=ob_get_contents();
    ob_end_clean();
    echo $var;
?>
