import { useState } from "react";

import { Form, Input, Button } from "antd";

import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const tailFormItemLayout = {
  wrapperCol: {
    xs: {},
  },
};

export default function CreatePost() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <Form name="form" form={form} onFinish={onFinish}>
      <Form.Item name="Post" rules={[{ required: true }]}>
        <ReactQuill className="quill-editor" theme="snow" />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
