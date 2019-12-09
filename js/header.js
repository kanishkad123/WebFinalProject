//Dynamic header
let headerData = [
    { href: "/index.html", name: "Matches" },
    { href: "/WebFinalProject/news/news.html", name: "News" },
    { href: "/WebFinalProject/matches/table.html", name: "Table" },
    { href: "/WebFinalProject/players/players.html", name: "Players" },
    { href: "/WebFinalProject/var/VAR.html", name: "VAR" },
    { href: "/WebFinalProject/women/wfootball.html", name: "Women's Football" },
    { href: "/WebFinalProject/refree/refereePage.html", name: "Referee Page" },
    { href: "/WebFinalProject/awards/awardpage.html", name: "Award Page" },
    { href: "/WebFinalProject/merchandise/merchandise.html", name: "Merchandise" },
    { href: "/WebFinalProject/leagues/legues.html", name: "Leagues" },
    { href: "/WebFinalProject/highlights/highlights.html", name: "Highlights" }
]

let header = document.getElementById('headerNav');
let ul = document.createElement("ul");
ul.className = "navigation-link";
headerData.forEach(element => {
    let li = document.createElement("li");
    li.className = "navigation-link-items";
    li.style = "padding-right:10px;"
    let anchor = document.createElement("a");
    anchor.href = element["href"];
    anchor.innerText = element["name"];
    li.appendChild(anchor);
    ul.appendChild(li);
});
header.appendChild(ul);
