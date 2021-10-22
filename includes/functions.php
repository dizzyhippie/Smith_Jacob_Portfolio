<?php
    include("connect.php");
    
    $query = "SELECT * FROM tbl_projects";

    $runQuery = $pdo->query($query);

    $result = array();

    while($row = $runQuery-> fetchALL (PDO::FETCH_ASSOC)){
        $result[] = $row;
    }

    echo (json_encode($result));