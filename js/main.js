import { getPortfolioData } from "./components/dataMiner.js";
import TheGalleryThumbnail from "./components/TheGalleryThumbnail.js";
import TheModal from "./components/TheModal.js";

(() => {
    const myVue = new Vue ({
        created: function() {
            //fetch portfolio data
            //getPortfolioData(null, (data) => this.portfolioData = data );
            getPortfolioData(null, (data) => {
                this.developProjects = data.filter(item => item.develop === "true");
                this.designProjects = data.filter(item => item.design === "true")
            });
        },

        data: {
            developProjects: [],
            designProjects: [],
            currentItem : {}
        },

        methods: {
           swapInfo(item){
               this.currentItem = item;
           },
        },

        components: {
            tile: TheGalleryThumbnail,
            modal: TheModal,
        }
    
    }).$mount("#app");


})()