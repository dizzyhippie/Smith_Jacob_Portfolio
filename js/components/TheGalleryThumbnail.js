export default {
    name: "TheGalleryThumbnail",

    props: ["piece"],

    methods: {
        openModal(){
            console.log("You selected");
            let modal = document.querySelector(".modal-panel");
            let closeButton = document.querySelector(".close")
            modal.style.display = "block";
            this.$emit("showdata",this.piece);
            closeButton.addEventListener('click', () => { modal.style.display = "none";})
        }
    },

    template: `
    <div class="portfolio-pieces" data-key="" @click="openModal">
        <h2 class="p_name">{{ piece.name }}</h2>
        <h3 class="p_industry"> {{ piece.industry }} </h3>
        <button
    </div>`
}