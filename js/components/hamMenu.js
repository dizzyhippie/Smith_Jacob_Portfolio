(() => {
    let hamburgerButton = document.querySelector("#hamButton"),
        hamburgerContainer = document.querySelector("#hamContainer");

    function hamburgerActive(){
        hamburgerButton.classList.toggle("clicked");
        hamburgerContainer.classList.toggle("slide");    
    }

    hamburgerButton.addEventListener("click", hamburgerActive);

})()