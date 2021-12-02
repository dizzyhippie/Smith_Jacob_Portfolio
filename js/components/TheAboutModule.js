export default {
    name: "TheAboutModule",

    props: ["piece"],

    template: `
    <section class="about-developer">
        <p class="about-info"> {{ piece.abinfo }} </p>
        </section> `
}