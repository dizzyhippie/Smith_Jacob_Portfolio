export default {
    name: "TheModal",

    props: ["piece"],

    template: `
    <section class="modal-panel">
        <i class="fa-solid fa-2x fa-arrow-left back bounce"></i>
        <h2 class="m_name"> {{ piece.name }} </h2>
        <h3 class="m_type"> {{ piece.industry }} </h3>
        <p class="m_desc"> {{ piece.description }} </p>
        <section class="images-con">
        <img :src='"images/" + piece.img' :alt="piece.name" class="modal-images">
        </section>
        <h2 class="m_type tools">Tools Used</h2>
        <h3 class="tools-list"> {{ piece.tools }}</h3>
        <section class="button-wrapper">
            <a :href="piece.link" target="_blank"><button class="github">View {{ piece.button }}</button></a>
            <button class="close" name="close">CLOSE X</button>
        </section>
    </section> `
}
