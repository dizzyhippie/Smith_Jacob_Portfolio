import { getPortfolioData } from "./components/dataMiner.js";
import TheGalleryThumbnail from "./components/TheGalleryThumbnail.js";
import TheModal from "./components/TheModal.js";

(() => {
    const myVue = new Vue ({
        created: function() {
            getPortfolioData(null, (data) => {
                this.developProjects = data.filter(item => item.develop === "true");
                this.otherProjects = data.filter(item => item.other === "true")
            });
        },

        data: {
            developProjects: [],
            otherProjects: [],
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
