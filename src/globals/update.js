import {ProfileCardTimeEnum} from "../components/ProfileCard/ProfileCard.js";

export function shiftToNewValues(activeTimeElement, activeTimeEnum, fetchedData) {
    removeActiveClassFromAllTimeLabels();

    activeTimeElement.classList.add(ProfileCardTimeEnum.ACTIVE);

    const infoCards = document.querySelectorAll('.infoCard');
    fetchedData.forEach(topic => {
        updateInfoCard(topic, infoCards, activeTimeEnum);
    });
}

function removeActiveClassFromAllTimeLabels() {
    const profileCardBottomTime = document.querySelectorAll('.profileCardBottomTime');

    profileCardBottomTime.forEach(timeLabel => {
        timeLabel.classList.remove(ProfileCardTimeEnum.ACTIVE);
    });
}

function updateInfoCard(topic, infoCards, time) {
    infoCards.forEach(infoCard => {
        const tempTopicName = infoCard.querySelector('.topicName').innerHTML;

        if(tempTopicName === topic.title) {
            const topicCurrent = infoCard.querySelector('.topicCurrent');
            const topicPrevious = infoCard.querySelector('.topicPrevious');

            topicCurrent.innerHTML = topic.timeframes[time].current;
            topicPrevious.innerHTML = topic.timeframes[time].previous;
        }
    });
}