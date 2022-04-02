export default {
    name: "TheSelectorModule",

    props: ["piece"],

    methods: {
        changeData(){
            console.log("swapping");
            this.$emit("showdata",this.piece);
        },

    },

    template: `
    <section class="about-selector" @click="changeData">
        <h2 class="about-title bounce"> {{ piece.abtitle }} </h2>
        </section> `
}
