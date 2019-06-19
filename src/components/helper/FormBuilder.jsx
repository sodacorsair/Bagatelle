import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Icon, Row, Tooltip } from 'antd';

const FormItem = Form.Item;

/**
 * @func pickProps - iterate over component which need props
 * @param {Object} source - every element object
 * @param {Array} props
 */
function pickProps(source, props) {
    let target = {};
    props.forEach(prop => {
        if (prop in source) {
            target[prop] = source[prop];
        } 
    });
    return target;
}

/**
 * @func getLastFormItemLayout - calculate wrapperCol of last item according to formItemProps.formItemLayout
 * @param { Object } - formItemProps
 */
function getLastFormItemLayout({ labelCol }) {
    let wrapperCol = { xs: {}, sm: {} };
    for (let key in labelCol) {
        if (labelCol[key]['span'] === 24) {
            wrapperCol[key]['offset'] = 0;
            wrapperCol[key]['span'] = 24;
        } else {
            wrapperCol[key]['offset'] = labelCol[key]['span'];
            wrapperCol[key]['span'] = 24 - labelCol[key]['span'];
        }
    }
    return wrapperCol;
}

/**
 * @func getLastIndex get the last index of elements when this.props.children rendered
 * @param { Boolean } dynamic - is a dynamic form or not
 * @param { Array } elements
 */

function getLastIndex(dynamic = false, elements) {
    if (!dynamic) return elements.length - 1;
    const els = elements.filter(v => !!v);
    return els.length - 1;
}

const defaultFormItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8},
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16},
    }
}

/**
 * @class FormBuilder - pack and handle antd forms
 */

 class FormBuilder extends Component {

    static propTypes = {
        meta: PropTypes.object.isRequired,
        form: PropTypes.object.isRequired,
        disabled: PropTypes.bool.isRequired,
        dynamic: PropTypes.bool
    }

    static defaultProps = {
        disabled: false,
        one: false
    }

    getMeta() {
        const { meta } = this.props;
        return meta.elements ? meta : { elements: [meta] }
    }

    renderLayout = elements => {
        const columns = this.props.meta.columns || 1;
        if (columns === 1) return elements;

        const gutter = this.props.meta.gutter || 0;
        const rows = [];
        const colspan = 24 / columns;
        for (let i = 0; i < elements.length; i += columns) {
            const cols = [];
            for (let j = 0; j < columns; j += 1) {
                cols.push(
                    <Col key={j} span={colspan.toString()}>
                        {elements[i + j]}
                    </Col>
                );
            }
            rows.push(
                <Row key={i} gutter={gutter}>
                    {cols}
                </Row>
            );
        }

        return rows;
    }

    renderElement = (element, index) => {
        const meta = this.getMeta();
        if (!element) return null;

        const label = element.tooltip ? (
            <span>
                {element.label}
                <Tooltip title={element.tooltip}>
                    { ' ' }
                    <Icon type="question-circle-o" />
                </Tooltip>
            </span>
        ) : (
            element.label
        );

        const formItemProps = {
            key: element.id || element.key,
            colon: meta.colon,
            ...(meta.formItemProps || (element.label ? defaultFormItemLayout : null)),
            label,
            ...pickProps(element, ['help', 'extra', 'labelCol', 'wrapperCol', 'colon', 
                'hasFeedback', 'validationStatus']),
            ...element.formItemProps,
        };

        if (element.render) {
            return element.render.call(this, {
                formItemProps,
                element,
                disabled: this.props.disabled,
            });
        }

        let rules = element.rules || [];
        if (element.required) {
            rules = [
                ...rules,
                {
                    required: true,
                    message: `${element.label || element.id || element.key} is required.`
                }
            ];
        }

        const fieldProps = {
            ...pickProps(element, [
                'getValueFromEvent',
                'initialValue',
                'normalize',
                'preserve',
                'trigger',
                'valuePropName',
                'validateTrigger',
                'validateFirst'
            ]),
            rules,
            ...element.fieldProps
        }

        const wp = element.widgetProps || {};
        const widgetProps = {
            ...pickProps(element, ['placeholder', 'type', 'className', 'class']),
            ...wp,
            disabled: element.disabled || wp.disabled || this.props.disabled
        }
        const { getFieldDecorator } = this.props.form;

        if (meta.elements && this.props.children && getLastIndex(this.props.dynamic,
            meta.elements) === index) {
            const wrapperCol = getLastFormItemLayout(formItemProps);
            return (
                <Fragment key={element.id || element.key}>
                    <FormItem {...formItemProps}>
                        {getFieldDecorator(element.id || element.key, fieldProps)(
                            <element.widget {...widgetProps}>
                                {element.children || null}
                            </element.widget>
                        )}
                    </FormItem>
                    <FormItem wrapperCol={wrapperCol} key={index + 1}>
                        {this.props.children}
                    </FormItem>
                </Fragment>
            )
        } else {
            return (
                <FormItem {...formItemProps}>
                    {getFieldDecorator(element.id || element.key, fieldProps)(
                        <element.widget {...widgetProps}>
                            {element.children || null}
                        </element.widget>
                    )}
                </FormItem>
            )
        }
    }

    render() {
        return this.renderLayout(this.getMeta().elements.map(this.renderElement));
    }
 }

 export default FormBuilder;