import * as constants from './constants';

const defaultState = {
    content: '',
    isPreview: false,
    taglist: [],
    catelist: [],
    seletaglist: [],
    selecatelist: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.ARTICLE_PREVIEW:
            return { ...state, isPreview: action.isPreview };
        case constants.ARTICLE_CONTENT:
            return { ...state, content: action.content };
        case constants.ARTICLE_TAGLIST:
            return { ...state, taglist: action.list };
        case constants.ARTICLE_CATELIST:
            return { ...state, catelist: action.list };
        case constants.ARTICLE_SELETAGLIST:
            return { ...state, seletaglist: action.list };
        case constants.ARTICLE_SELECATELIST:
            return { ...state, selecatelist: action.list };
        default:
            return state;
    }
}