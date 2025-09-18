import React from "react";
import { Form, Input, Button } from "antd";

function UserForm({ onAddUser }) {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        const newUser = {
            id: Date.now(),
            username: values.username,
            name: values.name,
            email: values.email,
            phone: values.phone,
            website: values.website,
            address: {
                street: values.street,
                city: values.city,
                zipcode: values.zipcode,
            },
            company: {
                name: values.company,
            },
        };
        onAddUser(newUser);
        form.resetFields();
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
                <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
                <Input />
            </Form.Item>
            <Form.Item name="website" label="Website">
                <Input />
            </Form.Item>
            <Form.Item name="street" label="Street">
                <Input />
            </Form.Item>
            <Form.Item name="city" label="City">
                <Input />
            </Form.Item>
            <Form.Item name="zipcode" label="Zipcode">
                <Input />
            </Form.Item>
            <Form.Item name="company" label="Company">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add User
                </Button>
            </Form.Item>
        </Form>
    );
}

export default UserForm;
