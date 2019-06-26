import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;

const getAnchorList = (str) => {
    const pattern = /<(h[1-6])[\s\S]+?(?=<\/\1>)/g;
    let list = [];
    
    const pushItem = (arr, item) => {
        const len = arr.length;
        const matchItem = arr[len - 1];
        if (matchItem && matchItem.tag !== item.tag) {
            pushItem(matchItem.children, item);
        } else {
            arr.push(item);
        }
    } 

    str.replace(pattern, ($0, $1) => {
        const title = $0.replace(/.*?>/, '');
        const href = `#${title.replace(/s/g, '-')}`;
        const currentItem = {
            tag: $1,
            title,
            href,
            children: [],
        };
        pushItem(list, currentItem);
    })

    return list;
}

const Navigation = ({ article }) => {
    const list = getAnchorList(article)
    const renderLink = ({ href, title, children }) => (
        <Link key={href} href={href} title={title}>
            {children.length > 0 && children.map(sub => renderLink(sub))}
        </Link>
    )

    return <Anchor affix={false}>{list.map(renderLink)}</Anchor>
}

export default Navigation;