
function card(cardID, title, image, summary, desc, link = null, timerStartDate = null){
    const parent = document.currentScript.parentElement;
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <div><h3>${title}</h3></div>
    <img src=${image}>
    <p id=${cardID}>${summary}</p>
    <p>${desc}</p>
    `;

    if (link !== null){
        a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        a.style = "display: flex";
        a.appendChild(card);
        parent.appendChild(a);
    }
    else{
        parent.appendChild(card);
    }

    
}

function cardAddTimer(cardID, timerStartDate){
    new timer(timerStartDate, cardID);
}