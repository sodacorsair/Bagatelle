import React, { Component, Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Col, Divider } from 'antd'
import { loadingIcon } from '@/components/Loading'
import BlogPagination from '@/components/web/pagination'
import axios from '@/lib/axios'
import { leftSide, rightSide, middle } from '@/lib'

function Archives(props) {
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)
    const [current, setCurrent] = useState(1)

    console.log(props);

    useEffect(() => {
        fetchList(1)
    }, [])

    function fetchList(page = 1) {
        axios.get('http://127.0.0.1:8088/articles/all')
            .then(res => {
                setList(res.articles);
            });
    }

    function handlePageChange(page) {
        fetchList(page)
        setCurrent(page)
    }

    return (
        <div className="inner-content-wrapper archives">
            <Col {...leftSide} />
            <Col {...middle}>
                <h1 style={{ color: "#0d1a26", fontSize: "2.5em", marginBottom: "30px" }}>Archive</h1>
                {list.map((d, i) => (
                    <div key={i} style={{ fontSize: "16px" }}>
                        <span>{d.createdAt}</span>
                        <span>
                            <Link to={`/article/${d.id}`}>{d.name}</Link>
                        </span>
                        <Divider />
                    </div>
                ))}

                {list.length < total && (
                    <BlogPagination
                        current={parseInt(current) || 1}
                        onChange={handlePageChange}
                        total={total}
                        pageSize={15}
                    />
                )}
            </Col>
            <Col {...rightSide} />
        </div>
    )
}

export default Archives