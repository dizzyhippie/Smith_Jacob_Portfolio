export default {
    name: "TheModal",

    props: ["piece"],

    template: `
    <section class="modal-panel">
        <h2 class="m_name"> {{ piece.name }} </h2>
        <h3 class="m_type"> {{ piece.industry }} </h3>
        <p class="m_desc"> {{ piece.description }} </p>
        <img :src='"images/" + piece.img' :alt="piece.name" class="modal-images">
        <img :src='"images/" + piece.img2' :alt="piece.name" class="modal-images">
        <img :src='"images/" + piece.img3' :alt="piece.name" class="modal-images">
        <h2 class="tools-title">Tools Used</h2>
        <h3 class="tools"> {{ piece.tools }}</h3>
        <a :href="piece.link" target="_blank"><button class="github">View Project</button></a>
        <button class="close">CLOSE X</button>
        </section> `
}