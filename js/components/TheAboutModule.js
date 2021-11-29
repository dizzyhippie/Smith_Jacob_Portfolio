export default {
    name: "TheAboutModule",

    props: ["piece"],

    template: `
    <section class="about-developer">
        <p> {{ piece.abinfo }} </p>
        </section> `
}