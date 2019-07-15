import * as constants from './constants';
import axios from '@/lib/axios';
import { message } from 'antd';

export const changePreview = isChecked => {
    return ({
        type: constants.ARTICLE_PREVIEW, isPreview: isChecked
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

export const changeSeleTagList = list => ({
    type: constants.ARTICLE_SELETAGLIST,
    list: list
})

export const changeSeleCateList = list => ({
    type: constants.ARTICLE_SELECATELIST,
    list: list
})

export const postArticle = param => {
    axios.post('/article/post', param)
        .then(res => {
            if (res === 200) {
                message.success('文章发表成功');
            } else {
                message.error(res.message);
            }
        })
}