

let currentPage = 1;


function loadImages() {
    const gallery = document.getElementById("imageGallery");
    gallery.innerHTML = "";
    for (let i = 0; i < 8; i++) {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;
        img.alt = "Random Image";
        img.classList.add("gallery-img");
        gallery.appendChild(img);
    }

}
window.addEventListener("load", loadImages);

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        loadImages();  // Reload images for the previous page
    }
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentPage++;
    loadImages();  // Reload images for the next page
});