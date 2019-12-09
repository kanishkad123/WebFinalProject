let uiSchema = [
    { id: "myImg0", src: "assets/extras/extra1.jpg", alt: "What a save by the goalkeeper!" },
    { id: "myImg1", src: "assets/extras/extra2.jpg", alt: "Gotze! GOAAL!!" },
    { id: "myImg2", src: "assets/extras/extra3.jpg", alt: "Just punched the ball away!" },
    { id: "myImg3", src: "assets/extras/extra4.jpg", alt: "GOALLLLLL! They are into the finals!" },
    { id: "myImg4", src: "assets/extras/extra5.jpg", alt: "Messi being Messi!!" },
    { id: "myImg5", src: "assets/extras/extra6.jpg", alt: " 4 Years of hardwork. Their expressions say it all" },
    { id: "myImg6", src: "assets/extras/extra7.jpg", alt: "12 years the manager has waited, and finally!" },
    { id: "myImg7", src: "assets/extras/extra8.jpg", alt: "Canadian team!" },
    { id: "myImg8", src: "assets/extras/extra9.jpg", alt: "Barcelona!" },
    { id: "myImg9", src: "assets/extras/extra10.jpg", alt: "Group photo anyone?!" },
    { id: "myImg10", src: "assets/extras/extra11.jpg", alt: "fitness" },
    { id: "myImg11", src: "assets/extras/extra12.jpg", alt: "Tossed away!" },
    { id: "myImg12", src: "assets/extras/extra13.jpg", alt: "run along!" },
    { id: "myImg13", src: "assets/club-logos/liverpool.png", alt: "liverpool." },
    { id: "myImg14", src: "assets/extras/extra.jpg", alt: "Group one!" },
    { id: "myImg15", src: "assets/club-logos/chelsea.png", alt: "chelsea." },
    { id: "myImg16", src: "assets/club-logos/granada.png", alt: "granada" },
    { id: "myImg17", src: "assets/club-logos/dortmund.png", alt: "dortmund" },
    { id: "myImg18", src: "assets/club-logos/juventus.png", alt: "juventus" },
    { id: "myImg19", src: "assets/club-logos/levante.png", alt: "levante" }
]

//for loop for adding modal popup redirection on click of every image on the main page (Image highlights.)
for (let index = 0; index < 20; index++) {
    let modal = document.getElementById("myModal");

    let img = document.getElementById("myImg" + index);

    //keep the modal popup same, just change the images inside that are to be shown on popup
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }
}

// var mainRow = document.getElementById("main-row");
// uiSchema.map((elem, index) => {
//     if (index % 6 == 0) {
//         if (index != 0)
//             mainRow.append('</div>');
//         mainRow.append('<div class="column">');
//     }
//     var imgElem = document.createElement("img");
//     imgElem.id = elem["id"];
//     imgElem.src = elem["src"];
//     imgElem.alt = elem["alt"];
//     mainRow.append(imgElem);
// });