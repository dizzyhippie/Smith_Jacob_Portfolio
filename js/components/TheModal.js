export default {
    name: "TheModal",

    props: ["piece"],

    template: `
    <section class="modal-panel">
        <h2 class="m_name"> {{ piece.name }} </h2>
        <h3 class="m_type"> {{ piece.industry }} </h3>
        <p class="m_desc"> {{ piece.description }} </p>
        <a :href="piece.link" target="_blank"><button class="github">View Project</button></a>
        <button class="close">CLOSE X</button>
        </section> `
}