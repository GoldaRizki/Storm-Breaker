<?php

if($_SERVER['REQUEST_METHOD'] == "POST"){
    if(isset($_POST['data'])){
    $data = $_POST['data'];
    file_put_contents("result.txt",$data);
    }

    if(isset($_POST['posisi'])){
        $data = $_POST['posisi'];
        file_put_contents("result.txt",$data);
    }
}


?>