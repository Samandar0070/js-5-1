function findElement(element, parent = document) {
    return document.querySelector(element);
}

let elCards = findElement(".cards")

function renderProducts(masha,ayiq) {
    ayiq.innerHTML = "";

    masha.forEach((element) => {
        let newCard = document.createElement("div")
        newCard.className = "card"
        newCard.style.width = "18rem"

        newCard.innerHTML = `
            <img class="card-img-top" src="${element.image}" alt="${element.title}"/>
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.rating.rate}</p>
                <p class="card-text">$${element.price}</p>
            </div>
        `
        ayiq.appendChild(newCard)
    });
}