<?php
    // storeresults in a variable
    $result = array();

    // if a user passes an ID via a query string (?id=1)
    // then we should retrieve the row of data that matches and pass it back to the app
    function getPortfolioData($conn, $tbl_design) {
        if (is_null($tbl_design)){
            $query = "SELECT * FROM tbl_design";
        } else{
                $query = "SELECT * FROM tbl_design WHERE id='".$tbl_design."'";
            }
                    
        // this is the database result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }