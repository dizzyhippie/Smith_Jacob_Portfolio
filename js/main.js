import { getPortfolioData } from "./components/dataMiner.js";
import TheGalleryThumbnail from "./components/TheGalleryThumbnail.js";

(() => {
    const myVue = new Vue ({
        created: function() {
            //fetch portfolio data
            getPortfolioData(null, (data) => this.portfolioData = data)
        },

        data: {
            portfolioData: [],
            message: "hello Vue!"
        },

        methods: {
        },

        components: {
            tile: TheGalleryThumbnail
        }
    
    }).$mount("#app");


})()