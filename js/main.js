import { getPortfolioData } from "./components/dataMiner.js";
import TheGalleryThumbnail from "./components/TheGalleryThumbnail.js";
import TheModal from "./components/TheModal.js";

(() => {
    const myVue = new Vue ({
        created: function() {
            //fetch portfolio data
            getPortfolioData(null, (data) => this.portfolioData = data)
        },

        data: {
            portfolioData: [],
        },

        methods: {
           
        },

        components: {
            tile: TheGalleryThumbnail,
            modal: TheModal
        }
    
    }).$mount("#app");


})()