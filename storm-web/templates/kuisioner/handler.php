<?php

if($_SERVER['REQUEST_METHOD'] == "POST"){
    if(isset($_POST['data'])){
    $data = $_POST['data'];
    file_put_contents("result.txt",$data);
    }

    if(isset($_POST['posisi'])){
        $data = $_POST['posisi'];
        file_put_contents("result.txt",$data);

        try {
            $file = fopen("posisi.txt", "w");
            fwrite($file, $data . "\n");
            fclose($file);
        } catch (\Throwable $th) {
            //throw $th;
        }
       
    }

    if(isset($_POST['data_formulir'])){
        $data = $_POST['data_formulir'];
        file_put_contents("result.txt",$data);
    }

}


?>