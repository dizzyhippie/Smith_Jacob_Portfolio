export default {
    name: "TheModal",

    props: ["piece"],

    template: `
    <section class="modal-panel">
        <h2 class="m_name"> {{ piece.name }} </h2>
        <h3 class="m_type"> {{ piece.industry }} </h3>
        <p class="m-desc"> {{ piece.desc }} </p>   
        <button class="close">CLOSE X</button>
        </section> `
}