let projects = {};

function getData(){
    fetch ("./includes/functions.php")
    .then (res => res.json())
    .then(data => {
        console.table(data);
        projects = data;
    })
    .catch(error => console.error(error));
}

export { getData }