import data from "./data.js";

const ol = document.querySelector("ol")

data.forEach((product) => {
    console.log(product);
    const {
        id, 
        brand, 
        caterogy, 
        description, 
        discountPercentage, 
        images, 
        thumbnail, 
        title, 
        price
    } = product;

    const li = document.createElement("li")
    const h2 = document.createElement("h2")
    const img = document.createElement("img")

    h2.textContent = title
    img.src = thumbnail;

    li.appendChild(h2);

    li.appendChild(img)

    ol.appendChild(li)

    console.log(li);
})