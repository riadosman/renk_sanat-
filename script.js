const gallery = document.getElementById("gallery");

for (let i = 1; i <= 40; i++) {
  const img = document.createElement("img");
  img.src = `./assets/works/${i}.jpg`; // Dynamically creates "portfolio1.jpg", "portfolio2.jpg", ..., "portfolio40.jpg"
  img.alt = `Örnek İş ${i}`;
  img.classList.add("portfolio-img");
  gallery.appendChild(img);
}
