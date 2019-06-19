import React, { Component } from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Select, Icon } from 'antd';
import FormBuilder from '@/components/helper/FormBuilder';
const Option = Select.Option

const genderOptions = [{ value: 0, label: 'Male' }, { value: 1, label: 'Female' }].map(item => (
    <Option key={item.value} value={item.value}>
        {item.value}
    </Option>
))

const formMeta = {
    colon: true,
    columns: 1,
    elements: [
        {
            key: 'userName',
            label: 'User name',
            tooltip: 'user name',
            initialValue: 'Nate',
            widget: Input,
            rules: [{ required: true, message: '用户名不能为空'}],
            formItemProps: {}
        },
        {
            key: 'password',
            label: 'Password',
            widget: Input,
            widgetProps: {
                prefix: <Icon type="lock" style={{ color: 'rgba(0,0,0,.25' }} />,
                placeholder: '请输入密码'
            },
            type: 'password',
            required: true,
        },
        {
            key: 'date',
            label: 'Birth date',
            widget: DatePicker,
            widgetProps: { style: { width: '100%' } }
        },
        {
            key: 'gender',
            label: 'Gender',
            initialValue: 'female',
            widget: Select,
            children: genderOptions,
        },
        {
            key: 'phone',
            label: 'Phone',
            widget: Input,
            required: true,
            rules: [
                {
                    pattern: /^\d+$/,
                    message: 'Phone must only contain numbers.'
                },
                {
                    min: 11,
                    message: 'Phone number at least length of 11'
                }
            ]
        },
        {
            key: 'age',
            label: 'Age',
            initialValue: 10,
            widget: InputNumber,
        },
        {
            key: 'email',
            label: 'Email',
            widget: Input,
            rules: [
                {
                    type: 'email',
                    message: 'Please input valid email address',
                }
            ]
        }
    ]
}

class FormSubmitAntd extends Component {
    resetForm = () => {
        this.props.form.resetFields();
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFieldAndScroll((errors, values) => {
            if (errors) return;
            console.log('submit form: ', values)
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} layout="horizontal" style={{ width: '480px' }}>
                <FormBuilder meta={formMeta} form={this.props.form}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    &nbsp; &nbsp;
                    <Button onClick={this.resetForm}>Reset</Button>
                </FormBuilder>
            </Form>
        )
    }
}

export default Form.create()(FormSubmitAntd)