let subNavElements = document.getElementsByClassName('sub-navbar-element');
for (var i = 0; i < subNavElements.length; i++) {
    subNavElements[i].addEventListener('click', function() {
        removeSubsectionTitle();
        // automatically scroll down page
    });
}
removeSubsectionTitle();
function removeSubsectionTitle() {
    let subtitle = document.getElementsByClassName('page-main-subtitle')[0];
    subtitle.innerHTML = "";
}

function loadSponsorsFromJSON() {
    let jsonRequest = new XMLHttpRequest();
    jsonRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            // get platinum, gold, silver, and bronze sections
            let sponsorsContainer = document.getElementById("sponsors-container");
            // create title for platinum
            sponsorsContainer.appendChild(createSponsorLevelTitle("Platinum"));
            for (let sponsor of obj.sponsors.platinum) {
                // create element for each sponsor
                sponsorsContainer.appendChild(createGoldPlatinumSponsorElement(sponsor));
            }

            sponsorsContainer.appendChild(createSponsorLevelTitle("Gold"));
            for (let sponsor of obj.sponsors.gold) {
                sponsorsContainer.appendChild(createGoldPlatinumSponsorElement(sponsor));
            }

            sponsorsContainer.appendChild(createSponsorLevelTitle("Silver"));
            // create container specifically for all silver sponsors
            let silverSponsorsContainer = document.createElement('div');
            silverSponsorsContainer.className = "minor-sponsors-container";
            sponsorsContainer.appendChild(silverSponsorsContainer);

            for (let sponsor of obj.sponsors.silver) {
                silverSponsorsContainer.appendChild(createBronzeSilverSponsorElement(sponsor));
            }

            sponsorsContainer.appendChild(createSponsorLevelTitle("Bronze"));
            // create container specifically for all bronze sponsors
            let bronzeSponsorsContainer = document.createElement('div');
            bronzeSponsorsContainer.className = "minor-sponsors-container last-minor-sponsors-container";
            sponsorsContainer.appendChild(bronzeSponsorsContainer);
            for (let sponsor of obj.sponsors.bronze) {
                bronzeSponsorsContainer.appendChild(createBronzeSilverSponsorElement(sponsor));
            }
        }
    }
    jsonRequest.open("GET", "jsonFiles/sponsors.json");
    jsonRequest.send();
}

function createSponsorLevelTitle(level) {
    let div = document.createElement("div");
    div.innerHTML = level + " Sponsors";
    div.className = "sponsor-level-title";
    return div;
}
function createGoldPlatinumSponsorElement(sponsor) {
    let img = document.createElement("img");
    let sponsorTitle = document.createElement("div");
    let description = document.createElement("div");
    let seeSiteLink = document.createElement("a");
    let containerDiv = document.createElement("div");

    img.src = "../public/images/sponsorImages/" + sponsor.name + ".png";
    img.className = "major-sponsor-item-image";

    sponsorTitle.innerHTML = sponsor.name;
    sponsorTitle.className = "major-sponsor-item-title";

    description.innerHTML = sponsor.description;
    description.className = "major-sponsor-item-description";

    seeSiteLink.innerHTML = "See Site";
    seeSiteLink.className = "major-sponsor-item-link underlined-link";
    seeSiteLink.href = sponsor.link;
    seeSiteLink.target = "_blank";

    containerDiv.className = "major-sponsor-item";

    containerDiv.appendChild(img);
    containerDiv.appendChild(sponsorTitle);
    containerDiv.appendChild(description);
    containerDiv.appendChild(seeSiteLink);
    
    return containerDiv;
}
function createBronzeSilverSponsorElement(sponsor) {
    let img = document.createElement("img");

    //stores elements not in image
    let otherContentsDiv = document.createElement("div");
    //these elements go into a div
    let sponsorTitle = document.createElement("div");
    let description = document.createElement("div");
    let seeSiteLink = document.createElement("a");
    //stores all the elements 
    let containerDiv = document.createElement("div");

    img.src = "../public/images/sponsorImages/" + sponsor.name + ".png";
    img.className = "minor-sponsor-item-image";

    otherContentsDiv.className = "minor-sponsor-other-content";

    sponsorTitle.innerHTML = sponsor.name;
    sponsorTitle.className = "minor-sponsor-item-title";

    description.innerHTML = sponsor.description;
    description.className = "minor-sponsor-item-description";

    seeSiteLink.innerHTML = "See Site";
    seeSiteLink.className = "minor-sponsor-item-link underlined-link";
    seeSiteLink.href = sponsor.link;
    seeSiteLink.target = "_blank";


    containerDiv.className = "minor-sponsor-item";

    containerDiv.appendChild(img);
    otherContentsDiv.appendChild(sponsorTitle);
    otherContentsDiv.appendChild(description);
    otherContentsDiv.appendChild(seeSiteLink);
    containerDiv.appendChild(otherContentsDiv);
    
    return containerDiv;
}
