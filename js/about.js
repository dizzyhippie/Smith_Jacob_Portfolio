import { getPortfolioData } from "./components/dataMiner.js";
import TheAboutModule from "./components/TheAboutModule.js";
import TheSelectorModule from "./components/TheSelectorModule.js";

(() => {
    const myVue = new Vue ({
        created: function() {
            //fetch portfolio data
            getPortfolioData(null, (data) => {
                this.aboutData = data.filter(item => item.about === "true");
                this.portfolioData = data.filter(item => item.about === "false");
            });
        },

        data: {
            aboutData: [],
            portfolioData: [],
            currentItem : {},
        },

        methods: {
           swapInfo(item){
               console.log("Switch");
               this.currentItem = item;
            },

        },

        components: {
            selector: TheSelectorModule,
            about: TheAboutModule
        }
    }).$mount("#app");


})()
