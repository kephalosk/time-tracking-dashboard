import {ProfileCardTimeEnum} from "../components/ProfileCard/ProfileCard.js";
import {getColorClass} from "../components/InfoCard/InfoCard.js";

const APP_CLASS = 'app';
const INFOCARD_CONTAINER_CLASS = 'infoCardContainer';

export function renderProfileCard(profileCard) {
    const app = document.getElementById(APP_CLASS);
    const newProfileCard = document.createElement('div');
    newProfileCard.innerHTML = profileCard;

    const timeWeekly = newProfileCard.querySelector('.timeWeekly');

    timeWeekly.classList.add(ProfileCardTimeEnum.ACTIVE);

    app.appendChild(newProfileCard.firstChild);
}

export function renderInfoCardContainer() {
    const app = document.getElementById(APP_CLASS);
    const newInfoCardContainer = document.createElement('div');
    newInfoCardContainer.classList.add(INFOCARD_CONTAINER_CLASS);
    newInfoCardContainer.id = INFOCARD_CONTAINER_CLASS;
    app.appendChild(newInfoCardContainer);
}

export function renderInfoCard(infoCard, topic) {
    const container = document.getElementById(INFOCARD_CONTAINER_CLASS);
    const newInfoCard = document.createElement('div');
    newInfoCard.innerHTML = infoCard;

    const topicName = newInfoCard.querySelector('.topicName');
    const topicIcon = newInfoCard.querySelector('.topicIcon');
    const topicColor = newInfoCard.querySelector('.topicColor');
    const topicCurrent = newInfoCard.querySelector('.topicCurrent');
    const topicPrevious = newInfoCard.querySelector('.topicPrevious');

    topicName.innerHTML = topic.title;
    topicIcon.src = getTopicIconSrc(topic.title);
    topicColor.classList.add(getColorClass(topic.title));
    topicCurrent.innerHTML = topic.timeframes.weekly.current;
    topicPrevious.innerHTML = topic.timeframes.weekly.previous;

    container.appendChild(newInfoCard.firstChild);
}

function getTopicIconSrc(topicTitle) {
    const titleLow = topicTitle.toLowerCase();
    const titleLowWithHyphens = titleLow.replace(/\s+/g, '-');
    return `./src/assets/images/icon-${titleLowWithHyphens}.svg`;
}