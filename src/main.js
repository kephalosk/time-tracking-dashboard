import {InfoCardEnum} from "./components/InfoCard/InfoCard";

let infoCard, profileCard;

initializeApp().then();

async function initializeApp() {
    await fetchData();
    await fetchComponents();
    renderData();
    addEventListener();
}

async function fetchData() {
}

async function fetchComponents() {
    await fetchInfoCard();
    await fetchProfileCard();
}

async function fetchInfoCard() {
    await fetch('./src/components/InfoCard/InfoCard.html')
        .then(response => response.text())
        .then(data => {
            infoCard = data;
        })
        .catch(error => console.error('Error while fetching InfoCard component:', error));
}

async function fetchProfileCard() {
    await fetch('./src/components/ProfileCard/ProfileCard.html')
        .then(response => response.text())
        .then(data => {
            profileCard = data;
        })
        .catch(error => console.error('Error while fetching ProfileCard component:', error));
}

function renderData() {
    const app = document.getElementById('app');
    console.log(infoCard);
    app.innerHTML += infoCard;
}

function addEventListener() {
}