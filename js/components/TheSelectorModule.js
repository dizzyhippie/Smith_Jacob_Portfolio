export default {
    name: "TheSelectorModule",

    props: ["piece"],

    methods: {
        changeData(){
            console.log("swapping");
            this.$emit("showdata",this.piece);
        }
    },

    template: `
    <section class="about-title" @click="changeData">
        <h2 class="about-title"> {{ piece.abtitle }} </h2>
        </section> `
}