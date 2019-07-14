import * as constants from './constants';

export const changePreview = isChecked => {
    return ({
        type: constants.ARTICLE_PREVIEW,
        isPreview: isChecked
    })
}

export const changeContent = value => ({
    type: constants.ARTICLE_CONTENT,
    content: value
})

export const changeTagList = list => ({
    type: constants.ARTICLE_TAGLIST,
    list: list
})

export const changeCateList = list => ({
    type: constants.ARTICLE_CATELIST,
    list: list
})