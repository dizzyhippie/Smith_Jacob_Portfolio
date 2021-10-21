<?php

    $result = array();

    function getOneProf($conn, $prof) {
        
        $query = "SELECT * FROM profs WHERE id='".$prof."'";

        // this is the database result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }
    
    // "SELECT name, biopic" will select certain tables, in case I don't need to load everything
    function getAllProfs($conn) {
        $query = "SELECT * FROM profs";

        // this is the database result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }