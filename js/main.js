console.log("Hello");
(() => {
    console.log("Hello");
    function getData(){
        console.log("Hello");
        fetch ("./includes/functions.php")
        .then (res => res.json())
        .then(data => {
            console.table(data);
        })
        .catch(error => console.error(error));
        
    }

    getData();


})()