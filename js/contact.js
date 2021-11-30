import { SendMail } from "./components/mailer.js";

(() => {
    let submit = document.querySelector("#submit");

    //function to handle failures
    function mailFailure(result){

        console.table(result);
        alert(result.message);
    }

    //function for successful mail
    function mailSuccess(result){
        console.table(result);
        alert(result.message);
    }

    //Handling the data of mail
    function processMail(event){
        //This will override the typical submit behaviour
        event.preventDefault();

        SendMail(this.parentNode)
            .then(data => mailSuccess(data))
            .catch(err => mailFailure(err));
    }

    submit.addEventListener("click", processMail);

})();