import { getPortfolioData } from "./components/dataMiner.js";
(() => {

    getPortfolioData();

    function loadShells(data){
        console.log(data);
    }

    loadShells();

})()