import {fetchData, fetchInfoCard, fetchProfileCard} from "./globals/fetch.js";
import {renderInfoCard, renderProfileCard} from "./globals/render.js";
import {shiftToNewValues} from "./globals/update.js";
import {TimeValues} from "./constants/TimeValues.js";

let fetchedData;
let infoCard, profileCard;

await initializeApp();

async function initializeApp() {
    fetchedData = await fetchData();
    await fetchComponents();
    renderData();
    addEventListeners();
}

export async function fetchComponents() {
    infoCard = await fetchInfoCard();
    profileCard = await fetchProfileCard();
}

function renderData() {
    renderProfileCard(profileCard);

    fetchedData.forEach(topic => {
        renderInfoCard(infoCard, topic);
    });
}

function addEventListeners() {
    TimeValues.forEach(timeValue => {
        addTimeEventListener(timeValue.timeSelector, timeValue.timeEnum);
    });
}

function addTimeEventListener(timeSelector, timeEnum) {
    const time = document.querySelector(`.${timeSelector}`);

    time.addEventListener('click', () => {
        shiftToNewValues(time, timeEnum, fetchedData);
    });
}