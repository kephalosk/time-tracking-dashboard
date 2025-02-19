import {TopicEnum} from "../../constants/TopicEnum.js";

export const InfoCardEnum = Object.freeze({
    WORK: 'infoCard--lightOrange',
    PLAY: 'infoCard--softBlue',
    STUD: 'infoCard--lightRed',
    EXERCISE: 'infoCard--limeGreen',
    SOCIAL: 'infoCard--violet',
    SELF_CARE: 'infoCard--softOrange',
});

export function getColorClass(topicTitle) {
    switch (topicTitle) {
        case TopicEnum.WORK:
            return InfoCardEnum.WORK;
        case TopicEnum.PLAY:
            return InfoCardEnum.PLAY;
        case TopicEnum.STUD:
            return InfoCardEnum.STUD;
        case TopicEnum.EXERCISE:
            return InfoCardEnum.EXERCISE;
        case TopicEnum.SOCIAL:
            return InfoCardEnum.SOCIAL;
        case TopicEnum.SELF_CARE:
            return InfoCardEnum.SELF_CARE;
    }
}

// InfoCard Doc
// component selector: infoCard
// topic name selector: topicName
// topic icon selector: topicIcon
// topic color selector: topicColor.classlist.add(InfoCardEnum)
// current value selector: topicCurrent
// previous value selector: topicPrevious