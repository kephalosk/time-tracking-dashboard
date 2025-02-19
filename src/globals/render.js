import {ProfileCardTimeEnum} from "../components/ProfileCard/ProfileCard.js";
import {getColorClass} from "../components/InfoCard/InfoCard.js";

export function renderProfileCard(profileCard) {
    const app = document.getElementById('app');
    const newProfileCard = document.createElement('div');
    newProfileCard.innerHTML = profileCard;

    const timeWeekly = newProfileCard.querySelector('.timeWeekly');

    timeWeekly.classList.add(ProfileCardTimeEnum.ACTIVE);

    app.appendChild(newProfileCard.firstChild);
}

export function renderInfoCard(infoCard, topic) {
    const app = document.getElementById('app');
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

    app.appendChild(newInfoCard.firstChild);
}

function getTopicIconSrc(topicTitle) {
    const titleLow = topicTitle.toLowerCase();
    const titleLowWithHyphens = titleLow.replace(/\s+/g, '-');
    return `./src/assets/images/icon-${titleLowWithHyphens}.svg`;
}